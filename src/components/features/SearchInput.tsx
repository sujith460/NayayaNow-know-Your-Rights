import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Sparkles, Mic, Square } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Lang } from '../../data/types'
import {
  getSpeechRecognitionCtor,
  isSpeechRecognitionSupported,
  type SpeechRecognitionLike
} from '../../lib/speechRecognition'

const LANG_MAP: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' }

export function SearchInput({ large = false }: { large?: boolean }) {
  const { t, lang } = useApp()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [listening, setListening] = useState(false)
  const recRef = useRef<SpeechRecognitionLike | null>(null)
  const supported = isSpeechRecognitionSupported()

  useEffect(() => {
    return () => {
      try {
        recRef.current?.abort()
      } catch {
        /* noop */
      }
    }
  }, [])

  const submit = (text?: string) => {
    const q = (text ?? value).trim()
    if (q.length < 3) return
    navigate(`/navigator?q=${encodeURIComponent(q)}`)
  }

  const stopListening = () => {
    try {
      recRef.current?.abort()
    } catch {
      /* noop */
    }
    setListening(false)
  }

  const startListening = () => {
    const Ctor = getSpeechRecognitionCtor()
    if (!Ctor) return
    const rec = new Ctor()
    rec.lang = LANG_MAP[lang] ?? 'en-IN'
    rec.continuous = false
    rec.interimResults = true
    rec.maxAlternatives = 1

    rec.onresult = (e) => {
      let interim = ''
      let final = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i]
        const text = res[0]?.transcript ?? ''
        if (res.isFinal) final += text
        else interim += text
      }
      const combined = (final + interim).trim()
      if (combined) setValue(combined)
      if (final.trim().length >= 3) {
        setListening(false)
        navigate(`/navigator?q=${encodeURIComponent(final.trim())}`)
      }
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)

    recRef.current = rec
    setListening(true)
    rec.start()
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit() }} className="w-full">
      <div
        className={`flex items-stretch gap-2 rounded-2xl border border-line bg-cream p-2 shadow-[0_16px_40px_-20px_rgb(11_27_47/0.25)] transition-all focus-within:border-saffron ${
          large ? 'sm:rounded-full sm:p-2.5' : ''
        }`}
      >
        <label htmlFor="nl-search" className="sr-only">
          {t('nlTitle')}
        </label>
        <Search className="my-auto ml-3 h-5 w-5 shrink-0 text-mist" aria-hidden="true" />
        <input
          id="nl-search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t('nlPlaceholder')}
          className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-[15px] text-ink placeholder:text-mist focus:outline-none"
          autoComplete="off"
        />
        {supported && (
          <button
            type="button"
            onClick={listening ? stopListening : startListening}
            aria-label={listening ? t('spStop') : t('spMic')}
            aria-pressed={listening}
            className={`shrink-0 self-center rounded-full p-2.5 transition-colors ${
              listening
                ? 'bg-danger text-white animate-pulse'
                : 'text-mist hover:bg-saffron-soft hover:text-saffron-deep'
            }`}
          >
            {listening ? (
              <Square className="h-4 w-4 fill-current" aria-hidden="true" />
            ) : (
              <Mic className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-2 sm:rounded-full sm:px-6"
        >
          {t('nlSubmit')}
        </button>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-mist">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {listening ? t('spListening') : t('nlHint')}
      </p>
      {supported && (
        <p className="mt-1.5 text-center text-[11px] leading-relaxed text-mist-2">
          {t('spPrivacy')}
        </p>
      )}
    </form>
  )
}
