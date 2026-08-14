import { ImageResponse } from "next/og";

export const alt = "K‑Medical: маркетинг частной медицины";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px", color: "#163f36", background: "#f4f1e8", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, fontWeight: 700 }}>
        <span style={{ width: 18, height: 18, borderRadius: 99, background: "#ed715e" }} />K‑Medical
      </div>
      <div style={{ maxWidth: 930, fontSize: 66, lineHeight: 1.06, letterSpacing: "-3px", fontWeight: 600 }}>
        Маркетинг частной клиники от спроса до пациента и оплаты
      </div>
      <div style={{ fontSize: 25, color: "#61716c" }}>Стратегия / доверие / аналитика</div>
    </div>,
    size,
  );
}
