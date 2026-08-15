import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import { useApp } from '../../context/AppContext'

/**
 * Live connectivity indicator (PWA): when the browser goes offline, a small
 * banner appears to say the content shown is the cached version and may not
 * be current. Hides automatically when the connection returns.
 */
export function OfflineIndicator() {
  const { t } = useApp()
  const [offline, setOffline] = useState(
    () => typeof navigator !== 'undefined' && !navigator.onLine
  )

  useEffect(() => {
    const goOffline = () => setOffline(true)
    const goOnline = () => setOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  if (!offline) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-5 z-40 max-w-[calc(100vw-5rem)] sm:bottom-6 sm:left-6"
    >
      <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-paper shadow-[0_12px_28px_-8px_rgb(11_27_47/0.6)] ring-1 ring-white/15">
        <WifiOff className="h-3.5 w-3.5 shrink-0 text-saffron" aria-hidden="true" />
        <span className="truncate">
          {t('offlineTitle')}
          <span className="text-paper/70"> · {t('offlineNote')}</span>
        </span>
      </div>
    </div>
  )
}
