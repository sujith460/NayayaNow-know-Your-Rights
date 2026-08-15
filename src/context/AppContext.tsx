import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, L10n } from '../data/types'
import { UI, type UIKey } from '../data/ui'
import { storage } from '../lib/storage'

export type DialogName = 'sources' | 'disclaimer' | 'privacy' | 'memory' | 'checklist' | null

interface AppContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** UI chrome string for the current language. */
  t: (key: UIKey) => string
  /** Resolve a localized content field for the current language. */
  tr: (l10n: L10n) => string
  privacyMode: boolean
  setPrivacyMode: (on: boolean) => void
  clearAllLocalData: () => void
  dialog: DialogName
  openDialog: (name: Exclude<DialogName, null>) => void
  closeDialog: () => void
  emergencyOpen: boolean
  openEmergency: () => void
  closeEmergency: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => storage.getLang() ?? 'en')
  const [privacyMode, setPrivacyModeState] = useState<boolean>(() => storage.getPrivacyMode())
  const [dialog, setDialog] = useState<DialogName>(null)
  const [emergencyOpen, setEmergencyOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    storage.setLang(next)
  }, [])

  const setPrivacyMode = useCallback((on: boolean) => {
    setPrivacyModeState(on)
    storage.setPrivacyMode(on)
  }, [])

  const t = useCallback(
    (key: UIKey) => {
      const entry = UI[key]
      if (typeof entry === 'string') return entry
      const value = entry[lang]
      return value && value.trim().length > 0 ? value : entry.en
    },
    [lang]
  )

  const tr = useCallback((l10n: L10n) => {
    const value = l10n[lang]
    return value && value.trim().length > 0 ? value : l10n.en
  }, [lang])

  const clearAllLocalData = useCallback(() => {
    storage.clearAll()
    setPrivacyModeState(false)
    setLangState('en')
  }, [])

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      setLang,
      t,
      tr,
      privacyMode,
      setPrivacyMode,
      clearAllLocalData,
      dialog,
      openDialog: (name) => setDialog(name),
      closeDialog: () => setDialog(null),
      emergencyOpen,
      openEmergency: () => setEmergencyOpen(true),
      closeEmergency: () => setEmergencyOpen(false)
    }),
    [lang, setLang, t, tr, privacyMode, setPrivacyMode, clearAllLocalData, dialog, emergencyOpen]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
