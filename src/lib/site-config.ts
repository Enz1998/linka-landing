/**
 * Configuración central del sitio. Todos los datos de contacto son PLACEHOLDERS
 * (marcados con TODO) — reemplazar antes de lanzar a producción.
 */

export const siteConfig = {
  name: "linka",
  legalName: "linka — Consultora de Procesos",
  tagline: "Automatización de procesos con IA para empresas",
  description:
    "Ayudamos a empresas a automatizar procesos con workflows de n8n, inteligencia artificial y desarrollo a medida. Menos tareas manuales, más tiempo para lo que importa.",
  // TODO: confirmar dominio definitivo y actualizar NEXT_PUBLIC_SITE_URL en el hosting.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://consultoralinka.com",
  locale: "es_AR",
  themeColor: "#0B1220",

  // TODO: reemplazar por el email real cuando esté configurado.
  contactEmail: "hola@consultoralinka.com",
  // TODO: reemplazar por el número real de WhatsApp Business (formato E.164 sin '+' ni espacios).
  whatsapp: {
    number: "5491100000000",
    display: "+54 9 11 0000-0000",
  },
  // TODO: reemplazar por el link real de Calendly / Google Calendar.
  calendlyUrl: "https://calendly.com/linka-consultora/diagnostico-gratuito",

  location: {
    city: "Buenos Aires",
    country: "Argentina",
    addressCountry: "AR",
    areaServed: ["Argentina", "Latinoamérica"],
  },

  social: {
    // TODO: completar cuando existan los perfiles.
    linkedin: "https://www.linkedin.com/company/linka-consultora",
  },

  founders: [
    {
      name: "Enzo Irribarra",
      role: "Cofundador — Automatización Contable & Procesos",
      bio: "Perfil administrativo-contable con años de experiencia automatizando procesos internos. Conecta la mirada operativa del negocio con cada solución que implementamos.",
      initials: "EI",
    },
    {
      name: "Pablo Romero",
      role: "Cofundador — Desarrollo Full-Stack & IA",
      bio: "Desarrollador full-stack especializado en integraciones, IA aplicada y arquitectura de sistemas. Traduce cada proceso en una solución técnica robusta.",
      initials: "PR",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
