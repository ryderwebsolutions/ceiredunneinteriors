import SectionHeading from "../components/SectionHeading";
import { PrimaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";
import { services } from "../data/siteContent";

const paletteImage = "/colour%20palette.jpeg";
const textileImage = "/textiles.jpeg";

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
      <Reveal threshold={0.1}>
        <SectionHeading
          eyebrow="Services"
          title="Practical interior support, tailored to your home"
          intro="Every session is personal, collaborative, and shaped around real life in Irish homes."
        />
      </Reveal>
      <Reveal className="mt-10 grid gap-6 md:grid-cols-2" delay={130} duration={830}>
        {services.map((service) => (
          <article key={service.title} className="soft-card rounded-3xl p-7 shadow-soft">
            <h3 className="text-3xl font-normal text-charcoal">{service.title}</h3>
            <p className="mt-3 text-charcoal/76">{service.detail}</p>
          </article>
        ))}
      </Reveal>
      <Reveal className="mt-16 grid gap-8 rounded-[2rem] border border-walnut/10 bg-white/90 p-8 md:grid-cols-2 md:p-12" delay={230} duration={880}>
        <div>
          <h2 className="text-4xl font-normal text-charcoal">What a consultation can include</h2>
          <ul className="mt-5 space-y-3 text-charcoal/80">
            <li>Room-by-room colour recommendations</li>
            <li>Furniture and layout refinements</li>
            <li>Lighting, texture, and finish suggestions</li>
            <li>Affordable purchasing priorities</li>
            <li>A simple action plan you can follow confidently</li>
          </ul>
          <PrimaryButton to="/contact" className="mt-8">
            Book A Consultation
          </PrimaryButton>
        </div>
        <img
          src={paletteImage}
          alt="Consultation colour and material board"
          className="photo-curve h-full min-h-[250px] w-full object-cover object-[52%_46%] shadow-soft md:min-h-[300px]"
        />
      </Reveal>

      <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-walnut/10" delay={320} duration={820}>
        <img src={textileImage} alt="Textural styling references" className="h-64 w-full object-cover object-[50%_34%] md:h-96" />
      </Reveal>
    </div>
  );
}

export default ServicesPage;
