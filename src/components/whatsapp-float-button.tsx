import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsappFloatButton() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    "Hola! Quiero automatizar procesos en mi empresa, ¿me cuentan más?",
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
