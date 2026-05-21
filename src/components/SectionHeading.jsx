function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sage md:text-[0.72rem]">{eyebrow}</p>
      <h2 className="text-[2.3rem] font-normal leading-[1.04] text-charcoal md:text-[3.2rem]">{title}</h2>
      {intro ? <p className="mt-5 text-[1.02rem] leading-relaxed text-charcoal/72 md:text-[1.1rem]">{intro}</p> : null}
    </header>
  );
}

export default SectionHeading;
