import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'

export function SearchInput({ large = false }: { large?: boolean }) {
  const { t } = useApp()
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim().length < 3) return
    navigate(`/navigator?q=${encodeURIComponent(value.trim())}`)
  }

  return (
    <form onSubmit={submit} className="w-full">
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
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-2 sm:rounded-full sm:px-6"
        >
          {t('nlSubmit')}
        </button>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-mist">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {t('nlHint')}
      </p>
    </form>
  )
}
