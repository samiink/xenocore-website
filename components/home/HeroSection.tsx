"use client";

import { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useFactionTheme } from "../../src/context/FactionThemeContext";

const navItems = [
  { label: "Factions", href: "#factions" },
  { label: "War", href: "#war" },
  { label: "Lore", href: "#lore" },
  { label: "Signal", href: "#signal" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

const socials = ["X", "Telegram", "Discord"];

export default function HeroSection() {
  const { activeFaction } = useFactionTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-18px", "18px"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-12px", "12px"]);
  const contentX = useTransform(mouseX, [-0.5, 0.5], ["8px", "-8px"]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], ["6px", "-6px"]);

  const glitchControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      glitchControls.start({
        x: [0, -2, 2, -1, 1, 0],
        filter: [
          "blur(0px)",
          "blur(1px)",
          "blur(0px)",
          "blur(1px)",
          "blur(0px)",
        ],
        transition: { duration: 0.25 },
      });
    }, 4200);

    return () => clearInterval(interval);
  }, [glitchControls]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden px-3 py-3 text-white sm:px-6 sm:py-4 lg:px-8"
    >
      <div className="relative mx-auto min-h-[calc(100vh-24px)] max-w-[1480px] overflow-hidden rounded-[26px] border border-white/10 bg-[#020203] shadow-[0_40px_120px_rgba(0,0,0,0.95)] sm:min-h-[calc(100vh-32px)] sm:rounded-[34px]">
        <motion.div
          className="absolute inset-[-34px] bg-cover bg-center opacity-100"
          style={{
            x: bgX,
            y: bgY,
            backgroundImage: "url('/branding/hero-human-machine.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.46)_28%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.46)_72%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.22)_62%,rgba(0,0,0,0.9)_100%)]" />

        <motion.div
          className="absolute left-1/2 top-[56%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] sm:h-[560px] sm:w-[560px]"
          style={{
            x: contentX,
            y: contentY,
            background: `radial-gradient(circle, ${activeFaction.primary}38 0%, rgba(255,0,0,0.10) 28%, transparent 68%)`,
          }}
        />

        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:84px_84px]" />
        <div className="absolute inset-0 opacity-[0.075] [background-image:radial-gradient(rgba(255,255,255,0.4)_0.6px,transparent_0.6px)] [background-size:5px_5px]" />

        <motion.div
          animate={{ y: ["-20%", "120%"] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-0 top-0 z-20 h-24 w-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-25 sm:h-32 sm:opacity-35"
        />

        <motion.div
          animate={{
            opacity: [0.12, 0.45, 0.12],
            scaleX: [0.75, 1, 0.75],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-[70%] z-20 h-px w-[70%] -translate-x-1/2 sm:w-[68%]"
          style={{
            background: `linear-gradient(to right, transparent, ${activeFaction.primary}, transparent)`,
            boxShadow: `0 0 24px ${activeFaction.primary}`,
          }}
        />

        <div className="pointer-events-none absolute left-5 top-24 z-20 h-12 w-12 border-l border-t border-white/20 sm:left-8 sm:h-16 sm:w-16" />
        <div className="pointer-events-none absolute right-5 top-24 z-20 h-12 w-12 border-r border-t border-white/20 sm:right-8 sm:h-16 sm:w-16" />
        <div className="pointer-events-none absolute bottom-24 left-5 z-20 h-12 w-12 border-b border-l border-white/20 sm:left-8 sm:h-16 sm:w-16" />
        <div className="pointer-events-none absolute bottom-24 right-5 z-20 h-12 w-12 border-b border-r border-white/20 sm:right-8 sm:h-16 sm:w-16" />

        <header className="relative z-30 flex items-center justify-between px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-2xl border shadow-[0_0_22px_rgba(212,175,55,0.22)] sm:h-11 sm:w-11"
              style={{
                borderColor: `${activeFaction.primary}80`,
                background: "rgba(0,0,0,0.82)",
              }}
            >
              <span
                className="text-sm font-black tracking-[-0.08em]"
                style={{ color: activeFaction.secondary }}
              >
                X
              </span>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white sm:text-sm sm:tracking-[0.24em]">
                XENOCORE
              </p>
              <p
                className="text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.28em]"
                style={{ color: activeFaction.secondary }}
              >
                Last Human Protocol
              </p>
            </div>
          </div>

          <nav
            className="hidden items-center gap-6 rounded-full border border-white/10 px-6 py-3 lg:flex"
            style={{
              background: "rgba(0,0,0,0.78)",
              boxShadow: "0 0 35px rgba(0,0,0,0.55)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-black uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <motion.div
          style={{ x: contentX, y: contentY }}
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-1/2 top-[64%] z-30 flex w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col items-center px-5 text-center sm:top-[70%] lg:top-[76%]"
        >
          <div
            className="mb-4 inline-flex items-center gap-3 rounded-full border px-3 py-2 shadow-[0_0_30px_rgba(212,175,55,0.18)] sm:mb-5 sm:px-4"
            style={{
              borderColor: `${activeFaction.primary}80`,
              background: "rgba(0,0,0,0.82)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full shadow-[0_0_16px_currentColor]"
              style={{
                backgroundColor: activeFaction.primary,
                color: activeFaction.primary,
              }}
            />
            <span
              className="text-[9px] font-black uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.25em]"
              style={{ color: activeFaction.secondary }}
            >
              LAST HUMAN PROTOCOL INITIATED
            </span>
          </div>

          <div className="relative">
            <motion.h1
              animate={glitchControls}
              className="absolute left-[-2px] top-0 text-[42px] font-black uppercase leading-[0.86] tracking-[-0.06em] text-red-500 opacity-20 sm:text-[72px] md:text-[92px]"
            >
              XENOCORE
            </motion.h1>

            <motion.h1
              animate={glitchControls}
              className="absolute left-[2px] top-0 text-[42px] font-black uppercase leading-[0.86] tracking-[-0.06em] text-blue-500 opacity-20 sm:text-[72px] md:text-[92px]"
            >
              XENOCORE
            </motion.h1>

            <motion.h1
              animate={glitchControls}
              className="relative text-[42px] font-black uppercase leading-[0.86] tracking-[-0.06em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.95)] sm:text-[72px] md:text-[92px]"
            >
              XENOCORE
            </motion.h1>

            <motion.div
              animate={{
                opacity: [0.12, 0.34, 0.12],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -z-10 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] sm:h-[190px] sm:w-[190px] sm:blur-[80px]"
              style={{ background: activeFaction.primary }}
            />
          </div>

          <p className="mt-4 max-w-xl text-base font-black tracking-[-0.04em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] sm:mt-5 sm:text-2xl">
            The system chose sides. You didn’t.
          </p>

          <p className="mt-3 max-w-[560px] text-xs font-semibold leading-6 text-white/82 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] sm:text-sm sm:leading-7">
            Four factions. One hidden truth. The war is already running beneath
            the surface.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4">
            <a
              href="#factions"
              className="rounded-full border px-7 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] transition hover:scale-[1.03] sm:px-8 sm:text-xs sm:tracking-[0.2em]"
              style={{
                borderColor: `${activeFaction.primary}90`,
                color: activeFaction.secondary,
                background: "rgba(0,0,0,0.86)",
                boxShadow: `0 0 28px ${activeFaction.primary}24`,
              }}
            >
              CHOOSE FACTION
            </a>

            <a
              href="#signal"
              className="rounded-full border border-white/18 px-7 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-white/82 transition hover:scale-[1.03] hover:text-white sm:px-8 sm:text-xs sm:tracking-[0.2em]"
              style={{
                background: "rgba(0,0,0,0.82)",
                boxShadow: "0 0 24px rgba(0,0,0,0.65)",
              }}
            >
              SCAN SIGNAL
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-5 left-5 right-5 z-30 flex items-end justify-between sm:bottom-8 sm:left-10 sm:right-10">
          <a
            href="#factions"
            className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.24em] text-white/70 transition hover:text-white sm:text-[10px] sm:tracking-[0.28em]"
          >
            <span className="h-8 w-px bg-gradient-to-b from-[#d4af37] to-transparent sm:h-9" />
            SCROLL TO EXPLORE
          </a>

          <div className="hidden items-center gap-3 sm:flex">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/66 transition hover:text-white"
                style={{ background: "rgba(0,0,0,0.78)" }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}