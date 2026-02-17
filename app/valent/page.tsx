"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { Card, Button, GifBox } from "./component1";

export default function ValentHome() {
  const [openBook, setOpenBook] = useState(false);

  // ✅ Replace / edit these lines with your full 15–20 line Marathi poem
  const poemLines = [
    "तुझ्या सहवासात",
    "शब्दांनाही एक शांत किनारा सापडतो…",
    "आणि माझ्या मनाच्या लाटा",
    "हळूहळू तुझ्यात विरघळून जातात…",

    "",

    "तू असतोस तेव्हा,",
    "वेळही थांबून ऐकते",
    "आपल्या निःशब्द संवादांना…",
    "जिथे बोलणं कमी,",
    "आणि जाणणं जास्त असतं…",

    "", "",

    "तुझ्या सहवासात आयुष्याला",
    "एक शांत लय सापडली आहे…",
    "गोंधळलेल्या दिवसांनाही",
    "तुझ्या शब्दांनी अर्थ मिळतो…",

    "",

    "तू काही मोठ्या वचनांत नाहीस,",
    "ना दिखाऊ स्वप्नांत…",
    "तू आहेस त्या साध्या क्षणांत,",
    "जिथे न बोलताही सगळं समजतं…",

    "",

    "तुझ्या सोबत चालताना",
    "वेळ थांबावा असं कधी वाटत नाही,",
    "कारण प्रत्येक क्षण",
    "तुझ्यामुळे पूर्ण होत जातो…",

    "",

    "तुझं असणं म्हणजे",
    "कसलाही गाजावाजा नसलेली",
    "एक स्थिर, निश्चयी खात्री —",
    "की आयुष्य काहीही देऊ दे,",
    "आपण दोघं एकत्र आहोत…",

    "",

    "उद्या काय असेल,",
    "काळ काय लिहील—",
    "माहीत नाही…",
    "पण आज इतकंच जाणवतं,",
    "की तुझ्या सहवासात",
    "माझं सगळं जग पूर्ण आहे… 💫",

    "",

    "प्रेम व्यक्त करण्यासाठी",
    "मोठ्या शब्दांची गरज नसते म्हणतात…",
    "पण तरीही —",
    "तुझ्यासोबतचं आयुष्य",
    "माझ्यासाठी सर्वात सुंदर कविता आहे…",

    "",

    "आणि त्या कवितेचा",
    "एकमेव अर्थ… तू ❤️",
  ];
  
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

const audioRef = useRef<HTMLAudioElement | null>(null);


  return (
    <div style={bg}>
      {/* Floating hearts */}
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
        <div style={tag}>7 days of love 💌</div>

        <audio ref={audioRef} src="/Music/mitwa.mp3" preload="auto" />


        <h1 style={title}>Ready for 7 days of love?</h1>

        <p>
          We couldn’t celebrate these 7 days due to time.. so I made them special
          for you in my own little digital way 💕
        </p>

        <p style={sub}>I made this cute website for you Momos 💗</p>

        <GifBox src="/images/dudu-1-page.mp4" />

        {/* YES/NO */}
        <div style={btnRow}>
          <Button text="YES 💕" link="/valent/day-1" />
          <Button text="NO 🙃" link="/valent/no-page" />
        </div>

        {/* ✅ BIG NOTEBOOK COVER (opens like door) */}
        <div style={{ marginTop: 18 }}>
          <div style={bookHint}>
            Tap the diary cover to {openBook ? "close" : "open"} 📓
          </div>

                <div
                      style={bookWrap}
                      onClick={() => {
                      setOpenBook((v) => {
                        const next = !v;

                          const audio = audioRef.current;
                          if (audio) {
                            if (next) {
                              audio.volume = 0.25;
                              audio.loop = true;
                              audio.currentTime = 0;
                              audio.play();
                            } else {
                              audio.pause();
                              audio.currentTime = 0;
                            }
                          }

                          return next;
                        });
                      }}

                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setOpenBook((v) => !v);
                      }}
                    >
                      <div style={bookShell}>
                        {/* PAPER BEHIND */}
                        <div style={paperBoard}>
                          <div style={paperBg}>
                            <div style={paperLines} />
                            <div style={paperContent}>
                              <div style={paperTitle}>To प्रिय अर्णव, ✍️</div>

                            {poemLines.map((line, idx) => (
                              <div key={idx} style={poemRow}>
                                <span style={poemText}>{line}</span>
                              </div>
                            ))}


                              <div
                                style={{
                                  marginTop: 16,
                                  fontWeight: 900,
                                  opacity: 0.85,
                                }}
                              >
                                — Always yours 💕
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* COVER (FLIPS) */}
                        <div
                          style={{
                            ...cover,
                            transform: openBook ? "rotateY(-135deg)" : "rotateY(0deg)",
                            boxShadow: openBook
                              ? "0 22px 60px rgba(0,0,0,0.25)"
                              : "0 16px 40px rgba(0,0,0,0.18)",
                          }}
                        >
                          <div style={coverFace}>
                            <div style={coverBadge}>Small Gift</div>
                            <div style={coverTitle}>To My Dear Husbund 📓</div>
                            <div style={coverSub}>
                              {openBook ? "Tap to close" : "Tap to open"}
                            </div>
                            <div style={coverDecor}>💗 💕 💞</div>
                          </div>

                          <div style={spine} />
                        </div>
                      </div>
                  </div>
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

