import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Service = {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Automatización de workflows con n8n",
    description:
      "Conectamos tus herramientas (CRM, ERP, planillas, email, WhatsApp) para que la información fluya sola, sin cargas manuales.",
    outcomes: [
      "Eliminación de tareas repetitivas entre sistemas",
      "Integraciones entre apps que hoy no se hablan",
      "Alertas y notificaciones automáticas",
    ],
  },
  {
    number: "02",
    title: "Agentes y soluciones de IA",
    description:
      "Implementamos IA generativa para atención al cliente, procesamiento de documentos y análisis de datos aplicados a tu operación.",
    outcomes: [
      "Chatbots y asistentes que responden 24/7",
      "Lectura y clasificación automática de documentos",
      "Análisis de datos con lenguaje natural",
    ],
  },
  {
    number: "03",
    title: "Automatización contable y administrativa",
    description:
      "Procesos de facturación, conciliaciones y reportes automatizados, con la mirada de un perfil que vivió estos problemas de adentro.",
    outcomes: [
      "Conciliaciones bancarias sin planillas manuales",
      "Reportes que se arman y envían solos",
      "Menos errores de carga y menos horas operativas",
    ],
  },
  {
    number: "04",
    title: "Desarrollo a medida",
    description:
      "Cuando el no-code no alcanza, desarrollamos scripts, integraciones y APIs a medida de tu operación.",
    outcomes: [
      "Integraciones con APIs propias o de terceros",
      "Scripts para procesos que no encajan en una plantilla",
      "Soluciones escalables a medida que creces",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Servicios"
            title="Cuatro formas de sacarle horas manuales a tu operación"
            description="No vendemos una herramienta puntual: diagnosticamos el proceso y elegimos la combinación de n8n, IA y desarrollo que mejor lo resuelve."
          />
        </Reveal>

        <div className="mt-16 flex flex-col divide-y divide-line border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 80}>
              <div className="group grid gap-6 py-10 transition-[padding] duration-300 sm:grid-cols-[auto_1fr] sm:gap-12 sm:hover:pl-3">
                <span className="font-serif text-3xl text-muted-on-paper/50 transition-colors duration-300 group-hover:text-accent">
                  {service.number}
                </span>
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-xl text-ink-900">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-on-paper">{service.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 self-start">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-baseline gap-2.5 text-sm text-ink-800">
                        <span className="h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
