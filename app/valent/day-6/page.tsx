"use client";

import React, { useRef, useState } from "react";
import { Card, Button, GifBox } from "../component1";

export default function Page() {
  // ✅ Memories (images + songs)
  const memories = [
    {
      src: "/images/ga1.jpg",
      title: "Your Arms 🤍",
      caption: "In your arms, I find my peace 💗",
      song: "/music/dekha-tenu1.mp3",
    },
    {
      src: "/images/ga2.jpg",
      title: "Safe With You ✨",
      caption: "Every hug feels like home 🥺",
      song: "/music/mai-agar-1.mp3",
    },
    {
      src: "/images/ga3.jpg",
      title: "Forever Close 💕",
      caption: "Stay this close… always 😘",
      song: "/music/tum-aankhonse.mp3",
    },
  ];

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = async (index: number) => {
    const current = audioRefs.current[index];
    if (!current) return;

    // stop others
    audioRefs.current.forEach((a, i) => {
      if (!a) return;
      if (i !== index) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // toggle current
    if (playingIndex === index && !current.paused) {
      current.pause();
      setPlayingIndex(null);
      return;
    }

    try {
      await current.play();
      setPlayingIndex(index);
    } catch (e) {
      console.error(e);
    }
  };

  const onEnded = (index: number) => {
    if (playingIndex === index) setPlayingIndex(null);
  };

  return (
    <div style={bg}>
      <Card>
        <h1>🤗 Day 6 — Hug Day 🤗</h1>

        <GifBox src="/images/hugday.mp4" />

        <p style={msg}>
          Here’s a warm hug from me to you. 💗
          <br />
          In your arms, I feel safe, happy, and at home. 😘
        </p>

        <div style={row}>
          <Button text="⟵ Back" link="/valent/day-5" />
          <Button text="Next ➜" link="/valent/day-7" />
        </div>

        {/* ✅ Memories + Songs */}
        <div style={memoriesWrap}>
          <div style={memoriesTitle}>Warm Hugs 🎶🤍</div>

          <div style={cardsGrid}>
            {memories.map((m, idx) => {
              const isPlaying = playingIndex === idx;

              return (
                <div key={idx} style={photoCard}>
                  <div style={photoFrame}>
                    <img
                      src={m.src}
                      alt={m.title}
                      style={photo}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>

                  <div style={cardText}>
                    <div style={cardTitle}>{m.title}</div>
                    <div style={cardCaption}>{m.caption}</div>

                    <button
                      type="button"
                      onClick={() => togglePlay(idx)}
                      style={{
                        ...playBtn,
                        ...(isPlaying ? playBtnActive : {}),
                      }}
                    >
                      {isPlaying ? "⏸ Pause Song" : "💗 Play Song"}
                    </button>

                    <audio
                      ref={(el) => {
                        audioRefs.current[idx] = el;
                      }}
                      src={m.song}
                      preload="metadata"
                      onEnded={() => onEnded(idx)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>

        <div style={foot}>Day 6 / 7</div>
      </Card>
    </div>
  );
}

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

/* ✅ Memory styles */
const memoriesWrap = {
  marginTop: 6,
  paddingTop: 10,
} as const;

const memoriesTitle = {
  fontSize: 14,
  fontWeight: 900,
  textAlign: "center",
  marginBottom: 12,
} as const;

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
} as const;

const photoCard = {
  background: "rgba(255,255,255,0.75)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
} as const;

const photoFrame = {
  width: "100%",
  aspectRatio: "4 / 3",
  display: "grid",
  placeItems: "center",
} as const;

const photo = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
} as const;

const cardText = {
  padding: "10px",
  textAlign: "center",
} as const;

const cardTitle = {
  fontWeight: 900,
  fontSize: 13,
  marginBottom: 4,
} as const;

const cardCaption = {
  fontSize: 12,
  marginBottom: 10,
} as const;

const playBtn = {
  border: "none",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: 999,
  fontWeight: 900,
  background: "#ff4e88",
  color: "white",
} as const;

const playBtnActive = {
  background: "#6d28d9",
} as const;

const smallNote = {
  marginTop: 10,
  fontSize: 11,
  textAlign: "center",
} as const;
