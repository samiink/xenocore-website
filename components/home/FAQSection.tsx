"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/constants";
import { RevealSection } from "@/components/ui/RevealSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignalCard } from "@/components/ui/SignalCard";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[14%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/6 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-52 w-52 rounded-full bg-fuchsia-500/6 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <RevealSection>
          <SectionHeading
            eyebrow="Signal Questions"
            title="What you see is not everything."
            description="Key protocol questions, answered at the surface level."
          />
        </RevealSection>

        <div className="mt-12 flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <RevealSection key={item.question} delay={index * 0.05}>
                <SignalCard className="p-0">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-4 px-6 py-5">
                      <p className="font-display text-sm uppercase tracking-[0.18em] text-white sm:text-base">
                        {item.question}
                      </p>

                      <span
                        className={`text-xl transition ${
                          isOpen ? "text-cyan-200" : "text-white/40"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SignalCard>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}