import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Zap, Phone } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useApp } from '../../context/AppContext'
import { SourceDialog } from '../dialogs/SourceDialog'
import { DisclaimerDialog } from '../dialogs/DisclaimerDialog'
import { PrivacyDialog } from '../dialogs/PrivacyDialog'
import { IncidentRecordDialog } from '../features/IncidentRecordDialog'
import { ComplaintChecklistDialog } from '../features/ComplaintChecklistDialog'
import { EmergencyOverlay } from '../features/EmergencyOverlay'
import { HelpDialog } from '../features/HelpDialog'
import { OfflineIndicator } from '../features/OfflineIndicator'

export function Layout() {
  const { t, dialog, closeDialog, emergencyOpen, openEmergency } = useApp()
  const { pathname } = useLocation()
  const [helpOpen, setHelpOpen] = useState(false)

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
      {dialog === 'memory' && <IncidentRecordDialog onClose={closeDialog} />}
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

      {/* Floating Help — every official helpline, visible on every page */}
      {helpOpen && <HelpDialog onClose={() => setHelpOpen(false)} />}
      <button
        onClick={() => setHelpOpen(true)}
        aria-label={t('hpOpen')}
        className="fixed bottom-24 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-[0_12px_28px_-8px_rgb(11_27_47/0.6)] transition-all hover:bg-ink-2 active:scale-95 lg:bottom-8 lg:right-8"
      >
        <Phone className="h-4 w-4 text-saffron" aria-hidden="true" />
        {t('hpOpen')}
      </button>
    </div>
  )
}
