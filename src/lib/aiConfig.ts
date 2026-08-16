/**
 * AI situation-understanding configuration.
 *
 * SECURITY RULE: no API key ever lives in this client. If AI assist is used,
 * the browser only knows the URL of a minimal serverless proxy that holds the
 * key server-side. Without these variables the app runs fully on-device.
 *
 *   VITE_AI_ENABLED=true
 *   VITE_AI_ENDPOINT=https://your-proxy.example/nyayanow-classify
 *
 * The proxy receives `{ text }`, calls the LLM with NyayaNow's situation-
 * understanding system prompt, and returns structured JSON. It must never
 * return legal content — only a situation ID, confidence and context.
 */
export interface AIConfig {
  /** Whether an external situation-understanding service is available in this build. */
  available: boolean
  /** The proxy endpoint. Never a raw provider URL and never contains a key. */
  endpoint: string | null
}

export function getAIConfig(): AIConfig {
  const endpoint = (import.meta.env.VITE_AI_ENDPOINT as string | undefined)?.trim() || null
  const enabled = (import.meta.env.VITE_AI_ENABLED as string | undefined)?.toLowerCase() === 'true'
  return { available: enabled && Boolean(endpoint), endpoint }
}
