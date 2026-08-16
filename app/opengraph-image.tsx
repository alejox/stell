import { ImageResponse } from "next/og";
import { brand, plans } from "@/content/site";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const cheapest = plans.reduce((low, plan) =>
  plan.price < low.price ? plan : low,
);

/**
 * Social card, generated at build time. Owning the image means no borrowed
 * screenshot ends up representing the site on WhatsApp, X or Facebook.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0B0B0C",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(238,181,0,0.30) 0%, transparent 55%), radial-gradient(circle at 95% 100%, rgba(214,45,8,0.28) 0%, transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "18px",
              height: "56px",
              borderRadius: "9px",
              backgroundImage: "linear-gradient(135deg, #EEB500, #D62D08)",
            }}
          />
          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            {brand.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            Toda la televisión en una sola app
          </div>
          <div style={{ fontSize: "34px", color: "rgba(255,255,255,0.65)" }}>
            +1000 canales en vivo · +90 señales de deportes · Películas y series
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 32px",
              borderRadius: "999px",
              backgroundImage: "linear-gradient(135deg, #EEB500, #D62D08)",
              color: "#0B0B0C",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Planes desde ${cheapest.price}.{cheapest.cents} USD
          </div>

          <div style={{ fontSize: "26px", color: "rgba(255,255,255,0.45)" }}>
            Distribuidores autorizados en 10 países
          </div>
        </div>
      </div>
    ),
    size,
  );
}
