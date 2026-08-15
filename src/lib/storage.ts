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

export const storage = {
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
    remove('checklist')
    remove('privacy')
    remove('lang')
    remove('states')
  }
}
