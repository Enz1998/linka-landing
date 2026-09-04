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
      className="group fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white transition-transform duration-200 hover:scale-105"
    >
      <span className="animate-soft-ping absolute inset-0 rounded-full bg-emerald-600 motion-reduce:hidden" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}
