import { useState } from 'react'
import { Lock, Save, Trash2, Download, Plus, X, FileDown } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'
import { storage, type IncidentRecord, type IncidentEvent } from '../../lib/storage'
import { buildIncidentRecordText, downloadTextFile, formatDate } from '../../lib/exportRecord'

const EMPTY_EVENT: IncidentEvent = {
  id: '',
  date: '',
  time: '',
  title: '',
  description: '',
  location: '',
  notes: ''
}

const EMPTY: IncidentRecord = {
  id: '',
  date: '',
  time: '',
  location: '',
  station: '',
  officer: '',
  what: '',
  notes: '',
  events: [],
  updatedAt: ''
}

function makeEventId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

type ExportState = { open: boolean; done: boolean }

/**
 * "My Incident Record" — a private, on-device record of an incident with a
 * timeline of events. Everything stays in localStorage; export creates a local
 * text file after a privacy warning. Never uploaded, never sent anywhere.
 */
export function IncidentRecordDialog({ onClose }: { onClose: () => void }) {
  const { t } = useApp()
  const [record, setRecord] = useState<IncidentRecord>(EMPTY)
  const [records, setRecords] = useState<IncidentRecord[]>(() => storage.getIncidents())
  const [saved, setSaved] = useState(false)
  const [eventDraft, setEventDraft] = useState<IncidentEvent | null>(null)
  const [exportState, setExportState] = useState<ExportState>({ open: false, done: false })
  const [exportTarget, setExportTarget] = useState<IncidentRecord | null>(null)

  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

  const fields: { key: keyof IncidentRecord; label: string; textarea?: boolean }[] = [
    { key: 'date', label: t('memFieldDate') },
    { key: 'time', label: t('memFieldTime') },
    { key: 'location', label: t('memFieldLocation') },
    { key: 'station', label: t('memFieldStation') },
    { key: 'officer', label: t('memFieldOfficer') },
    { key: 'what', label: t('memFieldWhat'), textarea: true },
    { key: 'notes', label: t('memFieldNotes'), textarea: true }
  ]

  const set = (key: keyof IncidentRecord, value: string) => {
    setRecord((r) => ({ ...r, [key]: value }))
    setSaved(false)
  }

  const save = () => {
    storage.saveIncident(record)
    setRecords(storage.getIncidents())
    setRecord(EMPTY)
    setSaved(true)
    setExportState({ open: false, done: false })
  }

  const remove = (id: string) => {
    storage.deleteIncident(id)
    setRecords(storage.getIncidents())
  }

  const clearAll = () => {
    storage.clearIncidents()
    setRecords([])
    setRecord(EMPTY)
    setSaved(false)
    setExportState({ open: false, done: false })
  }

  /** Export a record after showing the privacy warning. */
  const confirmExport = (r: IncidentRecord) => {
    setExportTarget(r)
    setExportState({ open: true, done: false })
  }

  const doExport = () => {
    if (!exportTarget) return
    const text = buildIncidentRecordText(exportTarget)
    const stamp = exportTarget.date || new Date().toISOString().slice(0, 10)
    downloadTextFile(`nyayanow-incident-record-${stamp}.txt`, text)
    setExportState({ open: false, done: true })
  }

  const saveEvent = () => {
    if (!eventDraft) return
    setRecord((r) => ({
      ...r,
      events: [...r.events, { ...eventDraft, id: eventDraft.id || makeEventId() }]
    }))
    setEventDraft(null)
    setSaved(false)
  }

  const removeEvent = (id: string) => {
    setRecord((r) => ({ ...r, events: r.events.filter((e) => e.id !== id) }))
    setSaved(false)
  }

  return (
    <Modal title={t('memTitle')} onClose={onClose} wide>
      <p className="mb-4 flex items-start gap-2 rounded-xl bg-leaf-soft p-3 text-sm text-leaf">
        <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {t('memSavedOnly')}
      </p>
      <p className="mb-5 text-sm leading-relaxed text-mist">{t('memIntro')}</p>

      {/* Incident details */}
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.key} className={f.textarea ? 'sm:col-span-2' : ''}>
            <span className="mb-1 block text-xs font-semibold text-mist">{f.label}</span>
            {f.textarea ? (
              <textarea
                rows={2}
                value={record[f.key] as string}
                onChange={(e) => set(f.key, e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            ) : (
              <input
                type={f.key === 'date' ? 'date' : f.key === 'time' ? 'time' : 'text'}
                value={record[f.key] as string}
                onChange={(e) => set(f.key, e.target.value)}
                max={f.key === 'date' ? today : undefined}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            )}
          </label>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-6 rounded-2xl border border-line bg-paper p-4">
        <h3 className="font-display text-base font-semibold text-ink">{t('irTimeline')}</h3>
        <p className="mt-1 text-xs leading-relaxed text-mist">{t('irTimelineHint')}</p>

        {record.events.length > 0 && (
          <ol className="mt-4 space-y-3">
            {record.events.map((ev, i) => (
              <li key={ev.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-semibold text-paper">
                    {i + 1}
                  </span>
                  {i < record.events.length - 1 && (
                    <span className="my-0.5 h-full w-px bg-line" aria-hidden="true" />
                  )}
                </div>
                <div className="min-w-0 flex-1 rounded-xl bg-cream p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      {ev.title && <p className="text-sm font-semibold text-ink">{ev.title}</p>}
                      <p className="text-xs text-mist">
                        {[ev.date ? formatDate(ev.date) : '', ev.time].filter(Boolean).join(' · ') ||
                          t('memFieldDate')}
                      </p>
                    </div>
                    <button
                      onClick={() => removeEvent(ev.id)}
                      aria-label={t('memDelete')}
                      className="rounded-full p-1.5 text-mist transition-colors hover:bg-danger-soft hover:text-danger"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  {ev.description && (
                    <p className="mt-1 text-sm leading-relaxed text-ink/80">{ev.description}</p>
                  )}
                  {(ev.location || ev.notes) && (
                    <p className="mt-1 text-xs leading-relaxed text-mist">
                      {[ev.location ? `${t('memFieldLocation')}: ${ev.location}` : '', ev.notes]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}

        {eventDraft ? (
          <div className="mt-4 grid gap-3 rounded-xl border border-line bg-cream p-4 sm:grid-cols-2 animate-pop">
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-mist">{t('irEventTitle')}</span>
              <input
                value={eventDraft.title}
                onChange={(e) => setEventDraft({ ...eventDraft, title: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <label>
              <span className="mb-1 block text-xs font-semibold text-mist">{t('memFieldDate')}</span>
              <input
                type="date"
                max={today}
                value={eventDraft.date}
                onChange={(e) => setEventDraft({ ...eventDraft, date: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <label>
              <span className="mb-1 block text-xs font-semibold text-mist">{t('memFieldTime')}</span>
              <input
                type="time"
                value={eventDraft.time}
                onChange={(e) => setEventDraft({ ...eventDraft, time: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-mist">{t('irEventDesc')}</span>
              <textarea
                rows={2}
                value={eventDraft.description}
                onChange={(e) => setEventDraft({ ...eventDraft, description: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <label>
              <span className="mb-1 block text-xs font-semibold text-mist">{t('memFieldLocation')}</span>
              <input
                value={eventDraft.location}
                onChange={(e) => setEventDraft({ ...eventDraft, location: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <label>
              <span className="mb-1 block text-xs font-semibold text-mist">{t('memFieldNotes')}</span>
              <input
                value={eventDraft.notes}
                onChange={(e) => setEventDraft({ ...eventDraft, notes: e.target.value })}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2 text-sm text-ink focus:border-saffron"
              />
            </label>
            <div className="flex gap-2 sm:col-span-2">
              <Button className="flex-1" onClick={saveEvent}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                {t('irSaveEvent')}
              </Button>
              <Button variant="ghost" className="flex-1" onClick={() => setEventDraft(null)}>
                {t('irCancel')}
              </Button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setEventDraft(EMPTY_EVENT)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-dashed border-mist-2 px-4 py-2 text-sm font-semibold text-mist transition-colors hover:border-saffron hover:text-saffron-deep"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            {t('irAddEvent')}
          </button>
        )}
      </div>

      {/* Export privacy warning */}
      {exportState.open && (
        <div className="mt-5 rounded-2xl border border-saffron/30 bg-saffron-soft p-4 animate-pop">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-saffron-deep">
            <FileDown className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {t('irExportWarning')}
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button variant="ghost" className="flex-1" onClick={() => setExportState({ open: false, done: false })}>
              {t('irCancel')}
            </Button>
            <Button className="flex-1" onClick={doExport}>
              <Download className="h-4 w-4" aria-hidden="true" />
              {t('irExportConfirm')}
            </Button>
          </div>
        </div>
      )}
      {exportState.done && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-leaf-soft p-3 text-sm font-medium text-leaf">
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          {t('irExported')}
        </p>
      )}

      {/* Actions */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1" onClick={save}>
          <Save className="h-4 w-4" aria-hidden="true" />
          {t('memSave')}
        </Button>
        <Button variant="ghost" className="flex-1" onClick={() => confirmExport(record)}>
          <Download className="h-4 w-4" aria-hidden="true" />
          {t('irExport')}
        </Button>
        <Button variant="danger" className="flex-1" onClick={clearAll}>
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          {t('memClear')}
        </Button>
      </div>

      {saved && <p className="mt-3 text-center text-sm font-medium text-leaf">{t('memSaved')}</p>}

      {/* Saved records */}
      <div className="mt-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-mist">
          {t('memSavedMemories')} ({records.length})
        </h3>
        {records.length === 0 ? (
          <p className="mt-3 text-sm text-mist">{t('memEmpty')}</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {records.map((m) => (
              <li key={m.id} className="rounded-2xl border border-line bg-paper p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">
                    {m.date ? formatDate(m.date) : t('memFieldDate')}
                    {m.time ? ` · ${m.time}` : ''}
                    {m.events.length > 0 && (
                      <span className="ml-2 rounded-full bg-saffron-soft px-2 py-0.5 text-[11px] font-medium text-saffron-deep">
                        {m.events.length} {t('irEventCount')}
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => confirmExport(m)}
                      aria-label={t('irExport')}
                      className="rounded-full p-1.5 text-mist transition-colors hover:bg-leaf-soft hover:text-leaf"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => remove(m.id)}
                      aria-label={t('memDelete')}
                      className="rounded-full p-1.5 text-mist transition-colors hover:bg-danger-soft hover:text-danger"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
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
                {m.events.length > 0 && (
                  <p className="mt-2 border-t border-line pt-2 text-xs leading-relaxed text-mist">
                    {m.events
                      .map((e) => e.title || e.description)
                      .filter(Boolean)
                      .join(' → ')}
                  </p>
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
