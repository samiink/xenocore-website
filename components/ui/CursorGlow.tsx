"use client";

import { useEffect, useState } from "react";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

export default function CursorGlow() {
  const { activeFaction } = useFactionTheme();

  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* نور نرم اطراف موس */}
      <div
        className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          backgroundColor: activeFaction.primary,
          opacity: 0.13,
        }}
      />

      {/* نقطه مرکزی */}
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          backgroundColor: activeFaction.secondary,
          boxShadow: `0 0 18px ${activeFaction.primary}`,
        }}
      />
    </div>
  );
}