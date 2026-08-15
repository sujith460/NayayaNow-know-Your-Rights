import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Sparkles, ArrowRight, SearchX } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { classify } from '../lib/classifier'
import { getSituationById, SITUATIONS } from '../data/situations'
import { SituationCard } from '../components/situation/SituationCard'
import { SearchInput } from '../components/features/SearchInput'
import { Button } from '../components/ui/Button'
import { UrgencyBadge } from '../components/ui/UrgencyBadge'
import { SituationIcon } from '../components/ui/icons'

export function Navigator() {
  const { t, tr } = useApp()
  const [params] = useSearchParams()
  const q = params.get('q')

  const result = useMemo(() => {
    if (!q || q.trim().length < 3) return null
    return classify(q)
  }, [q])

  const matched = result && result.situationId !== 'UNKNOWN' ? getSituationById(result.situationId) : null

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 animate-rise">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{t('nlTitle')}</h1>

      {/* Single search bar — always visible */}
      <div className="mt-6 max-w-3xl">
        <SearchInput />
      </div>

      {/* Result */}
      <div className="mt-10">
        {!q && (
          <p className="max-w-3xl text-sm text-mist">
            {t('clNotSureLink')} <Link to="/not-sure" className="font-semibold text-saffron-deep hover:underline">→</Link>
          </p>
        )}

        {q && !result && (
          <p className="text-sm text-mist">…</p>
        )}

        {result && result.situationId === 'UNKNOWN' && (
          <div className="max-w-3xl rounded-3xl border border-dashed border-line bg-paper p-8 text-center">
            <SearchX className="mx-auto h-10 w-10 text-mist" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">{t('clUnknown')}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{t('clUnknownHint')}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/not-sure">
                <Button variant="secondary" className="w-full sm:w-auto">
                  {t('clNotSureLink')}
                </Button>
              </Link>
              <a href="#all-situations">
                <Button variant="ghost" className="w-full sm:w-auto">
                  {t('clBrowseAll')}
                </Button>
              </a>
            </div>
          </div>
        )}

        {result && matched && (
          <div className="max-w-3xl animate-pop">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t('clFound')}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t('clClosestMatch')}
            </h2>
            <p className="mt-1 text-sm text-mist">{t('clBasedOn')}</p>

            <div className="card mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-saffron">
                <SituationIcon name={matched.icon} className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <UrgencyBadge urgency={matched.urgency} />
                  <span className="text-xs font-semibold text-mist">
                    {t('clFound')} · {Math.round(result.confidence * 100)}%
                  </span>
                </span>
                <span className="mt-2 block font-display text-xl font-semibold text-ink sm:text-2xl">
                  {tr(matched.title)}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-mist">
                  {tr(matched.summary)}
                </span>
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to={`/situation/${matched.slug}`} className="flex-1 sm:flex-none">
                <Button variant="primary" className="w-full sm:w-auto">
                  {t('clOpenGuide')} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <a href="#all-situations" className="flex-1 sm:flex-none">
                <Button variant="ghost" className="w-full sm:w-auto">
                  {t('clChooseDifferent')}
                </Button>
              </a>
            </div>

            <p className="mt-6 rounded-2xl bg-paper-2 p-4 text-xs leading-relaxed text-mist">
              {t('clAIBoundary')}
            </p>
          </div>
        )}
      </div>

      {/* Fallback grid */}
      <div id="all-situations" className="mt-20 scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t('homeWhatHappened')}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITUATIONS.map((s) => (
            <SituationCard key={s.id} situation={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
