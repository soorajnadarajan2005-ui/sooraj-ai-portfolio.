import { ImageResponse } from "next/og";

export const alt = "Sooraj Nadarajan — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #080d17 0%, #111b2c 65%, #171a31 100%)",
          color: "#f2f6ff",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: 28,
            color: "#89b6ff",
            fontSize: 24,
            letterSpacing: 5,
          }}
        >
          AI/ML ENGINEER · PYTHON DEVELOPER
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          Sooraj Nadarajan
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 850,
            marginTop: 24,
            color: "#bdc9dc",
            fontSize: 34,
            lineHeight: 1.35,
          }}
        >
          Building practical AI systems that solve real-world problems.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            color: "#9daac0",
            fontSize: 22,
          }}
        >
          Machine Learning · Generative AI · Kochi, India
        </div>
      </div>
    ),
    size,
  );
}
