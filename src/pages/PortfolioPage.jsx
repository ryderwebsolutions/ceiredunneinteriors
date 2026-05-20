import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const logoImage = "/ceiredunneinteriorslogo.jpg";
const textilesImage = "/textiles.jpeg";
const blueWallpaperImage = "/bluewallpaper.jpeg";
const naturalWallpaperImage = "/naturalwallpaper.jpeg";
const aestheticImage = "/aestheticimage.jpeg";
const bluePaletteImage = "/bluepalette.jpeg";
const colourPaletteOneImage = "/colourpalette1.jpeg";
const colourPaletteTwoImage = "/colourpalette2.jpeg";
const bedroomOneImage = "/bedroom1.jpeg";
const bedroomTwoImage = "/bedroom2.jpeg";
const livingRoomOneImage = "/livingroom1.jpeg";
const livingRoomTwoImage = "/livingroom2.jpeg";
const livingRoomThreeImage = "/livingroom3.jpeg";
const kitchenBeforeImage = "/Kitchen%20before.jpeg";
const kitchenAfterImage = "/KitchenAfter.jpeg";

function PortfolioPage() {
  return (
    <Reveal className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16" threshold={0.1}>
      <section>
        <SectionHeading
          eyebrow="Portfolio"
          title="A curated editorial portfolio of colour, texture, and transformation"
          intro="Every visual here is intentionally placed to show how atmosphere is built, from material direction to finished interiors."
        />

        <Reveal className="mt-10 grid gap-6 rounded-[2rem] border border-walnut/10 bg-white/88 p-6 shadow-soft md:grid-cols-[1.35fr_1fr] md:p-8" delay={90} duration={860}>
          <figure className="space-y-3">
            <img
              src={textilesImage}
              alt="Layered textile samples and material swatches setting a soft editorial tone"
              className="photo-curve h-[24rem] w-full object-cover object-center shadow-soft md:h-[35rem]"
              loading="eager"
            />
            <figcaption className="text-sm leading-relaxed text-charcoal/64">
              A tactile opening statement: layered fabrics, warm undertones, and calm composition.
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-rows-[1fr_auto]">
            <img
              src={naturalWallpaperImage}
              alt="Natural floral wallpaper and paint pairing used as supporting hero material"
              className="photo-curve h-64 w-full object-cover object-[52%_45%] shadow-soft md:h-full"
              loading="eager"
            />
            <div className="rounded-2xl border border-walnut/10 bg-white/90 p-4">
              <img src={logoImage} alt="Céire Dunne Interiors logo" className="h-10 w-auto" loading="lazy" />
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-sage">Section 01 · Hero Composition</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Mood & Materials"
          title="Design philosophy through palettes, wallpaper, and texture"
          intro="A quiet, deliberate progression from colour studies to material pairings, curated like an editorial design story."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={120} duration={820}>
            <img
              src={aestheticImage}
              alt="Designer reviewing tonal paint fan decks, natural samples, and material finishes"
              className="photo-curve h-[22rem] w-full object-cover object-center shadow-soft md:h-[31rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-5" delay={190} duration={820}>
            <img
              src={bluePaletteImage}
              alt="Blue-led palette board with textured wallpaper and coordinating neutral swatches"
              className="photo-curve h-[22rem] w-full object-cover object-[50%_56%] shadow-soft md:h-[31rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={230} duration={820}>
            <img
              src={colourPaletteOneImage}
              alt="Colour palette study paired with patterned wallpaper and tonal references"
              className="photo-curve h-64 w-full object-cover object-[50%_55%] shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={280} duration={820}>
            <img
              src={colourPaletteTwoImage}
              alt="Additional colour palette board with fan deck and brand paint references"
              className="photo-curve h-64 w-full object-cover object-center shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={330} duration={820}>
            <img
              src={blueWallpaperImage}
              alt="Blue wallpaper and paint sample coordination for refined material direction"
              className="photo-curve h-64 w-full object-cover object-[50%_48%] shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Interior Outcomes"
          title="Finished spaces with calm atmosphere and intentional styling"
          intro="Larger features and restrained supporting imagery reveal the final feel of each scheme without visual clutter."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={120} duration={840}>
            <img
              src={livingRoomOneImage}
              alt="Living room scheme board showing finished look and styling direction"
              className="photo-curve h-[24rem] w-full object-cover object-center shadow-soft md:h-[34rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-5" delay={190} duration={840}>
            <img
              src={bedroomTwoImage}
              alt="Bedroom outcome board with soft layers, blush accents, and coordinated palette"
              className="photo-curve h-[24rem] w-full object-cover object-[50%_52%] shadow-soft md:h-[34rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={250} duration={840}>
            <img
              src={bedroomOneImage}
              alt="Bedroom styling direction board with layered textures and mood references"
              className="photo-curve h-64 w-full object-cover object-center shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={300} duration={840}>
            <img
              src={livingRoomTwoImage}
              alt="Living room concept board featuring neutral furniture and material suggestions"
              className="photo-curve h-64 w-full object-cover object-center shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="md:col-span-4" delay={350} duration={840}>
            <img
              src={livingRoomThreeImage}
              alt="Living room design board balancing statement pieces and understated finishes"
              className="photo-curve h-64 w-full object-cover object-center shadow-soft md:h-80"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-20 md:mt-24">
        <SectionHeading
          eyebrow="Featured Case Study"
          title="Kitchen transformation: from dated layout to calm functionality"
          intro="An editorial before-and-after comparison demonstrating material refinement, tonal clarity, and practical enhancement."
        />

        <Reveal className="mt-10 rounded-[2rem] border border-walnut/10 bg-white/90 p-5 shadow-soft md:p-8" delay={180} duration={900}>
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="space-y-3">
              <img
                src={kitchenBeforeImage}
                alt="Kitchen before transformation with darker cabinetry and heavy visual contrast"
                className="photo-curve h-[21rem] w-full object-cover object-[50%_52%] shadow-soft md:h-[31rem]"
                loading="lazy"
              />
              <figcaption>
                <p className="text-xs uppercase tracking-[0.18em] text-charcoal/58">Before</p>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/62">
                  The original room felt visually heavy, with stark contrast and limited softness.
                </p>
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <img
                src={kitchenAfterImage}
                alt="Kitchen after transformation featuring sage cabinetry, lighter worktops, and balanced finishes"
                className="photo-curve h-[21rem] w-full object-cover object-[50%_54%] shadow-soft md:h-[31rem]"
                loading="lazy"
              />
              <figcaption>
                <p className="text-xs uppercase tracking-[0.18em] text-sage">After</p>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/62">
                  A lighter, calmer palette with coherent joinery and finishes creates an elevated everyday space.
                </p>
              </figcaption>
            </figure>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-charcoal/62 md:max-w-4xl">
            This side-by-side presentation highlights how tone, texture, and joinery choices reshape the room into a calmer, more elevated everyday space.
          </p>
        </Reveal>
      </section>
    </Reveal>
  );
}

export default PortfolioPage;
