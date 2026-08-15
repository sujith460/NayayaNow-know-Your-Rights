import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone, WifiOff, ShieldAlert, ShieldCheck, FileX, Scale, ArrowRight, HeartHandshake } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { getSituationById } from '../data/situations'
import { getHelplines } from '../data/helplines'
import { HelpRouteCard } from '../components/situation/HelpRouteCard'
import { Button } from '../components/ui/Button'

function PackSection({
  icon,
  title,
  children
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <section className="card p-5 sm:p-7">
      <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-ink sm:text-2xl">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-saffron">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

/**
 * Offline Emergency Rights Pack — the most important information, available
 * with no connection (the whole app is cached by the PWA). It never claims
 * the law shown is current; it always says "verify against official sources".
 */
export function Emergency() {
  const { t, tr } = useApp()
  const arrest = getSituationById('ARREST')
  const questioning = getSituationById('POLICE_QUESTIONING')
  const fir = getSituationById('FIR_REFUSED')
  const abuse = getSituationById('POLICE_ABUSE')

  const helplines = getHelplines(t)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
        <WifiOff className="h-4 w-4" aria-hidden="true" />
        {t('footerOffline')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('epTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
        {t('epIntro')}
      </p>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-3 py-1.5 text-xs font-medium text-mist">
        <ShieldCheck className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
        {t('epOfflineNote')}
      </p>

      <div className="mt-10 grid gap-5">
        {/* Emergency numbers */}
        <PackSection
          icon={<Phone className="h-5 w-5" aria-hidden="true" />}
          title={t('epEmergency')}
        >
          <p className="mb-4 text-sm leading-relaxed text-mist">{t('emSafety')}</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {helplines.map((h) => (
              <a
                key={h.label + h.num}
                href={`tel:${h.num.replace(/\s/g, '')}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-paper p-3.5 transition-colors hover:border-saffron/50"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">{h.label}</span>
                  {h.note !== '—' && (
                    <span className="mt-0.5 block text-xs text-mist">{h.note}</span>
                  )}
                </span>
                <span className="shrink-0 font-display text-lg font-bold text-ink">{h.num}</span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-mist">{t('emNote')}</p>
        </PackSection>

        {/* Arrest essentials */}
        {arrest && (
          <PackSection
            icon={<ShieldAlert className="h-5 w-5" aria-hidden="true" />}
            title={t('epArrest')}
          >
            <p className="rounded-xl bg-ink p-4 font-display text-[15px] font-medium leading-relaxed text-paper texture-ink">
              {tr(arrest.summary)}
            </p>
            <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-mist">
              {t('epEssentialRights')}
            </h3>
            <ul className="mt-3 space-y-3">
              {arrest.rights.slice(0, 3).map((r) => (
                <li key={r.id} className="rounded-xl border border-line bg-paper p-3.5">
                  <p className="text-sm font-semibold text-ink">{tr(r.title)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{tr(r.whatThisMeans)}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link to={`/situation/${arrest.slug}`}>
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('viewFullGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </PackSection>
        )}

        {/* Questioning essentials */}
        {questioning && (
          <PackSection
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title={t('epQuestioning')}
          >
            <p className="rounded-xl bg-ink p-4 font-display text-[15px] font-medium leading-relaxed text-paper texture-ink">
              {tr(questioning.summary)}
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {questioning.immediateActions.slice(0, 4).map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 rounded-xl border border-line bg-paper p-3.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron-soft font-display text-xs font-bold text-saffron-deep"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink/85">{tr(a)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link to={`/situation/${questioning.slug}`}>
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('viewFullGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </PackSection>
        )}

        {/* FIR refused */}
        {fir && (
          <PackSection icon={<FileX className="h-5 w-5" aria-hidden="true" />} title={t('epFirRefused')}>
            <ul className="space-y-3">
              {fir.immediateActions.slice(0, 4).map((a, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-saffron-soft font-display text-xs font-bold text-saffron-deep"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink/85">{tr(a)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link to={`/situation/${fir.slug}`}>
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('viewFullGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </PackSection>
        )}

        {/* Police abuse — safety first */}
        {abuse && (
          <PackSection
            icon={<ShieldAlert className="h-5 w-5" aria-hidden="true" />}
            title={t('epAbuse')}
          >
            <p className="rounded-xl border border-danger/30 bg-danger-soft p-4 text-sm leading-relaxed text-danger">
              {tr(abuse.summary)}
            </p>
            <div className="mt-5">
              <Link to={`/situation/${abuse.slug}`}>
                <Button variant="danger" className="w-full sm:w-auto">
                  {t('viewFullGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </PackSection>
        )}

        {/* Legal help */}
        <PackSection
          icon={<Scale className="h-5 w-5" aria-hidden="true" />}
          title={t('secHelp')}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <HelpRouteCard routeId="nalsa" />
            <HelpRouteCard routeId="helpline-15100" />
            <HelpRouteCard routeId="dlsa-directory" />
            <HelpRouteCard routeId="nhrc-route" />
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-mist">
            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
            {t('lhFreeNote')}
          </p>
        </PackSection>
      </div>

      <p className="mt-8 rounded-2xl bg-paper-2 p-4 text-center text-xs leading-relaxed text-mist">
        {t('epOfflineNote')}
      </p>
    </div>
  )
}
