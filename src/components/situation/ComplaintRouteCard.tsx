import { ExternalLink, FileText } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { ComplaintRoute } from '../../data/types'
import { getSources } from '../../data/sources'

export function ComplaintRouteCard({ route }: { route: ComplaintRoute }) {
  const { t, tr } = useApp()
  const sources = getSources(route.sourceIds ?? [])

  const inner = (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-2 font-display text-base font-semibold text-ink">
        <FileText className="h-4 w-4 text-saffron" aria-hidden="true" />
        {tr(route.route)}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-paper p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist">{t('cnWhy')}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">{tr(route.whyItMayApply)}</p>
        </div>
        <div className="rounded-xl bg-paper p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist">{t('cnPrepare')}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">{tr(route.whatToPrepare)}</p>
        </div>
      </div>
      {route.legalBasis && (
        <p className="text-xs font-medium text-mist">
          {t('legalBasis')}: {route.legalBasis}
        </p>
      )}
      {sources.length > 0 && (
        <p className="flex flex-wrap gap-3">
          {sources.map((s) => (
            <a
              key={s.id}
              href={s.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-deep hover:underline"
            >
              {s.legalInstrument} <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          ))}
        </p>
      )}
    </div>
  )

  if (route.officialUrl) {
    return (
      <a
        href={route.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-hover block p-5"
      >
        {inner}
      </a>
    )
  }
  return <div className="card p-5">{inner}</div>
}
