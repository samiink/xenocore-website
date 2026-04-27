"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function RevealSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 90,
        scale: 0.98,
        filter: "blur(14px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
    >
      {children}
    </motion.div>
  );
}