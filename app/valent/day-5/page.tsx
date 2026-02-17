"use client";

import React, { useRef, useState } from "react";
import { Card, Button, GifBox } from "../component1";

export default function Page() {
  // ✅ Memories (images + songs)
  const memories = [
    {
      src: "/images/ning1.png",
      title: "Forever With You 🤍",
      caption: "A promise to always stand beside you 💗",
      song: "/music/bin-mange.mp3",
    },
    {
      src: "/images/nan2.jpg",
      title: "Always There ✨",
      caption: "No matter what… I’ll never leave your side 🥺",
      song: "/music/tune-thama.mp3",
    },
    {
      src: "/images/nan3.jpg",
      title: "Us, Forever 💕",
      caption: "Every tomorrow, every moment… with you 😘",
      song: "/music/kitne-phool.mp3",
    },

    // ✅ Added 2 more cards (below)
    {
      src: "/images/pr23.jpg",
      title: "My Safe Place 🫶",
      caption: "With you, I feel calm, loved, and complete 💗",
      song: "/music/Mai-terhi.mp3",
    },
    {
      src: "/images/pr24.jpg",
      title: "Forever Promise 💍",
      caption: "I’ll choose you in every life, every time 😘",
      song: "/music/in-hath.mp3",
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
        <h1>🤝 Day 5 — Promise Day 🤝</h1>

        <GifBox src="/images/promise.mp4" />

        <p style={msg}>
          I promise to stand by you, support you, and love you always. 💗
          <br />
          No matter what happens, I’ll never leave your side. 😘
        </p>

        <div style={row}>
          <Button text="⟵ Back" link="/valent/day-4" />
          <Button text="Next ➜" link="/valent/day-6" />
        </div>

        {/* ✅ Memories + Songs */}
        <div style={memoriesWrap}>
          <div style={memoriesTitle}>Our Promises 🎶🤍</div>

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

          <div style={smallNote}>
            Songs: <b>/public/music/rose1.mp3</b>, <b>rose2.mp3</b>,{" "}
            <b>rose3.mp3</b>
            <br />
            Images: add your new images too:
            <b> nan4.jpg</b>, <b>nan5.jpg</b>
          </div>
        </div>

        <div style={foot}>Day 5 / 7</div>
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

/* ✅ Change grid to auto-wrap nicely (3 on top, 2 below) */
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
