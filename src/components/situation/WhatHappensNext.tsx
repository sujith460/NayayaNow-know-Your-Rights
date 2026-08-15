import { MapPin, ArrowDown } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Situation } from '../../data/types'

export function WhatHappensNext({ situation }: { situation: Situation }) {
  const { t, tr } = useApp()
  if (situation.whatHappensNext.length === 0) return null

  return (
    <section aria-label={t('secWhatNext')} className="card p-5 sm:p-7">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
        {t('secWhatNext')}
      </h2>
      <ol className="mt-6 space-y-0">
        {situation.whatHappensNext.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  i === 0 ? 'bg-saffron text-white' : 'bg-paper-2 text-mist'
                }`}
                aria-hidden="true"
              >
                {i === 0 ? <MapPin className="h-4 w-4" /> : <span className="font-display text-sm font-semibold">{i}</span>}
              </span>
              {i < situation.whatHappensNext.length - 1 && (
                <ArrowDown className="my-1 h-4 w-4 text-mist-2" aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0 pb-2 pt-1">
              <p className="text-[15px] font-semibold leading-snug text-ink">{tr(step.label)}</p>
              {step.note && <p className="mt-0.5 text-xs text-mist">{tr(step.note)}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
