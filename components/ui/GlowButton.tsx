type GlowButtonProps = {
  href?: string;
  children: React.ReactNode;
};

export default function GlowButton({
  href = "#",
  children,
}: GlowButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/12 via-sky-400/10 to-fuchsia-500/12 px-6 py-3 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.16)] transition duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.24)]"
    >
      {children}
    </a>
  );
}