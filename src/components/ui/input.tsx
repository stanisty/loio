import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CircleDashed } from 'lucide-react'

import { cn } from '../../lib/utils'

const inputVariants = cva(
  'flex w-full rounded-[var(--radius)] border bg-white px-3 text-[14px] leading-5 text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted-foreground)]',
  {
    variants: {
      size: {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-11',
        xl: 'h-12',
      },
      visualState: {
        normal: 'border-[var(--input)]',
        hover: 'border-[var(--input)] bg-[var(--secondary)]',
        filling: 'border-[var(--input)]',
        filled: 'border-[var(--input)]',
        'filled-hover': 'border-[var(--input)] bg-[var(--secondary)]',
        focus:
          'border-[var(--ring)] ring-2 ring-[var(--ring-soft)] ring-offset-1 ring-offset-[var(--ring-offset)]',
        error: 'border-[var(--destructive)] text-[var(--foreground)]',
        'error-hover':
          'border-[var(--destructive)] bg-[color-mix(in_srgb,var(--destructive)_8%,white)]',
        disabled: 'border-[var(--input)] bg-[var(--muted)] opacity-100',
        'disabled-filled':
          'border-[var(--input)] bg-[var(--muted)] text-[var(--muted-foreground)]',
      },
    },
    defaultVariants: {
      size: 'md',
      visualState: 'normal',
    },
  }
)

type InputCoreProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>

export interface InputProps extends InputCoreProps {
  label?: string
  hint?: string
}

function Input({
  className,
  size,
  visualState,
  label,
  hint,
  placeholder,
  disabled,
  value,
  ...props
}: InputProps) {
  const finalDisabled =
    disabled || visualState === 'disabled' || visualState === 'disabled-filled'

  return (
    <div className="grid gap-1.5 text-left">
      {label ? <label className="text-sm font-medium">{label}</label> : null}
      <div className="relative">
        <input
          className={cn(
            inputVariants({
              size,
              visualState,
            }),
            'pr-9',
            className
          )}
          placeholder={placeholder}
          disabled={finalDisabled}
          value={value}
          {...props}
        />
        <CircleDashed
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]"
          aria-hidden="true"
        />
      </div>
      {hint ? (
        <p
          className={cn(
            'text-xs',
            visualState === 'error' || visualState === 'error-hover'
              ? 'text-[var(--destructive)]'
              : 'text-[var(--muted-foreground)]'
          )}
        >
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export { Input, inputVariants }
