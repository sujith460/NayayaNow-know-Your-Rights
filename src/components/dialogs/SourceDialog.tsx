import { ExternalLink, ShieldCheck, CheckCircle2, ArrowDown } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { useApp } from '../../context/AppContext'
import { SOURCE_CATEGORIES, LAST_REVIEWED } from '../../data/sources'

export function SourceDialog({ onClose }: { onClose: () => void }) {
  const { t, tr } = useApp()

  const steps = [
    t('srcStep1'),
    t('srcStep2'),
    t('srcStep3'),
    t('srcStep4'),
    t('srcStep5')
  ]

  return (
    <Modal title={t('srcTitle')} onClose={onClose} wide>
      <p className="mb-6 text-[15px] leading-relaxed text-mist">{t('srcIntro')}</p>

      {/* Verification process */}
      <div className="mb-8 rounded-2xl bg-ink p-6 text-paper texture-ink">
        <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-paper">
          <ShieldCheck className="h-5 w-5 text-saffron" aria-hidden="true" />
          {t('srcHowWeVerify')}
        </h3>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="font-display text-sm font-semibold text-saffron" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm leading-relaxed text-paper/90">{step}</span>
              {i < steps.length - 1 && (
                <ArrowDown className="ml-auto hidden h-4 w-4 shrink-0 text-paper/30 sm:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Source cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {SOURCE_CATEGORIES.map((src) => (
          <article
            key={src.id}
            className="flex flex-col rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-saffron/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display text-base font-semibold text-ink">{tr(src.institution)}</h4>
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{tr(src.purpose)}</p>
            <a
              href={src.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-deep hover:underline"
            >
              {t('srcVisit')} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-mist">
        {t('srcLastReviewed')}: {LAST_REVIEWED}
      </p>
    </Modal>
  )
}
