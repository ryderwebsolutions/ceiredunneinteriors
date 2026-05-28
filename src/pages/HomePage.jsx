import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";

const heroImage = "/newimage1.avif";
const heroImageFallback = "/earthinterior.jpg";
const heroSupportingImage = "/newnewimage2.avif";
const heroSupportingFallback = "/sandpillow.jpg";
const consultationImage = "/naturallightkitchen.jpg";
const consultationImageFallback = "/livingroom1.jpeg";
const kitchenBeforeImage = "/Kitchen%20before.jpeg";
const kitchenAfterImage = "/KitchenAfter.jpeg";

const servicePanels = [
  {
    title: "Colour Consultancy & Wall Coverings",
    path: "/services/colour-consultancy-wall-coverings",
    image: "/aestheticimage.jpeg",
    fallback: "/colourpalette2.jpeg",
    alt: "Curated colour consultation board with paint fan decks and samples",
  },
  {
    title: "Design Consultation",
    path: "/services/design-consultation",
    image: "/bedroom.avif",
    fallback: "/bedroom2.jpeg",
    alt: "Elegant bedroom interior styled in warm neutral layers",
  },
  {
    title: "Space Planning",
    path: "/services",
    image: "/livingroom3.jpeg",
    fallback: "/livingroom2.jpeg",
    alt: "Interior layout with calm spatial flow and balanced arrangement",
  },
];

function CuratedImage({
  src,
  fallback,
  alt,
  className,
  loading = "lazy",
  decoding = "async",
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={(event) => {
        if (fallback && event.currentTarget.src !== `${window.location.origin}${fallback}`) {
          event.currentTarget.src = fallback;
          return;
        }
        event.currentTarget.onerror = null;
      }}
    />
  );
}

