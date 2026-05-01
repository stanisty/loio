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
  render: () => (
    <div className="flex w-fit flex-col items-start gap-3">
      <Button size="lg">Button</Button>
      <Button size="default">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
      <Button size="icon-lg" aria-label="Icon lg">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button size="icon" aria-label="Icon default">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button size="icon-sm" aria-label="Icon sm">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button size="icon-xs" aria-label="Icon xs">
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </div>
  ),
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
