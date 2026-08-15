import { BookOpen, ShieldCheck } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { LEGAL_TERMS } from '../data/legalTerms'
import { LegalTermTooltip } from '../components/ui/LegalTermTooltip'

export function LegalTerms() {
  const { t } = useApp()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        {t('ltTitle')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('ltTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
        {t('ltIntro')}
      </p>
      <p className="mt-4 flex items-start gap-2 rounded-xl bg-leaf-soft p-3 text-xs leading-relaxed text-leaf">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {t('srcHowWeVerify')}: {t('srcIntro')}
      </p>

      <div className="mt-8 space-y-3">
        {LEGAL_TERMS.map((lt) => (
          <LegalTermTooltip key={lt.id} termId={lt.id} />
        ))}
      </div>

      <p className="mt-8 text-center text-xs leading-relaxed text-mist">{t('clAIBoundary')}</p>
    </div>
  )
}
