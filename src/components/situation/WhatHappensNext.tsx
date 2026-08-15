import { Link } from 'react-router-dom'
import { MapPin, ArrowDown, ArrowUpRight, CornerDownRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Situation } from '../../data/types'
import { getSituationBySlug } from '../../data/situations'

/**
 * "What happens next?" — a visual path. Steps marked as `linkTo` become
 * possible next steps that open the relevant verified guide. The wording never
 * predicts what the police WILL do; it only points to the guide that matches.
 */
export function WhatHappensNext({ situation }: { situation: Situation }) {
  const { t, tr } = useApp()
  if (situation.whatHappensNext.length === 0) return null

  return (
    <section aria-label={t('secWhatNext')} className="card p-5 sm:p-7">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
        {t('secWhatNext')}
      </h2>
      <ol className="mt-6 space-y-0">
        {situation.whatHappensNext.map((step, i) => {
          const linked = step.linkTo ? getSituationBySlug(step.linkTo) : undefined
          return (
            <li key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    i === 0 ? 'bg-saffron text-white' : 'bg-paper-2 text-mist'
                  }`}
                  aria-hidden="true"
                >
                  {i === 0 ? (
                    <MapPin className="h-4 w-4" />
                  ) : (
                    <span className="font-display text-sm font-semibold">{i}</span>
                  )}
                </span>
                {i < situation.whatHappensNext.length - 1 && (
                  <ArrowDown className="my-1 h-4 w-4 text-mist-2" aria-hidden="true" />
                )}
              </div>
              <div className="min-w-0 pb-2 pt-1">
                {linked ? (
                  <Link
                    to={`/situation/${linked.slug}`}
                    className="group inline-flex flex-wrap items-center gap-1.5 rounded-lg text-[15px] font-semibold leading-snug text-saffron-deep underline decoration-saffron/40 underline-offset-2 hover:decoration-saffron-deep"
                  >
                    {tr(step.label)}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ) : (
                  <p className="text-[15px] font-semibold leading-snug text-ink">{tr(step.label)}</p>
                )}
                <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  {step.linkTo && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-saffron-soft px-2 py-0.5 text-[11px] font-semibold text-saffron-deep">
                      <CornerDownRight className="h-3 w-3" aria-hidden="true" />
                      {t('whnPossible')}
                    </span>
                  )}
                  {step.linkTo && <span className="text-xs text-mist">{t('whnDepending')}</span>}
                </span>
                {step.note && <p className="mt-1 text-xs text-mist">{tr(step.note)}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
