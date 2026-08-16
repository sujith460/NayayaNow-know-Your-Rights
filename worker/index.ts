/**
 * NyayaNow — secure LLM situation-classification proxy.
 *
 * A Cloudflare Worker (any Web-Standards serverless runtime works). This is
 * the ONLY place an LLM API key ever exists. The Vite/React frontend knows
 * only the public URL of this worker (`VITE_AI_ENDPOINT`).
 *
 *   ┌─────────────┐   POST /nyayanow-classify   ┌───────────────────────┐
 *   │  NyayaNow   │ ──────────────────────────▶ │  This Worker          │
 *   │  frontend   │                             │  (holds the key)      │
 *   │ (no secret) │ ◀────────────────────────── │   ──▶ Gemini API      │
 *   └─────────────┘   structured JSON only      └───────────────────────┘
 *
 * THE LLM ONLY UNDERSTANDS THE SITUATION. It never generates legal guidance:
 * the response schema permits only a situation ID, confidence, context flags
 * and needsClarification. Anything else the model emits (rights, sections,
 * URLs, phone numbers, procedures, opinions) is discarded here. All legal
 * content comes from NyayaNow's verified knowledge base — never from this
 * proxy, and never from the model.
 *
 * Security properties:
 *  - API key lives in a server secret (e.g. `wrangler secret put LLM_API_KEY`),
 *    never in VITE_* variables and never in client code. It is sent to Google
 *    only in the `x-goog-api-key` header of the Gemini call.
 *
 * Provider: Google Gemini (default model `gemini-3.5-flash-lite`). The client
 * only ever talks to the Gemini REST API (`generateContent`) — or to a
 * Cloudflare Workers AI binding when one is configured.
 *  - The system prompt is a server-side constant; the client cannot override
 *    it, the model, the temperature or any provider option.
 *  - The client is never allowed to choose configuration.
 *  - User text is never logged, stored or sent anywhere except the LLM call.
 *  - Errors are generic (400/405/429/502) — no keys, stack traces or raw
 *    model output ever reach the client.
 */

/* ────────────────────────────────────────────────────────────────
   Constants (server-side)
──────────────────────────────────────────────────────────────── */

/**
 * The ONLY situation IDs this proxy will ever return. These match the IDs
 * the frontend's AI-result validator accepts, so results round-trip safely.
 */
export const ALLOWED_SITUATION_IDS = [
  'POLICE_QUESTIONING',
  'ARREST',
  'FIR_REFUSED',
  'SEARCH',
  'PROPERTY_SEIZED',
  'POLICE_ABUSE',
  'BRIBE',
  'COMPLAINT',
  'WOMEN_AND_POLICE',
  'PROLONGED_DETENTION',
  'POLICE_REFUSED_HELP',
  'POLICE_NOTICE',
  'POLICE_AT_HOME',
  'NOT_SURE',
  'UNKNOWN',
  'TRAFFIC_UNVERIFIED',
  'ARREST_UNCERTAIN'
] as const

const CONFIDENCE_LEVELS = ['HIGH', 'MEDIUM', 'LOW'] as const
const SUPPORTED_LANGUAGES = ['en', 'hi', 'te'] as const

/** Context flags the model is allowed to set (boolean unless noted). */
const ALLOWED_CONTEXT_KEYS = [
  'vehicleInvolved',
  'documentsRequested',
  'questioning',
  'searchInvolved',
  'propertyInvolved',
  'phoneInvolved',
  'moneyRequested',
  'arrestMentioned',
  'harmMentioned',
  'trafficMentioned',
  'challanMentioned',
  'unableToLeave'
] as const

const VEHICLE_TYPES = ['two-wheeler', 'car', 'other'] as const

/** Missing-context categories the model may name — the actual question text
 *  is always chosen by the frontend's curated clarification flow. */
const ALLOWED_MISSING_CONTEXT = [
  'arrest_status',
  'location',
  'documents',
  'search',
  'property',
  'money',
  'harm'
] as const

