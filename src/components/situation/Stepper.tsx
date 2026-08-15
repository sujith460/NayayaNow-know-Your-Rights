import { ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'

const STEP_KEYS = ['secWhatMatters', 'secRights', 'secDo', 'secHelp'] as const

export function Stepper({ current }: { current: number }) {
  const { t } = useApp()
  return (
    <nav aria-label={t('progressLabel')} className="mb-10">
      <ol className="flex items-center gap-1 overflow-x-auto pb-1 sm:gap-2">
        {STEP_KEYS.map((key, i) => (
          <li key={key} className="flex items-center gap-1 sm:gap-2">
            <span
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                i === current
                  ? 'bg-ink text-paper'
                  : i < current
                    ? 'bg-saffron-soft text-saffron-deep'
                    : 'bg-paper-2 text-mist'
              }`}
            >
              <span className="font-display text-xs" aria-hidden="true">
                {i + 1}
              </span>
              {t(key)}
            </span>
            {i < STEP_KEYS.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-mist-2" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
