import { useState } from 'react'
import { HeartHandshake, ShieldCheck, ExternalLink, RotateCcw, Building2, MapPin, Phone, Mail } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { STATES, getStateContact, type StateInfo } from '../data/registry'
import { HelpRouteCard } from '../components/situation/HelpRouteCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { storage } from '../lib/storage'

const NATIONAL_IDS = ['nalsa', 'helpline-15100', 'state-directory', 'dlsa-directory']

function StateCard({ state }: { state: StateInfo }) {
  const { t } = useApp()
  const contact = getStateContact(state.key)
  const authority =
    state.kind === 'ut'
      ? `${state.name} Legal Services Authority`
      : `${state.name} State Legal Services Authority`

  const telHref = contact?.phone ? `tel:${contact.phone.replace(/[^0-9+]/g, '')}` : undefined

  return (
    <div className="card flex h-full flex-col p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
          <HeartHandshake className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <a
            href={state.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-display text-base font-semibold text-ink hover:text-saffron-deep"
          >
            <span className="min-w-0">{authority}</span>
            <ExternalLink
              className="h-3.5 w-3.5 shrink-0 text-mist transition-colors group-hover:text-saffron-deep"
              aria-hidden="true"
            />
          </a>
          <p className="mt-1 text-sm leading-relaxed text-mist">{t('lhFreeNote')}</p>
        </div>
      </div>

      {/* Contact details from the official NALSA directory */}
      {contact && (
        <dl className="mt-4 flex-1 space-y-2 border-t border-line pt-4">
          <div className="flex items-start gap-2">
            <dt className="sr-only">{t('lhAddress')}</dt>
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
            <dd className="text-xs leading-relaxed text-mist">{contact.address}</dd>
          </div>
          {contact.phone && telHref && (
            <div className="flex items-center gap-2">
              <dt className="sr-only">{t('lhPhone')}</dt>
              <Phone className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
              <dd>
                <a href={telHref} className="text-xs font-semibold text-saffron-deep hover:underline">
                  {contact.phone}
                </a>
              </dd>
            </div>
          )}
          {contact.email && (
            <div className="flex items-center gap-2">
              <dt className="sr-only">{t('lhEmail')}</dt>
              <Mail className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-xs font-semibold text-saffron-deep hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
          )}
        </dl>
      )}

      {/* DLSA contact row */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
        <span className="text-xs text-mist">{t('lhDlsa')}</span>
        <a
          href={state.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-deep hover:underline"
        >
          <Building2 className="h-4 w-4" aria-hidden="true" />
          {t('lhDlsaFind')}
        </a>
      </div>
    </div>
  )
}

export function Help() {
  const { t } = useApp()
  const [selected, setSelected] = useState<string[]>(() => storage.getSelectedStates())

  const toggle = (key: string) => {
    const next = selected.includes(key)
      ? selected.filter((k) => k !== key)
      : [...selected, key]
    setSelected(next)
    storage.setSelectedStates(next)
  }

  const clear = () => {
    setSelected([])
    storage.setSelectedStates([])
  }

  const chosen = STATES.filter((s) => selected.includes(s.key))
  const states = STATES.filter((s) => s.kind === 'state')
  const uts = STATES.filter((s) => s.kind === 'ut')

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
        <HeartHandshake className="h-4 w-4" aria-hidden="true" />
        {t('secHelp')}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{t('lhTitle')}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
        {t('lhIntro')}
      </p>

      {/* National resources — always shown */}
      <div className="mt-10">
        <SectionHeading index="01" title={t('lhNational')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NATIONAL_IDS.map((id) => (
            <HelpRouteCard key={id} routeId={id} />
          ))}
        </div>
      </div>

      {/* State checklist */}
      <div className="mt-14">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <SectionHeading index="02" title={t('lhSelectStates')} />
          {selected.length > 0 && (
            <button
              onClick={clear}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-mist hover:text-ink"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {t('lhClear')}
            </button>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-mist">{t('lhCoveredNote')}</p>

        {/* States */}
        <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-mist">
          {t('lhStates')}
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <CheckItem
              key={s.key}
              label={s.name}
              checked={selected.includes(s.key)}
              hasPortal={s.hasPortal}
              viaDirectory={t('lhViaDirectory')}
              onToggle={() => toggle(s.key)}
            />
          ))}
        </div>

        {/* Union territories */}
        <h3 className="mb-3 mt-8 text-xs font-bold uppercase tracking-[0.18em] text-mist">
          {t('lhUts')}
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {uts.map((s) => (
            <CheckItem
              key={s.key}
              label={s.name}
              checked={selected.includes(s.key)}
              hasPortal={s.hasPortal}
              viaDirectory={t('lhViaDirectory')}
              onToggle={() => toggle(s.key)}
            />
          ))}
        </div>

        {selected.length > 0 && (
          <p className="mt-4 text-sm font-semibold text-ink">
            {selected.length} {t('lhSelectedLabel')}
          </p>
        )}
      </div>

      {/* Selected state cards with SLSA contacts */}
      {chosen.length > 0 && (
        <div className="mt-10">
          <SectionHeading index="03" title={t('lhYourState')} subtitle={t('lhDlsaIntro')} />
          <div className="grid gap-4 sm:grid-cols-2">
            {chosen.map((s) => (
              <StateCard key={s.key} state={s} />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-mist-2">{t('lhContactSource')}</p>
        </div>
      )}

      <div className="mt-10 rounded-2xl border border-leaf/30 bg-leaf-soft p-5">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-leaf">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {t('lhFreeNote')}
        </p>
      </div>
    </div>
  )
}

function CheckItem({
  label,
  checked,
  hasPortal,
  viaDirectory,
  onToggle
}: {
  label: string
  checked: boolean
  hasPortal: boolean
  viaDirectory: string
  onToggle: () => void
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${
        checked ? 'border-leaf/50 bg-leaf-soft' : 'border-line bg-cream hover:border-mist'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="h-5 w-5 shrink-0 accent-leaf"
      />
      <span className="min-w-0 flex-1">
        <span className={`block truncate text-sm font-medium ${checked ? 'text-leaf' : 'text-ink'}`}>
          {label}
        </span>
        <span className="block text-[11px] text-mist">{hasPortal ? 'SLSA' : viaDirectory}</span>
      </span>
    </label>
  )
}
