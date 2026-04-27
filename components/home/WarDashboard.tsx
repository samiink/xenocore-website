"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const warStats = [
  { label: "Faction Pressure", value: 72 },
  { label: "Signal Corruption", value: 58 },
  { label: "Core Instability", value: 64 },
  { label: "Hidden Activity", value: 39 },
];

export default function WarDashboard() {
  const { activeFaction } = useFactionTheme();

  return (
    <section
      id="war"
      className="relative overflow-hidden bg-transparent px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="text-xs font-black uppercase tracking-[0.42em]"
            style={{ color: activeFaction.secondary }}
          >
            LIVE WAR SYSTEM
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            War Dashboard
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            The conflict is active. Every faction is pushing the system beneath
            the visible layer.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-7 backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.045)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.32)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
              }}
            />

            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-white/35">
                  Current Alignment
                </p>

                <h3
                  className="mt-4 text-3xl font-black uppercase tracking-[-0.04em]"
                  style={{ color: activeFaction.secondary }}
                >
                  {activeFaction.name}
                </h3>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="hidden h-16 w-16 rounded-full border border-white/10 sm:block"
                style={{
                  borderTopColor: activeFaction.primary,
                  borderRightColor: `${activeFaction.primary}55`,
                }}
              />
            </div>

            <div className="mt-10 space-y-7">
              {warStats.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/68">
                      {item.label}
                    </span>

                    <span
                      className="text-sm font-black"
                      style={{ color: activeFaction.secondary }}
                    >
                      {item.value}%
                    </span>
                  </div>

                  <div
                    className="h-2 overflow-hidden rounded-full"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{
                        duration: 1.15,
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${activeFaction.primary}, ${activeFaction.secondary})`,
                        boxShadow: `0 0 18px ${activeFaction.primary}55`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-7 backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.32)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
              }}
            />

            <p className="text-xs font-black uppercase tracking-[0.34em] text-white/35">
              System Status
            </p>

            <h3 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em]">
              Conflict Active
            </h3>

            <p className="mt-5 text-sm leading-8 text-white/58">
              Core stability is fluctuating. Unknown signals are detected
              beneath the war layer. The selected faction is influencing the
              live interface state.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 p-5">
              <p
                className="text-[10px] font-black uppercase tracking-[0.32em]"
                style={{ color: activeFaction.secondary }}
              >
                live protocol output
              </p>

              <div className="mt-5 space-y-3 font-mono text-sm text-white/58">
                <p>{"> scanning faction pressure..."}</p>
                <p>{"> decoding hidden signal..."}</p>
                <p style={{ color: activeFaction.secondary }}>
                  {"> active faction synced"}
                </p>
                <p>{"> war layer unstable"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}