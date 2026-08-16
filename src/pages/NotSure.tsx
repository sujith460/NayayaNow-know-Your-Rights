import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { getSituationById, SITUATIONS } from '../data/situations'
import { SituationIcon } from '../components/ui/icons'
import { UrgencyBadge } from '../components/ui/UrgencyBadge'

type Answer = 'yes' | 'no' | 'notsure' | null

export function NotSure() {
  const { t, tr } = useApp()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([null, null, null, null])

  const questions = [t('nsQ1'), t('nsQ2'), t('nsQ3'), t('nsQ4')]

  const answer = (a: 'yes' | 'no' | 'notsure') => {
    const next = [...answers]
    next[step] = a
    setAnswers(next)
    setStep(step + 1)
  }

  const restart = () => {
    setAnswers([null, null, null, null])
    setStep(0)
  }

  const result = (() => {
    const [q1, q2, q3, q4] = answers
    if (q4 === 'yes') return 'POLICE_ABUSE'
    if (q2 === 'yes') return 'ARREST'
    if (q1 === 'yes') return 'POLICE_QUESTIONING'
    if (q3 === 'yes') return 'PROPERTY_SEIZED'
    return null
  })()

  const done = step >= questions.length
  const recommended = done && result ? getSituationById(result) : null

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <HelpCircle className="h-4 w-4" aria-hidden="true" />
        {t('nsTitle')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('nsTitle')}</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-mist">{t('nsIntro')}</p>

      {/* Progress */}
      <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-paper-2">
        <div
          className="h-full rounded-full bg-saffron transition-all duration-500"
          style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-10">
        {!done && (
          <div key={step} className="animate-pop">
            <p className="text-xs font-semibold uppercase tracking-wide text-mist">
              {t('progressLabel')} {step + 1} / {questions.length}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{questions[step]}</h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => answer('yes')}
                className="flex-1 rounded-2xl border-2 border-leaf/50 bg-leaf-soft px-6 py-4 text-base font-semibold text-leaf transition-all hover:bg-leaf hover:text-white"
              >
                {t('nsYes')}
              </button>
              <button
                onClick={() => answer('no')}
                className="flex-1 rounded-2xl border-2 border-line bg-cream px-6 py-4 text-base font-semibold text-ink transition-all hover:border-mist"
              >
                {t('nsNo')}
              </button>
              <button
                onClick={() => answer('notsure')}
                className="flex-1 rounded-2xl border-2 border-dashed border-mist-2 bg-paper px-6 py-4 text-base font-semibold text-mist transition-all hover:text-ink"
              >
                {t('nsNotSure')}
              </button>
            </div>
          </div>
        )}

        {done && (
          <div className="animate-pop">
            {recommended ? (
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">{t('nsResultTitle')}</h2>
                <Link
                  to={`/situation/${recommended.slug}`}
                  className="card card-hover mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-saffron">
                    <SituationIcon name={recommended.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <UrgencyBadge urgency={recommended.urgency} />
                    <span className="mt-2 block font-display text-xl font-semibold text-ink">
                      {tr(recommended.title)}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-mist">
                      {tr(recommended.summary)}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-saffron-deep">
                    {t('proceedToGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            ) : (
              <div>
                <div className="rounded-3xl border border-dashed border-line bg-paper p-8 text-center">
                  <h2 className="font-display text-2xl font-semibold text-ink">{t('clUnknown')}</h2>
                  <p className="mt-2 text-sm text-mist">{t('clUnknownHint')}</p>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-ink">{t('clBrowseAll')}</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {SITUATIONS.map((s) => (
                      <Link
                        key={s.id}
                        to={`/situation/${s.slug}`}
                        className="card card-hover flex items-center gap-3 p-4"
                      >
                        <SituationIcon name={s.icon} className="h-5 w-5 shrink-0 text-saffron-deep" />
                        <span className="text-sm font-semibold text-ink">{tr(s.shortTitle)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={restart}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mist hover:text-ink"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {t('nsRestart')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
