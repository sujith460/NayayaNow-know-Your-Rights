import { Lock, Trash2, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'

export function PrivacyDialog({ onClose }: { onClose: () => void }) {
  const { t, privacyMode, setPrivacyMode, clearAllLocalData } = useApp()
  const [cleared, setCleared] = useState(false)

  return (
    <Modal title={t('pmTitle')} onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-4">
          <Lock className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-ink">{t('pmNoAccount')}</p>
            <p className="mt-1 text-sm leading-relaxed text-mist">{t('pmWhatStored')}</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-ink">{t('pmTitle')}</p>
          <p className="mb-3 text-sm leading-relaxed text-mist">{t('pmDesc')}</p>
          <button
            role="switch"
            aria-checked={privacyMode}
            onClick={() => setPrivacyMode(!privacyMode)}
            className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-colors ${
              privacyMode ? 'border-leaf/40 bg-leaf-soft' : 'border-line bg-paper'
            }`}
          >
            <span className="text-sm font-semibold text-ink">
              {privacyMode ? t('pmOn') : t('pmOff')}
            </span>
            <span
              className={`relative h-6 w-11 rounded-full transition-colors ${privacyMode ? 'bg-leaf' : 'bg-mist-2'}`}
              aria-hidden="true"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  privacyMode ? 'translate-x-[22px]' : 'translate-x-0.5'
                }`}
              />
            </span>
          </button>
        </div>

        <div>
          <Button
            variant="danger"
            className="w-full"
            onClick={() => {
              clearAllLocalData()
              setCleared(true)
            }}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            {t('pmClearData')}
          </Button>
          {cleared && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-leaf">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {t('pmCleared')}
            </p>
          )}
        </div>
      </div>
    </Modal>
  )
}
