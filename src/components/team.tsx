import { siteConfig } from "@/lib/site-config";
import { LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Team() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Nosotros"
            title="Un equipo chico, con dos miradas complementarias"
            description="Somos dos socios: uno con años de experiencia administrativo-contable automatizando procesos internos, y otro full-stack especializado en integraciones e IA."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-10 border-t border-line sm:grid-cols-2">
          {siteConfig.founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 100}>
              <div className="flex flex-col gap-4 pt-10">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-xl text-ink-900">{founder.name}</h3>
                  <span className="text-xs tracking-wide text-muted-on-paper uppercase">{founder.initials}</span>
                </div>
                <p className="-mt-2 text-sm text-accent">{founder.role}</p>
                <p className="text-sm leading-relaxed text-muted-on-paper">{founder.bio}</p>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-900 hover:text-accent"
                  aria-label={`LinkedIn de ${founder.name}`}
                >
                  <LinkedinIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
