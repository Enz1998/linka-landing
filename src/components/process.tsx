import { Reveal } from "./reveal";
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
    <section id="como-trabajamos" className="scroll-mt-20 border-y border-line bg-paper-muted py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Metodología"
            title="Cómo trabajamos"
            description="Un proceso simple, pensado para avanzar rápido sin perder el rigor de una consultora tradicional."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="group flex flex-col gap-3 border-t border-ink-900/15 pt-5 transition-colors duration-300 hover:border-accent">
                <span className="font-serif text-2xl text-ink-900/40 transition-colors duration-300 group-hover:text-accent">
                  {step.number}
                </span>
                <h3 className="text-base font-medium text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-on-paper">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
