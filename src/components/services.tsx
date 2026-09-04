import { Workflow, Bot, Calculator, Code2, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./section-heading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
};

const services: Service[] = [
  {
    icon: Workflow,
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
    icon: Bot,
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
    icon: Calculator,
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
    icon: Code2,
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
    <section id="servicios" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Cuatro formas de sacarle horas manuales a tu operación"
          description="No vendemos una herramienta puntual: diagnosticamos el proceso y elegimos la combinación de n8n, IA y desarrollo que mejor resuelve tu caso."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-2xl border border-surface-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo to-accent-cyan text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
              <p className="text-ink-600 leading-relaxed">{service.description}</p>
              <ul className="mt-2 flex flex-col gap-2 border-t border-surface-border pt-4">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-ink-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
