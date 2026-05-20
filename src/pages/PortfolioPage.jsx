import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { portfolioItems } from "../data/siteContent";

const paletteImage = "/colour%20palette.jpeg";
const textileImage = "/textiles.jpeg";
const kitchenAfterImage = "/KitchenAfter.jpeg";
const heritagePaintsImage = "/image-02.jpeg";
const colourFanDeckImage = "/image-05.jpeg";
const tealFabricsImage = "/image-11.jpeg";

function PortfolioPage() {
  return (
    <Reveal className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16" threshold={0.1}>
      <SectionHeading
        eyebrow="Portfolio"
        title="Curated inspiration for warm, elevated homes"
        intro="A carefully edited mix of project moments, palette studies, and transformation snapshots rooted in natural materials."
      />

      <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3 [&>article]:mb-5">
        {portfolioItems.map((item, index) => (
          <Reveal
            key={item.title}
            as="article"
            className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-walnut/10 bg-white/88 shadow-soft"
            delay={70 + index * 55}
            duration={780}
            distance={16}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full object-cover object-center ${index % 3 === 0 ? "h-72 md:h-80" : "h-60 md:h-64"}`}
            />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-sage">{item.tag}</p>
              <h3 className="mt-2 text-2xl font-normal text-charcoal">{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 grid gap-6 rounded-[2rem] border border-walnut/10 bg-white/84 p-8 shadow-soft md:grid-cols-3" delay={210} duration={880}>
        <img src={paletteImage} alt="Colour and materials board" className="photo-curve h-52 w-full object-cover object-[52%_44%] shadow-soft md:h-56" />
        <img src={paletteImage} alt="Colour and materials board" className="photo-curve h-52 w-full object-cover object-[52%_44%] shadow-soft md:h-56" />
        <img src={tealFabricsImage} alt="Teal fabric samples and coordinating colour palette" className="photo-curve h-52 w-full object-cover object-center shadow-soft md:h-56" />
        <img src={colourFanDeckImage} alt="Interior designer reviewing colour and material samples" className="photo-curve h-52 w-full object-cover object-center shadow-soft md:h-56" />
      </Reveal>

      <Reveal className="mt-8 grid gap-6 rounded-[2rem] border border-walnut/10 bg-white/82 p-8 shadow-soft md:grid-cols-4" delay={290} duration={820}>
        {[
          { name: "Linen Cream", hex: "#E8DECE" },
          { name: "Stone Beige", hex: "#D6C8B7" },
          { name: "Muted Sage", hex: "#7F8F7A" },
          { name: "Walnut Brown", hex: "#6C5040" },
        ].map((swatch) => (
          <div key={swatch.name} className="rounded-2xl border border-walnut/15 p-4">
            <div className="h-20 rounded-xl" style={{ backgroundColor: swatch.hex }} aria-hidden="true" />
            <p className="mt-3 font-medium text-charcoal">{swatch.name}</p>
            <p className="text-sm text-charcoal/70">{swatch.hex}</p>
          </div>
        ))}
      </Reveal>
    </Reveal>
  );
}

export default PortfolioPage;
