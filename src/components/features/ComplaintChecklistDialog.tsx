import { useState } from 'react'
import { ClipboardCheck, RotateCcw, FileLock2 } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'
import { storage } from '../../lib/storage'

export function ComplaintChecklistDialog({ onClose }: { onClose: () => void }) {
  const { t } = useApp()
  const initial = storage.getChecklist()?.items ?? new Array(9).fill(false)
  const [items, setItems] = useState<boolean[]>(initial)
  const done = items.filter(Boolean).length

  const labels = [
    t('clDate'),
    t('clTime'),
    t('clLocation'),
    t('clStation'),
    t('clOfficer'),
    t('clWitnesses'),
    t('clDocs'),
    t('clMedical'),
    t('clEvidence')
  ]

  const toggle = (i: number) => {
    const next = items.map((v, idx) => (idx === i ? !v : v))
    setItems(next)
    storage.saveChecklist(next)
  }

  return (
    <Modal title={t('clTitle')} onClose={onClose}>
      <p className="mb-4 flex items-start gap-2 rounded-xl bg-leaf-soft p-3 text-sm text-leaf">
        <FileLock2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {t('clIntro')}
      </p>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-paper-2">
        <div
          className="h-full rounded-full bg-leaf transition-all duration-500"
          style={{ width: `${(done / labels.length) * 100}%` }}
        />
      </div>
      <p className="mb-4 text-xs font-medium text-mist">
        {done} / {labels.length} {t('clProgress')}
      </p>

      <ul className="space-y-2">
        {labels.map((label, i) => (
          <li key={i}>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${
                items[i] ? 'border-leaf/40 bg-leaf-soft' : 'border-line bg-paper'
              }`}
            >
              <input
                type="checkbox"
                checked={items[i]}
                onChange={() => toggle(i)}
                className="h-5 w-5 shrink-0 accent-leaf"
              />
              <span className={`text-sm ${items[i] ? 'font-medium text-leaf' : 'text-ink'}`}>
                {label}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col items-center gap-2">
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => {
            setItems(new Array(9).fill(false))
            storage.clearChecklist()
          }}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {t('clReset')}
        </Button>
        <p className="flex items-center gap-1.5 text-xs text-mist">
          <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
          {t('clNoUpload')}
        </p>
      </div>
    </Modal>
  )
}
