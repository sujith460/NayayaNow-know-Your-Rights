import { Phone, ShieldAlert, ArrowLeft, Scale } from 'lucide-react'
import { useApp } from '../../context/AppContext'

interface Helpline {
  label: string
  num: string
  note: string
}

/**
 * Emergency mode: a deliberately simplified full-screen view.
 * NyayaNow is NOT an emergency service — it only shows official numbers.
 */
export function EmergencyOverlay() {
  const { t, closeEmergency } = useApp()

  const helplines: Helpline[] = [
    { label: t('emAllInOne'), num: t('emAllInOneNum'), note: t('emSafety') },
    { label: t('emPolice'), num: t('emPoliceNum'), note: '—' },
    { label: t('emFire'), num: t('emFireNum'), note: '—' },
    { label: t('emAmbulance'), num: t('emAmbulanceNum'), note: '—' },
    { label: t('emWomen'), num: t('emWomenNum'), note: '—' },
    { label: t('emChild'), num: t('emChildNum'), note: '—' },
    { label: t('emCyber'), num: t('emCyberNum'), note: '—' },
    { label: t('emSupport'), num: t('emSupportNum'), note: '—' },
    { label: t('emBribe'), num: t('emBribeNum'), note: '—' },
    { label: t('emHumanRights'), num: t('emHumanRightsNum'), note: '—' }
  ]

  return (
    <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-danger text-white animate-fade">
      <div className="mx-auto w-full max-w-lg flex-1 px-5 py-8">
        <button
          onClick={closeEmergency}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('emReturn')}
        </button>

        <header className="mt-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/80">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            {t('emTitle')}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white">
            {t('emSafety')}
          </h1>
        </header>

        <div className="mt-8 grid gap-3">
          {helplines.map((h) => (
            <a
              key={h.label + h.num}
              href={`tel:${h.num.replace(/\s/g, '')}`}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 transition-colors hover:bg-white/15"
            >
              <div>
                <p className="text-base font-semibold text-white">{h.label}</p>
                {h.note !== '—' && <p className="mt-0.5 text-xs text-white/70">{h.note}</p>}
              </div>
              <span className="flex items-center gap-2 font-display text-2xl font-bold text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {h.num}
              </span>
            </a>
          ))}
        </div>

        <a
          href={`tel:${t('emLegalNum').replace(/\s/g, '')}`}
          className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 transition-colors hover:bg-white/15"
        >
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Scale className="h-5 w-5" aria-hidden="true" />
              {t('emLegal')}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">{t('emLegalNote')}</p>
          </div>
          <span className="flex items-center gap-2 font-display text-2xl font-bold text-white">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {t('emLegalNum')}
          </span>
        </a>

        <p className="mt-8 text-center text-xs leading-relaxed text-white/70">{t('emNote')}</p>
      </div>
    </div>
  )
}
