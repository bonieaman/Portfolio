import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101214",
          color: "#f1eee7",
          padding: 72,
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#5eead4",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4
          }}
        >
          NABON.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1, fontWeight: 700, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#c9c2b6" }}>
            Software Engineer
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#5eead4" }}>
          I design, build, and ship digital products.
        </div>
      </div>
    ),
    size
  );
}
