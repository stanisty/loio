import type { Meta, StoryObj } from '@storybook/react-vite'

const headingStyles = [
  { name: 'Heading 1', size: 68, lineHeight: 84, letterSpacing: -2.04, weight: 600 },
  { name: 'Heading 2', size: 64, lineHeight: 80, letterSpacing: -1.92, weight: 600 },
  { name: 'Heading 3', size: 60, lineHeight: 76, letterSpacing: -1.8, weight: 600 },
  { name: 'Heading 4', size: 48, lineHeight: 60, letterSpacing: -1.2, weight: 540 },
  { name: 'Heading 5', size: 40, lineHeight: 52, letterSpacing: -1.2, weight: 600 },
  { name: 'Heading 6', size: 36, lineHeight: 44, letterSpacing: -0.9, weight: 540 },
  { name: 'Heading 7', size: 34, lineHeight: 44, letterSpacing: -0.85, weight: 600 },
] as const

const textStyles = [
  { size: 8, lineHeight: 8, weights: [360, 420, 480, 540] },
  { size: 10, lineHeight: 12, weights: [360, 420, 480, 540] },
  { size: 12, lineHeight: 16, weights: [360, 420, 480, 540, 600, 640] },
  { size: 14, lineHeight: 20, weights: [360, 420, 480, 540, 600, 640] },
  { size: 16, lineHeight: 24, weights: [360, 420, 480, 540, 600, 640] },
  { size: 20, lineHeight: 28, weights: [360, 420, 480, 540, 600, 640, 700] },
  { size: 24, lineHeight: 32, weights: [360, 420, 480, 540, 600, 640, 700] },
  { size: 30, lineHeight: 36, weights: [360, 420, 480, 540, 600, 640, 700] },
] as const

const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-white p-10 text-[var(--foreground)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
        <section className="grid gap-6">
          <p className="text-base font-medium text-[#386BD2]">Titles</p>
          <div className="grid gap-5">
            {headingStyles.map((heading) => (
              <p
                key={heading.name}
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: `${heading.size}px`,
                  lineHeight: `${heading.lineHeight}px`,
                  letterSpacing: `${heading.letterSpacing}px`,
                  fontWeight: heading.weight,
                }}
              >
                {heading.name}
              </p>
            ))}
          </div>
        </section>

        <section className="grid gap-6">
          <p className="text-base font-medium text-[#386BD2]">Geist Sans scale</p>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[var(--muted)]">
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#8F8F8F]">Token</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#8F8F8F]">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {textStyles.flatMap((style) =>
                  style.weights.map((weight) => (
                    <tr key={`${style.size}-${weight}`} className="border-t border-[var(--border)]">
                      <td className="px-4 py-3 font-mono text-sm text-[#666666]">
                        {style.size}/{style.lineHeight} w{weight}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          style={{
                            fontFamily: 'Geist, sans-serif',
                            fontSize: `${style.size}px`,
                            lineHeight: `${style.lineHeight}px`,
                            fontWeight: weight,
                          }}
                        >
                          The quick brown fox jumps over the lazy dog
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  ),
}
