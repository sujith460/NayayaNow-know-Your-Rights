import { CheckCircle2, XCircle } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { ActionItem } from '../../data/types'

export function DoList({ items }: { items: ActionItem[] }) {
  const { t, tr } = useApp()
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium leading-relaxed text-ink">{tr(item.text)}</p>
            {item.why && <p className="mt-1 text-xs leading-relaxed text-mist">{t('why')}: {tr(item.why)}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function AvoidList({ items }: { items: ActionItem[] }) {
  const { t, tr } = useApp()
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-4">
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-danger" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium leading-relaxed text-ink">{tr(item.text)}</p>
            {item.why && <p className="mt-1 text-xs leading-relaxed text-mist">{t('why')}: {tr(item.why)}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}
