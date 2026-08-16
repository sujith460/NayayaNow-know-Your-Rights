import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Zap, NotebookPen, ClipboardCheck, ShieldCheck, HelpCircle, WifiOff } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { Button } from '../components/ui/Button'
import { SituationCard } from '../components/situation/SituationCard'
import { UrgencyBadge } from '../components/ui/UrgencyBadge'
import { SearchInput } from '../components/features/SearchInput'
import { ECourtsBridge } from '../components/features/ECourtsBridge'
import { ALL_ENTRIES, NOT_SURE_ENTRY } from '../data/situations'

export function Home() {
  const { t, tr, openDialog } = useApp()

  return (
    <div className="animate-rise">
      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden bg-ink text-paper texture-ink">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24">
          <p className="flex items-center gap-2 text-sm font-semibold text-saffron">
            <span aria-hidden="true">🇮🇳</span> {t('appName')}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            {t('heroTitle')}
            <span className="block text-saffron">{t('heroTitle2')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75 sm:text-xl">
            {t('heroSub')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/navigator">
              <Button variant="primary" className="w-full px-7 py-4 text-base sm:w-auto">
                {t('heroCtaTell')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <a href="#situations">
              <Button variant="ink" className="w-full px-7 py-4 text-base sm:w-auto">
                {t('heroCtaBrowse')}
              </Button>
            </a>
            <Link to="/help">
              <Button variant="ink" className="w-full px-7 py-4 text-base sm:w-auto">
                {t('heroCtaHelp')}
              </Button>
            </Link>
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-paper/50">
            <ShieldCheck className="h-4 w-4 text-leaf" aria-hidden="true" />
            {t('heroTrustLine')}
          </p>
        </div>
      </section>

      {/* ——— Ask NyayaNow — natural-language situation navigator ——— */}
      <section className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="rounded-3xl border border-line bg-cream p-6 shadow-[0_24px_60px_-24px_rgb(11_27_47/0.3)] sm:p-8">
          <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
            <span aria-hidden="true">🧭</span> {t('anEyebrow')}
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
            {t('anTitle')}
          </h2>
          <p className="mt-1 text-center text-[15px] font-medium text-ink/80 sm:text-base">
            {t('anSub')}
          </p>
          <p className="mx-auto mt-2 max-w-md text-center text-sm leading-relaxed text-mist">
            {t('anHint')}
          </p>
          <div className="mt-6">
            <SearchInput large />
          </div>
          <p className="mt-4 text-center">
            <a href="#situations" className="text-sm font-semibold text-saffron-deep hover:underline">
              {t('anChooseInstead')}
            </a>
          </p>
        </div>
      </section>

      {/* ——— Situation grid ——— */}
      <section id="situations" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t('homeWhatHappened')}
          </h2>
          <Link to="/not-sure" className="text-sm font-semibold text-saffron-deep hover:underline">
            {t('clNotSureLink')}
          </Link>
        </div>
        <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-mist">{t('homeGridHint')}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_ENTRIES.filter((s) => s.id !== 'NOT_SURE').map((s) => (
            <SituationCard key={s.id} situation={s} />
          ))}

          {/* "I'm not sure" special card links to the guided flow — same layout as SituationCard */}
          <Link
            to="/not-sure"
            className="card card-hover group flex flex-col gap-3 border-dashed p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-2 text-ink transition-colors group-hover:bg-saffron-soft group-hover:text-saffron-deep">
                <HelpCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <UrgencyBadge urgency="info" />
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug text-ink">
              {t('navNotSure')}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-mist">
              {tr(NOT_SURE_ENTRY.description)}
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-saffron-deep">
              {t('viewGuide')}
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* ——— eCourts trusted bridge ——— */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <ECourtsBridge />
      </section>

      {/* ——— Feature strip ——— */}
      <section className="border-y border-line bg-paper-2/60">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <button
            onClick={() => openDialog('memory')}
            className="card card-hover flex items-start gap-4 p-5 text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-saffron">
              <NotebookPen className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="font-display text-base font-semibold text-ink">{t('memTitle')}</span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">{t('memSavedOnly')}</span>
            </span>
          </button>
          <button
            onClick={() => openDialog('checklist')}
            className="card card-hover flex items-start gap-4 p-5 text-left"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="font-display text-base font-semibold text-ink">{t('clTitle')}</span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">{t('clIntro')}</span>
            </span>
          </button>
          <Link to="/complaints" className="card card-hover flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="font-display text-base font-semibold text-ink">{t('cnTitle')}</span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">{t('cnIntro')}</span>
            </span>
          </Link>
          <Link to="/emergency" className="card card-hover flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-danger-soft text-danger">
              <WifiOff className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="font-display text-base font-semibold text-ink">{t('epTitle')}</span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">{t('epIntro')}</span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
