import { useState } from 'react'
import { ChevronRight, Scale } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { TimelineStage } from '../../data/types'
import { getSources } from '../../data/sources'

export function Timeline({ stages }: { stages: TimelineStage[] }) {
  const { t, tr } = useApp()
  const [active, setActive] = useState(0)
  const stage = stages[active]

  return (
    <div>
      {/* Stage selector */}
      <div
        className="mb-6 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label={t('secTimeline')}
      >
        {stages.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              i === active
                ? 'bg-ink text-paper shadow-md'
                : 'bg-paper-2 text-mist hover:text-ink'
            }`}
          >
            <span className="font-display text-xs" aria-hidden="true">
              {i + 1}
            </span>
            {tr(s.title)}
            {i < stages.length - 1 && (
              <ChevronRight className="h-3.5 w-3.5 text-mist-2" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>

      {/* Active stage */}
      <div
        key={stage.id}
        className="card animate-pop p-5 sm:p-7"
        role="tabpanel"
        aria-label={tr(stage.title)}
      >
        <h3 className="font-display text-xl font-semibold text-ink">{tr(stage.title)}</h3>
        <p className="mt-1 text-sm text-mist">{tr(stage.description)}</p>
        <ul className="mt-5 space-y-4">
          {stage.points.map((p, i) => {
            const sources = getSources(p.sourceIds ?? [])
            return (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink">
                    {tr(p.title)}
                    <span className="rounded-full bg-saffron-soft px-2 py-0.5 text-xs font-medium text-saffron-deep">
                      {sources.map((s) => s.legalInstrument.split(',')[0]).join(' · ') ||
                        t('officialSource')}
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{tr(p.detail)}</p>
                  {sources.length > 0 && (
                    <p className="mt-2 flex flex-wrap gap-3">
                      {sources.map((s) => (
                        <a
                          key={s.id}
                          href={s.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-deep hover:underline"
                        >
                          <Scale className="h-3 w-3" aria-hidden="true" />
                          {s.legalInstrument}
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
