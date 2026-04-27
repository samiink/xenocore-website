"use client";

import { useState, type ReactNode } from "react";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

export default function GlowCard({ children }: { children: ReactNode }) {
  const { activeFaction } = useFactionTheme();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="relative h-full rounded-[28px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl transition duration-300"
      style={{
        transform: `perspective(900px) rotateX(${pos.y * -5}deg) rotateY(${
          pos.x * 5
        }deg)`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.55), 0 0 34px ${activeFaction.glow}`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${(pos.x + 0.5) * 100}% ${
            (pos.y + 0.5) * 100
          }%, ${activeFaction.primary}33, transparent 58%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}