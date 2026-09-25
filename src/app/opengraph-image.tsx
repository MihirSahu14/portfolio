import { ImageResponse } from "next/og";

// Link-preview card for LinkedIn, Slack, iMessage etc. Built at deploy time.
export const alt = "Mihir Sahu | AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(180deg, #1a2542 0%, #0b1020 100%)",
          color: "#f3f1e8",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#ffd261" }}>PLAYER ONE</div>
        <div style={{ fontSize: 112, marginTop: 24 }}>MIHIR SAHU</div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#ffd261" }}>AI Engineer · San Francisco</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#b4bccd" }}>
          LLM agents, MCP tooling, evals, full-stack AI products, games
        </div>
      </div>
    ),
    size,
  );
}
