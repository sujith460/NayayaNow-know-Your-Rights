import { FolderOpen } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { ActionItem } from '../../data/types'

/** \"What evidence & documents to keep\" — records that protect the person later. */
export function EvidenceList({ items }: { items: ActionItem[] }) {
  const { t, tr } = useApp()
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3 rounded-2xl border border-line bg-cream p-4">
          <FolderOpen className="mt-0.5 h-5 w-5 shrink-0 text-saffron-deep" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium leading-relaxed text-ink">{tr(item.text)}</p>
            {item.why && <p className="mt-1 text-xs leading-relaxed text-mist">{t('why')}: {tr(item.why)}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}