function HomePage() {
  return (
    <>
      <Reveal as="section" className="px-5 pb-14 pt-7 md:px-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12" threshold={0.1}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_1.22fr] lg:items-end">
          <div className="order-2 flex max-w-xl flex-col justify-end lg:order-1 lg:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-charcoal/44">Céire Dunne Interiors</p>
            <h1 className="mt-4 text-[2.55rem] font-normal leading-[0.96] text-charcoal sm:text-[3.45rem] md:text-[5.2rem]">
              Elegant interiors
              <br />
              shaped around how you live.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/66 md:text-lg">
              Thoughtful design direction for homes that feel warm, balanced, and deeply personal from room to room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Book Consultation</PrimaryButton>
              <SecondaryButton to="/portfolio">View Portfolio</SecondaryButton>
            </div>
          </div>

          <div className="order-1 grid gap-4 lg:order-2 lg:grid-cols-[1fr_0.44fr] lg:items-end">
            <figure className="feature-frame relative min-h-[22rem] overflow-hidden rounded-[1.45rem] bg-[#e8dfd2] md:min-h-[36rem] lg:min-h-[38rem]">
              <CuratedImage
                src={heroImage}
                fallback={heroImageFallback}
                alt="Premium interior with warm earthy tones and refined architectural styling"
                className="absolute inset-0 h-full w-full object-cover focal-hero"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-black/6 to-transparent" />
            </figure>

            <figure className="feature-frame relative min-h-[13rem] overflow-hidden rounded-[1.3rem] bg-[#ece3d7] lg:min-h-[15rem]">
              <CuratedImage
                src={heroSupportingImage}
                fallback={heroSupportingFallback}
                alt="Layered neutral textile and pillow styling detail"
                className="absolute inset-0 h-full w-full object-cover focal-hero-support"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/14 to-transparent" />
            </figure>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-14 md:px-8 md:py-20 lg:py-24" delay={80} duration={900}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/44">Services</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicePanels.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="feature-card group relative min-h-[20rem] overflow-hidden rounded-[1.35rem] md:min-h-[22rem]"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <CuratedImage
                  src={service.image}
                  fallback={service.fallback}
                  alt={service.alt}
                  className={`feature-image absolute inset-0 h-full w-full object-cover service-focal-${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-black/8 to-transparent transition duration-500 group-hover:from-black/54" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="max-w-sm text-[1.72rem] font-normal leading-[1.04] text-white md:text-[2.15rem]">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-14 md:px-8 md:py-20 lg:py-24" delay={120} duration={880}>
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

          <div className="grid gap-6 md:grid-cols-12 md:grid-rows-[26rem_16rem]">
            <Link
              to="/portfolio"
              className="feature-card group relative overflow-hidden rounded-[1.5rem] md:col-span-8 md:row-span-2"
            >
              <CuratedImage
                src="/whitebalcony.avif"
                fallback="/livingroom1.jpeg"
                alt="Calm white balcony interior with airy outdoor living and soft neutral styling"
                className="feature-image absolute inset-0 h-full w-full object-cover focal-portfolio-main"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/8 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/74">Signature Space</p>
                <p className="mt-2 max-w-sm text-lg leading-relaxed text-white/88 md:text-xl">Calm outdoor living shaped through texture, tone, and light.</p>
              </div>
            </Link>

            <article
              className="rounded-[1.4rem] border border-charcoal/8 bg-white p-5 shadow-soft md:col-span-4 md:row-span-1 md:p-6"
            >
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-charcoal/48">Editorial Detail</p>
              <p className="mt-3 text-base leading-relaxed text-charcoal/68 md:text-[1.05rem]">
                Material and textile layering shape the quieter moments in every scheme.
              </p>
            </article>

            <Link
              to="/portfolio"
              className="feature-card group relative overflow-hidden rounded-[1.5rem] md:col-span-4 md:row-span-1"
            >
              <CuratedImage
                src="/bluewallpaper.jpeg"
                fallback="/naturalwallpaper.jpeg"
                alt="Blue wallpaper detail showing layered finishes and refined material texture"
                className="feature-image absolute inset-0 h-full w-full object-cover focal-portfolio-detail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white/74">Material Detail</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/84 md:text-[0.98rem]">
                  Layered finishes and tactile pattern bring depth to a quieter palette.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-14 md:px-8 md:py-20 lg:py-24" delay={160} duration={860}>
        <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-charcoal/8 bg-white p-6 shadow-soft md:p-10">
          <div className="mb-8 md:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/44">Before & After</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <figure className="space-y-3">
              <Link
                to="/portfolio"
                className="feature-card group relative block min-h-[19rem] overflow-hidden rounded-[1.3rem] md:min-h-[30rem]"
              >
                <CuratedImage
                  src={kitchenBeforeImage}
                  fallback="/livingroom3.jpeg"
                  alt="Kitchen before transformation"
                  className="feature-image absolute inset-0 h-full w-full object-cover focal-kitchen-before"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent" />
              </Link>
              <figcaption className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/56">Before</figcaption>
            </figure>

            <figure className="space-y-3">
              <Link
                to="/portfolio"
                className="feature-card group relative block min-h-[19rem] overflow-hidden rounded-[1.3rem] md:min-h-[30rem]"
              >
                <CuratedImage
                  src={kitchenAfterImage}
                  fallback="/livingroom1.jpeg"
                  alt="Kitchen after transformation"
                  className="feature-image absolute inset-0 h-full w-full object-cover focal-kitchen-after"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent" />
              </Link>
              <figcaption className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/56">After</figcaption>
            </figure>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-charcoal/66">
            The transformation introduces softer cabinetry tones, cleaner contrasts, and more cohesive finishes to create a space that feels lighter, warmer, and intentionally composed.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20 lg:pt-24" delay={200} duration={860}>
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.6rem] border border-charcoal/8 bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10">
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

          <CuratedImage
            src={consultationImage}
            fallback={consultationImageFallback}
            alt="Elegant neutral kitchen with calm cabinetry and refined finishes"
            className="photo-curve focal-consultation h-full min-h-[22rem] w-full object-cover shadow-soft md:min-h-[28rem]"
          />
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
