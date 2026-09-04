import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export const faqs = [
  {
    question: "¿Qué es n8n y por qué lo usan?",
    answer:
      "n8n es una herramienta de automatización de workflows que permite conectar distintas aplicaciones (CRM, planillas, email, WhatsApp, bases de datos, etc.) sin depender de un solo proveedor. La usamos porque es flexible, se puede alojar de forma privada y se adapta tanto a automatizaciones simples como a procesos complejos.",
  },
  {
    question: "¿Necesito saber programar para automatizar mis procesos?",
    answer:
      "No. Nosotros nos encargamos de todo el diseño e implementación técnica. Vos nos contás cómo funciona tu proceso hoy y qué te gustaría mejorar; nosotros nos ocupamos de la parte técnica, incluido el desarrollo a medida cuando el no-code no alcanza.",
  },
  {
    question: "¿Cuánto tiempo lleva implementar una automatización?",
    answer:
      "Depende de la complejidad, pero la mayoría de las automatizaciones puntuales (una conciliación, un reporte, un agente de atención básico) se implementan en 2 a 4 semanas desde el diagnóstico inicial. Proyectos más grandes se dividen en etapas para mostrar resultados rápido.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer:
      "Trabajamos principalmente con pymes y empresas medianas que tienen procesos manuales o repetitivos y quieren empezar a automatizar sin encarar un proyecto de sistemas gigante. Si tu caso es distinto, escribinos igual y lo charlamos.",
  },
  {
    question: "¿Qué pasa con la seguridad de mis datos?",
    answer:
      "Trabajamos con infraestructura propia o del cliente según el caso, usamos credenciales y accesos con el mínimo permiso necesario, y no compartimos información entre clientes. Si tu empresa tiene requisitos específicos de seguridad o compliance, los relevamos en el diagnóstico inicial.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "El costo depende del alcance de cada automatización. Por eso arrancamos siempre con un diagnóstico inicial gratuito: relevamos tu proceso, te proponemos qué automatizar y te pasamos una cotización concreta antes de empezar cualquier desarrollo.",
  },
];

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="scroll-mt-20 border-y border-line bg-paper-muted py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" align="left" />
        </Reveal>

        <div className="mt-12 flex flex-col divide-y divide-line border-t border-b border-line">
          {faqs.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-serif text-lg text-ink-900 marker:content-none transition-colors duration-200 group-hover:text-accent">
                  {item.question}
                  <span
                    className="shrink-0 font-serif text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="animate-fade-in mt-3 text-sm leading-relaxed text-muted-on-paper motion-reduce:animate-none">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