export const MIN_TEXT_LENGTH = 3
export const MAX_TEXT_LENGTH = 2000
/** Frontend waits ~12s; the proxy gives the upstream slightly less. */
export const UPSTREAM_TIMEOUT_MS = 10_000
/** Reasonable response-size guard for model output. */
export const MAX_LLM_RESPONSE_BYTES = 8192

const RATE_LIMIT_WINDOW_MS = 60_000
const DEFAULT_RATE_LIMIT_MAX = 30

/** System instruction — stored server-side, never overridable by the client. */
const SYSTEM_PROMPT = `You are the situation-understanding engine for NyayaNow.

Your ONLY responsibility is to understand what situation an Indian citizen is describing.

You are NOT a lawyer.
You MUST NOT provide legal advice.
You MUST NOT generate legal rights.
You MUST NOT generate legal sections.
You MUST NOT determine whether police conduct is lawful or unlawful.
You MUST NOT generate government URLs, phone numbers, complaint procedures or court cases.

Map the user's description to ONE of these predefined NyayaNow situation IDs:
${ALLOWED_SITUATION_IDS.join(', ')}.

Extract only context relevant to identifying the situation (boolean flags).
Do not invent facts.
Do not make legal conclusions.
If the situation is ambiguous, set "needsClarification" to true and optionally set "missingContext" to one of: ${ALLOWED_MISSING_CONTEXT.join(', ')}.
If there is insufficient information, return "UNKNOWN" or request clarification through the structured response.

Respond with a single JSON object ONLY, matching this schema:
{
  "situationId": "one of the allowed situation IDs",
  "confidence": "HIGH" | "MEDIUM" | "LOW",
  "context": {
    "vehicleInvolved": false,
    "vehicleType": "two-wheeler" | "car" | "other",
    "documentsRequested": false,
    "questioning": false,
    "searchInvolved": false,
    "propertyInvolved": false,
    "phoneInvolved": false,
    "moneyRequested": false,
    "arrestMentioned": false,
    "harmMentioned": false,
    "trafficMentioned": false,
    "challanMentioned": false,
    "unableToLeave": false
  },
  "needsClarification": false,
  "missingContext": "arrest_status"
}

Return structured JSON only — no markdown, no explanations, no legal content.`

/**
 * Server-side safety precheck (defense-in-depth). The frontend's safety logic
 * remains the authoritative first layer; this guarantees the proxy never
 * downgrades assault, immediate danger or serious threats to an ordinary
 * situation — and avoids spending an LLM call on obvious danger.
 */
const SAFETY_PHRASES = [
  'beating me', 'are beating', 'being beaten', 'assaulting me', 'attacking me',
  'hit me', 'hitting me', 'slapped me', 'slapping me',
  'threatened to kill', 'threaten to kill', 'threatens to kill',
  'will kill me', 'trying to kill', 'killing me',
  'in immediate danger', 'immediate danger', 'hurting me',
  'मार रहे', 'पीट रहे', 'जान से मारने',
  'చంపుతామని', 'కొడుతున్నారు', 'ప్రమాదంలో ఉన్నాను'
]

/* ────────────────────────────────────────────────────────────────
   Types & environment
──────────────────────────────────────────────────────────────── */

export interface ClassifyResult {
  situationId: string
  confidence: 'HIGH' | 'MEDIUM' | 'LOW'
  context: Record<string, string | boolean>
  needsClarification: boolean
  missingContext?: string
}

export interface Env {
  /** Server secret — the Google Gemini API key. Set with
   *  `wrangler secret put LLM_API_KEY`. NEVER VITE_*. */
  LLM_API_KEY?: string
  /** Gemini REST API base (the `:generateContent` path is appended). */
  LLM_ENDPOINT?: string
  /** Gemini model id (default `gemini-3.5-flash-lite`). */
  LLM_MODEL?: string
  /** Comma-separated frontend origins allowed to call this worker. */
  ALLOWED_ORIGINS?: string
  /** Optional Cloudflare Workers AI binding — no API key required at all. */
  AI?: { run: (model: string, input: Record<string, unknown>) => Promise<unknown> }
  /** Rate-limit override (tests). */
  RATE_LIMIT_MAX?: number
}

