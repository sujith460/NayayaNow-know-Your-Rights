import { useEffect, useState } from 'react'
import { BookOpen, ChevronDown, ExternalLink } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { getLegalTerm } from '../../data/legalTerms'
import { getSources } from '../../data/sources'

/**
 * LegalTermTooltip — tap/click a legal term to see it "in simple words" with
 * its legal source. Every definition is source-backed (data/legalTerms.ts);
 * nothing is invented here. Keyboard accessible (button + Escape to close).
 */
export function LegalTermTooltip({
  termId,
  defaultOpen = false
}: {
  termId: string
  defaultOpen?: boolean
}) {
  const { t, tr } = useApp()
  const [open, setOpen] = useState(defaultOpen)
  const term = getLegalTerm(termId)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!term) return null
  const sources = getSources(term.sourceIds)

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-cream">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`legal-term-${term.id}`}
        className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-paper-2"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
          <BookOpen className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <span className="flex-1">
          <span className="font-display text-base font-semibold text-ink underline decoration-saffron/40 decoration-dotted underline-offset-4">
            {tr(term.term)}
          </span>
          <span className="mt-0.5 block text-xs text-mist">{term.legalBasis}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-mist transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={`legal-term-${term.id}`}
          className="border-t border-line bg-paper px-4 py-4 sm:px-5 animate-fade"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-saffron-deep">
            {t('ltSimpleWords')}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/85">{tr(term.simpleWords)}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-xs text-mist">
              <span className="font-semibold text-ink">{t('ltLegalSource')}:</span> {term.legalBasis}
            </p>
            {sources.map((s) => (
              <a
                key={s.id}
                href={s.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-deep hover:underline"
              >
                {t('viewOfficialSource')} <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
