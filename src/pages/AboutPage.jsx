import SectionHeading from "../components/SectionHeading";
import { PrimaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";

const paletteImage = "/colour%20palette.jpeg";
const textileImage = "/textiles.jpeg";

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
      <Reveal as="section" className="grid gap-10 md:grid-cols-2" threshold={0.1}>
        <div>
          <SectionHeading
            eyebrow="About"
            title="A warm, practical eye for beautiful homes"
            intro="Céire Dunne Interiors helps homeowners create spaces that feel calm, personal, and thoughtfully put together."
          />
          <p className="mt-7 text-lg leading-relaxed text-charcoal/76">
            Céire believes good interiors should feel approachable and achievable. Her process combines creative direction
            with practical solutions, so every recommendation is grounded in real life, real homes, and real budgets.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Whether you are refreshing one room or rethinking how your whole home flows, the goal is always the same:
            spaces with colour, comfort, and character that feel unmistakably yours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Working with homeowners across Ireland, Céire provides personal guidance on colour, layout, finishes,
            furniture, and styling — helping clients make confident, considered choices without the overwhelm.
          </p>
          <div className="mt-8">
            <PrimaryButton to="/contact">Book A Consultation</PrimaryButton>
          </div>
        </div>

        <div className="relative min-h-[340px] md:min-h-[420px]">
          <img
            src={paletteImage}
            alt="Interior stylist material and colour board"
            className="photo-curve h-full w-full object-cover object-[52%_45%] shadow-soft"
          />
          <div className="organic-shape absolute -bottom-5 -left-4 h-24 w-24 bg-roseclay/28" aria-hidden="true" />
        </div>
      </Reveal>

      <Reveal as="section" className="mt-16 grid gap-5 md:grid-cols-3" delay={170} duration={840}>
        {[
          {
            title: "Personal",
            text: "A collaborative, one-to-one process that listens to how you live in your space.",
          },
          {
            title: "Creative",
            text: "Fresh ideas and layered styling that feel refined without feeling precious.",
          },
          {
            title: "Practical",
            text: "Clear guidance designed to work within budget and improve everyday comfort.",
          },
        ].map((item) => (
          <article key={item.title} className="border-t border-walnut/12 pt-6">
            <h3 className="text-2xl font-normal text-charcoal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/68">{item.text}</p>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="mt-14 grid gap-6 rounded-[2rem] border border-walnut/10 bg-white/84 p-6 shadow-soft md:grid-cols-2 md:p-8" delay={260} duration={860}>
        <img src={textileImage} alt="Textiles and wallpaper moodboard" className="photo-curve h-64 w-full object-cover object-[50%_34%] shadow-soft md:h-72" />
        <div className="flex items-center">
          <p className="text-lg leading-relaxed text-charcoal/76">
            Texture is treated as seriously as colour. Fabric, wallpaper, painted surfaces, and wood tones are layered
            to create rooms that feel tactile, calm, and deeply personal.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutPage;
