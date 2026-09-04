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
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span
        className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${
          isDark ? "text-cyan-300" : "text-accent-indigo"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed text-pretty sm:text-lg ${
            isDark ? "text-slate-300" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
