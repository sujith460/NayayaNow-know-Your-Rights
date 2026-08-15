import { useState } from 'react'
import { Lock, Save, Trash2 } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'
import { storage, type SituationMemory } from '../../lib/storage'

const EMPTY: SituationMemory = {
  id: '',
  date: '',
  time: '',
  location: '',
  station: '',
  officer: '',
  what: '',
  notes: '',
  updatedAt: ''
}

/** YYYY-MM-DD (input format) → DD-MM-YYYY (display format). */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-')
  return y && m && d ? `${d}-${m}-${y}` : iso
}

export function SituationMemoryDialog({ onClose }: { onClose: () => void }) {
  const { t } = useApp()
  const [memory, setMemory] = useState<SituationMemory>(EMPTY)
  const [memories, setMemories] = useState<SituationMemory[]>(() => storage.getMemories())
  const [saved, setSaved] = useState(false)

  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

  const fields: { key: keyof SituationMemory; label: string; textarea?: boolean }[] = [
    { key: 'date', label: t('memFieldDate') },
    { key: 'time', label: t('memFieldTime') },
    { key: 'location', label: t('memFieldLocation') },
    { key: 'station', label: t('memFieldStation') },
    { key: 'officer', label: t('memFieldOfficer') },
    { key: 'what', label: t('memFieldWhat'), textarea: true },
    { key: 'notes', label: t('memFieldNotes'), textarea: true }
  ]

  const set = (key: keyof SituationMemory, value: string) => {
    setMemory((m) => ({ ...m, [key]: value }))
    setSaved(false)
  }

  const save = () => {
    storage.saveMemory(memory)
    setMemories(storage.getMemories())
    setMemory(EMPTY)
    setSaved(true)
  }

  const remove = (id: string) => {
    storage.deleteMemory(id)
    setMemories(storage.getMemories())
  }

  const clearAll = () => {
    storage.clearMemory()
    setMemories([])
    setMemory(EMPTY)
    setSaved(false)
  }

  return (
    <Modal title={t('memTitle')} onClose={onClose}>
      <p className="mb-4 flex items-start gap-2 rounded-xl bg-leaf-soft p-3 text-sm text-leaf">
        <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {t('memSavedOnly')}
      </p>
      <p className="mb-5 text-sm leading-relaxed text-mist">{t('memIntro')}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.key} className={f.textarea ? 'sm:col-span-2' : ''}>
            <span className="mb-1 block text-xs font-semibold text-mist">{f.label}</span>
            {f.textarea ? (
              <textarea
                rows={3}
                value={memory[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            ) : (
              <input
                type={f.key === 'date' ? 'date' : f.key === 'time' ? 'time' : 'text'}
                value={memory[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                max={f.key === 'date' ? today : undefined}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            )}
          </label>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1" onClick={save}>
          <Save className="h-4 w-4" aria-hidden="true" />
          {t('memSave')}
        </Button>
        <Button variant="danger" className="flex-1" onClick={clearAll}>
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          {t('memClear')}
        </Button>
      </div>

      {saved && <p className="mt-3 text-center text-sm font-medium text-leaf">{t('memSaved')}</p>}

      {/* Saved memories — each save becomes a card; save as many as you need */}
      <div className="mt-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-mist">
          {t('memSavedMemories')} ({memories.length})
        </h3>
        {memories.length === 0 ? (
          <p className="mt-3 text-sm text-mist">{t('memEmpty')}</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {memories.map((m) => (
              <li key={m.id} className="rounded-2xl border border-line bg-paper p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">
                    {m.date ? formatDate(m.date) : t('memFieldDate')}
                    {m.time ? ` · ${m.time}` : ''}
                  </p>
                  <button
                    onClick={() => remove(m.id)}
                    aria-label={t('memDelete')}
                    className="rounded-full p-1.5 text-mist transition-colors hover:bg-danger-soft hover:text-danger"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                {(m.location || m.station) && (
                  <p className="mt-1 text-xs text-mist">
                    {[m.location, m.station].filter(Boolean).join(' · ')}
                  </p>
                )}
                {m.officer && <p className="mt-1 text-xs text-mist">{m.officer}</p>}
                {m.what && (
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink">{m.what}</p>
                )}
                {m.notes && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-mist">{m.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-5 text-center text-xs text-mist">{t('memNoAccount')}</p>
    </Modal>
  )
}
