"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Contract", value: "Coming Soon" },
  { label: "Network", value: "Base / Ethereum" },
  { label: "Ticker", value: "$XENO" },
  { label: "Status", value: "Protocol Locked" },
];

export default function ContractInfoStrip() {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 p-4 text-center backdrop-blur-xl"
              style={{ background: "rgba(0,0,0,0.14)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/35">
                {item.label}
              </p>

              <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-white/75">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}