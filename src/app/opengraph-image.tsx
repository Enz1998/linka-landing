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
          background: "#17181c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 500,
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 48,
              height: 48,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              fontStyle: "italic",
              background: "#d97b54",
            }}
          >
            l.
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 500, color: "white", maxWidth: 950, lineHeight: 1.15 }}>
          Automatizamos los procesos que le roban tiempo a tu empresa
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a6a398", maxWidth: 850 }}>
          Workflows con n8n, inteligencia artificial y desarrollo a medida.
        </div>
      </div>
    ),
    { ...size },
  );
}
