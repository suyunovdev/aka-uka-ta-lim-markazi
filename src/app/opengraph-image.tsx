import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f1f36 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 60px",
            borderRadius: "24px",
            border: "2px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-2px",
              marginBottom: "8px",
            }}
          >
            Aka-Uka
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              opacity: 0.9,
              marginBottom: "24px",
            }}
          >
            Ta&apos;lim Markazi
          </div>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #f59e0b, #ef4444)",
              borderRadius: "2px",
              marginBottom: "24px",
            }}
          />
          <div
            style={{
              fontSize: 22,
              opacity: 0.8,
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            Sertifikat imtihonlariga professional tayyorgarlik
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            fontSize: 18,
            opacity: 0.5,
          }}
        >
          Ishtixon tumani, Samarqand viloyati
        </div>
      </div>
    ),
    { ...size }
  );
}
