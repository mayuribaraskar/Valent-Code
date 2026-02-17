"use client";

import React, { useRef, useState } from "react";
import { Card, Button, GifBox } from "../component1";

export default function Day1() {
  const memories = [
    {
      src: "/images/rose1.jpg",
      title: "Our Rose Day Moment 2020 🌹",
      caption: "That smile… my favorite memory 💗",
      song: "/music/Aise-tu.mp3",
    },
    {
      src: "/images/rose3.jpg",
      title: "A Little Surprise 🎁",
      caption: "You made the day feel magical ✨",
      song: "/music/Aamran.mp3",
    },
    {
      src: "/images/rose2.jpg",
      title: "Us, Always 🫶",
      caption: "My comfort place is you 🥺💕",
      song: "/music/Jo-pyaar.mp3",
    },
  ];

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [opened, setOpened] = useState<Record<number, boolean>>({});

  // ✅ Tap card to open → auto play song
  const toggleOpen = async (idx: number) => {
    const willOpen = !opened[idx];

    // update state
    setOpened((p) => ({ ...p, [idx]: willOpen }));

    const current = audioRefs.current[idx];
    if (!current) return;

    // stop all other audios
    audioRefs.current.forEach((a, i) => {
      if (!a) return;
      if (i !== idx) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // if closing -> stop this one
    if (!willOpen) {
      current.pause();
      current.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    // if opening -> play this one
    try {
      await current.play();
      setPlayingIndex(idx);
    } catch (e) {
      console.error(e);
    }
  };

  const onEnded = (index: number) => {
    if (playingIndex === index) setPlayingIndex(null);
  };

  return (
    <div style={styles.bg}>
      <Card>
        <h1>Day 1 — Happy Rose Day 🌹</h1>
        <p style={styles.sub}>From Mayuri → To My Pookie Husbund</p>

        <GifBox src="/images/dudu-roseday-page.mp4" />

        <p style={styles.msg}>
          Today is about love, just like a beautiful rose. You bring color to my
          life and happiness to my heart. Every moment with you feels special,
          and I’m so lucky to have you. 💗
        </p>

        <div style={styles.row}>
          <Button text="⟵ Back" link="/valent" />
          <Button text="Next ➜" link="/valent/day-2" />
        </div>

        <div style={styles.memoriesWrap}>
          <div style={styles.memoriesTitle}>Old Rose Day Memories 💐</div>

          <div style={styles.cardsGrid}>
            {memories.map((m, idx) => {
              return (
                <div key={idx} style={styles.photoCard}>
                  <div style={styles.photoFrame}>
                    <div
                      style={styles.doorStage}
                      onClick={() => toggleOpen(idx)}
                      role="button"
                      aria-label="Tap to open memory"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") toggleOpen(idx);
                      }}
                    >
                      {/* ✅ FULL image (no cut): contain */}
                      <img src={m.src} alt={m.title} style={styles.photo} />

                      {/* door cover */}
                      <div
                        style={{
                          ...styles.doorCover,
                          ...(opened[idx]
                            ? styles.doorCoverOpen
                            : styles.doorCoverClosed),
                        }}
                      />

                      {/* button text on cover */}
                      {!opened[idx] && (
                        <div style={styles.tapHintBtn}>Tap to Open 💝</div>
                      )}

                      {/* Hidden audio element */}
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

                  <div style={styles.cardText}>
                    <div style={styles.cardTitle}>{m.title}</div>
                    <div style={styles.cardCaption}>{m.caption}</div>

                    {/* ✅ removed Play Song button (song plays on open) */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={styles.foot}>Day 1 / 7</div>
      </Card>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bg: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 18,
  },

  sub: { color: "rgba(11,27,43,0.72)" },

  msg: {
    maxWidth: 650,
    margin: "0 auto 18px",
    color: "rgba(11,27,43,0.78)",
    lineHeight: 1.6,
    textAlign: "center",
  },

  row: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 18,
  },

  foot: { marginTop: 14, fontSize: 12, color: "rgba(11,27,43,0.55)" },

  memoriesWrap: {
    marginTop: 6,
    paddingTop: 10,
  },

  memoriesTitle: {
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: 0.3,
    color: "rgba(11,27,43,0.75)",
    marginBottom: 12,
    textAlign: "center",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },

  photoCard: {
    background: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 18,
    overflow: "hidden",
    boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
  },

  photoFrame: {
    width: "100%",
    // aspectRatio: "4 / 3", // keep same card size
    background:
      "linear-gradient(135deg, rgba(255,78,136,0.12), rgba(120,150,255,0.12))",
    display: "grid",
    placeItems: "center",
  },

  doorStage: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    cursor: "pointer",
  },

  // ✅ FULL image visible without cutting
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // ✅ was cover (cover cuts)
    display: "block",
  },

  doorCover: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, #ff4e88 0%, #ff7aa8 40%, #ffd1e1 100%)",
    transformOrigin: "left center",
    backfaceVisibility: "hidden",
    willChange: "transform",
    boxShadow: "inset -16px 0 28px rgba(0,0,0,0.18)",
    transition: "transform 2200ms cubic-bezier(.12, 1, .22, 1)", // ✅ slower + smooth
  },

  doorCoverClosed: {
    transform: "perspective(1400px) rotateY(0deg)",
  },

  doorCoverOpen: {
    transform: "perspective(1400px) rotateY(-95deg)",
  },

  tapHintBtn: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 14,
    padding: "12px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.88)",
    color: "#0b1b2b",
    fontWeight: 900,
    fontSize: 13,
    textAlign: "center",
    backdropFilter: "blur(6px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
  },

  cardText: {
    padding: "10px 12px 12px",
    textAlign: "center",
  },

  cardTitle: {
    fontWeight: 900,
    fontSize: 13,
    color: "#0b1b2b",
    marginBottom: 4,
  },

  cardCaption: {
    fontSize: 12,
    color: "rgba(11,27,43,0.72)",
    lineHeight: 1.4,
    marginBottom: 6,
  },
};
