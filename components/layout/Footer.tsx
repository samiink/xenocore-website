"use client";

import { motion } from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const footerLinks = [
  { label: "Factions", href: "#factions" },
  { label: "War", href: "#war" },
  { label: "Lore", href: "#lore" },
  { label: "Signal", href: "#signal" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

const socials = ["X", "Telegram", "Discord"];

export default function Footer() {
  const { activeFaction } = useFactionTheme();

  return (
    <footer className="relative overflow-hidden bg-transparent px-4 pb-10 pt-20 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-[1240px] overflow-hidden rounded-[32px] border border-white/10 p-8 backdrop-blur-xl"
        style={{
          background: "rgba(255,255,255,0.035)",
          boxShadow: "0 25px 70px rgba(0,0,0,0.32)",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
          }}
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.22em]">
              XENOCORE
            </p>
            <p
              className="mt-3 text-[10px] font-black uppercase tracking-[0.34em]"
              style={{ color: activeFaction.secondary }}
            >
              Last Human Protocol
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/52">
              A cinematic faction-driven protocol built around hidden signals,
              fractured systems, and the final trace of human resistance.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white/48 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35">
              Network
            </p>

            <div className="mt-5 flex flex-wrap gap-3 lg:justify-end">
              {socials.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/58 transition hover:scale-[1.03] hover:text-white"
                  style={{ background: "rgba(0,0,0,0.16)" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] font-black uppercase tracking-[0.22em] text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 XENOCORE</p>
          <p>System Layer: Active / Signal: Restricted</p>
        </div>
      </motion.div>
    </footer>
  );
}