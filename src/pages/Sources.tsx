import { ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { SOURCE_CATEGORIES, LAST_REVIEWED } from '../data/sources'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Sources() {
  const { t, tr } = useApp()

  const steps = [
    t('srcStep1'),
    t('srcStep2'),
    t('srcStep3'),
    t('srcStep4'),
    t('srcStep5')
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        {t('trustVerified')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('srcTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
        {t('srcIntro')}
      </p>

      {/* How we verify */}
      <div className="mt-10 rounded-3xl bg-ink p-6 text-paper texture-ink sm:p-8">
        <SectionHeading title={t('srcHowWeVerify')} />
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="font-display text-lg font-semibold text-saffron" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="pt-1 text-[15px] leading-relaxed text-paper/90">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Source categories */}
      <div className="mt-12">
        <SectionHeading index="02" title={t('secSources')} />
        <div className="grid gap-4 sm:grid-cols-2">
          {SOURCE_CATEGORIES.map((src) => (
            <article key={src.id} className="card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-ink">{tr(src.institution)}</h3>
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
      </div>

      <p className="mt-10 text-center text-sm text-mist">
        {t('srcLastReviewed')}: {LAST_REVIEWED}
      </p>
    </div>
  )
}
