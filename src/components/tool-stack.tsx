const tools = ["n8n", "OpenAI", "Claude", "Zapier", "Google Workspace", "Make", "PostgreSQL", "Slack"];

export function ToolStack() {
  return (
    <section className="border-b border-surface-border bg-surface-muted py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-600">
          Trabajamos con las herramientas líderes del mercado
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <li key={tool} className="text-base font-medium text-ink-600/80">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
