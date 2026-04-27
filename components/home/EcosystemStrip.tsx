"use client";

import { motion } from "framer-motion";

const ecosystem = [
  "Faction System",
  "Hidden Signal",
  "Lore Layer",
  "War Dashboard",
];

export default function EcosystemStrip() {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="grid gap-4 md:grid-cols-4">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 px-4 py-4 text-center backdrop-blur-xl"
              style={{ background: "rgba(0,0,0,0.12)" }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/60">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}