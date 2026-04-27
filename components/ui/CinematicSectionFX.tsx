"use client";

export default function CinematicSectionFX() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* پایه تیره سینمایی */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020305_0%,#05060a_48%,#020305_100%)]" />

      {/* گرید خیلی ظریف */}
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:82px_82px]" />

      {/* نور خطی سینمایی، نه دایره‌ای */}
      <div className="absolute left-0 top-[18%] h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute left-0 bottom-[16%] h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/12 to-transparent" />

      {/* وینیت سنگین برای عمق */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_88%)]" />

      {/* نویز سینمایی خیلی نرم */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* سایه بالا و پایین */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}