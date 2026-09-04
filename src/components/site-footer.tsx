import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LinkedinIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-indigo to-accent-cyan font-mono text-sm text-white">
              l.
            </span>
            {siteConfig.name}
          </a>
          <p className="max-w-xs text-sm leading-relaxed">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Enlaces del pie de página" className="flex flex-col gap-2 text-sm">
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#como-trabajamos" className="hover:text-white">Cómo trabajamos</a>
          <a href="#nosotros" className="hover:text-white">Nosotros</a>
          <a href="#preguntas-frecuentes" className="hover:text-white">FAQ</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {siteConfig.location.city}, {siteConfig.location.country}
          </span>
          <a href={`mailto:${siteConfig.contactEmail}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contactEmail}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-slate-600">
        © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
