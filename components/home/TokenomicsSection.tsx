"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const tokenData = [
  { label: "Faction Rewards", value: 35 },
  { label: "Liquidity", value: 25 },
  { label: "Protocol Growth", value: 20 },
  { label: "Community Vault", value: 15 },
  { label: "Hidden Reserve", value: 5 },
];

export default function TokenomicsSection() {
  const { activeFaction } = useFactionTheme();

  return (
    <section
      id="tokenomics"
      className="relative overflow-hidden bg-transparent px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="text-xs font-black uppercase tracking-[0.42em]"
            style={{ color: activeFaction.secondary }}
          >
            XENOCORE ECONOMY
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Tokenomics
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            Built for faction competition, community expansion, and protocol
            survival beneath the visible market layer.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-7 backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.045)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
              }}
            />

            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/40">
              Total Supply
            </p>

            <h3 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-6xl">
              1,000,000,000
            </h3>

            <p
              className="mt-3 text-sm font-black uppercase tracking-[0.3em]"
              style={{ color: activeFaction.secondary }}
            >
              XENO
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border border-white/10 p-4"
                style={{ background: "rgba(0,0,0,0.18)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                  Tax
                </p>
                <p className="mt-2 text-2xl font-black">0/0</p>
              </div>

              <div
                className="rounded-2xl border border-white/10 p-4"
                style={{ background: "rgba(0,0,0,0.18)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                  Status
                </p>
                <p className="mt-2 text-2xl font-black">Locked</p>
              </div>
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
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
              }}
            />

            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/40">
              Allocation Matrix
            </p>

            <div className="mt-8 space-y-6">
              {tokenData.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/72">
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

            <div
              className="mt-10 rounded-2xl border border-white/10 p-5"
              style={{ background: "rgba(0,0,0,0.16)" }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-[0.32em]"
                style={{ color: activeFaction.secondary }}
              >
                protocol note
              </p>

              <p className="mt-4 text-sm leading-7 text-white/58">
                Exact contract details, lock records, and launch parameters
                should be published only after final deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}