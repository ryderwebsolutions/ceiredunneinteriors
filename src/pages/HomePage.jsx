import { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { featuredServices, reasons, testimonials } from "../data/siteContent";

const paletteImage = "/colour%20palette.jpeg";
const textileImage = "/textiles.jpeg";
const kitchenBeforeImage = "/Kitchen%20before.jpeg";
const kitchenAfterImage = "/KitchenAfter.jpeg";
const projectVideo = "/Kitchenvideo.mp4";

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
      <Reveal as="section" className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pt-16" threshold={0.1}>
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage">Editorial Interior Consulting</p>
          <h1 className="text-5xl leading-[1.02] text-charcoal md:text-7xl">Revitalize Your Home</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Colour, comfort, and character beautifully balanced. Create warm, stylish spaces through personalised
            colour consultation and practical interior advice tailored to your lifestyle and home.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/contact">Book A Consultation</PrimaryButton>
            <SecondaryButton to="/portfolio">View Portfolio</SecondaryButton>
          </div>
        </div>

        <div className="relative min-h-[390px] md:min-h-[460px]">
          <img
            src={paletteImage}
            alt="Project palette and materials board"
            className="photo-curve absolute right-0 top-1 h-56 w-44 object-cover object-[52%_42%] shadow-soft md:h-80 md:w-64"
          />
          <img
            src={textileImage}
            alt="Textile and wallpaper texture inspiration"
            className="photo-curve absolute bottom-8 left-0 h-64 w-52 object-cover object-[50%_35%] shadow-soft md:h-[22rem] md:w-72"
          />
          <div className="organic-shape absolute -bottom-2 right-8 h-24 w-24 bg-roseclay/60" aria-hidden="true" />
          <div className="organic-shape absolute left-24 top-0 h-16 w-16 bg-eucalyptus/60" aria-hidden="true" />
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-16 md:px-8" delay={90} duration={900}>
        <SectionHeading
          eyebrow="Featured Services"
          title="Thoughtful support for every room"
          intro="Flexible consultation services designed to feel clear, personal, and genuinely useful."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              className="soft-card rounded-3xl border border-walnut/10 p-6 shadow-soft"
              delay={160 + index * 70}
              duration={820}
              distance={16}
            >
              <h3 className="text-2xl text-charcoal">{service.title}</h3>
              <p className="mt-2 text-charcoal/80">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto grid max-w-7xl gap-10 px-5 py-18 md:grid-cols-2 md:px-8" delay={190} duration={900}>
        <div className="editorial-panel rounded-3xl p-8 md:p-10">
          <SectionHeading
            eyebrow="Design Philosophy"
            title="Creative guidance, never intimidating"
            intro="Every recommendation is grounded in how your rooms are used, how your light changes through the day, and what will age beautifully over time."
          />
          <ul className="mt-6 space-y-3">
            {reasons.map((item) => (
              <li key={item} className="rounded-2xl bg-cream/70 px-4 py-3 text-charcoal/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={paletteImage}
          alt="Colour and material board for a residential project"
          className="photo-curve h-full min-h-[280px] w-full object-cover object-[53%_48%] shadow-soft md:min-h-[320px]"
        />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-16 md:px-8" delay={270} duration={900}>
        <SectionHeading
          eyebrow="Kitchen Transformation"
          title="A calm, confident before and after"
          intro="A visual story of how finishes, tone, and styling decisions reshape the feeling of a room without losing practicality."
        />
        <div className="mt-10 grid gap-6 rounded-[2rem] bg-cream/60 p-5 md:grid-cols-2 md:p-7">
          <figure className="space-y-3">
            <img
              src={kitchenBeforeImage}
              alt="Kitchen before design transformation"
              className="photo-curve h-[20rem] w-full object-cover object-[48%_45%] shadow-soft md:h-[440px]"
            />
            <figcaption className="text-xs uppercase tracking-[0.18em] text-charcoal/70">Before</figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={kitchenAfterImage}
              alt="Kitchen after design transformation"
              className="photo-curve h-[20rem] w-full object-cover object-[50%_48%] shadow-soft md:h-[440px]"
            />
            <figcaption className="text-xs uppercase tracking-[0.18em] text-charcoal/70">After</figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-16 md:px-8" delay={360} duration={920}>
        <div className="texture-wash grid gap-10 rounded-[2rem] border border-walnut/10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Studio Showcase</p>
            <h2 className="mt-2 text-4xl text-charcoal md:text-5xl">Project walk-through in motion</h2>
            <p className="mt-4 text-charcoal/80">
              A short portfolio clip that captures material warmth, lighting, and spatial flow in context.
            </p>
            <button
              type="button"
              onClick={toggleVideo}
              className="mt-7 inline-flex items-center justify-center rounded-2xl border border-walnut/30 bg-cream/75 px-6 py-3 text-sm font-medium tracking-[0.08em] text-charcoal transition hover:bg-linen/70"
            >
              {isVideoPlaying ? "Pause Video" : "Play Video"}
            </button>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-walnut/15 shadow-soft">
            <video
              ref={videoRef}
              src={projectVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full min-h-[240px] w-full object-cover md:min-h-[300px]"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-16 md:px-8" delay={440} duration={860}>
        <SectionHeading
          eyebrow="Inspiration Gallery"
          title="Material-led accents and mood layers"
          intro="Palette boards and texture details are used intentionally to guide every room's atmosphere and finish choices."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[paletteImage, textileImage, kitchenAfterImage, paletteImage].map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`Interior inspiration ${index + 1}`}
              className={`photo-curve w-full object-cover object-center shadow-soft ${index % 2 === 0 ? "h-52 md:h-72" : "h-64 md:h-[26rem]"}`}
            />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-14 md:px-8" delay={510} duration={820}>
        <SectionHeading eyebrow="Client Notes" title="What homeowners say" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="blockquote"
              className="soft-card rounded-3xl border border-walnut/10 p-6 shadow-soft"
              delay={560 + index * 65}
              duration={780}
              distance={14}
            >
              <p className="text-charcoal/85">“{item.quote}”</p>
              <cite className="mt-4 block text-sm not-italic uppercase tracking-[0.15em] text-sage">{item.name}</cite>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mb-10 max-w-7xl px-5 pb-20 pt-14 md:px-8" delay={650} duration={840}>
        <div className="rounded-[2rem] bg-walnut px-8 py-12 text-center text-cream md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-linen">Ready To Begin</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Let us refresh your home, beautifully and practically</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/85">
            Book a consultation and receive personalised ideas tailored to your home, style, and budget.
          </p>
          <PrimaryButton to="/contact" className="mt-8 bg-sage hover:bg-charcoal">
            Book A Consultation
          </PrimaryButton>
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
