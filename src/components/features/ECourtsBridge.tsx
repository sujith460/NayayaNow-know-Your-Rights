import { Search, FileText, Users, ArrowUpRight, Landmark } from 'lucide-react'
import { useApp } from '../../context/AppContext'

/**
 * eCourts trusted bridge — a simple, safe gateway to the official eCourts
 * service. NyayaNow never collects CNR/FIR numbers and never provides court
 * records; every button opens a verified official eCourts URL.
 */
export function ECourtsBridge() {
  const { t } = useApp()

  // Verified official eCourts destinations (Government of India).
  const CASE_STATUS_URL = 'https://services.ecourts.gov.in/ecourtindia_v6/?p=casestatus/'
  const HELP_URL = 'https://services.ecourts.gov.in/ecourtindia_v6/?p=help_videos/index'

  const cards = [
    {
      icon: <Search className="h-5 w-5" aria-hidden="true" />,
      title: t('ecCnr'),
      btn: t('ecCnrBtn'),
      url: CASE_STATUS_URL,
      accent: 'bg-ink text-saffron'
    },
    {
      icon: <FileText className="h-5 w-5" aria-hidden="true" />,
      title: t('ecFir'),
      btn: t('ecFirBtn'),
      url: HELP_URL,
      accent: 'bg-leaf-soft text-leaf'
    },
    {
      icon: <Users className="h-5 w-5" aria-hidden="true" />,
      title: t('ecParty'),
      btn: t('ecPartyBtn'),
      url: CASE_STATUS_URL,
      accent: 'bg-saffron-soft text-saffron-deep'
    }
  ]

  return (
    <section aria-label={t('ecTitle')}>
      <div className="mb-6">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          <Landmark className="h-6 w-6 text-saffron-deep" aria-hidden="true" />
          {t('ecTitle')}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-mist">{t('ecSub')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group flex flex-col gap-4 p-5"
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.accent}`}>
              {c.icon}
            </span>
            <span className="font-display text-base font-semibold leading-snug text-ink">
              {c.title}
            </span>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-deep">
              {c.btn}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>

      <p className="mt-4 rounded-xl bg-paper-2 p-3 text-xs leading-relaxed text-mist">
        {t('ecDisclaimer')}
      </p>
    </section>
  )
}
