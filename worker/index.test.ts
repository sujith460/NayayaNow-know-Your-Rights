import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  ALLOWED_SITUATION_IDS,
  handleRequest,
  validateLLMOutput,
  safetyPrecheck,
  defaultLLMClient,
  resetRateLimitForTests,
  UPSTREAM_TIMEOUT_MS,
  type Env,
  type LLMClient
} from './index'

const ORIGIN = 'https://nyayanow.example'

const baseEnv: Env = {
  LLM_API_KEY: 'sk-test-secret-123',
  LLM_MODEL: 'test-model',
  ALLOWED_ORIGINS: ORIGIN
}

function post(body: unknown, extra: Record<string, string> = {}): Request {
  return new Request('https://worker.example/nyayanow-classify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: ORIGIN, ...extra },
    body: JSON.stringify(body)
  })
}

function llmReturning(value: unknown): LLMClient {
  return vi.fn(async () => value)
}

const VALID_LLM_RESULT = {
  situationId: 'SEARCH',
  confidence: 'HIGH',
  context: { searchInvolved: true, vehicleType: 'two-wheeler' },
  needsClarification: false
}

beforeEach(() => {
  resetRateLimitForTests()
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

describe('request validation', () => {
  it('accepts a valid request and returns only the structured result', async () => {
    const res = await handleRequest(post({ text: 'The officer wants to look through my bag' }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual(VALID_LLM_RESULT)
  })

  it('accepts a valid language value', async () => {
    const res = await handleRequest(post({ text: 'पुलिस ने मुझे रोका', language: 'hi' }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(200)
  })

  it('rejects a missing text field', async () => {
    const res = await handleRequest(post({ language: 'en' }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(400)
  })

  it('rejects non-string text', async () => {
    const res = await handleRequest(post({ text: 42 }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(400)
  })

  it('rejects oversized text', async () => {
    const res = await handleRequest(post({ text: 'a'.repeat(3000) }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(400)
  })

  it('rejects an invalid language', async () => {
    const res = await handleRequest(post({ text: 'Police stopped me', language: 'fr' }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(400)
  })

  it('rejects unsupported HTTP methods', async () => {
    const get = new Request('https://worker.example/nyayanow-classify', { method: 'GET', headers: { Origin: ORIGIN } })
    expect((await handleRequest(get, baseEnv, llmReturning(VALID_LLM_RESULT))).status).toBe(405)
    const put = new Request('https://worker.example/nyayanow-classify', { method: 'PUT', headers: { Origin: ORIGIN } })
    expect((await handleRequest(put, baseEnv, llmReturning(VALID_LLM_RESULT))).status).toBe(405)
  })

  it('rejects malformed JSON bodies', async () => {
    const bad = new Request('https://worker.example/nyayanow-classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
      body: 'not json at all'
    })
    expect((await handleRequest(bad, baseEnv, llmReturning(VALID_LLM_RESULT))).status).toBe(400)
  })

  it('returns 404 for unknown paths', async () => {
    const wrong = new Request('https://worker.example/other', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
      body: JSON.stringify({ text: 'hello' })
    })
    expect((await handleRequest(wrong, baseEnv, llmReturning(VALID_LLM_RESULT))).status).toBe(404)
  })
})

describe('safety precheck — never downgrade danger', () => {
  it('short-circuits to POLICE_ABUSE without calling the LLM', async () => {
    const llm = vi.fn(async () => VALID_LLM_RESULT)
    const res = await handleRequest(post({ text: 'Police are beating me' }), baseEnv, llm)
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      situationId: 'POLICE_ABUSE',
      confidence: 'HIGH',
      context: { harmMentioned: true },
      needsClarification: false
    })
    expect(llm).not.toHaveBeenCalled()
  })

  it('detects threats to life', () => {
    expect(safetyPrecheck('He threatened to kill me')?.situationId).toBe('POLICE_ABUSE')
  })

  it('returns null for ordinary descriptions', () => {
    expect(safetyPrecheck('Police stopped me while driving')).toBeNull()
  })
})

describe('LLM output validation', () => {
  it('accepts a valid structured result', () => {
    const v = validateLLMOutput(VALID_LLM_RESULT)
    expect(v?.situationId).toBe('SEARCH')
    expect(v?.context.searchInvolved).toBe(true)
  })

  it('accepts a JSON string from a chat-completions payload', () => {
    const v = validateLLMOutput(JSON.stringify(VALID_LLM_RESULT))
    expect(v?.situationId).toBe('SEARCH')
  })

  it('returns UNKNOWN for malformed JSON from the model', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llmReturning('definitely not json {{{'))
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ situationId: 'UNKNOWN', confidence: 'LOW', context: {}, needsClarification: false })
  })

  it('returns UNKNOWN for an unsupported situation ID', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llmReturning({ situationId: 'MADE_UP_ID', confidence: 'HIGH', context: {}, needsClarification: false }))
    const data = (await res.json()) as { situationId: string }
    expect(data.situationId).toBe('UNKNOWN')
  })

  it('returns UNKNOWN for an invalid confidence', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llmReturning({ situationId: 'SEARCH', confidence: 'ABSOLUTELY', context: {}, needsClarification: false }))
    const data = (await res.json()) as { situationId: string }
    expect(data.situationId).toBe('UNKNOWN')
  })

  it('returns UNKNOWN for non-object model output', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llmReturning(42))
    const data = (await res.json()) as { situationId: string }
    expect(data.situationId).toBe('UNKNOWN')
  })

  it('discards model-generated legal text entirely', async () => {
    const res = await handleRequest(
      post({ text: 'Police took my phone' }),
      baseEnv,
      llmReturning({
        situationId: 'ARREST',
        confidence: 'HIGH',
        context: { propertyInvolved: true },
        needsClarification: false,
        legalAdvice: 'You have the right to remain silent under Article 22 of the Constitution...',
        governmentUrl: 'https://example.gov.in/fake',
        phoneNumber: '1800-FAKE'
      })
    )
    const data = (await res.json()) as Record<string, unknown>
    expect(data.situationId).toBe('ARREST')
    expect(data).not.toHaveProperty('legalAdvice')
    expect(data).not.toHaveProperty('governmentUrl')
    expect(data).not.toHaveProperty('phoneNumber')
  })

  it('ignores malicious output and keeps only approved context flags', async () => {
    const res = await handleRequest(
      post({ text: 'something happened' }),
      baseEnv,
      llmReturning({
        situationId: 'SEARCH',
        confidence: 'MEDIUM',
        context: { searchInvolved: true, harmMentioned: 'malicious<script>', unknownFlag: true, vehicleType: 'spaceship' },
        needsClarification: false,
        injection: '{"situationId":"ARREST"}'
      })
    )
    const data = (await res.json()) as { situationId: string; context: Record<string, unknown> }
    expect(data.situationId).toBe('SEARCH')
    expect(data.context).toEqual({ searchInvolved: true })
  })

  it('rejects absurdly large model output', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llmReturning('x'.repeat(50_000)))
    const data = (await res.json()) as { situationId: string }
    expect(data.situationId).toBe('UNKNOWN')
  })

  it('passes through a valid missingContext category', async () => {
    const res = await handleRequest(
      post({ text: 'Police stopped me' }),
      baseEnv,
      llmReturning({ situationId: 'UNKNOWN', confidence: 'LOW', context: {}, needsClarification: true, missingContext: 'arrest_status' })
    )
    const data = (await res.json()) as { needsClarification: boolean; missingContext: string }
    expect(data.needsClarification).toBe(true)
    expect(data.missingContext).toBe('arrest_status')
  })

  it('drops an invalid missingContext category', async () => {
    const res = await handleRequest(
      post({ text: 'Police stopped me' }),
      baseEnv,
      llmReturning({ situationId: 'UNKNOWN', confidence: 'LOW', context: {}, needsClarification: true, missingContext: 'inject_hack' })
    )
    const data = (await res.json()) as { missingContext?: string }
    expect(data.missingContext).toBeUndefined()
  })

  it('only ever returns allowed situation IDs', () => {
    expect(ALLOWED_SITUATION_IDS).toContain('UNKNOWN')
    expect(ALLOWED_SITUATION_IDS).toContain('POLICE_QUESTIONING')
    expect(ALLOWED_SITUATION_IDS).toContain('ARREST_UNCERTAIN')
  })
})

