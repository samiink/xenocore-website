"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const loreCards = [
  {
    code: "01",
    title: "THE SPLIT",
    text: "The system divided humanity into four operational factions before anyone understood the war had already begun.",
  },
  {
    code: "02",
    title: "THE HIDDEN CORE",
    text: "Beneath every signal, every command, and every faction order, something older is still transmitting.",
  },
  {
    code: "03",
    title: "THE LAST HUMAN",
    text: "XENOCORE is not just a protocol. It is the final trace of human resistance inside a machine-led world.",
  },
];

export default function LorePreview() {
  const { activeFaction } = useFactionTheme();

  return (
    <section
      id="lore"
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
            LORE ARCHIVE
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            The truth was buried before the war began.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            XENOCORE is built around a hidden narrative layer: faction conflict,
            corrupted signals, and the last human protocol buried inside the
            system.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {loreCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/10 p-7 backdrop-blur-xl"
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

              <div
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-20"
                style={{ background: activeFaction.primary }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-black tracking-[0.3em]"
                    style={{ color: activeFaction.secondary }}
                  >
                    {card.code}
                  </span>

                  <span className="h-px w-20 bg-white/15" />
                </div>

                <h3 className="mt-12 text-2xl font-black uppercase tracking-[-0.04em]">
                  {card.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/58">
                  {card.text}
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-px w-full bg-white/10" />
                  <p className="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-white/36">
                    archive fragment unlocked
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 p-7 backdrop-blur-xl sm:p-8"
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

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p
                className="text-xs font-black uppercase tracking-[0.36em]"
                style={{ color: activeFaction.secondary }}
              >
                RESTRICTED MEMORY
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em]">
                The system remembers what humans forgot.
              </h3>
            </div>

            <p className="text-sm leading-8 text-white/58 sm:text-base">
              Every faction believes it controls part of the future. But the
              hidden protocol is not choosing a winner. It is testing who is
              still human enough to read the signal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}