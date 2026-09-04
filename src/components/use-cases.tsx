import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const cases = [
  {
    title: "Conciliación bancaria automática",
    before: "5+ horas semanales cruzando movimientos bancarios contra el ERP a mano.",
    after: "Un workflow concilia los movimientos automáticamente y avisa por Slack solo ante diferencias.",
  },
  {
    title: "Atención al cliente con IA",
    before: "WhatsApp saturado de las mismas preguntas frecuentes, respondidas una por una.",
    after: "Un agente de IA responde consultas frecuentes 24/7 y deriva a una persona los casos complejos.",
  },
  {
    title: "Reportes que se arman solos",
    before: "Armar el reporte semanal en Excel, copiando datos de varias fuentes.",
    after: "Un workflow junta los datos, arma el reporte y lo envía automáticamente cada semana.",
  },
];

export function UseCases() {
  return (
    <section className="border-y border-line-dark bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Ejemplos de automatización"
            title="Así se ve un proceso antes y después de automatizarlo"
            description="Ejemplos ilustrativos del tipo de transformación que buscamos en cada proyecto — el punto de partida para pensar tu propio caso."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="flex flex-col gap-4 border-t border-line-dark pt-6 transition-colors duration-300 hover:border-accent-on-dark">
                <h3 className="font-serif text-lg text-white">{item.title}</h3>
                <div className="flex flex-col gap-3 text-sm leading-relaxed">
                  <p className="text-muted-on-dark/70">
                    <span className="text-xs tracking-wide text-muted-on-dark/50 uppercase">Antes — </span>
                    {item.before}
                  </p>
                  <p className="text-white/85">
                    <span className="text-xs tracking-wide text-accent-on-dark uppercase">Después — </span>
                    {item.after}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
