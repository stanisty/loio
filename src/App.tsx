function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center p-8">
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Design System Storybook</h1>
        <p className="text-sm text-[var(--muted-foreground)]">
          Run <code className="rounded bg-[var(--muted)] px-2 py-1">npm run storybook</code> to
          open component documentation for the design team.
        </p>
      </section>
    </main>
  )
}

export default App
