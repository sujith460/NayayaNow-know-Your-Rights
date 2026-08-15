import { useEffect, useState } from 'react'
import { Volume2, Square } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Lang } from '../../data/types'
import { speechClean } from '../../lib/speech'

const LANG_MAP: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' }

function pickVoice(lang: Lang): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  const target = LANG_MAP[lang]
  return (
    voices.find((v) => v.lang.replace('_', '-').toLowerCase() === target) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(lang)) ??
    null
  )
}

/**
 * Reads text out loud in the app's current language using the browser's
 * built-in speech synthesis — no audio is recorded or sent anywhere.
 */
export function SpeakButton({ text }: { text: string }) {
  const { t, lang } = useApp()
  const [speaking, setSpeaking] = useState(false)

  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    if (!supported) return
    // Chrome loads voices asynchronously — warm the list and cancel on unmount.
    window.speechSynthesis.getVoices()
    const warm = () => window.speechSynthesis.getVoices()
    window.speechSynthesis.addEventListener('voiceschanged', warm)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', warm)
      window.speechSynthesis.cancel()
    }
  }, [supported])

  if (!supported) return null

  const stop = () => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }

  const speak = () => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(speechClean(text, lang))
    u.lang = LANG_MAP[lang]
    const voice = pickVoice(lang)
    if (voice) u.voice = voice
    u.rate = 1
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.speak(u)
  }

  return speaking ? (
    <button
      onClick={stop}
      aria-label={t('spStop')}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-paper ring-1 ring-white/25 transition-colors hover:bg-white/25"
    >
      <Square className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
      {t('spStop')}
    </button>
  ) : (
    <button
      onClick={speak}
      aria-label={t('spListen')}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-paper ring-1 ring-white/20 transition-colors hover:bg-white/20"
    >
      <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
      {t('spListen')}
    </button>
  )
}
