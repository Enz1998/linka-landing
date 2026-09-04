import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WorkflowGraphic } from "./workflow-graphic";

export function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    "Hola! Quiero automatizar procesos en mi empresa, ¿me cuentan más?",
  )}`;

  return (
    <section id="top" className="relative overflow-hidden bg-ink-900 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent-indigo/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
          Consultora de procesos · n8n · IA
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
          Automatizamos los procesos que le roban tiempo a tu empresa
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-slate-300 sm:text-xl">
          Combinamos workflows con n8n, inteligencia artificial y desarrollo a medida para que tu
          equipo deje las tareas repetitivas y se enfoque en lo que realmente genera valor.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-indigo to-accent-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-indigo/30 transition-transform hover:scale-105"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
          Sin compromiso · Diagnóstico inicial gratuito · Respuesta en 24hs hábiles
        </p>

        <div className="mt-4 w-full">
          <WorkflowGraphic />
        </div>
      </div>
    </section>
  );
}
