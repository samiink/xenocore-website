type SectionHeadingProps = {
    eyebrow?: string;
        title: string;
              description?: string;
                      className?: string;
                              };
                              
                                      export function SectionHeading({
                                                eyebrow,
                                                     
                                                     ype SectionHeadingProps = {
  eyebrow?: string;
    title: string;
      description?: string;
        className?: string;
        };

        export function SectionHeading({
          eyebrow,
            title,
              description,
                className = "

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
 // fix rebuild