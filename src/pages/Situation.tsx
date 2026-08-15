import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, NotebookPen, ClipboardCheck, Scale, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { getSituationBySlug } from '../data/situations'
import { getSources } from '../data/sources'
import { UrgencyBadge } from '../components/ui/UrgencyBadge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stepper } from '../components/situation/Stepper'
import { ThirtySecondSummary } from '../components/situation/ThirtySecondSummary'
import { RightCard } from '../components/situation/RightCard'
import { DoList, AvoidList } from '../components/situation/ActionList'
import { Timeline } from '../components/situation/Timeline'
import { WhatHappensNext } from '../components/situation/WhatHappensNext'
import { HelpRouteCard } from '../components/situation/HelpRouteCard'
import { ComplaintRouteCard } from '../components/situation/ComplaintRouteCard'
import { SituationIcon } from '../components/ui/icons'

export function SituationPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, tr, openDialog } = useApp()
  const situation = slug ? getSituationBySlug(slug) : undefined

  if (!situation) return <Navigate to="/" replace />

  const sources = getSources(situation.sourceIds)
  const isAbuse = situation.id === 'POLICE_ABUSE'

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 animate-rise">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-mist hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {t('backToHome')}
      </Link>

      {/* Situation header */}
      <header className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink text-saffron">
          <SituationIcon name={situation.icon} className="h-7 w-7" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <UrgencyBadge urgency={situation.urgency} />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mist">
              <ShieldCheck className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
              {t('trustVerified')} · {t('lastVerified')}: {situation.lastVerified}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {tr(situation.title)}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
            {tr(situation.description)}
          </p>
        </div>
      </header>

      {isAbuse && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger-soft p-4" role="note">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-danger" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-danger">
            <strong>{t('emTitle')}:</strong> {t('emSafety')}
          </p>
        </div>
      )}

      <div className="mt-10">
        <Stepper current={0} />
      </div>

      {/* 30-second mode */}
      <ThirtySecondSummary situation={situation} />

      {/* Arrest / stage timeline */}
      {situation.timeline && situation.timeline.length > 0 && (
        <section className="mt-16" aria-labelledby="timeline-heading">
          <SectionHeading index="02" title={t('secTimeline')} subtitle={tr(situation.timeline[0].description)} />
          <Timeline stages={situation.timeline} />
        </section>
      )}

      {/* Your rights */}
      <section className="mt-16" aria-labelledby="rights-heading">
        <SectionHeading
          index={situation.timeline?.length ? '03' : '02'}
          title={t('secRights')}
          subtitle={t('whatThisMeans')}
        />
        <div className="grid gap-4">
          {situation.rights.map((r) => (
            <RightCard key={r.id} right={r} />
          ))}
        </div>
      </section>

      {/* What you can do / avoid */}
      <section className="mt-16 grid gap-10 lg:grid-cols-2" aria-label={t('secDo')}>
        <div>
          <SectionHeading index="04" title={t('secDo')} />
          <DoList items={situation.do} />
        </div>
        <div>
          <SectionHeading index="05" title={t('secAvoid')} />
          <AvoidList items={situation.avoid} />
        </div>
      </section>

      {/* What happens next */}
      <section className="mt-16">
        <SectionHeading index="06" title={t('secWhatNext')} />
        <WhatHappensNext situation={situation} />
      </section>

      {/* Get legal help */}
      <section className="mt-16" aria-labelledby="help-heading">
        <SectionHeading index="07" title={t('secHelp')} />
        <div className="grid gap-4 sm:grid-cols-2">
          {situation.helpRouteIds.map((id) => (
            <HelpRouteCard key={id} routeId={id} />
          ))}
        </div>
      </section>

      {/* Where to complain */}
      {situation.complaintRoutes.length > 0 && (
        <section className="mt-16" aria-labelledby="complain-heading">
          <SectionHeading index="08" title={t('secComplain')} />
          <div className="grid gap-4">
            {situation.complaintRoutes.map((r) => (
              <ComplaintRouteCard key={r.id} route={r} />
            ))}
          </div>
        </section>
      )}

      {/* Official sources */}
      <section className="mt-16" aria-labelledby="sources-heading">
        <SectionHeading
          index="09"
          title={t('secSources')}
          subtitle={t('srcIntro')}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {sources.map((s) => (
            <article key={s.id} className="card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-ink">{tr(s.institution)}</h3>
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-saffron-deep">
                {s.legalInstrument}
                {s.sectionOrArticle ? ` · ${s.sectionOrArticle}` : ''}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{tr(s.purpose)}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs text-mist">
                  {t('lastVerified')}: {s.lastVerified}
                </span>
                <a
                  href={s.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep hover:underline"
                >
                  {t('trustViewProvision')} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Privacy-first actions */}
      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        <button
          onClick={() => openDialog('memory')}
          className="card card-hover flex items-center gap-4 p-5 text-left"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-saffron">
            <NotebookPen className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="font-display text-base font-semibold text-ink">{t('memOpen')}</span>
            <span className="mt-0.5 block text-xs text-mist">{t('memSavedOnly')}</span>
          </span>
        </button>
        <button
          onClick={() => openDialog('checklist')}
          className="card card-hover flex items-center gap-4 p-5 text-left"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="font-display text-base font-semibold text-ink">{t('clTitle')}</span>
            <span className="mt-0.5 block text-xs text-mist">{t('clNoUpload')}</span>
          </span>
        </button>
      </section>

      {/* Disclaimer note */}
      <p className="mt-10 flex items-start gap-2 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-mist">
        <Scale className="mt-0.5 h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
        {t('discFirstVisit')}{' '}
        <button onClick={() => openDialog('disclaimer')} className="font-semibold text-saffron-deep underline">
          {t('discTitle')}
        </button>
      </p>
    </div>
  )
}
