"use client";

export default function BackgroundVideo() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/xenocore-bg.mp4" type="video/mp4" />
      </video>

      {/* 🔻 لایه اصلی تیره (قوی‌تر) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔻 gradient برای تاریک کردن بالا/پایین */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* 🔻 vignette سینمایی (لبه‌ها تاریک‌تر) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

    </div>
  );
}