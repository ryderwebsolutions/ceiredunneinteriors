function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sage">{eyebrow}</p>
      <h2 className="text-4xl leading-[1.08] text-charcoal md:text-5xl">{title}</h2>
      {intro ? <p className="mt-5 text-base leading-relaxed text-charcoal/78 md:text-lg">{intro}</p> : null}
    </header>
  );
}

export default SectionHeading;
