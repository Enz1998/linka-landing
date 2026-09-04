type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-5 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span
        className={`text-xs font-medium tracking-[0.14em] uppercase ${
          isDark ? "text-muted-on-dark" : "text-muted-on-paper"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif max-w-2xl text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-xl text-base leading-relaxed text-pretty ${
            isDark ? "text-muted-on-dark" : "text-muted-on-paper"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
