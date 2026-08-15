import type { ReactNode } from 'react'

export function SectionHeading({
  index,
  title,
  subtitle,
  children
}: {
  index?: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        {index && (
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-paper"
            aria-hidden="true"
          >
            {index}
          </span>
        )}
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">{title}</h2>
      </div>
      {subtitle && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-mist">{subtitle}</p>}
      {children}
    </div>
  )
}
