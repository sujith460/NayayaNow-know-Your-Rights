import { HeartHandshake, ExternalLink } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { getHelpRoute } from '../../data/registry'

export function HelpRouteCard({ routeId }: { routeId: string }) {
  const { tr } = useApp()
  const route = getHelpRoute(routeId)
  if (!route) return null

  return (
    <a
      href={route.officialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex items-start gap-4 p-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
        <HeartHandshake className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-display text-base font-semibold text-ink">
          {tr(route.authority)}
          <ExternalLink
            className="h-3.5 w-3.5 text-mist transition-colors group-hover:text-saffron-deep"
            aria-hidden="true"
          />
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-mist">{tr(route.purpose)}</span>
        <span className="mt-2 block text-xs font-medium text-saffron-deep">{tr(route.whenToUse)}</span>
      </span>
    </a>
  )
}
