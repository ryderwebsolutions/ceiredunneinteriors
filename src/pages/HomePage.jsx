import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";
import { homepageFeatures } from "../data/siteContent";

const heroImage = "/livingroom2.jpeg";
const consultationImage = "/KitchenAfter.jpeg";

function HomePage() {
  return (
    <>
      <Reveal as="section" className="px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8" threshold={0.1}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_1.2fr] lg:items-end">
          <div className="order-2 flex max-w-xl flex-col justify-end lg:order-1 lg:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-charcoal/44">Céire Dunne Interiors</p>
            <h1 className="mt-4 text-[3.2rem] font-normal leading-[0.94] text-charcoal sm:text-[4.3rem] md:text-[5.6rem]">
              Minimal interiors,
              <br />
              quietly luxurious.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/66 md:text-lg">
              A premium interior design studio shaping warm, intentional homes through elegant, consultation-led design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Book Consultation</PrimaryButton>
              <SecondaryButton to="/portfolio">View Portfolio</SecondaryButton>
            </div>
          </div>

          <figure className="feature-frame group relative order-1 min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#e8dfd2] md:min-h-[38rem] lg:order-2">
            <img
              src={heroImage}
              alt="Warm neutral living room with layered textures and understated styling"
              className="feature-image absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/6 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/72">Editorial interior design</p>
              <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/88 md:text-xl">
                Spacious, tactile rooms with a restrained palette and a calm, high-end finish.
              </p>
            </figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-10 md:px-8 md:py-14" delay={80} duration={900}>
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {homepageFeatures.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="feature-card group relative min-h-[26rem] overflow-hidden rounded-[2rem] md:min-h-[34rem]"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <img src={feature.image} alt={feature.alt} className="feature-image absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-black/14 to-transparent transition duration-500 group-hover:from-black/62" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">{feature.eyebrow}</p>
                  <h2 className="mt-3 max-w-xs text-4xl font-normal leading-[1.02] text-white md:text-5xl">{feature.title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 md:text-base">{feature.text}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white transition duration-500 group-hover:translate-x-1 group-hover:bg-white/18">
                  +
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12" delay={170} duration={860}>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.3rem] border border-charcoal/8 bg-white/72 p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/42">Consultation</p>
              <h2 className="mt-3 max-w-md text-4xl font-normal leading-[1.05] text-charcoal md:text-5xl">
                Book a private consultation for your next interior chapter.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/66">
                Share the rooms you want to transform and receive clear, beautifully considered direction on colour, finishes, furnishing, and flow.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Book Consultation</PrimaryButton>
              <SecondaryButton to="/services">Explore Services</SecondaryButton>
            </div>
          </div>

          <img
            src={consultationImage}
            alt="Elegant neutral kitchen with calm cabinetry and refined finishes"
            className="photo-curve h-full min-h-[22rem] w-full object-cover object-center shadow-soft md:min-h-[28rem]"
          />
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
