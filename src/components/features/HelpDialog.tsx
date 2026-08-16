import {
  Phone,
  Siren,
  Shield,
  Flame,
  Ambulance,
  HeartHandshake,
  Baby,
  MonitorSmartphone,
  Heart,
  ShieldAlert,
  Scale,
  LifeBuoy
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Modal } from '../ui/Modal'
import { useApp } from '../../context/AppContext'
import { getHelplines } from '../../data/helplines'

interface HelplineIcon {
  Icon: LucideIcon
  tile: string
}

/** Icon + tinted tile per official number (keyed by number — never invented). */
const ICON_MAP: Record<string, HelplineIcon> = {
  '112': { Icon: Siren, tile: 'bg-danger-soft text-danger' },
  '100': { Icon: Shield, tile: 'bg-paper-2 text-ink' },
  '101': { Icon: Flame, tile: 'bg-saffron-soft text-saffron-deep' },
  '102': { Icon: Ambulance, tile: 'bg-leaf-soft text-leaf' },
  '181': { Icon: HeartHandshake, tile: 'bg-leaf-soft text-leaf' },
  '1098': { Icon: Baby, tile: 'bg-saffron-soft text-saffron-deep' },
  '1930': { Icon: MonitorSmartphone, tile: 'bg-paper-2 text-ink' },
  '1091': { Icon: Heart, tile: 'bg-danger-soft text-danger' },
  '1064': { Icon: ShieldAlert, tile: 'bg-saffron-soft text-saffron-deep' },
  '14433': { Icon: Scale, tile: 'bg-ink text-saffron' }
}

const FALLBACK: HelplineIcon = { Icon: Phone, tile: 'bg-paper-2 text-mist' }

/**
 * "Need help?" — every official helpline in one place. Numbers come only from
 * the app's verified single source (helplines.ts / ui.ts); nothing is invented.
 * Each row is a tap-to-call `tel:` link.
 */
export function HelpDialog({ onClose }: { onClose: () => void }) {
  const { t } = useApp()
  const helplines = getHelplines(t)

  return (
    <Modal title={t('hpTitle')} onClose={onClose}>
      <p className="mb-5 text-sm leading-relaxed text-mist">{t('hpSubtitle')}</p>

      <div className="grid gap-3">
        {helplines.map((h) => {
          const { Icon, tile } = ICON_MAP[h.num] ?? FALLBACK
          return (
            <div
              key={h.label + h.num}
              className="flex items-center gap-3 rounded-2xl border border-line bg-cream p-3"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile}`}
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold text-ink">
                  {h.label} · {h.num}
                </p>
                {h.note !== '—' && <p className="mt-0.5 text-xs leading-relaxed text-mist">{h.note}</p>}
              </div>
              <a
                href={`tel:${h.num.replace(/\s/g, '')}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-leaf-soft px-4 py-2 text-sm font-semibold text-leaf transition-colors hover:bg-leaf hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {t('clCall')}
              </a>
            </div>
          )
        })}
      </div>

      {/* Free legal aid line — NALSA 15100 */}
      <a
        href={`tel:${t('emLegalNum').replace(/\s/g, '')}`}
        className="mt-3 flex items-center gap-3 rounded-2xl bg-ink p-4 text-paper texture-ink"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper/10 text-saffron"
          aria-hidden="true"
        >
          <LifeBuoy className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-paper">
            {t('emLegal')} · {t('emLegalNum')}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-paper/75">{t('emLegalNote')}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {t('clCall')}
        </span>
      </a>

      <p className="mt-5 flex items-start gap-2 rounded-xl bg-danger-soft p-3 text-xs leading-relaxed text-danger">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        {t('notEmergency')}
      </p>
    </Modal>
  )
}
