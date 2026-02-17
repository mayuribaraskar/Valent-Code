"use client";

import { Card, Button, GifBox } from "../component1";

export default function NoPage() {
  return (
    <div style={bg}>
      <Card>
        <h1 style={{ margin: "0 0 8px" }}>Why did u click no!? 😤</h1>
        <p style={{ margin: "0 0 10px", color: "rgba(11,27,43,0.72)" }}>
          Try again… you know the correct answer 🥺💕
        </p>

        <GifBox src="/images/dudu-no-page.mp4" />

        <Button text="TRY AGAIN 💗" link="/valent" />
      </Card>
    </div>
  );
}

const bg = { minHeight: "100vh", display: "grid", placeItems: "center", padding: 18 };
