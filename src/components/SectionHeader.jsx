export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
