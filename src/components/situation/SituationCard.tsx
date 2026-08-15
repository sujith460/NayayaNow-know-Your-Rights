import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Situation } from '../../data/types'
import { SituationIcon } from '../ui/icons'
import { UrgencyBadge } from '../ui/UrgencyBadge'
import { useApp } from '../../context/AppContext'

export function SituationCard({ situation }: { situation: Situation }) {
  const { t, tr } = useApp()
  return (
    <Link
      to={`/situation/${situation.slug}`}
      className="card card-hover group flex flex-col gap-3 p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-2 text-ink transition-colors group-hover:bg-saffron-soft group-hover:text-saffron-deep">
          <SituationIcon name={situation.icon} className="h-5 w-5" />
        </span>
        <UrgencyBadge urgency={situation.urgency} />
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug text-ink">
        {tr(situation.shortTitle)}
      </h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-mist">{tr(situation.description)}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep">
        {t('viewGuide')}
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
