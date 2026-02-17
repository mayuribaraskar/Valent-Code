"use client";

import React, { useRef, useState } from "react";
import { Card, Button, GifBox } from "../component1";

export default function Page() {
  const memories = [
  {
    src: "/images/pra121.jpg",  
    title: "The Moment I Chose You 💍",
    caption: "That day, my heart knew… it's always you 💗",
    song: "/music/Julun-Yeti.mp3",
  },
  {
    src: "/images/pra2.jpg",
    title: "A Silent Promise 🤍",
    caption: "Without saying much, I chose you forever 🥺",
    song: "/music/Channa-ve.mp3",
  },
  {
    src: "/images/eng2.jpg",
    title: "Us, Always 💕",
    caption: "Not just today… I choose you every day 😘",
    song: "/music/Tula-Pahata.mp3",
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
        <h1>💍 Day 2 — Propose Day 💍</h1>

        <GifBox src="/images/bubu-dudu-prapose.gif" />

        <p style={msg}>
          I choose you. Today, tomorrow, always. 💗
          <br />
          Will you be mine forever? 😘
        </p>

        <div style={row}>
          <Button text="⟵ Back" link="/valent/day-1" />
          <Button text="Next ➜" link="/valent/day-3" />
        </div>

        {/* ✅ Memories + Songs */}
        <div style={memoriesWrap}>
          <div style={memoriesTitle}>Our Special Memories 🎶💗</div>

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

        <div style={foot}>Day 2 / 7</div>
      </Card>
    </div>
  );
}

/* ✅ Your existing styles */
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
} as const;

/* ✅ Memory cards styles (inline only) */
const memoriesWrap = {
  marginTop: 6,
  paddingTop: 10,
} as const;

const memoriesTitle = {
  fontSize: 14,
  fontWeight: 900,
  letterSpacing: 0.3,
  color: "rgba(11,27,43,0.75)",
  marginBottom: 12,
  textAlign: "center",
} as const;

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
} as const;

const photoCard = {
  background: "rgba(255,255,255,0.75)",
  border: "1px solid rgba(0,0,0,0.06)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
} as const;

const photoFrame = {
  width: "100%",
  aspectRatio: "4 / 3",
  background:
    "linear-gradient(135deg, rgba(255,78,136,0.12), rgba(120,150,255,0.12))",
  display: "grid",
  placeItems: "center",
} as const;

const photo = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const cardText = {
  padding: "10px 12px 12px",
  textAlign: "center",
} as const;

const cardTitle = {
  fontWeight: 900,
  fontSize: 13,
  color: "#0b1b2b",
  marginBottom: 4,
} as const;

const cardCaption = {
  fontSize: 12,
  color: "rgba(11,27,43,0.72)",
  lineHeight: 1.4,
  marginBottom: 10,
} as const;

const playBtn = {
  border: "none",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: 999,
  fontWeight: 900,
  letterSpacing: 0.2,
  background: "linear-gradient(90deg, #ff4e88, #ff7aa8)",
  color: "white",
  boxShadow: "0 12px 26px rgba(255,78,136,0.22)",
} as const;

const playBtnActive = {
  background: "linear-gradient(90deg, #6d28d9, #ec4899)",
  boxShadow: "0 12px 26px rgba(109,40,217,0.22)",
} as const;

const smallNote = {
  marginTop: 10,
  fontSize: 11,
  color: "rgba(11,27,43,0.55)",
  lineHeight: 1.5,
  textAlign: "center",
} as const;
