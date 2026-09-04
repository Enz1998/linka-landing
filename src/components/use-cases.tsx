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
    <section className="bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Ejemplos de automatización"
          title="Así se ve un proceso antes y después de automatizarlo"
          description="Ejemplos ilustrativos del tipo de transformación que buscamos en cada proyecto — el punto de partida para pensar tu propio caso."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {cases.map((item) => (
            <div key={item.title} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p className="text-slate-400">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Antes — </span>
                  {item.before}
                </p>
                <p className="text-slate-200">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">Después — </span>
                  {item.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
