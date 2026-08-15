import type { UIKey } from './ui'

export interface Helpline {
  label: string
  num: string
  note: string
}

/**
 * Official emergency/help numbers (single source of truth for the Emergency
 * overlay and the offline Emergency Rights Pack). Numbers come from the app's
 * verified UI strings — never invent helpline numbers here.
 */
export function getHelplines(t: (key: UIKey) => string): Helpline[] {
  return [
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
}
