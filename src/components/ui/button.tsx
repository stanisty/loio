import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-[14px] leading-5 font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]',
        secondary:
          'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-hover)]',
        destructive:
          'bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:brightness-95',
        outline:
          'border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--secondary)]',
        ghost: 'bg-white text-[var(--foreground)] hover:bg-[var(--ghost-hover)]',
      },
      size: {
        default: 'h-9 px-4 py-2',
        lg: 'h-11 px-6 py-2.5',
        sm: 'h-8 px-3',
        xs: 'h-6 px-3 text-xs leading-4',
        icon: 'h-9 w-9 p-0',
        'icon-lg': 'h-11 w-11 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-xs': 'h-6 w-6 p-0',
      },
      visualState: {
        default: '',
        loading: 'cursor-wait',
        disabled: 'opacity-50',
        hover: '',
        focus: '',
      },
    },
    compoundVariants: [
      {
        visualState: 'hover',
        variant: 'ghost',
        className: 'bg-[var(--ghost-hover)]',
      },
      {
        visualState: 'hover',
        variant: 'default',
        className: 'bg-[var(--primary-hover)]',
      },
      {
        visualState: 'hover',
        variant: 'secondary',
        className: 'bg-[var(--secondary-hover)]',
      },
      {
        visualState: 'focus',
        className:
          'ring-2 ring-[var(--ring)] ring-offset-2 ring-offset-[var(--ring-offset)]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      visualState: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

function Button({
  className,
  variant,
  size,
  visualState,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || visualState === 'disabled' || loading
  const effectiveVisualState = loading ? 'loading' : visualState

  return (
    <button
      data-state={effectiveVisualState ?? 'default'}
      className={cn(
        buttonVariants({
          variant,
          size,
          visualState: effectiveVisualState,
          className,
        })
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  )
}

export { Button, buttonVariants }
