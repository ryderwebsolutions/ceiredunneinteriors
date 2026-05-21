import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";

const heroImage = "/livingroom2.jpeg";
const consultationImage = "/KitchenAfter.jpeg";
const kitchenBeforeImage = "/Kitchen%20before.jpeg";

const servicePanels = [
  {
    title: "Colour Consultation",
    path: "/services",
    image: "/aestheticimage.jpeg",
    alt: "Curated colour consultation board with paint fan decks and samples",
  },
  {
    title: "Interior Styling",
    path: "/services",
    image: "/livingroom1.jpeg",
    alt: "Elegant living room styled in warm neutral tones",
  },
  {
    title: "Room Refresh",
    path: "/services",
    image: "/bedroom2.jpeg",
    alt: "Soft layered bedroom with refined textures and balanced palette",
  },
  {
    title: "Furniture & Finishes",
    path: "/services",
    image: "/textiles.jpeg",
    alt: "Textural textiles and material selections for premium interiors",
  },
  {
    title: "Space Planning",
    path: "/services",
    image: "/livingroom3.jpeg",
    alt: "Well-composed lounge layout with calm furniture arrangement",
  },
  {
    title: "Home Transformation",
    path: "/services",
    image: "/KitchenAfter.jpeg",
    alt: "Completed kitchen transformation with refined finishes",
  },
];

function HomePage() {
  return (
    <>
      <Reveal as="section" className="px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12" threshold={0.1}>
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

          <figure className="feature-frame relative order-1 min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#e8dfd2] md:min-h-[38rem] lg:order-2">
            <img
              src={heroImage}
              alt="Warm neutral living room with layered textures and understated styling"
              className="absolute inset-0 h-full w-full object-cover focal-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-black/6 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/72">Editorial interior design</p>
              <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/88 md:text-xl">
                Spacious, tactile rooms with a restrained palette and a calm, high-end finish.
              </p>
            </figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 md:px-8 md:py-24" delay={80} duration={900}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/44">Services</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-normal leading-[1.04] text-charcoal md:text-5xl">
              Tailored design services delivered through a calm, consultation-led process.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {servicePanels.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="feature-card group relative min-h-[20rem] overflow-hidden rounded-[2rem] md:min-h-[22rem]"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <img src={service.image} alt={service.alt} className={`feature-image absolute inset-0 h-full w-full object-cover service-focal-${index + 1}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-black/10 to-transparent transition duration-500 group-hover:from-black/58" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="text-[2rem] font-normal leading-[1.05] text-white md:text-[2.4rem]">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 md:px-8 md:py-24" delay={120} duration={880}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/44">Selected Portfolio</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-normal leading-[1.04] text-charcoal md:text-5xl">
                A curated preview of completed interiors and refined transformations.
              </h2>
            </div>
            <SecondaryButton to="/portfolio">View Full Portfolio</SecondaryButton>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:grid-rows-[24rem_18rem]">
            <Link
              to="/portfolio"
              className="feature-card group relative overflow-hidden rounded-[2rem] md:col-span-7 md:row-span-2"
            >
              <img
                src="/livingroom1.jpeg"
                alt="Completed living room with warm layered styling and balanced finishes"
                className="feature-image absolute inset-0 h-full w-full object-cover focal-portfolio-main"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-black/10 to-transparent" />
            </Link>

            <Link
              to="/portfolio"
              className="feature-card group relative overflow-hidden rounded-[2rem] md:col-span-5 md:row-span-1"
            >
              <img
                src="/bedroom1.jpeg"
                alt="Completed bedroom design with soft neutral palette and quiet detailing"
                className="feature-image absolute inset-0 h-full w-full object-cover focal-portfolio-bedroom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent" />
            </Link>

            <Link
              to="/portfolio"
              className="feature-card group relative overflow-hidden rounded-[2rem] md:col-span-5 md:row-span-1"
            >
              <img
                src="/naturalwallpaper.jpeg"
                alt="Wallpaper and paint pairing presented as a premium design finish study"
                className="feature-image absolute inset-0 h-full w-full object-cover focal-portfolio-wallpaper"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 md:px-8 md:py-24" delay={160} duration={860}>
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-charcoal/8 bg-white/84 p-6 shadow-soft md:p-10">
          <div className="mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/44">Before & After</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-normal leading-[1.04] text-charcoal md:text-5xl">
              Kitchen transformation with a calmer, more elevated material story.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/portfolio"
              className="feature-card group relative min-h-[18rem] overflow-hidden rounded-[1.6rem] md:min-h-[28rem]"
            >
              <img src={kitchenBeforeImage} alt="Kitchen before transformation" className="feature-image absolute inset-0 h-full w-full object-cover focal-kitchen-before" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/84 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-charcoal/72">
                Before
              </div>
            </Link>

            <Link
              to="/portfolio"
              className="feature-card group relative min-h-[18rem] overflow-hidden rounded-[1.6rem] md:min-h-[28rem]"
            >
              <img src={consultationImage} alt="Kitchen after transformation" className="feature-image absolute inset-0 h-full w-full object-cover focal-kitchen-after" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/84 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-charcoal/72">
                After
              </div>
            </Link>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-charcoal/66">
            The transformation introduces softer cabinetry tones, cleaner contrasts, and more cohesive finishes to create a space that feels lighter, warmer, and intentionally composed.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24" delay={200} duration={860}>
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
            className="photo-curve focal-consultation h-full min-h-[22rem] w-full object-cover shadow-soft md:min-h-[28rem]"
          />
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
