import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const differentiators = [
  {
    title: "Mirada de negocio + ejecución técnica",
    description:
      "Un socio que vivió los procesos administrativos y contables desde adentro, y otro que los convierte en software. Entendemos el problema antes de proponer la herramienta.",
  },
  {
    title: "No-code y código a medida",
    description:
      "Usamos herramientas no-code como n8n cuando alcanzan, y desarrollamos a medida cuando el proceso lo requiere. Elegimos lo que funciona, no lo que vendemos.",
  },
  {
    title: "Implementación rápida",
    description:
      "Sin proyectos eternos de consultora tradicional. Priorizamos automatizaciones de alto impacto que se pueden implementar en semanas, no en trimestres.",
  },
  {
    title: "Foco en resultados medibles",
    description:
      "Cada automatización se mide en horas ahorradas, errores evitados o tiempo de respuesta. Si no se puede medir, no lo proponemos.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Por qué linka"
            title="La seriedad de una consultora, la velocidad de un equipo técnico"
            description="Fusionamos lo mejor de las grandes consultoras de procesos con la agilidad de un equipo chico y especializado en automatización."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex flex-col gap-2">
                <span className="font-serif text-sm text-accent transition-transform duration-300 group-hover:translate-x-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-on-paper">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
