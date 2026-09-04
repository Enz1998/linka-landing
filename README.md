# linka — landing page

Landing page de **linka**, consultora de procesos (automatización con n8n, IA y desarrollo a medida).

Next.js (App Router) con generación estática (SSG) para SEO, Tailwind CSS v4 y TypeScript.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app/page.tsx` — página única, arma todas las secciones.
- `src/components/` — un componente por sección (hero, servicios, FAQ, contacto, etc.).
- `src/lib/site-config.ts` — **datos centrales del sitio** (nombre, contacto, WhatsApp, Calendly, equipo). Todo lo que haya que cambiar de contenido/contacto pasa por acá.
- `src/app/layout.tsx` — metadata global, JSON-LD de Organization.
- `src/app/sitemap.ts`, `robots.ts`, `manifest.ts`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx` — archivos de SEO/metadata generados por convención de Next.js.
- `src/app/api/contact/route.ts` — recibe el formulario de contacto.

## Pendientes antes de lanzar a producción

Todo está marcado con `TODO` en el código, pero el resumen es:

1. **Dominio**: confirmar `consultoralinka.com` (o el que sea) y setear la variable de entorno `NEXT_PUBLIC_SITE_URL` en el hosting con la URL final. Se usa para metadata, Open Graph y el sitemap.
2. **Email de contacto real**: crear una cuenta en [Resend](https://resend.com) (o similar), generar una API key y configurar en el hosting:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (el email que va a recibir los mensajes del formulario)

   Sin esto configurado, el formulario sigue funcionando (muestra éxito al usuario) pero los mensajes solo quedan logueados en el servidor, no llegan por mail.
3. **WhatsApp**: reemplazar el número placeholder en `src/lib/site-config.ts` (`whatsapp.number` y `whatsapp.display`) por el número real de WhatsApp Business, en formato E.164 sin `+` (ej: `5491122334455`).
4. **Calendly**: reemplazar `calendlyUrl` en `src/lib/site-config.ts` por el link real de agenda.
5. **LinkedIn**: reemplazar `social.linkedin` en `src/lib/site-config.ts` por el link real de la empresa (y opcionalmente el de cada socio en `founders`).

## Deploy

Pensado para desplegar en [Vercel](https://vercel.com/new) (o cualquier hosting compatible con Next.js). Configurar ahí las variables de entorno del punto anterior.
