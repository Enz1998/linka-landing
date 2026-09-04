import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: "80px 90px",
          background: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(79,70,229,0.55), transparent 55%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.45), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 700,
            color: "white",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
            }}
          >
            l.
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: "white", maxWidth: 950, lineHeight: 1.15 }}>
          Automatizamos los procesos que le roban tiempo a tu empresa
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", maxWidth: 850 }}>
          Workflows con n8n, inteligencia artificial y desarrollo a medida.
        </div>
      </div>
    ),
    { ...size },
  );
}