describe('upstream behaviour', () => {
  it('times out the upstream call and surfaces a controlled 502', async () => {
    vi.useFakeTimers()
    vi.stubGlobal(
      'fetch',
      vi.fn((_url: string, init: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init.signal?.addEventListener('abort', () => reject(new Error('aborted')))
        })
      )
    )
    try {
      const promise = defaultLLMClient('text', { ...baseEnv, LLM_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta' })
      const assertion = expect(promise).rejects.toThrow()
      await vi.advanceTimersByTimeAsync(UPSTREAM_TIMEOUT_MS + 500)
      await assertion
    } finally {
      vi.useRealTimers()
      vi.unstubAllGlobals()
    }
  })

  it('returns 502 when the upstream fails', async () => {
    const llm = vi.fn(async () => {
      throw new Error('upstream exploded')
    })
    const res = await handleRequest(post({ text: 'something happened' }), baseEnv, llm)
    expect(res.status).toBe(502)
    expect(await res.json()).toEqual({ error: 'ai_service_unavailable' })
  })

  it('returns 502 when no key is configured', async () => {
    const res = await handleRequest(post({ text: 'something happened' }), { ...baseEnv, LLM_API_KEY: undefined }, defaultLLMClient)
    expect(res.status).toBe(502)
  })

  it('parses a Gemini generateContent response and keeps the key server-side', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        new Response(
          JSON.stringify({
            candidates: [
              { content: { parts: [{ text: '{"situationId":"BRIBE","confidence":"MEDIUM","context":{"moneyRequested":true},"needsClarification":false}' }] } }
            ]
          }),
          { status: 200 }
        )
      )
    )
    try {
      const out = await defaultLLMClient('text', baseEnv)
      expect(validateLLMOutput(out)?.situationId).toBe('BRIBE')
      const url = vi.mocked(fetch).mock.calls[0][0] as string
      expect(url).toContain(':generateContent')
      // Model comes from env; the default would be gemini-3.5-flash-lite.
      expect(url).toContain('models/test-model')
      const init = (vi.mocked(fetch).mock.calls[0][1] as RequestInit) ?? {}
      const headers = init.headers as Record<string, string>
      expect(headers['x-goog-api-key']).toBe('sk-test-secret-123')
      expect(headers.Authorization).toBeUndefined()
      // The key must never appear in the request body.
      expect(JSON.stringify(JSON.parse(init.body as string))).not.toContain('sk-test-secret-123')
    } finally {
      vi.unstubAllGlobals()
    }
  })

  it('supports the Cloudflare Workers AI binding with no key at all', async () => {
    const ai = {
      run: vi.fn(async () => ({ response: '{"situationId":"SEARCH","confidence":"MEDIUM","context":{},"needsClarification":false}' }))
    }
    const out = await defaultLLMClient('text', { AI: ai })
    expect(ai.run).toHaveBeenCalled()
    expect(validateLLMOutput(out)?.situationId).toBe('SEARCH')
  })
})

