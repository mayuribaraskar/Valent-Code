"use client";

import { useMemo } from "react";
import { Card, Button, GifBox } from "./component1";

export default function ValentHome() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i + 1,
        left: (i * 7 + 11) % 100,
        size: 14 + (i % 6) * 6,
        delay: (i % 7) * 0.7,
        dur: 10 + (i % 8) * 1.8,
        opacity: 0.08 + (i % 5) * 0.02,
        emoji: ["💗", "💕", "💞", "💓"][i % 4],
      })),
    []
  );

  return (
    <div style={bg}>
      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            position: "absolute",
            top: "-10%",
            left: `${h.left}%`,
            fontSize: h.size,
            opacity: h.opacity,
            animation: `fall ${h.dur}s linear ${h.delay}s infinite`,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {h.emoji}
        </span>
      ))}

      <Card>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", color: "rgba(11,27,43,0.55)" }}>
          7 days of love 💌
        </div>

         
        <h1 style={{ margin: "10px 0", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900 }}>
          Ready for 7 days of love?
        </h1>

         <p> We couldn’t celebrate these 7 days due to time.. so I made them special for you in my own little digital way 💕</p>

        <p style={{ margin: "0 0 10px", color: "rgba(11,27,43,0.72)" }}>
          I made this cute website for you Momos 💗
        </p>

        <GifBox src="/images/dudu-1-page.mp4" />

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button text="YES 💕" link="/valent/day-1" />
          <Button text="NO 🙃" link="/valent/no-page" />
        </div>
      </Card>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(120vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const bg = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: 18,
  position: "relative" as const,
  overflow: "hidden",
  background:
    "radial-gradient(900px 500px at 15% 10%, rgba(255,255,255,0.95), transparent 60%), radial-gradient(800px 520px at 85% 10%, rgba(255,255,255,0.90), transparent 65%), linear-gradient(135deg, #ffe3ee, #ffd3e6, #fff3f7)",
};
