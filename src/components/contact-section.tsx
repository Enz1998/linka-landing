"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    "Hola! Quiero automatizar procesos en mi empresa, ¿me cuentan más?",
  )}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Contacto"
            title="Empecemos por un diagnóstico gratuito"
            description="Contanos brevemente qué proceso te gustaría automatizar. Respondemos en menos de 24hs hábiles."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 border-t border-line pt-12 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-8 lg:col-span-2">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
              <p className="font-serif text-lg text-ink-900 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                Agendar una llamada
              </p>
              <p className="text-sm text-muted-on-paper">Elegí un horario para una charla de diagnóstico, sin costo.</p>
            </a>

            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
              <p className="font-serif text-lg text-ink-900 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                WhatsApp
              </p>
              <p className="text-sm text-muted-on-paper">{siteConfig.whatsapp.display}</p>
            </a>

            <a href={`mailto:${siteConfig.contactEmail}`} className="group flex flex-col gap-1">
              <p className="font-serif text-lg text-ink-900 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                Email
              </p>
              <p className="text-sm text-muted-on-paper">{siteConfig.contactEmail}</p>
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
                Nombre
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink-900 outline-none transition-colors duration-200 focus:border-ink-900"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink-900 outline-none transition-colors duration-200 focus:border-ink-900"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
              Empresa
              <input
                name="company"
                type="text"
                autoComplete="organization"
                className="border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink-900 outline-none transition-colors duration-200 focus:border-ink-900"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
              Contanos qué te gustaría automatizar
              <textarea
                required
                name="message"
                rows={3}
                className="resize-none border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-ink-900 outline-none transition-colors duration-200 focus:border-ink-900"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-3 inline-flex w-fit items-center justify-center gap-2 bg-ink-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-700 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" ? (
              <p role="status" className="animate-fade-in text-sm font-medium text-accent">
                ¡Gracias! Recibimos tu mensaje y te respondemos a la brevedad.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="animate-fade-in text-sm text-red-700">
                Hubo un problema al enviar el mensaje. Escribinos por WhatsApp mientras tanto.
              </p>
            ) : null}
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
