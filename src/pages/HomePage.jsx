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
// Curated image selection — chosen for editorial quality and brand alignment
const wallpaperPaintImage = "/image-01.jpeg"; // botanical wallpaper + sage paint chip
const heritagePaintsImage = "/image-02.jpeg"; // Heritage paint cards on teal botanical wallpaper
const colourFanDeckImage  = "/image-05.jpeg"; // hands reviewing colour fan deck with material samples
const colourChartsImage   = "/image-06.jpeg"; // colour chart books spread on consultation workspace
const tealFabricsImage    = "/image-11.jpeg"; // teal geometric fabric + coordinating colour palette
// image-03 excluded: social media story screenshot with promotional text overlay
// image-04 excluded: Instagram app UI screenshot
// image-07 excluded: homemade Word-document style moodboard
// image-08 excluded: social media collage with branded graphic overlay
// image-09 excluded: clashes with brand palette (purple/violet tones)
// image-10 excluded: contains third-party competitor watermark

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
        </div>

        <div className="relative min-h-[420px] md:min-h-[500px]">
          <img
            src={wallpaperPaintImage}
            alt="Botanical wallpaper and sage paint chip selection for an Irish home"
            className="photo-curve absolute right-0 top-1 h-56 w-44 object-cover object-center shadow-soft md:h-80 md:w-64"
          />
          <img
            src={colourFanDeckImage}
            alt="Interior designer reviewing colour fan deck and material samples"
            className="photo-curve absolute bottom-8 left-0 h-64 w-52 object-cover object-center shadow-soft md:h-[22rem] md:w-72"
          />
          <div className="organic-shape absolute -bottom-2 right-8 h-24 w-24 bg-roseclay/35" aria-hidden="true" />
          <div className="organic-shape absolute left-24 top-0 h-16 w-16 bg-eucalyptus/35" aria-hidden="true" />
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" delay={90} duration={900}>
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
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {[
            {
              src: heritagePaintsImage,
              label: "Colour Selection",
              alt: "Heritage paint colours paired with botanical wallpaper for a client project",
            },
            {
              src: tealFabricsImage,
              label: "Materials & Texture",
              alt: "Teal geometric fabric and textured samples chosen for material direction",
            },
            {
              src: paletteImage,
              label: "Palette Planning",
              alt: "Curated paint palette cards organised for a colour consultation",
            },
          ].map((item) => (
            <figure key={item.label} className="space-y-2">
              <img src={item.src} alt={item.alt} className="photo-curve h-44 w-full object-cover object-center shadow-soft" />
              <figcaption className="text-xs uppercase tracking-[0.16em] text-charcoal/70">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24" delay={190} duration={900}>
        <div className="editorial-panel rounded-3xl p-8 md:p-11">
          <SectionHeading
            eyebrow="Design Philosophy"
            title="Creative guidance, never intimidating"
            intro="Every recommendation is grounded in how your rooms are used, how your light changes through the day, and what will age beautifully over time."
          />
          <ul className="mt-6 space-y-3">
            {reasons.map((item) => (
              <li key={item} className="rounded-2xl bg-white/78 px-4 py-3 text-charcoal/82 shadow-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={colourChartsImage}
          alt="Colour chart books and wallpaper samples spread during a home consultation"
          className="photo-curve h-full min-h-[280px] w-full object-cover object-[45%_62%] shadow-soft md:min-h-[320px]"
        />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20" delay={230} duration={880}>
        <SectionHeading
          eyebrow="The Process"
          title="How it works"
          intro="A calm, personal process designed around your home, your style, and your life."
        />
        <ol className="mt-12 grid list-none gap-10 p-0 md:grid-cols-4 md:gap-8">
          {[
            {
              n: "01",
              title: "Initial Enquiry",
              text: "Tell Céire about your room, your style, and what you need help with. No jargon, no pressure.",
            },
            {
              n: "02",
              title: "Consultation",
              text: "Discuss colour, layout, finishes, furniture, and practical design options at your own pace.",
            },
            {
              n: "03",
              title: "Design Direction",
              text: "Receive clear guidance, moodboard ideas, colour suggestions, and tailored styling recommendations.",
            },
            {
              n: "04",
              title: "Confident Next Steps",
              text: "Move forward with a calmer, clearer vision and a simple, practical plan for your home.",
            },
          ].map((step) => (
            <li key={step.n}>
              <span
                className="block font-normal leading-none text-sage/20"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "5rem" }}
                aria-hidden="true"
              >
                {step.n}
              </span>
              <h3
                className="mt-3 text-xl font-normal text-charcoal"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" delay={270} duration={900}>
        <SectionHeading
          eyebrow="Kitchen Transformation"
          title="A calm, confident before and after"
          intro="A visual story of how finishes, tone, and styling decisions reshape the feeling of a room without losing practicality."
        />
        <div className="mt-10 grid gap-6 rounded-[2rem] border border-walnut/10 bg-white/84 p-5 shadow-soft md:grid-cols-2 md:p-7">
          <figure className="space-y-3">
            <img
              src={kitchenBeforeImage}
              alt="Kitchen before design transformation"
              className="photo-curve h-[20rem] w-full object-cover object-[48%_45%] shadow-soft md:h-[440px]"
            />
            <figcaption className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/55">Before</p>
              <p className="text-sm leading-relaxed text-charcoal/58">Heavy tones and flat finishes left the room feeling smaller and darker.</p>
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <img
              src={kitchenAfterImage}
              alt="Kitchen after design transformation"
              className="photo-curve h-[20rem] w-full object-cover object-[50%_48%] shadow-soft md:h-[440px]"
            />
            <figcaption className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">After</p>
              <p className="text-sm leading-relaxed text-charcoal/58">Lighter tones, considered finishes, and cohesive material choices lifted the entire feel of the space.</p>
            </figcaption>
          </figure>
        </div>
        <p className="mt-5 px-1 text-sm leading-relaxed text-charcoal/58 md:text-center">
          Small, intentional changes in colour, texture, and finish can completely shift how a space feels — calmer, brighter, and far more considered.
        </p>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" delay={360} duration={920}>
        <div className="texture-wash grid gap-10 rounded-[2rem] border border-walnut/10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Studio Showcase</p>
            <h2 className="mt-2 text-4xl font-normal text-charcoal md:text-5xl">Project walk-through in motion</h2>
            <p className="mt-4 text-charcoal/76">
              A short portfolio clip that captures material warmth, lighting, and spatial flow in context.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <img
                src={textileImage}
                alt="Layered fabric and textile samples for a soft interior scheme"
                className="photo-curve h-24 w-full object-cover object-center shadow-soft md:h-28"
              />
              <img
                src={wallpaperPaintImage}
                alt="Botanical wallpaper and sage paint chip pairing"
                className="photo-curve h-24 w-full object-cover object-center shadow-soft md:h-28"
              />
            </div>
            <button
              type="button"
              onClick={toggleVideo}
              className="mt-7 inline-flex items-center justify-center rounded-2xl border border-walnut/18 bg-white/90 px-6 py-3 text-sm font-medium tracking-[0.08em] text-charcoal shadow-soft transition hover:bg-cream/80"
            >
              {isVideoPlaying ? "Pause Video" : "Play Video"}
            </button>
          </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-walnut/12 shadow-soft">
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

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" delay={440} duration={860}>
        <SectionHeading
          eyebrow="Studio Work"
          title="Colour, material, and considered detail"
          intro="Every palette, fabric choice, and finish selection is made with intention — guided by light, lifestyle, and the warmth a room needs."
        />
        <div className="mt-10 space-y-4">
          <div className="grid gap-4 md:grid-cols-[1.65fr_1fr]">
            <img
              src={colourFanDeckImage}
              alt="Interior designer carefully reviewing colour fan deck with material and texture samples"
              className="photo-curve h-64 w-full object-cover object-center shadow-soft md:h-[440px]"
            />
            <div className="flex flex-col gap-4">
              <img
                src={heritagePaintsImage}
                alt="Heritage paint colour cards paired with a sage botanical wallpaper"
                className="photo-curve w-full flex-1 object-cover object-center shadow-soft"
                style={{ minHeight: 0 }}
              />
              <img
                src={tealFabricsImage}
                alt="Teal geometric fabric samples and coordinating colour palette strip"
                className="photo-curve w-full flex-1 object-cover object-center shadow-soft"
                style={{ minHeight: 0 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={wallpaperPaintImage}
              alt="Botanical wallpaper paired with a sage green paint swatch"
              className="photo-curve h-28 w-full object-cover object-center shadow-soft md:h-44"
            />
            <img
              src={textileImage}
              alt="Layered fabric and textile samples for a soft, warm interior scheme"
              className="photo-curve h-28 w-full object-cover object-center shadow-soft md:h-44"
            />
            <img
              src={paletteImage}
              alt="Curated paint colour palette cards for a residential interior project"
              className="photo-curve h-28 w-full object-cover object-center shadow-soft md:h-44"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" delay={510} duration={820}>
        <SectionHeading eyebrow="Client Notes" title="What homeowners say" />
        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="blockquote"
              className="border-l-2 border-sage/25 pl-6"
              delay={560 + index * 65}
              duration={780}
              distance={14}
            >
              <p className="text-base leading-relaxed text-charcoal/78">"{item.quote}"</p>
              <cite className="mt-3 block text-xs not-italic uppercase tracking-[0.15em] text-sage">{item.name}</cite>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto mb-10 max-w-7xl px-5 pb-20 pt-16 md:px-8" delay={650} duration={840}>
        <div className="rounded-[2rem] border border-walnut/10 bg-white/90 px-8 py-12 text-center shadow-soft md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">Ready To Begin</p>
          <h2 className="mt-3 text-4xl font-normal text-charcoal md:text-5xl">Let us refresh your home, beautifully and practically</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/76">
            Book a consultation and receive personalised ideas tailored to your home, style, and budget.
          </p>
          <PrimaryButton to="/contact" className="mt-8">
            Book A Consultation
          </PrimaryButton>
        </div>
      </Reveal>
    </>
  );
}

export default HomePage;
