import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useApp } from '../../context/AppContext'

export function DisclaimerDialog({ onClose }: { onClose: () => void }) {
  const { t } = useApp()
  return (
    <Modal title={t('discTitle')} onClose={onClose}>
      <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
        {t('discBody')
          .split('\n\n')
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button variant="secondary" onClick={onClose}>
          {t('discAck')}
        </Button>
      </div>
    </Modal>
  )
}
