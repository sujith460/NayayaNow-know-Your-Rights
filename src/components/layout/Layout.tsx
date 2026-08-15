import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useApp } from '../../context/AppContext'
import { SourceDialog } from '../dialogs/SourceDialog'
import { DisclaimerDialog } from '../dialogs/DisclaimerDialog'
import { PrivacyDialog } from '../dialogs/PrivacyDialog'
import { SituationMemoryDialog } from '../features/SituationMemoryDialog'
import { ComplaintChecklistDialog } from '../features/ComplaintChecklistDialog'
import { EmergencyOverlay } from '../features/EmergencyOverlay'
import { OfflineIndicator } from '../features/OfflineIndicator'

export function Layout() {
  const { t, dialog, closeDialog, emergencyOpen, openEmergency } = useApp()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {dialog === 'sources' && <SourceDialog onClose={closeDialog} />}
      {dialog === 'disclaimer' && <DisclaimerDialog onClose={closeDialog} />}
      {dialog === 'privacy' && <PrivacyDialog onClose={closeDialog} />}
      {dialog === 'memory' && <SituationMemoryDialog onClose={closeDialog} />}
      {dialog === 'checklist' && <ComplaintChecklistDialog onClose={closeDialog} />}
      {emergencyOpen && <EmergencyOverlay />}

      {/* Live offline notice — shows only when the connection drops */}
      <OfflineIndicator />

      {/* Persistent but unobtrusive emergency button (mobile) */}
      {!emergencyOpen && (
        <button
          onClick={openEmergency}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-1.5 rounded-full bg-danger px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgb(179_38_30/0.7)] transition-all active:scale-95 lg:hidden"
          aria-label={t('emOpen')}
        >
          <Zap className="h-4 w-4" aria-hidden="true" />
          {t('emOpen')}
        </button>
      )}
    </div>
  )
}
