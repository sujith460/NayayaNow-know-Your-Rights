import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Zap, Scale } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { LanguageSwitcher } from '../features/LanguageSwitcher'

export function Navbar() {
  const { t, openDialog, openEmergency } = useApp()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('navSituations'), end: true },
    { to: '/navigator', label: t('navNavigator') },
    { to: '/complaints', label: t('navComplaints') },
    { to: '/help', label: t('navHelp') },
    { to: '/sources', label: t('navSources') }
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-saffron">
            <Scale className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {t('appName')}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav-link text-sm font-semibold text-ink/80 hover:text-ink"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <button
            onClick={() => openDialog('privacy')}
            className="text-xs font-semibold text-mist hover:text-ink"
          >
            🔒 {t('navPrivacyMode')}
          </button>
          <button
            onClick={openEmergency}
            className="inline-flex items-center gap-1.5 rounded-full bg-danger px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgb(179_38_30/0.6)] transition-all hover:bg-danger/90"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            {t('emOpen')}
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t('close') : 'Menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper px-4 pb-6 pt-3 lg:hidden animate-fade">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-semibold text-ink hover:bg-paper-2"
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                openDialog('privacy')
              }}
              className="rounded-xl px-3 py-3 text-left text-[15px] font-semibold text-ink hover:bg-paper-2"
            >
              🔒 {t('navPrivacyMode')}
            </button>
            <button
              onClick={() => {
                setOpen(false)
                openEmergency()
              }}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-danger px-4 py-3 text-sm font-semibold text-white"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              {t('emOpen')}
            </button>
          </nav>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
