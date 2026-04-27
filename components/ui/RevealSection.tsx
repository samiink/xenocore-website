"use client";

import { motion } from "framer-motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function RevealSection({
  children,
  className = "",
  delay = 0,
}: RevealSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}