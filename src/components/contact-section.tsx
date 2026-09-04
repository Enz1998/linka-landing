"use client";

import { useState, type FormEvent } from "react";
import { CalendarClock, Mail, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
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
    <section id="contacto" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Empecemos por un diagnóstico gratuito"
          description="Contanos brevemente qué proceso te gustaría automatizar. Respondemos en menos de 24hs hábiles."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <CalendarClock className="h-6 w-6 shrink-0 text-accent-indigo" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink-900">Agendar una llamada</p>
                <p className="text-sm text-ink-600">Elegí un horario para una charla de diagnóstico, sin costo.</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <MessageCircle className="h-6 w-6 shrink-0 text-accent-indigo" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink-900">WhatsApp</p>
                <p className="text-sm text-ink-600">{siteConfig.whatsapp.display}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent-indigo" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink-900">Email</p>
                <p className="text-sm text-ink-600">{siteConfig.contactEmail}</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
                Nombre
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-lg border border-surface-border px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg border border-surface-border px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
              Empresa
              <input
                name="company"
                type="text"
                autoComplete="organization"
                className="rounded-lg border border-surface-border px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-900">
              Contanos qué te gustaría automatizar
              <textarea
                required
                name="message"
                rows={4}
                className="resize-none rounded-lg border border-surface-border px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>

            {status === "success" ? (
              <p role="status" className="text-sm text-emerald-600">
                ¡Gracias! Recibimos tu mensaje y te respondemos a la brevedad.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="text-sm text-red-600">
                Hubo un problema al enviar el mensaje. Escribinos por WhatsApp mientras tanto.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
