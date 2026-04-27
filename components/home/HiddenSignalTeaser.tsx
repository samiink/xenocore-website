"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

export default function HiddenSignalTeaser() {
  const { activeFaction } = useFactionTheme();

  return (
    <section
      id="signal"
      className="relative overflow-hidden bg-transparent px-4 py-28 text-white sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs font-black uppercase tracking-[0.42em]"
            style={{ color: activeFaction.secondary }}
          >
            SIGNAL DETECTED
          </p>

          <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Hidden Transmission
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            A signal is leaking through the system layer. It changes based on
            the faction connected to the protocol.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-white/10 p-7 backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        >
          {/* glow line */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
            }}
          />

          {/* scan line */}
          <motion.div
            animate={{ y: ["-20%", "120%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-40"
          />

          {/* terminal header */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-white/40">
              SIGNAL LOG
            </p>

            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: activeFaction.primary,
                boxShadow: `0 0 12px ${activeFaction.primary}`,
              }}
            />
          </div>

          {/* terminal content */}
          <div className="space-y-3 font-mono text-sm text-white/60">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {"> initializing scan..."}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {"> decrypting layer 7..."}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-red-400"
            >
              {"> access denied"}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {"> retrying..."}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ color: activeFaction.secondary }}
            >
              {"> faction resonance detected"}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ color: activeFaction.secondary }}
            >
              {`> synced with ${activeFaction.name}`}
            </motion.p>
          </div>

          {/* glitch pulse */}
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2"
            style={{
              background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
              boxShadow: `0 0 18px ${activeFaction.primary}`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}