# NyayaNow — Secure LLM Situation-Classification Proxy

A single Cloudflare Worker that lets the NyayaNow frontend use an LLM to
**understand** a citizen's situation — without the API key ever touching the
client.

```
NyayaNow frontend (no secret)
        │  POST /nyayanow-classify  { text, language }
        ▼
This Worker (holds LLM_API_KEY) ──▶ Google Gemini API
        │
        ▼
Structured classification JSON (validated, legal text discarded)
        │
        ▼
Frontend → existing verified knowledge base → rights / actions / help / sources
```

The LLM provider is **Google Gemini** (default model `gemini-3.5-flash-lite`,
configurable via `LLM_MODEL` / `LLM_ENDPOINT`).

## What the LLM is allowed to do

Only one thing: map a citizen's own words to a predefined situation ID.
It is explicitly barred (server-side system prompt) from generating legal
rights, sections, URLs, phone numbers, complaint procedures, court cases or
conclusions. Even if it tried, the proxy's validator **discards every field
except** `situationId`, `confidence`, approved `context` flags,
`needsClarification` and `missingContext`. The frontend's curated
clarification questions are never replaced by model-generated text.

## Security

- The API key lives only in a Worker secret: `npx wrangler secret put LLM_API_KEY`.
- Server secrets are never prefixed `VITE_` (VITE_ vars can leak into the client bundle).
- The client cannot choose the system prompt, model, temperature or provider.
- CORS allows only origins listed in `ALLOWED_ORIGINS` (defaults to local Vite dev origins).
- User text is never logged or stored; responses are structured JSON only.
- Errors are generic: `400 invalid_request`, `405 method_not_allowed`,
  `429 rate_limited`, `502 ai_service_unavailable`. No keys, stack traces or
  raw model output ever reach the client.
- Upstream timeout is 10s (the frontend waits ~12s) and basic in-memory rate
  limiting guards each IP (30 req/min per isolate).

## Setup

1. **Get a Google Gemini API key.** Create one at
   <https://aistudio.google.com/apikey> (the newer keys look like
   `AQ.Ab8…`; the classic `AIza…` format works too). 

2. **Configure the Worker locally:**

   ```bash
   cd worker
   cp .dev.vars.example .dev.vars   # then paste your key into .dev.vars
   npx wrangler dev
   ```

   Test it:

   ```bash
   curl -X POST http://localhost:8787/nyayanow-classify \
     -H "Content-Type: application/json" \
     -d '{"text": "I was riding my bike home when two policemen stopped me, took my keys and told me to come with them. They haven'\''t said I'\''m arrested.", "language": "en"}'
   ```

3. **Deploy:**

   ```bash
   cd worker
   npx wrangler deploy
   npx wrangler secret put LLM_API_KEY   # enter the Gemini API key when prompted
   ```

   Then set the production origin in `wrangler.toml` → `[vars] ALLOWED_ORIGINS`.

4. **Point the frontend at it** (build-time env, no code change needed):

   ```
   VITE_AI_ENABLED=true
   VITE_AI_ENDPOINT=https://nyayanow-classify.your-subdomain.workers.dev
   ```

   Without these, the app runs fully on-device. With them, AI assist appears
   in the navigator as an opt-in toggle (off by default).

## Provider configuration

Gemini is the default and needs no code change — just set the key:

```
LLM_API_KEY=<your Gemini API key>   # secret, never in VITE_*
LLM_MODEL=gemini-3.5-flash-lite     # any Gemini model id
LLM_ENDPOINT=https://generativelanguage.googleapis.com/v1beta
```

The worker calls the `generateContent` REST endpoint (`{LLM_ENDPOINT}/models/
{LLM_MODEL}:generateContent`) with the key in the `x-goog-api-key` header,
system prompt, temperature 0 and JSON-only output.

Alternatively, use Cloudflare Workers AI (no API key at all — Cloudflare
holds the credentials): uncomment the `[[ai]]` binding in `wrangler.toml`
and set `LLM_MODEL` to a Workers AI model id.

## Tests

```bash
npm test            # runs both the app tests and the proxy tests
```

The proxy tests cover: valid request, missing/oversized text, invalid
language, wrong method, malformed JSON, valid/malformed/invalid LLM output,
legal-text injection ignored, malicious output, upstream timeout and error,
no API-key leakage, CORS allow/deny, rate limiting and the safe UNKNOWN
fallback — all with a mocked LLM (no network, no key required).