describe('no API key exposure', () => {
  it('never includes the key in success or error responses', async () => {
    const good = await handleRequest(post({ text: 'Police stopped me' }), baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(await good.text()).not.toContain('sk-test-secret-123')

    const bad = await handleRequest(
      post({ text: 'Police stopped me' }),
      baseEnv,
      vi.fn(async () => {
        throw new Error('secret leaked: sk-test-secret-123')
      })
    )
    expect(bad.status).toBe(502)
    expect(await bad.text()).not.toContain('sk-test-secret-123')
  })
})

describe('CORS', () => {
  it('answers preflight for an allowed origin', async () => {
    const preflight = new Request('https://worker.example/nyayanow-classify', {
      method: 'OPTIONS',
      headers: { Origin: ORIGIN, 'Access-Control-Request-Method': 'POST' }
    })
    const res = await handleRequest(preflight, baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.status).toBe(204)
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe(ORIGIN)
  })

  it('omits CORS headers for a disallowed origin', async () => {
    const req = post({ text: 'Police stopped me' }, { Origin: 'https://evil.example' })
    const res = await handleRequest(req, baseEnv, llmReturning(VALID_LLM_RESULT))
    expect(res.headers.get('Access-Control-Allow-Origin')).toBeNull()
  })

  it('defaults to local dev origins when none are configured', async () => {
    const req = new Request('https://worker.example/nyayanow-classify', {
      method: 'OPTIONS',
      headers: { Origin: 'http://localhost:5173' }
    })
    const res = await handleRequest(req, { ...baseEnv, ALLOWED_ORIGINS: undefined }, llmReturning(VALID_LLM_RESULT))
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('http://localhost:5173')
  })
})

describe('rate limiting', () => {
  it('returns 429 after the per-IP limit is reached', async () => {
    const env: Env = { ...baseEnv, RATE_LIMIT_MAX: 2 }
    const first = await handleRequest(post({ text: 'one' }), env, llmReturning(VALID_LLM_RESULT))
    const second = await handleRequest(post({ text: 'two' }), env, llmReturning(VALID_LLM_RESULT))
    const third = await handleRequest(post({ text: 'three' }), env, llmReturning(VALID_LLM_RESULT))
    expect(first.status).toBe(200)
    expect(second.status).toBe(200)
    expect(third.status).toBe(429)
    expect(third.headers.get('Retry-After')).toBe('60')
  })
})