export type LLMClient = (text: string, env: Env) => Promise<unknown>

const UNKNOWN_RESULT: ClassifyResult = {
  situationId: 'UNKNOWN',
  confidence: 'LOW',
  context: {},
  needsClarification: false
}

const SAFETY_RESULT: ClassifyResult = {
  situationId: 'POLICE_ABUSE',
  confidence: 'HIGH',
  context: { harmMentioned: true },
  needsClarification: false
}

/* ────────────────────────────────────────────────────────────────
   Safety precheck
──────────────────────────────────────────────────────────────── */

export function safetyPrecheck(text: string): ClassifyResult | null {
  const lower = text.toLowerCase()
  return SAFETY_PHRASES.some((p) => lower.includes(p)) ? SAFETY_RESULT : null
}

/* ────────────────────────────────────────────────────────────────
   Output validation — the model is never trusted.
──────────────────────────────────────────────────────────────── */

function tryParseJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

/**
 * Validate the model's structured output independently of the prompt.
 * Returns null (→ safe UNKNOWN fallback) when anything is wrong. Only the
 * approved fields are ever read; legal text and any other keys are discarded.
 */
export function validateLLMOutput(raw: unknown): ClassifyResult | null {
  const serialized = typeof raw === 'string' ? raw : JSON.stringify(raw)
  if (typeof serialized !== 'string' || serialized.length > MAX_LLM_RESPONSE_BYTES) return null

  const data = typeof raw === 'string' ? tryParseJson(raw) : raw
  if (typeof data !== 'object' || data === null) return null

  const r = data as Record<string, unknown>
  if (typeof r.situationId !== 'string') return null
  if (!(ALLOWED_SITUATION_IDS as readonly string[]).includes(r.situationId)) return null
  if (!(CONFIDENCE_LEVELS as readonly string[]).includes(r.confidence as string)) return null

  const context: Record<string, string | boolean> = {}
  if (typeof r.context === 'object' && r.context !== null) {
    const c = r.context as Record<string, unknown>
    for (const key of ALLOWED_CONTEXT_KEYS) {
      if (typeof c[key] === 'boolean') context[key] = c[key]
    }
    if (typeof c.vehicleType === 'string' && (VEHICLE_TYPES as readonly string[]).includes(c.vehicleType)) {
      context.vehicleType = c.vehicleType
    }
    if (typeof c.locationContext === 'string' && c.locationContext.length <= 40) {
      context.locationContext = c.locationContext
    }
  }

  const result: ClassifyResult = {
    situationId: r.situationId,
    confidence: r.confidence as ClassifyResult['confidence'],
    context,
    needsClarification: r.needsClarification === true
  }
  if (
    typeof r.missingContext === 'string' &&
    (ALLOWED_MISSING_CONTEXT as readonly string[]).includes(r.missingContext)
  ) {
    result.missingContext = r.missingContext
  }
  return result
}

/* ────────────────────────────────────────────────────────────────
   LLM client — the only place the model is called.
──────────────────────────────────────────────────────────────── */

export class UpstreamError extends Error {}

/** Default Gemini model — the fastest, most cost-effective 3.5-class model. */
export const DEFAULT_LLM_MODEL = 'gemini-3.5-flash-lite'

