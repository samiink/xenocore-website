"use client";

const navItems = [
  { label: "Factions", href: "#factions" },
  { label: "War", href: "#war" },
  { label: "Lore", href: "#lore" },
  { label: "Signal", href: "#signal" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <div
        className="mx-auto flex max-w-[1480px] items-center justify-between rounded-full border border-white/10 px-5 py-3 backdrop-blur-xl"
        style={{ background: "rgba(0,0,0,0.12)" }}
      >
        <a href="#" className="text-sm font-black uppercase tracking-[0.24em]">
          XENOCORE
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}