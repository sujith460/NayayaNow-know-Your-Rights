import { useState } from 'react'
import { Scale, ChevronDown, ExternalLink } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import type { Right } from '../../data/types'
import { getSources } from '../../data/sources'

export function RightCard({ right }: { right: Right }) {
  const { tr } = useApp()
  const [open, setOpen] = useState(false)
  const sources = getSources(right.sourceIds)

  return (
    <article className="card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
      >
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
          <Scale className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="flex-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {tr(right.title)}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-mist">
            {right.legalBasis}
          </p>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-mist transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-line px-5 pb-5 sm:px-6">
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{tr(right.whatThisMeans)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sources.map((src) => (
                <a
                  key={src.id}
                  href={src.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-mist transition-colors hover:border-saffron hover:text-saffron-deep"
                >
                  {src.legalInstrument}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
