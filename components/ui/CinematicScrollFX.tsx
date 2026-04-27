"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

export default function CinematicScrollFX() {
  const { activeFaction } = useFactionTheme();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      
      <motion.div
        style={{
          y,
          opacity,
          background: `radial-gradient(circle at center, ${activeFaction.primary}33 0%, transparent 50%)`,
        }}
        className="absolute inset-[-20%] blur-[100px]"
      />

      <motion.div
        style={{
          opacity,
          background: `linear-gradient(120deg, transparent, ${activeFaction.secondary}22, transparent)`,
        }}
        className="absolute inset-0"
      />

    </div>
  );
}