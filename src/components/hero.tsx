import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { RobotIllustration } from "./robot-illustration";

export function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    "Hola! Quiero automatizar procesos en mi empresa, ¿me cuentan más?",
  )}`;

  return (
    <section id="top" className="border-b border-line-dark bg-ink-900 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <Reveal delay={0}>
            <span className="text-xs font-medium tracking-[0.14em] text-muted-on-dark uppercase">
              Consultora de procesos — n8n · IA · desarrollo a medida
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-[2.4rem] leading-[1.08] font-medium tracking-tight text-balance text-white sm:text-5xl md:text-[3.4rem]">
              Automatizamos los procesos que le roban tiempo a tu empresa
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-on-dark lg:max-w-none">
              Combinamos workflows con n8n, inteligencia artificial y desarrollo a medida para que tu
              equipo deje las tareas repetitivas y se enfoque en lo que realmente genera valor.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:bg-paper-muted"
              >
                Agendar diagnóstico gratuito
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line-dark px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="text-xs tracking-wide text-muted-on-dark/70 uppercase">
              Sin compromiso · Diagnóstico inicial gratuito · Respuesta en 24hs hábiles
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <RobotIllustration />
        </Reveal>
      </div>
    </section>
  );
}
