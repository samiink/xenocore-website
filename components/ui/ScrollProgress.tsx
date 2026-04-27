"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

export default function ScrollProgress() {
  const { activeFaction } = useFactionTheme();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[99999] h-[2px] w-full origin-left"
      style={{
        scaleX,
        backgroundColor: activeFaction.primary,
        boxShadow: `0 0 18px ${activeFaction.primary}`,
      }}
    />
  );
}