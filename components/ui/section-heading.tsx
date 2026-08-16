type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Rendered right after the title with the brand gradient. */
  highlight?: string;
  description?: string;
  /** Left-aligns the block instead of centering it. */
  align?: "center" | "start";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient-brand">{highlight}</span>
          </>
        ) : null}
      </h2>

      {description ? (
        <p className="text-base leading-relaxed text-white/60 text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
