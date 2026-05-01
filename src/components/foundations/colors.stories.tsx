import type { Meta, StoryObj } from '@storybook/react-vite'

type ColorCard = {
  name: string
  hex: string
  textColor?: string
  note?: string
  width?: 240 | 480
  height?: 280 | 660
}

type ColorSection = {
  title: string
  cards: ColorCard[]
}

const sections: ColorSection[] = [
  {
    title: '1000 shades of grey',
    cards: [
      { name: 'Dark 1', hex: '#999999', textColor: '#FFFFFF' },
      { name: 'Dark 2', hex: '#8F8F8F', textColor: '#FFFFFF' },
      { name: 'Dark 3', hex: '#7A7A7A', textColor: '#FFFFFF' },
      { name: 'Dark 4', hex: '#666666', textColor: '#FFFFFF' },
      { name: 'Dark 5', hex: '#525252', textColor: '#FFFFFF' },
      { name: 'Dark 6', hex: '#484848', textColor: '#FFFFFF' },
      { name: 'Dark 7', hex: '#222222', textColor: '#FFFFFF' },
      { name: 'Dark 8', hex: '#0A0A0A', textColor: '#FFFFFF' },
      { name: 'Light 1', hex: '#FAFAFA' },
      { name: 'Light 2', hex: '#F8F8F8' },
      { name: 'Light 3', hex: '#F5F5F5' },
      { name: 'Light 4', hex: '#F2F2F2' },
      { name: 'Light 5', hex: '#EEEEEE' },
      { name: 'Light 6', hex: '#EBEBEB' },
      { name: 'Light 7', hex: '#DDDDDD' },
      { name: 'Light 8', hex: '#D8D8D8' },
    ],
  },
  {
    title: 'Accent colors',
    cards: [
      { name: 'Grass Green', hex: '#D8EF75', width: 480, height: 660 },
      { name: 'Grass 2', hex: '#D1EC5B', note: '(hover)', height: 660 },
      { name: 'Grass 3', hex: '#CCEA48', note: '(pressed)', height: 660 },
      { name: 'Sky 1', hex: '#E0E8FF', width: 480 },
      { name: 'Sky 2', hex: '#D6E0FD', note: '(hover)' },
      { name: 'Sky 3', hex: '#CCD9FF' },
      { name: 'Celtic Blue 1', hex: '#386BD2', width: 480, textColor: '#FFFFFF' },
      { name: 'Celtic Blue 2', hex: '#1955D8', textColor: '#FFFFFF' },
      { name: 'Celtic Blue 3', hex: '#237AF8', textColor: '#FFFFFF' },
    ],
  },
]

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ColorCardItem({
  name,
  hex,
  note,
  width = 240,
  height = 280,
  textColor = '#222222',
}: ColorCard) {
  return (
    <div
      className="flex shrink-0 flex-col justify-between rounded-[20px] p-6"
      style={{ width: `${width}px`, height: `${height}px`, backgroundColor: hex, color: textColor }}
    >
      <div className="flex flex-col">
        <p className="text-[20px] leading-7 tracking-[-0.3px]" style={{ fontWeight: 540 }}>
          {name}
        </p>
        {note ? (
          <p className="font-mono text-base leading-[26px]" style={{ color: 'rgba(0,0,0,0.75)' }}>
            {note}
          </p>
        ) : null}
      </div>
      <p className="font-mono text-[18px] leading-none tracking-[0.36px]">{hex.toUpperCase()}</p>
    </div>
  )
}

export const Palette: Story = {
  render: () => (
    <div className="min-h-screen bg-white p-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-6">
            <p className="text-base font-medium text-[#386BD2]">{section.title}</p>
            <div className="flex flex-wrap gap-10">
              {section.cards.map((card) => (
                <ColorCardItem key={`${section.title}-${card.name}-${card.hex}`} {...card} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  ),
}
