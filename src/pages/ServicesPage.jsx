import SectionHeading from "../components/SectionHeading";
import { PrimaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { services } from "../data/siteContent";

const textileImage = "/textiles.jpeg";

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
      <Reveal threshold={0.1}>
        <SectionHeading
          eyebrow="Services"
          title="Consultation-led interior services"
          intro="A curated offering focused on colour, layout, and tailored design direction for your home."
        />
      </Reveal>
      <Reveal className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={130} duration={830}>
        {services.map((service) => (
          <article key={service.title} className="soft-card flex flex-col overflow-hidden rounded-3xl shadow-soft">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="h-56 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-3xl font-normal text-charcoal">{service.title}</h3>
              <p className="mt-3 font-medium text-walnut">{service.price}</p>
              <p className="mt-3 text-charcoal/76">{service.detail}</p>
              <h4 className="mt-5 text-lg font-medium text-charcoal">Your service can include:</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-charcoal/76">
                {service.inclusions.map((inclusion) => (
                  <li key={inclusion}>{inclusion}</li>
                ))}
              </ul>
              <Link
                to={service.path}
                className="mt-6 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal/68 transition hover:text-charcoal"
              >
                {service.path === "/contact" ? "Discuss your project" : "View Service"}
              </Link>
            </div>
          </article>
        ))}
      </Reveal>
      <Reveal className="mt-10 grid gap-8 rounded-[2rem] border border-walnut/10 bg-white/90 p-8 md:grid-cols-2 md:p-12" delay={230} duration={880}>
        <div>
          <h2 className="text-4xl font-normal text-charcoal">A thoughtful, tailored approach</h2>
          <p className="mt-4 text-charcoal/76">
            Your home should reflect your personality and the way you want to live. My aim is to make choosing colours
            and planning your interiors an enjoyable, straightforward experience.
          </p>
          <ul className="mt-5 space-y-3 text-charcoal/80">
            <li>Room-by-room colour recommendations</li>
            <li>Furniture, lighting, and finish suggestions</li>
            <li>A clear direction you can follow confidently</li>
          </ul>
          <PrimaryButton to="/contact" className="mt-8">
            Get in touch
          </PrimaryButton>
        </div>
        <img
          src="/newnewimage2.avif"
          alt="Interior styling and material inspiration"
          className="photo-curve h-full min-h-[250px] w-full object-cover object-[52%_46%] shadow-soft md:min-h-[300px]"
          loading="lazy"
          decoding="async"
        />
      </Reveal>

      <Reveal className="mt-16" delay={280} duration={850}>
        <SectionHeading
          eyebrow="Design details"
          title="A considered palette, from fabric to finish"
          intro="A glimpse of the textures, colour choices, lighting, and furnishings that inform a room’s overall direction."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl border border-walnut/10 bg-white shadow-soft">
            <img
              src="/consultation-fabric-swatch.jpeg"
              alt="Decorative fabric cushion and paint colour sample beside an upholstered chair"
              className="h-full min-h-[20rem] w-full object-cover object-[50%_48%]"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="overflow-hidden rounded-3xl border border-walnut/10 bg-white shadow-soft">
            <img
              src="/room-design-moodboard.jpeg"
              alt="Room design mood board with bedroom styling, pendant lighting, fabric, and paint samples"
              className="h-full min-h-[20rem] w-full object-cover object-[50%_50%]"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Reveal>

      <Reveal className="mt-10 rounded-3xl border border-walnut/10 bg-linen/45 p-6 text-sm leading-relaxed text-charcoal/72 md:p-8" delay={320} duration={820}>
        <p>
          Consultations are tailored to each home. Prices are starting prices and may vary depending on the size,
          location, and scope of the project. Travel charges may apply outside my usual service area.
        </p>
        <img
          src={textileImage}
          alt="Fabric and wallpaper samples for interior styling"
          className="mt-6 h-56 w-full rounded-2xl object-cover object-[50%_34%] md:h-72"
          loading="lazy"
          decoding="async"
        />
      </Reveal>
    </div>
  );
}

export default ServicesPage;
