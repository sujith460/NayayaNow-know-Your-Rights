import { useApp } from '../../context/AppContext'
import type { Lang } from '../../data/types'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' }
]

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useApp()

  return (
    <div
      className={`flex items-center rounded-full border border-line bg-paper p-1 ${compact ? '' : ''}`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
            lang === l.code ? 'bg-ink text-paper' : 'text-mist hover:text-ink'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
