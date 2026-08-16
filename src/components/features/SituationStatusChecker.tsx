import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HelpCircle, RotateCcw, ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { getSituationById, SITUATIONS } from '../../data/situations'
import { SituationIcon } from '../ui/icons'
import { UrgencyBadge } from '../ui/UrgencyBadge'

type Answer = 'yes' | 'no' | 'notsure'

/**
 * "What is happening right now?" — a reusable decision tool that helps a user
 * tell questioning apart from arrest without needing legal knowledge.
 *
 * It never makes a legal determination: answers simply point to the verified
 * guide that most closely matches what the user described.
 */
export function SituationStatusChecker() {
  const { t, tr } = useApp()
  const [q1, setQ1] = useState<Answer | null>(null)
  const [q2, setQ2] = useState<Answer | null>(null)

  const restart = () => {
    setQ1(null)
    setQ2(null)
  }

  const renderGuide = (id: 'ARREST' | 'POLICE_QUESTIONING') => {
    const s = getSituationById(id)
    if (!s) return null
    return (
      <div className="card mt-5 flex flex-col gap-4 p-5 sm:p-6 animate-pop">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-saffron">
            <SituationIcon name={s.icon} className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <UrgencyBadge urgency={s.urgency} />
            <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
              {id === 'ARREST' ? t('sscRecArrest') : t('sscRecQuestioning')}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mist">{tr(s.summary)}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={`/situation/${s.slug}`} className="flex-1">
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgb(180_83_9/0.6)] transition-all hover:bg-saffron-deep">
              {t('viewGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
          <button
            onClick={restart}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line bg-cream px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-saffron hover:text-saffron-deep"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t('nsRestart')}
          </button>
        </div>
      </div>
    )
  }

  const renderUncertain = () => (
    <div className="mt-5 rounded-2xl border border-dashed border-line bg-paper p-5 sm:p-6 animate-pop">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
        <HelpCircle className="h-5 w-5 text-saffron-deep" aria-hidden="true" />
        {t('sscUncertain')}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">{t('sscCautious')}</p>
      <p className="mt-3 rounded-xl bg-saffron-soft p-3 text-sm leading-relaxed text-saffron-deep">
        {t('sscDifference')}
      </p>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-mist">{t('clBrowseAll')}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
      <button
        onClick={restart}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mist hover:text-ink"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        {t('nsRestart')}
      </button>
    </div>
  )

  const answerBtn = (a: Answer, onClick: () => void, variant: 'yes' | 'no' | 'notsure') => {
    const cls =
      variant === 'yes'
        ? 'border-2 border-leaf/50 bg-leaf-soft px-6 py-4 text-base font-semibold text-leaf transition-all hover:bg-leaf hover:text-white'
        : variant === 'no'
          ? 'border-2 border-line bg-cream px-6 py-4 text-base font-semibold text-ink transition-all hover:border-mist'
          : 'border-2 border-dashed border-mist-2 bg-paper px-6 py-4 text-base font-semibold text-mist transition-all hover:text-ink'
    const label = a === 'yes' ? t('nsYes') : a === 'no' ? t('nsNo') : t('nsNotSure')
    return (
      <button onClick={onClick} className={`flex-1 rounded-2xl ${cls}`}>
        {label}
      </button>
    )
  }

  const done =
    q1 === 'yes' || q1 === 'notsure' || (q1 === 'no' && q2 !== null)

  return (
    <section
      className="rounded-3xl border border-line bg-cream p-6 shadow-[0_24px_60px_-24px_rgb(11_27_47/0.25)] sm:p-8"
      aria-label={t('sscTitle')}
    >
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{t('sscTitle')}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist sm:text-[15px]">{t('sscIntro')}</p>

      {!done && (
        <div className="mt-6">
          {q1 === null ? (
            <div className="animate-pop" key="q1">
              <h3 className="font-display text-lg font-semibold text-ink">{t('sscQ1')}</h3>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {answerBtn('yes', () => setQ1('yes'), 'yes')}
                {answerBtn('no', () => setQ1('no'), 'no')}
                {answerBtn('notsure', () => setQ1('notsure'), 'notsure')}
              </div>
            </div>
          ) : (
            <div className="animate-pop" key="q2">
              <h3 className="font-display text-lg font-semibold text-ink">{t('sscQ2')}</h3>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {answerBtn('yes', () => setQ2('yes'), 'yes')}
                {answerBtn('no', () => setQ2('no'), 'no')}
                {answerBtn('notsure', () => setQ2('notsure'), 'notsure')}
              </div>
            </div>
          )}
        </div>
      )}

      {done && (
        <div className="mt-6">
          <p className="text-sm leading-relaxed text-mist">{t('sscCautious')}</p>
          {q1 === 'yes' && renderGuide('ARREST')}
          {q1 === 'notsure' && renderUncertain()}
          {q1 === 'no' && q2 === 'yes' && renderGuide('POLICE_QUESTIONING')}
          {(q1 === 'no' && (q2 === 'no' || q2 === 'notsure')) && renderUncertain()}
        </div>
      )}
    </section>
  )
}
