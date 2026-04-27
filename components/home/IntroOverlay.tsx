"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(14px)",
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center overflow-hidden text-white"
          style={{
            zIndex: 999999999,
            backgroundColor: "#000000",
          }}
        >
          {/* بکگراند کامل لودینگ، جدا از سایت اصلی */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/branding/xenocore-loading.png')",
            }}
          />

          {/* فقط کمی تاریکی برای کیفیت، نه شفافیت */}
          <div className="absolute inset-0 bg-black/10" />

          {/* لوگو */}
          <motion.img
            src="/branding/xenocore-logo.png"
            alt="XENOCORE Logo"
            initial={{ opacity: 0, scale: 0.7, y: 22 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 h-52 w-52 object-contain sm:h-64 sm:w-64"
          />

          {/* عنوان */}
          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="absolute top-[62%] z-10 text-center"
          >
            <h1 className="text-4xl font-semibold uppercase tracking-[0.36em] text-[#e6d3a3] sm:text-6xl">
              XENOCORE
            </h1>

            <p className="mt-4 text-[10px] uppercase tracking-[0.55em] text-[#d4af37]/65">
              LAST HUMAN PROTOCOL
            </p>
          </motion.div>

          {/* لودینگ بار */}
          <div className="absolute top-[76%] z-10 h-px w-72 overflow-hidden bg-[#d4af37]/20">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}