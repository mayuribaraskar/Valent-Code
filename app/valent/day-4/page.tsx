"use client";

import React, { useRef, useState } from "react";
import { Card, Button, GifBox } from "../component1";

export default function Page() {
  // ✅ Only ONE memory
  const memory = {
    src: "/images/teddy-2.jpg",
    title: "A Soft Hug 🧸",
    caption: "This teddy carries my hug to you… always 🤍",
    song: "/music/Tere-binana.mp3",
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const current = audioRef.current;
    if (!current) return;

    if (!current.paused) {
      current.pause();
      setPlaying(false);
      return;
    }

    try {
      await current.play();
      setPlaying(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={bg}>
      <Card>
        <h1>🧸 Day 4 — Teddy Day 🧸</h1>

        <GifBox src="/images/teddy.gif" />

        <p style={msg}>
          This teddy is just a small hug from me. 🤗
          <br />
          Whenever you feel low, remember I’m always with you. 💗
        </p>

        <div style={row}>
          <Button text="⟵ Back" link="/valent/day-3" />
          <Button text="Next ➜" link="/valent/day-5" />
        </div>

        {/* ✅ Single Center Card */}
        <div style={memoriesWrap}>
          <div style={memoriesTitle}>Teddy Memory 🎶🧸</div>

          <div style={centerWrap}>
            <div style={photoCard}>
              <div style={photoFrame}>
                <img src={memory.src} alt={memory.title} style={photo} />
              </div>

              <div style={cardText}>
                <div style={cardTitle}>{memory.title}</div>
                <div style={cardCaption}>{memory.caption}</div>

                <button
                  type="button"
                  onClick={togglePlay}
                  style={{
                    ...playBtn,
                    ...(playing ? playBtnActive : {}),
                  }}
                >
                  {playing ? "⏸ Pause Song" : "💗 Play Song"}
                </button>

                <audio
                  ref={audioRef}
                  src={memory.song}
                  preload="metadata"
                  onEnded={() => setPlaying(false)}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={foot}>Day 4 / 7</div>
      </Card>
    </div>
  );
}

/* styles */

const bg = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: 18,
} as const;

const msg = {
  maxWidth: 650,
  margin: "0 auto 18px",
  lineHeight: 1.6,
  textAlign: "center",
} as const;

const row = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: 14,
} as const;

const foot = {
  marginTop: 10,
  fontSize: 12,
  opacity: 0.7,
  textAlign: "center",
} as const;

const memoriesWrap = {
  marginTop: 10,
} as const;

const memoriesTitle = {
  fontSize: 14,
  fontWeight: 900,
  textAlign: "center",
  marginBottom: 12,
} as const;

/* ✅ center card */
const centerWrap = {
  display: "flex",
  justifyContent: "center",
} as const;

const photoCard = {
  width: 260,
  background: "rgba(255,255,255,0.85)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
} as const;

const photoFrame = {
  width: "100%",
  padding: 8,
  background: "rgba(255,255,255,0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as const;

const photo = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display:"block",
} as const;

const cardText = {
  padding: 12,
  textAlign: "center",
} as const;

const cardTitle = {
  fontWeight: 900,
  fontSize: 14,
  marginBottom: 6,
} as const;

const cardCaption = {
  fontSize: 12,
  marginBottom: 10,
} as const;

const playBtn = {
  border: "none",
  cursor: "pointer",
  padding: "8px 14px",
  borderRadius: 999,
  fontWeight: 900,
  background: "linear-gradient(90deg, #ff4e88, #ff7aa8)",
  color: "white",
} as const;

const playBtnActive = {
  background: "linear-gradient(90deg, #6d28d9, #ec4899)",
} as const;
