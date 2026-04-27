type SignalCardProps = {
  title: string;
  text: string;
  index?: string;
};

export default function SignalCard({ title, text, index }: SignalCardProps) {
  return (
    <article
      className="rounded-[26px] border border-white/10 p-5 backdrop-blur-xl"
      style={{ background: "rgba(0,0,0,0.14)" }}
    >
      {index ? (
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]">
          {index}
        </p>
      ) : null}

      <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.04em] text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </article>
  );
}