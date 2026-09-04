const tools = ["n8n", "OpenAI", "Claude", "Zapier", "Google Workspace", "Make", "PostgreSQL", "Slack"];

export function ToolStack() {
  return (
    <section className="overflow-hidden border-b border-line bg-paper-muted py-9">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-xs font-medium tracking-[0.14em] text-muted-on-paper uppercase">
          Trabajamos con las herramientas líderes del mercado
        </p>
      </div>

      <div className="group relative mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...tools, ...tools].map((tool, i) => (
            <span key={`${tool}-${i}`} className="text-base whitespace-nowrap text-ink-800/70">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
