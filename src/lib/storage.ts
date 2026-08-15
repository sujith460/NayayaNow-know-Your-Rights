import type { Lang } from '../data/types'

/**
 * All user data stays in the browser's localStorage under one namespace.
 * Nothing here is ever sent to a server. Every value is JSON-safe and
 * wrapped in try/catch so storage failures never break the app.
 */

const NS = 'nyayanow:'

export interface SituationMemory {
  /** Unique id so multiple memories can be saved and individually deleted. */
  id: string
  date: string
  time: string
  location: string
  station: string
  officer: string
  what: string
  notes: string
  updatedAt: string
}

/** One event on an incident timeline. */
export interface IncidentEvent {
  id: string
  date: string
  time: string
  title: string
  description: string
  location: string
  notes: string
}

/**
 * "My Incident Record" — incident-level details plus a timeline of events.
 * Everything stays on this device under the nyayanow: namespace.
 */
export interface IncidentRecord {
  id: string
  /** Incident date. */
  date: string
  /** Incident time. */
  time: string
  /** Incident location. */
  location: string
  station: string
  officer: string
  what: string
  notes: string
  events: IncidentEvent[]
  updatedAt: string
}

export interface ChecklistState {
  items: boolean[]
  updatedAt: string
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(NS + key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(NS + key, JSON.stringify(value))
  } catch {
    /* storage unavailable — fail silently, app keeps working */
  }
}

function remove(key: string): void {
  try {
    localStorage.removeItem(NS + key)
  } catch {
    /* noop */
  }
}

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/** Convert a legacy situation-memory entry into an incident record (no events). */
function toIncidentRecord(m: SituationMemory): IncidentRecord {
  return {
    ...m,
    id: m.id || makeId(),
    events: [],
    updatedAt: m.updatedAt || new Date().toISOString()
  }
}

export const storage = {
  /**
   * Incident records ("My Incident Record"). Migrates the legacy single-entry
   * memory storage into the timeline format so nothing already saved is lost.
   */
  getIncidents(): IncidentRecord[] {
    const list = read<IncidentRecord[]>('incidents', [])
    if (list.length > 0) return list

    // Migrate legacy entries (if any) exactly once.
    const legacy = read<SituationMemory | null>('memory', null)
    const legacyList = read<SituationMemory[]>('memories', [])
    const migrated: IncidentRecord[] = []
    if (legacy) migrated.push(toIncidentRecord(legacy))
    for (const m of legacyList) migrated.push(toIncidentRecord(m))
    if (migrated.length > 0) {
      write('incidents', migrated)
      remove('memory')
      remove('memories')
      return migrated
    }
    return []
  },
  saveIncident(r: IncidentRecord): void {
    write('incidents', [
      { ...r, id: r.id || makeId(), updatedAt: new Date().toISOString() },
      ...this.getIncidents()
    ])
  },
  deleteIncident(id: string): void {
    write('incidents', this.getIncidents().filter((r) => r.id !== id))
  },
  clearIncidents(): void {
    remove('incidents')
  },

  getMemories(): SituationMemory[] {
    // Migrate the legacy single-memory entry (if any) into the list.
    const legacy = read<SituationMemory | null>('memory', null)
    const list = read<SituationMemory[]>('memories', [])
    if (legacy && list.length === 0) {
      const migrated: SituationMemory = { ...legacy, id: legacy.id || makeId() }
      write('memories', [migrated])
      remove('memory')
      return [migrated]
    }
    return list
  },
  saveMemory(m: SituationMemory): void {
    write('memories', [{ ...m, id: m.id || makeId(), updatedAt: new Date().toISOString() }, ...this.getMemories()])
  },
  deleteMemory(id: string): void {
    write('memories', this.getMemories().filter((m) => m.id !== id))
  },
  clearMemory(): void {
    remove('memories')
  },

  getChecklist(): ChecklistState | null {
    return read<ChecklistState | null>('checklist', null)
  },
  saveChecklist(items: boolean[]): void {
    write('checklist', { items, updatedAt: new Date().toISOString() })
  },
  clearChecklist(): void {
    remove('checklist')
  },

  getPrivacyMode(): boolean {
    return read<boolean>('privacy', false)
  },
  setPrivacyMode(on: boolean): void {
    write('privacy', on)
  },

  getLang(): Lang | null {
    const v = read<Lang | null>('lang', null)
    return v === 'en' || v === 'hi' || v === 'te' ? v : null
  },
  setLang(lang: Lang): void {
    write('lang', lang)
  },

  getSelectedStates(): string[] {
    return read<string[]>('states', [])
  },
  setSelectedStates(keys: string[]): void {
    write('states', keys)
  },

  getDisclaimerSeen(): boolean {
    return read<boolean>('disclaimerSeen', false)
  },
  setDisclaimerSeen(): void {
    write('disclaimerSeen', true)
  },

  clearAll(): void {
    remove('memory')
    remove('memories')
    remove('incidents')
    remove('checklist')
    remove('privacy')
    remove('lang')
    remove('states')
  }
}
