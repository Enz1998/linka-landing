import { Scale, Blocks, Timer, TrendingUp } from "lucide-react";
import { SectionHeading } from "./section-heading";

const differentiators = [
  {
    icon: Scale,
    title: "Mirada de negocio + ejecución técnica",
    description:
      "Un socio que vivió los procesos administrativos y contables desde adentro, y otro que los convierte en software. Entendemos el problema antes de proponer la herramienta.",
  },
  {
    icon: Blocks,
    title: "No-code y código a medida",
    description:
      "Usamos herramientas no-code como n8n cuando alcanzan, y desarrollamos a medida cuando el proceso lo requiere. Elegimos lo que funciona, no lo que vendemos.",
  },
  {
    icon: Timer,
    title: "Implementación rápida",
    description:
      "Sin proyectos eternos de consultora tradicional. Priorizamos automatizaciones de alto impacto que se pueden implementar en semanas, no en trimestres.",
  },
  {
    icon: TrendingUp,
    title: "Foco en resultados medibles",
    description:
      "Cada automatización se mide en horas ahorradas, errores evitados o tiempo de respuesta. Si no se puede medir, no lo proponemos.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Por qué linka"
          title="La seriedad de una consultora, la velocidad de un equipo técnico"
          description="Fusionamos lo mejor de las grandes consultoras de procesos con la agilidad de un equipo chico y especializado en automatización."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
