import { Zap, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import type { Situation } from '../../data/types'
import { SpeakButton } from '../ui/SpeakButton'

export function ThirtySecondSummary({ situation }: { situation: Situation }) {
  const { t, tr } = useApp()
  const [expanded, setExpanded] = useState(false)

  const speechText = [
    tr(situation.summary),
    ...situation.immediateActions.map((a, i) => `${i + 1}. ${tr(a)}`)
  ].join(' ')

  return (
    <section
      id="what-matters-now"
      className="rounded-3xl bg-ink p-6 text-paper shadow-xl texture-ink sm:p-8"
      aria-label={t('secWhatMatters')}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
          <Zap className="h-4 w-4" aria-hidden="true" />
          {t('secThirtySec')} · {t('secWhatMatters')}
        </p>
        <SpeakButton text={speechText} />
      </div>
      <p className="mt-3 font-display text-xl font-medium leading-relaxed text-paper sm:text-2xl">
        {tr(situation.summary)}
      </p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {situation.immediateActions.slice(0, expanded ? situation.immediateActions.length : 4).map((a, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron font-display text-xs font-bold text-ink"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-paper/90">{tr(a)}</span>
          </li>
        ))}
      </ol>

      {situation.immediateActions.length > 4 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron hover:underline"
        >
          {expanded ? t('close') : t('showMore')}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}
    </section>
  )
}
