import { ClipboardCheck, ArrowUpRight } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { getSituationById } from '../data/situations'
import { ComplaintRouteCard } from '../components/situation/ComplaintRouteCard'
import { HelpRouteCard } from '../components/situation/HelpRouteCard'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Complaints() {
  const { t, openDialog } = useApp()
  const situation = getSituationById('COMPLAINT')

  if (!situation) return null

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t('cnTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
        {t('cnIntro')}
      </p>

      <button
        onClick={() => openDialog('checklist')}
        className="card card-hover mt-8 flex w-full items-center gap-4 p-5 text-left"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-soft text-leaf">
          <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="flex-1">
          <span className="font-display text-lg font-semibold text-ink">{t('clTitle')}</span>
          <span className="mt-0.5 block text-sm text-mist">{t('clIntro')}</span>
        </span>
        <ArrowUpRight className="h-5 w-5 text-mist" aria-hidden="true" />
      </button>

      <div className="mt-12">
        <SectionHeading index="01" title={t('cnPickOne')} />
        <div className="grid gap-4">
          {situation.complaintRoutes.map((r) => (
            <ComplaintRouteCard key={r.id} route={r} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionHeading index="02" title={t('secHelp')} />
        <div className="grid gap-4 sm:grid-cols-2">
          {situation.helpRouteIds.map((id) => (
            <HelpRouteCard key={id} routeId={id} />
          ))}
        </div>
      </div>
    </div>
  )
}
