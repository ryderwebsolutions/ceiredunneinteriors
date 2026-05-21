import { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { featuredServices, reasons, testimonials } from "../data/siteContent";

const paletteImage = "/colourpalette2.jpeg";
const textileImage = "/textiles.jpeg";
const kitchenBeforeImage = "/Kitchen%20before.jpeg";
const kitchenAfterImage = "/KitchenAfter.jpeg";
const projectVideo = "/Kitchenvideo.mp4";
const wallpaperPaintImage = "/naturalwallpaper.jpeg";
const heritagePaintsImage = "/bluewallpaper.jpeg";
const colourFanDeckImage = "/aestheticimage.jpeg";
const colourChartsImage = "/colourpalette1.jpeg";
const tealFabricsImage = "/bluepalette.jpeg";

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  return (
    <>
      <Reveal as="section" className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 md:grid-cols-2 md:px-8 md:pb-24 md:pt-16" threshold={0.1}>
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage">Editorial Interior Consulting</p>
          <h1 className="text-5xl font-normal leading-[1.05] text-charcoal md:text-7xl">Revitalize Your Home</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/76">
            Colour, comfort, and character beautifully balanced. Create warm, stylish spaces through personalised
            colour consultation and practical interior advice tailored to your lifestyle and home.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/contact">Book A Consultation</PrimaryButton>
            <SecondaryButton to="/portfolio">View Portfolio</SecondaryButton>
          </div>

        <div className="relative min-h-[420px] md:min-h-[500px]">
        import { homepageFeatures } from "../data/siteContent";

        const heroImage = "/livingroom2.jpeg";
        const consultationImage = "/KitchenAfter.jpeg";
        const materialsImage = "/textiles.jpeg";
        const paletteImage = "/aestheticimage.jpeg";
      </Reveal>

            </Reveal>
          ))}
              <Reveal as="section" className="px-5 pb-12 pt-6 md:px-8 md:pb-20 md:pt-8" threshold={0.1}>
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_1.2fr] lg:items-end">
                  <div className="order-2 flex max-w-xl flex-col justify-end lg:order-1 lg:pb-10">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-charcoal/44">Céire Dunne Interiors</p>
                    <h1 className="mt-4 text-[3.2rem] font-normal leading-[0.94] text-charcoal sm:text-[4.3rem] md:text-[5.6rem]">
                      Quiet luxury for homes that want to feel deeply considered.
                    </h1>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/68 md:text-lg">
                      A calm design studio shaping warm, elevated interiors through colour, material direction, and refined styling.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <PrimaryButton to="/contact">Book Consultation</PrimaryButton>
                      <SecondaryButton to="/portfolio">View Portfolio</SecondaryButton>
                    </div>
                  </div>

                  <div className="order-1 grid gap-4 lg:order-2 lg:grid-cols-[1.15fr_0.72fr]">
                    <figure className="feature-frame group relative min-h-[27rem] overflow-hidden rounded-[2rem] bg-[#e8dfd2] md:min-h-[38rem]">
                      <img
                        src={heroImage}
                        alt="Warm neutral living room with layered textures and understated styling"
                        className="feature-image absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                      <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/72">Editorial interior design</p>
                        <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/88 md:text-xl">
                          Spacious, tactile rooms with a restrained palette and a quietly luxurious finish.
                        </p>
                      </figcaption>
                    </figure>

                    <div className="grid gap-4">
                      <figure className="feature-frame group relative min-h-[13rem] overflow-hidden rounded-[2rem] bg-[#eee5db]">
                        <img
                          src={paletteImage}
                          alt="Interior materials and colour palette arranged for a consultation"
                          className="feature-image absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
                        <figcaption className="absolute bottom-0 left-0 p-5 text-sm uppercase tracking-[0.2em] text-white/82">Colour & material direction</figcaption>
                      </figure>

                      <figure className="grid min-h-[13rem] gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <img
                          src={materialsImage}
                          alt="Textural samples in warm neutral tones"
                          className="photo-curve h-full min-h-[13rem] w-full object-cover object-center shadow-soft"
                        />
                        <img
                          src={consultationImage}
                          alt="Refined kitchen interior with calm materials and soft natural light"
                          className="photo-curve h-full min-h-[13rem] w-full object-cover object-center shadow-soft"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal as="section" className="px-5 py-12 md:px-8 md:py-16" delay={80} duration={900}>
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
                  {homepageFeatures.map((feature, index) => (
                    <a
                      key={feature.title}
                      href={feature.path}
                      className="feature-card group relative min-h-[27rem] overflow-hidden rounded-[2rem] md:min-h-[34rem]"
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <img src={feature.image} alt={feature.alt} className="feature-image absolute inset-0 h-full w-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-black/16 to-transparent transition duration-500 group-hover:from-black/62" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/70">{feature.eyebrow}</p>
                          <h2 className="mt-3 max-w-xs text-4xl font-normal leading-[1.02] text-white md:text-5xl">{feature.title}</h2>
                          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/78 md:text-base">{feature.text}</p>
                        </div>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white transition duration-500 group-hover:translate-x-1 group-hover:bg-white/18">
                          +
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal as="section" className="px-5 py-14 md:px-8 md:py-20" delay={130} duration={880}>
                <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#f1e9df] p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8 lg:p-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-charcoal/42">Studio approach</p>
                    <h2 className="mt-3 max-w-md text-4xl font-normal leading-[1.04] text-charcoal md:text-5xl">
                      Minimal, tactile and designed to feel effortless.
                    </h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      "Large visual gestures supported by quiet, practical detail.",
                      "Material palettes chosen for softness, cohesion, and longevity.",
                      "Layouts refined to feel calmer, lighter, and more generous.",
                      "Consultation-led guidance tailored to the way each home is actually lived in.",
                    ].map((item) => (
                      <p key={item} className="border-t border-charcoal/10 pt-4 text-sm leading-relaxed text-charcoal/70 md:text-base">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal as="section" className="px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12" delay={190} duration={860}>
                <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.3rem] border border-charcoal/8 bg-white/72 p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-charcoal/42">Consultation</p>
                      <h2 className="mt-3 max-w-md text-4xl font-normal leading-[1.05] text-charcoal md:text-5xl">
                        Book a private consultation for your next interior chapter.
                      </h2>
                      <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal/68">
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
              alt="Kitchen before design transformation"