export async function defaultLLMClient(text: string, env: Env): Promise<unknown> {
  const model = env.LLM_MODEL ?? DEFAULT_LLM_MODEL
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: text }
  ]

  // Cloudflare Workers AI binding — Cloudflare holds the credentials, so no
  // key exists in our code or environment at all.
  if (env.AI) {
    const out = await env.AI.run(model, {
      messages,
      response_format: { type: 'json_object' },
      temperature: 0
    })
    if (out && typeof out === 'object' && typeof (out as { response?: unknown }).response === 'string') {
      return (out as { response: string }).response
    }
    return out
  }

  // Google Gemini — Generative Language API (generateContent). The key is
  // sent only in the `x-goog-api-key` header, never in the URL or the body.
  const base = env.LLM_ENDPOINT ?? 'https://generativelanguage.googleapis.com/v1beta'
  if (!env.LLM_API_KEY) throw new UpstreamError('LLM not configured')
  const endpoint = `${base}/models/${encodeURIComponent(model)}:generateContent`

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS)
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': env.LLM_API_KEY
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text }] }],
        generationConfig: {
          temperature: 0,
          // Force strict JSON output so the validator always gets parseable text.
          responseMimeType: 'application/json'
        }
      }),
      signal: controller.signal
    })
    if (!res.ok) throw new UpstreamError(`upstream ${res.status}`)
    const payload = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[]
    }
    return payload?.candidates?.[0]?.content?.parts?.[0]?.text ?? null
  } finally {
    clearTimeout(timer)
  }
}

/* ────────────────────────────────────────────────────────────────
   Request handling
──────────────────────────────────────────────────────────────── */

const DEFAULT_ALLOWED_ORIGINS = ['http://localhost:5173', 'http://127.0.0.1:5173']

function corsHeadersFor(request: Request, allowedRaw?: string): Record<string, string> {
  const origin = request.headers.get('Origin')
  const configured = (allowedRaw ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const list = configured.length > 0 ? configured : DEFAULT_ALLOWED_ORIGINS
  if (origin && list.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin'
    }
  }
  return {}
}

function json(payload: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers }
  })
}

/** In-memory sliding-window limiter (per Worker isolate). For production,
 *  prefer a Cloudflare Rate Limiting binding; this is basic abuse protection. */
const buckets = new Map<string, { count: number; resetAt: number }>()

export function rateLimitAllowed(request: Request, env: Env): boolean {
  const ip =
    request.headers.get('CF-Connecting-IP') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'local'
  const max = env.RATE_LIMIT_MAX ?? DEFAULT_RATE_LIMIT_MAX
  const now = Date.now()
  const bucket = buckets.get(ip)
  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  bucket.count += 1
  return bucket.count <= max
}

export function resetRateLimitForTests(): void {
  buckets.clear()
}

export async function handleRequest(
  request: Request,
  env: Env,
  llm: LLMClient = defaultLLMClient
): Promise<Response> {
  const cors = corsHeadersFor(request, env.ALLOWED_ORIGINS)

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors })
  }
  if (request.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405, cors)
  }

  const url = new URL(request.url)
  if (url.pathname !== '/nyayanow-classify') {
    return json({ error: 'not_found' }, 404, cors)
  }

  if (!rateLimitAllowed(request, env)) {
    return json({ error: 'rate_limited' }, 429, { ...cors, 'Retry-After': '60' })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json({ error: 'invalid_request' }, 400, cors)
  }
  const b = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>

  // Validate text: exists, is a string, reasonable length.
  const text = typeof b.text === 'string' ? b.text.trim() : ''
  if (text.length < MIN_TEXT_LENGTH || text.length > MAX_TEXT_LENGTH) {
    return json({ error: 'invalid_request' }, 400, cors)
  }

  // Validate language: one of the supported languages (optional, defaults en).
  const language = typeof b.language === 'string' && b.language !== '' ? b.language : 'en'
  if (!(SUPPORTED_LANGUAGES as readonly string[]).includes(language)) {
    return json({ error: 'invalid_request' }, 400, cors)
  }

  // Safety first — never downgrade danger. (Frontend logic stays authoritative;
  // this prevents an LLM call for obvious emergencies.)
  const safety = safetyPrecheck(text)
  if (safety) return json(safety, 200, cors)

  let result: ClassifyResult
  try {
    const raw = await llm(text, env)
    // Invalid/untrustworthy model output → safe UNKNOWN, never a guess.
    result = validateLLMOutput(raw) ?? UNKNOWN_RESULT
  } catch {
    // Timeout, upstream error, missing key, network failure → controlled 502.
    // No provider internals are exposed.
    return json({ error: 'ai_service_unavailable' }, 502, cors)
  }
  return json(result, 200, cors)
}

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return handleRequest(request, env, defaultLLMClient)
  }
}
