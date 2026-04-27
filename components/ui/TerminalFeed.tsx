const lines = [
  "> initializing protocol...",
  "> scanning faction layer...",
  "> hidden signal detected",
  "> access route unstable",
  "> XENOCORE online",
];

export default function TerminalFeed() {
  return (
    <div
      className="rounded-[24px] border border-white/10 p-5 font-mono text-sm backdrop-blur-xl"
      style={{ background: "rgba(0,0,0,0.16)" }}
    >
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
        Terminal Feed
      </p>

      <div className="space-y-3 text-white/55">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}