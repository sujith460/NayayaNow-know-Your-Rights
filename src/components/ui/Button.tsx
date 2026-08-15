import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'ink'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary:
    'bg-saffron text-white hover:bg-saffron-deep shadow-[0_8px_20px_-8px_rgb(180_83_9/0.6)]',
  secondary:
    'bg-ink text-paper hover:bg-ink-2 shadow-[0_8px_20px_-10px_rgb(11_27_47/0.5)]',
  ghost: 'bg-transparent text-ink border border-line hover:border-saffron hover:text-saffron-deep',
  danger: 'bg-danger text-white hover:bg-danger/90 shadow-[0_8px_20px_-8px_rgb(179_38_30/0.6)]',
  ink: 'bg-cream text-ink border border-line hover:bg-paper-2'
}

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
