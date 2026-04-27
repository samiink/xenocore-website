type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#d4af37]">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {text ? (
        <p className="mt-6 text-base leading-8 text-white/55 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}