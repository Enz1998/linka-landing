import { siteConfig } from "@/lib/site-config";
import { LinkedinIcon } from "./icons";
import { SectionHeading } from "./section-heading";

export function Team() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Nosotros"
          title="Un equipo chico, con dos miradas complementarias"
          description="Somos dos socios: uno con años de experiencia administrativo-contable automatizando procesos internos, y otro full-stack especializado en integraciones e IA."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {siteConfig.founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-indigo to-accent-cyan font-mono text-lg font-semibold text-white">
                  {founder.initials}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">{founder.name}</h3>
                  <p className="text-sm text-accent-indigo">{founder.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-600">{founder.bio}</p>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-900 hover:text-accent-indigo"
                aria-label={`LinkedIn de ${founder.name}`}
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
