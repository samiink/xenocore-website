"use client";

import { motion } from "framer-motion";
import {
  useFactionTheme,
  type FactionId,
} from "../../src/context/FactionThemeContext";

const factionCopy: Record<FactionId, string> = {
  obsidian:
    "Obsidian Node controls information flow through cold logic and silent surveillance.",
  crimson:
    "Crimson Order turns conflict into command, pressure, and absolute domination.",
  vortex:
    "Vortex Syndicate bends signals, corrupts patterns, and weaponizes chaos.",
  null: "Null Division exists outside the visible protocol. Unknown. Untracked. Unclaimed.",
};

export default function FactionChamber() {
  const { activeFaction, factions, setFaction } = useFactionTheme();

  return (
    <section
      id="factions"
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
            FACTION CHAMBER
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Choose your side.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            Your faction changes the visual system, signal behavior, and the way
            XENOCORE responds to you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {factions.map((faction, index) => {
            const isActive = activeFaction.id === faction.id;

            return (
              <motion.button
                key={faction.id}
                type="button"
                onClick={() => setFaction(faction.id)}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="group relative min-h-[280px] overflow-hidden rounded-[30px] border p-6 text-left backdrop-blur-xl"
                style={{
                  background: isActive
                    ? "rgba(0,0,0,0.28)"
                    : "rgba(255,255,255,0.045)",
                  borderColor: isActive
                    ? `${faction.primary}aa`
                    : "rgba(255,255,255,0.12)",
                  boxShadow: isActive
                    ? `0 0 36px ${faction.primary}22`
                    : "0 18px 50px rgba(0,0,0,0.28)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
                  style={{
                    background: `linear-gradient(to right, transparent, ${faction.primary}, transparent)`,
                  }}
                />

                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-20"
                  style={{ background: faction.primary }}
                />

                <div className="relative z-10 flex min-h-[228px] flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.32em]"
                      style={{ color: faction.secondary }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: faction.primary,
                        boxShadow: isActive
                          ? `0 0 18px ${faction.primary}`
                          : "none",
                      }}
                    />
                  </div>

                  <h3 className="mt-12 text-2xl font-black uppercase tracking-[-0.04em]">
                    {faction.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {factionCopy[faction.id]}
                  </p>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-white/10" />

                    <p
                      className="mt-4 text-[10px] font-black uppercase tracking-[0.28em]"
                      style={{
                        color: isActive
                          ? faction.secondary
                          : "rgba(255,255,255,0.34)",
                      }}
                    >
                      {isActive ? "ACTIVE FACTION" : "SELECT FACTION"}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}