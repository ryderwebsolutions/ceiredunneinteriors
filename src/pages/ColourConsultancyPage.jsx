import Reveal from "../components/Reveal";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const featureImage = "/naturalwallpaper.jpeg";
const supportingImage = "/colour palette.jpeg";

function ColourConsultancyPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
      <Reveal as="section" className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end" threshold={0.1}>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-sage md:text-[0.72rem]">Service</p>
          <h1 className="mt-4 text-[2.3rem] font-normal leading-[1.04] text-charcoal md:text-[3.35rem]">
            Colour Consultancy & Wall Coverings
          </h1>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-charcoal/72 md:text-[1.08rem]">
            With so many colours and wall coverings to choose from, it can feel overwhelming. This is where a home colour consultation comes in. We look at your lighting from natural to artificial. I will bring paint swatches and wallpaper books.
          </p>

          <div className="mt-8 inline-flex rounded-2xl border border-walnut/12 bg-white/90 px-6 py-5 shadow-soft">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-charcoal/64">
              90 minute site colour consultation — €190
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton to="/contact">Book Consultation</PrimaryButton>
            <SecondaryButton to="/services">Back To Services</SecondaryButton>
          </div>
        </div>

        <img
          src={featureImage}
          alt="Elegant wall covering and paint palette references in warm neutral tones"
          className="photo-curve h-full min-h-[22rem] w-full object-cover object-[52%_44%] shadow-soft md:min-h-[30rem]"
        />
      </Reveal>

      <Reveal as="section" className="mt-10 overflow-hidden rounded-[2rem] border border-walnut/10" delay={140} duration={830}>
        <img
          src={supportingImage}
          alt="Paint swatches and colour references for a boutique home consultation"
          className="h-56 w-full object-cover object-[50%_48%] md:h-80"
        />
      </Reveal>
    </div>
  );
}

export default ColourConsultancyPage;
