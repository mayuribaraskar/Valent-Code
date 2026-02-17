"use client";

import Link from "next/link";
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "min(900px, 92vw)",
        background: "rgba(255,255,255,0.78)",
        border: "1px solid rgba(0,0,0,0.06)",
        backdropFilter: "blur(14px)",
        borderRadius: 28,
        boxShadow: "0 26px 80px rgba(0,0,0,0.12)",
        padding: "32px 26px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: 999,
            background: "rgba(255, 80, 140, 0.16)",
            top: -120,
            left: -120,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: 999,
            background: "rgba(120, 150, 255, 0.14)",
            bottom: -150,
            right: -150,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

export function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} style={{ textDecoration: "none" }}>
      <button
        style={{
          border: "none",
          cursor: "pointer",
          padding: "12px 20px",
          borderRadius: 999,
          fontWeight: 900,
          letterSpacing: 0.2,
          background: "linear-gradient(90deg, #ff4e88, #ff7aa8)",
          color: "white",
          boxShadow: "0 14px 30px rgba(255,78,136,0.28)",
        }}
      >
        {text}
      </button>
    </Link>
  );
}

export function GifBox({ src }: { src: string }) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <div
      style={{
        width: "min(240px, 70vw)",
        height: "min(240px, 70vw)",
        margin: "14px auto 18px",
        borderRadius: 22,
        overflow: "hidden",
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isVideo ? (
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "contain" }}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      )}
    </div>
  );
}
