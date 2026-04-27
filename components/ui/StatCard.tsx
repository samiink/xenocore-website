type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(10,12,18,0.72),rgba(7,9,15,0.64))] p-5 text-center backdrop-blur-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-white/18 hover:bg-[linear-gradient(180deg,rgba(12,15,24,0.8),rgba(8,10,18,0.7))]">
      <p className="text-[11px] uppercase tracking-[0.3em] text-white/52">
        {label}
      </p>

      <p className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-white [text-shadow:0_0_12px_rgba(255,255,255,0.08)] md:text-3xl">
        {value}
      </p>
    </div>
  );
}