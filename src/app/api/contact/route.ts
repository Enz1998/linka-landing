import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

/**
 * Envía el mensaje del formulario de contacto.
 *
 * TODO: configurar las variables de entorno RESEND_API_KEY y CONTACT_TO_EMAIL
 * en el hosting para que los mensajes lleguen por email de verdad. Hasta
 * entonces, los envíos quedan solo logueados en el servidor.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { name, email, company, message } = body as {
    name: string;
    email: string;
    company?: string;
    message: string;
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.contactEmail;

  if (resendApiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${siteConfig.name} <onboarding@resend.dev>`,
        to: toEmail,
        reply_to: email,
        subject: `Nuevo contacto desde la web — ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company ?? "-"}\n\nMensaje:\n${message}`,
      }),
    });

    if (!res.ok) {
      console.error("Error enviando email vía Resend:", await res.text());
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }
  } else {
    console.log("[contacto] RESEND_API_KEY no configurada. Mensaje recibido:", {
      name,
      email,
      company,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
