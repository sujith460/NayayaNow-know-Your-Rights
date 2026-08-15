import { Link } from 'react-router-dom'
import { Code2, Scale, ArrowRight, WifiOff, Zap, LifeBuoy } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { Button } from '../ui/Button'

export function Footer() {
  const { t, openDialog, openEmergency } = useApp()

  const explore = [
    { to: '/', label: t('footerSituations') },
    { to: '/navigator', label: t('footerRightsNavigator') },
    { to: '/complaints', label: t('footerComplaintNavigator') },
    { to: '/help', label: t('footerLegalHelp') }
  ]

  const helpLinks = [
    { to: '/emergency', label: t('footerEmergencyHelp') },
    { to: '/help', label: t('footerLegalAid') },
    { to: '/sources', label: t('footerOfficialResources') },
    { to: '/legal-terms', label: t('ltTitle') }
  ]

  return (
    <footer className="mt-20">
      {/* Final citizen-first CTA */}
      <section className="bg-ink py-16 text-center texture-ink sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            {t('fctaTitle')}
          </h2>
          <h2 className="font-display text-3xl font-bold text-saffron sm:text-4xl">
            {t('fctaTitle2')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-paper/70">
            {t('fctaSub')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/">
              <Button variant="primary" className="w-full px-8 py-4 text-base sm:w-auto">
                {t('fctaButton')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="ink" className="w-full px-8 py-4 text-base sm:w-auto">
                <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                {t('footerGetHelp')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer proper */}
      <div className="bg-ink-2 text-paper/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 border-b border-white/10 pb-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper/10 text-saffron">
                <Scale className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-paper">{t('appName')}</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-paper/60">{t('tagline')}</p>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Explore */}
            <nav aria-label={t('footerExplore')}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                {t('footerExplore')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {explore.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-sm text-paper/75 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Trust */}
            <nav aria-label={t('footerTrust')}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                {t('footerTrust')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link to="/sources" className="text-sm text-paper/75 hover:text-paper">
                    {t('footerSources')}
                  </Link>
                </li>
                <li>
                  <button onClick={() => openDialog('sources')} className="text-sm text-paper/75 hover:text-paper">
                    {t('footerHowVerify')}
                  </button>
                </li>
                <li>
                  <button onClick={() => openDialog('disclaimer')} className="text-sm text-paper/75 hover:text-paper">
                    {t('footerDisclaimer')}
                  </button>
                </li>
                <li>
                  <button onClick={() => openDialog('privacy')} className="text-sm text-paper/75 hover:text-paper">
                    {t('footerPrivacy')}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Project */}
            <nav aria-label={t('footerProject')}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                {t('footerProject')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-paper/75 hover:text-paper"
                  >
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                    {t('footerGithub')}
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-paper/75 hover:text-paper">
                    {t('footerAbout')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Help */}
            <nav aria-label={t('footerHelp')}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                {t('footerHelp')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <button
                    onClick={openEmergency}
                    className="inline-flex items-center gap-2 text-sm text-paper/75 hover:text-paper"
                  >
                    <Zap className="h-4 w-4 text-danger" aria-hidden="true" />
                    {t('footerEmergencyHelp')}
                  </button>
                </li>
                {helpLinks.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-sm text-paper/75 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-paper/55">
                <WifiOff className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {t('footerOfflineNote')}
              </p>
            </nav>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-paper/60">🇮🇳 {t('footerBuilt')}</p>
            <p className="mt-1.5 text-xs text-paper/45">{t('footerCopyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
