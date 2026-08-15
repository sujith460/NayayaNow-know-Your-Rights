import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, ShieldCheck, HelpCircle, Zap, LifeBuoy } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Situation } from '../../data/types'

type Answer = 'danger' | 'safe' | 'unsure'

/**
 * "Are you safe right now?" — shown before high-risk guides. Reuses the
 * existing Emergency mode and the /help page; never gives dangerous
 * instructions and never encourages confrontation.
 */
export function SafetyCheck({ situation }: { situation: Situation }) {
  const { t, openEmergency } = useApp()

  // Only prompt once per session per situation — a safe/answered check should
  // not nag a returning user.
  const key = `nyayanow:safety:${situation.slug}`
  const [answer, setAnswer] = useState<Answer | null>(() => {
    try {
      return sessionStorage.getItem(key) === '1' ? 'safe' : null
    } catch {
      return null
    }
  })

  if (situation.urgency !== 'high') return null
  if (answer === 'safe') return null

  const dismiss = () => {
    try {
      sessionStorage.setItem(key, '1')
    } catch {
      /* noop */
    }
    setAnswer('safe')
  }

  return (
    <section
      className="mt-6 rounded-2xl border border-line bg-cream p-5 sm:p-6"
      aria-label={t('scTitle')}
    >
      <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
        <ShieldCheck className="h-5 w-5 text-leaf" aria-hidden="true" />
        {t('scTitle')}
      </h2>

      {answer === null && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => {
              setAnswer('danger')
              openEmergency()
            }}
            className="flex-1 rounded-2xl border-2 border-danger/40 bg-danger-soft px-6 py-4 text-sm font-semibold text-danger transition-all hover:bg-danger hover:text-white"
          >
            🔴 {t('scDanger')}
          </button>
          <button
            onClick={dismiss}
            className="flex-1 rounded-2xl border-2 border-leaf/40 bg-leaf-soft px-6 py-4 text-sm font-semibold text-leaf transition-all hover:bg-leaf hover:text-white"
          >
            🟢 {t('scSafe')}
          </button>
          <button
            onClick={() => setAnswer('unsure')}
            className="flex-1 rounded-2xl border-2 border-dashed border-mist-2 bg-paper px-6 py-4 text-sm font-semibold text-mist transition-all hover:text-ink"
          >
            ❓ {t('nsNotSure')}
          </button>
        </div>
      )}

      {answer === 'unsure' && (
        <div className="mt-4 rounded-xl border border-saffron/30 bg-saffron-soft p-4 animate-pop">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-saffron-deep">
            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {t('scUnsafeNote')}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link to="/help" className="flex-1">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-2">
                <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                {t('scViewHelp')}
              </span>
            </Link>
            <button
              onClick={openEmergency}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-danger px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-danger/90"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              {t('scOpenEmergency')}
            </button>
            <button
              onClick={dismiss}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-cream px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-mist"
            >
              <ShieldAlert className="h-4 w-4 text-mist" aria-hidden="true" />
              {t('scContinue')}
            </button>
          </div>
        </div>
      )}

      {answer === 'danger' && (
        <div className="mt-4 rounded-xl border border-danger/30 bg-danger-soft p-4 animate-pop">
          <p className="text-sm leading-relaxed text-danger">{t('emSafety')}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={openEmergency}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-danger px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-danger/90"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              {t('scOpenEmergency')}
            </button>
            <Link to="/help" className="flex-1">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-cream px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-mist">
                <LifeBuoy className="h-4 w-4 text-mist" aria-hidden="true" />
                {t('scViewHelp')}
              </span>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
