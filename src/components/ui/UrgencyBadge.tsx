import { AlertCircle, Info, Flag, CircleDot } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Urgency } from '../../data/types'

const config: Record<Urgency, { labelKey: 'urgHigh' | 'urgMedium' | 'urgLow' | 'urgInfo'; cls: string; Icon: typeof Flag }> = {
  high: { labelKey: 'urgHigh', cls: 'bg-danger-soft text-danger', Icon: AlertCircle },
  medium: { labelKey: 'urgMedium', cls: 'bg-saffron-soft text-saffron-deep', Icon: Flag },
  low: { labelKey: 'urgLow', cls: 'bg-leaf-soft text-leaf', Icon: Info },
  info: { labelKey: 'urgInfo', cls: 'bg-paper-2 text-mist', Icon: CircleDot }
}

export function UrgencyBadge({ urgency, label }: { urgency: Urgency; label?: string }) {
  const { t } = useApp()
  const c = config[urgency]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${c.cls}`}
    >
      <c.Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label ?? t(c.labelKey)}
    </span>
  )
}
