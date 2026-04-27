"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const phases = [
  {
    phase: "PHASE 01",
    title: "Protocol Awakening",
    text: "Launch the XENOCORE identity, faction system, cinematic website, and hidden signal layer.",
    status: "ACTIVE",
  },
  {
    phase: "PHASE 02",
    title: "Faction Expansion",
    text: "Grow faction-based community channels, social campaigns, lore drops, and interactive faction mechanics.",
    status: "NEXT",
  },
  {
    phase: "PHASE 03",
    title: "Token Deployment",
    text: "Deploy contract, publish verified launch details, open liquidity, and activate the public token layer.",
    status: "LOCKED",
  },
  {
    phase: "PHASE 04",
    title: "War Layer Activation",
    text: "Introduce faction missions, leaderboard systems, signal events, and advanced Web3 integrations.",
    status: "HIDDEN",
  },
];

export default function RoadmapSection() {
  const { activeFaction } = useFactionTheme();

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#020305] px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020305_0%,#05060a_50%,#020305_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:82px_82px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.88)_88%)]" />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.42em]" style={{ color: activeFaction.secondary }}>
            SYSTEM ROADMAP
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            The protocol unfolds in layers.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            XENOCORE is structured as a staged expansion: identity first,
            community second, token layer third, and war mechanics after the protocol gains traction.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="grid gap-6">
            {phases.map((item, index) => (
              <motion.article
                key={item.phase}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:ml-12"
              >
                <div
                  className="absolute -left-[61px] top-8 hidden h-8 w-8 rounded-full border bg-[#020305] md:block"
                  style={{ borderColor: `${activeFaction.primary}66` }}
                />

                <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr_0.22fr] lg:items-center">
                  <p className="text-xs font-black uppercase tracking-[0.34em]" style={{ color: activeFaction.secondary }}>
                    {item.phase}
                  </p>

                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
                      {item.text}
                    </p>
                  </div>

                  <div className="lg:text-right">
                    <span
                      className="inline-flex rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em]"
                      style={{
                        borderColor: `${activeFaction.primary}55`,
                        color: activeFaction.secondary,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}