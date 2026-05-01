import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRight } from 'lucide-react'

import { Button } from './button'

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    visualState: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'],
    },
    visualState: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'loading', 'disabled'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const DefaultSizes: Story = {
  render: () => {
    const sizes = ['lg', 'default', 'sm', 'xs', 'icon-lg', 'icon', 'icon-sm', 'icon-xs'] as const
    const states = ['default', 'hover', 'focus', 'loading', 'disabled'] as const
    const labelStyle = {
      fontFamily: 'Geist, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      color: '#8F8F8F',
    }

    return (
      <div className="grid w-fit gap-5">
        <div className="flex items-center gap-5">
          <div className="w-20 shrink-0" />
          {states.map((state) => (
            <p key={state} className="capitalize" style={labelStyle}>
              {state}
            </p>
          ))}
        </div>

        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-5">
            <p className="w-20 shrink-0" style={labelStyle}>
              {size}
            </p>
            {states.map((visualState) => (
              <Button
                key={`${size}-${visualState}`}
                size={size}
                visualState={visualState}
                aria-label={`${size} ${visualState}`}
              >
                {size.startsWith('icon') ? <ArrowUpRight className="h-4 w-4" /> : 'Button'}
              </Button>
            ))}
          </div>
        ))}
      </div>
    )
  },
}

export const Matrix: Story = {
  render: () => {
    const variants = ['default', 'secondary', 'outline', 'destructive', 'ghost'] as const
    const states = ['default', 'hover', 'focus', 'loading', 'disabled'] as const

    return (
      <div className="grid gap-8">
        {variants.map((variant) => (
          <div key={variant} className="grid gap-3">
            <p className="text-sm font-semibold capitalize">{variant}</p>
            <div className="flex flex-wrap gap-3">
              {states.map((visualState) => (
                <Button key={`${variant}-${visualState}`} variant={variant} visualState={visualState}>
                  {visualState}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon-xs" aria-label="Icon xs">
        <ArrowUpRight className="h-3 w-3" />
      </Button>
      <Button size="icon-sm" aria-label="Icon sm">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Button>
      <Button size="icon" aria-label="Icon default">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button size="icon-lg" aria-label="Icon lg">
        <ArrowUpRight className="h-5 w-5" />
      </Button>
    </div>
  ),
}
