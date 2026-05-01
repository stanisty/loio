import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './input'

const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Label',
    hint: 'This is an input description.',
    placeholder: 'Placeholder',
    size: 'md',
    visualState: 'normal',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    visualState: {
      control: 'select',
      options: [
        'normal',
        'hover',
        'focus',
        'filling',
        'filled',
        'filled-hover',
        'error',
        'error-hover',
        'disabled',
        'disabled-filled',
      ],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Matrix: Story = {
  render: () => {
    const sizes = ['xl', 'lg', 'md', 'sm'] as const
    const states = [
      'normal',
      'hover',
      'focus',
      'filling',
      'filled',
      'filled-hover',
      'error',
      'error-hover',
      'disabled',
      'disabled-filled',
    ] as const

    return (
      <div className="grid gap-5">
        {states.map((state) => (
          <div key={state} className="grid gap-3">
            <p className="text-sm font-semibold capitalize">{state.replace('-', ' ')}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {sizes.map((size) => (
                <Input
                  key={`${state}-${size}`}
                  size={size}
                  visualState={state}
                  label="Label"
                  placeholder={state.includes('filled') ? undefined : 'Placeholder'}
                  value={state.includes('filled') ? 'Some text' : undefined}
                  hint={
                    state.includes('error')
                      ? 'The error text can be shown.'
                      : 'This is an input description.'
                  }
                  readOnly={state.includes('filled')}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
