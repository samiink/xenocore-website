"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const accessItems = [
  "Faction identity locked",
  "Signal layer detected",
  "Protocol route active",
];

export default function ProtocolAccessPanel() {
  const { activeFaction } = useFactionTheme();

  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-20 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-[1100px] rounded-[30px] border border-white/10 p-7 backdrop-blur-xl"
        style={{ background: "rgba(0,0,0,0.14)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.36em]"
          style={{ color: activeFaction.secondary }}
        >
          PROTOCOL ACCESS
        </p>

        <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
          Access Layer Online
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {accessItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-4 backdrop-blur-xl"
              style={{ background: "rgba(0,0,0,0.1)" }}
            >
              <p className="text-xs font-semibold text-white/60">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}