/* ================= STYLES ================= */

const bg: React.CSSProperties = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: 18,
  position: "relative",
  overflow: "hidden",
  background:
    "radial-gradient(900px 500px at 15% 10%, rgba(255,255,255,0.95), transparent 60%), radial-gradient(800px 520px at 85% 10%, rgba(255,255,255,0.90), transparent 65%), linear-gradient(135deg, #ffe3ee, #ffd3e6, #fff3f7)",
};

const tag: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "rgba(11,27,43,0.55)",
};

const title: React.CSSProperties = {
  margin: "10px 0",
  fontSize: "clamp(26px, 4vw, 44px)",
  fontWeight: 900,
};

const sub: React.CSSProperties = {
  margin: "0 0 10px",
  color: "rgba(11,27,43,0.72)",
};

const btnRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  flexWrap: "wrap",
};

/* hint */
const bookHint: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: 1.2,
  textTransform: "uppercase",
  opacity: 0.65,
  textAlign: "center",
  marginBottom: 10,
};

/* big outside size */
const bookWrap: React.CSSProperties = {
  width: "min(860px, 96vw)",
  height: "min(540px, 72vh)",
  marginInline: "auto",
  perspective: 1400,
};

const bookShell: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  borderRadius: 22,
};

/* paper behind */
const paperBoard: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: 22,
  overflow: "hidden",
  background: "rgba(255,255,255,0.95)",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.12)",
};

const paperBg: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  background: "rgba(255,255,255,0.95)",
};

const paperLines: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 28px, rgba(255,0,120,0.10) 29px)",
  pointerEvents: "none",
};

const paperContent: React.CSSProperties = {
  position: "relative",
  height: "100%",
  overflowY: "auto",
  padding: 22,
  paddingLeft: 62,
  lineHeight: 2,
  fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
};

const paperTitle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 500,
  marginBottom: 10,
};

const poemRow: React.CSSProperties = {
  display: "flex",
  gap: 10,
  alignItems: "baseline",
  padding: "2px 0",
};

const lineNo: React.CSSProperties = {
  width: 34,
  opacity: 0.55,
  fontWeight: 900,
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

const poemText: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  color: "rgba(20,20,20,0.92)",
};

/* cover that flips */
const cover: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: 22,
  overflow: "hidden",
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  transition:
    "transform 900ms cubic-bezier(.2,.8,.2,1), box-shadow 900ms cubic-bezier(.2,.8,.2,1)",
  cursor: "pointer",
  backfaceVisibility: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
};

const coverFace: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, #ff77ad, #ff3e7f)",
  display: "grid",
  placeItems: "center",
  padding: 22,
  color: "white",
};

const coverBadge: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.18)",
  border: "1px solid rgba(255,255,255,0.25)",
  fontWeight: 900,
  letterSpacing: 2,
  textTransform: "uppercase",
  fontSize: 12,
};

const coverTitle: React.CSSProperties = {
  marginTop: 12,
  fontSize: "clamp(28px, 4vw, 46px)",
  fontWeight: 900,
  textAlign: "center",
};

const coverSub: React.CSSProperties = {
  marginTop: 10,
  opacity: 0.9,
  fontWeight: 800,
};

const coverDecor: React.CSSProperties = {
  marginTop: 14,
  fontSize: 22,
  letterSpacing: 4,
};

const spine: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: 24,
  background: "rgba(255,255,255,0.16)",
  borderRight: "1px solid rgba(255,255,255,0.22)",
};
