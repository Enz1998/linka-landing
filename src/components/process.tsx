import { SectionHeading } from "./section-heading";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Relevamos tus procesos actuales, hablamos con tu equipo y detectamos dónde se pierden más horas.",
  },
  {
    number: "02",
    title: "Diseño de la solución",
    description: "Definimos qué automatizar, con qué herramientas y en qué orden, priorizando el mayor impacto primero.",
  },
  {
    number: "03",
    title: "Implementación",
    description: "Desarrollamos e integramos los workflows, agentes de IA o scripts, probando cada paso con tu equipo.",
  },
  {
    number: "04",
    title: "Acompañamiento y mejora continua",
    description: "Medimos resultados (horas ahorradas, errores evitados) y seguimos optimizando el proceso en el tiempo.",
  },
];

export function Process() {
  return (
    <section id="como-trabajamos" className="scroll-mt-20 bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Metodología"
          title="Cómo trabajamos"
          description="Un proceso simple, pensado para avanzar rápido sin perder el rigor de una consultora tradicional."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              <span className="font-mono text-4xl font-semibold text-accent-indigo/25">{step.number}</span>
              <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
              {i < steps.length - 1 ? (
                <span
                  className="absolute top-5 -right-4 hidden h-px w-8 bg-surface-border lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
