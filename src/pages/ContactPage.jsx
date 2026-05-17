import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const kitchenAfterImage = "/KitchenAfter.jpeg";
const textileImage = "/textiles.jpeg";

function ContactPage() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      website: formData.get("website"),
      page_url: window.location.href,
    };

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/interior-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your inquiry.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: result.message || "Thank you. Your enquiry has been sent and we will be in touch shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your inquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <Reveal as="section" className="grid gap-10 md:grid-cols-[1fr_1.1fr]" threshold={0.1}>
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Book your interior consultation"
            intro="Share your room, goals, and style preferences. You will receive warm, practical guidance tailored to your home."
          />
          <div className="mt-8 space-y-4 rounded-3xl bg-cream/75 p-6 shadow-soft">
            <p className="text-charcoal/80">
              <span className="font-semibold text-charcoal">Email:</span> ceiredunneinteriors@gmail.com
            </p>
            <p className="text-charcoal/80">
              <span className="font-semibold text-charcoal">Phone:</span> 087 9956 0006
            </p>
            <p className="text-charcoal/80">
              <span className="font-semibold text-charcoal">Instagram:</span> @ceiredunneinteriors
            </p>
          </div>
          <img
            src={kitchenAfterImage}
            alt="Completed kitchen transformation"
            className="photo-curve mt-8 h-64 w-full object-cover object-[52%_45%] shadow-soft md:h-72"
          />
        </div>

        <form
          className="rounded-[2rem] border border-walnut/10 bg-linen/45 p-8 shadow-soft"
          aria-label="Consultation inquiry form"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-charcoal">Inquiry Form</h2>
          <p className="mt-2 text-charcoal/75">Tell us about your home and what support you need.</p>

          <div className="mt-6 grid gap-5">
            <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

            <label className="text-sm font-medium text-charcoal">
              Full Name
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-walnut/20 bg-cream/90 px-4 py-3 text-base outline-none transition focus:border-sage"
                placeholder="Your name"
                required
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Email Address
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-walnut/20 bg-cream/90 px-4 py-3 text-base outline-none transition focus:border-sage"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Phone (Optional)
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-xl border border-walnut/20 bg-cream/90 px-4 py-3 text-base outline-none transition focus:border-sage"
                placeholder="Your phone number"
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Project Type
              <select
                name="projectType"
                className="mt-2 w-full rounded-xl border border-walnut/20 bg-cream/90 px-4 py-3 text-base outline-none transition focus:border-sage"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Colour Consultation</option>
                <option>Room Refresh Advice</option>
                <option>Home Styling Guidance</option>
                <option>Layout & Decor Suggestions</option>
                <option>Interior Inspiration Planning</option>
              </select>
            </label>

            <label className="text-sm font-medium text-charcoal">
              Project Notes
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-walnut/20 bg-cream/90 px-4 py-3 text-base outline-none transition focus:border-sage"
                placeholder="Tell us about your room, style, and timeline"
                required
              />
            </label>
          </div>

          {status.type !== "idle" ? (
            <p
              className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-sage/30 bg-eucalyptus/20 text-charcoal"
                  : "border-roseclay/40 bg-roseclay/18 text-charcoal"
              }`}
              role="status"
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-sage px-6 py-3 text-sm font-medium tracking-[0.08em] text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-walnut hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
          </button>
        </form>
      </Reveal>

      <Reveal as="section" className="mt-10 overflow-hidden rounded-[2rem] border border-walnut/10" delay={210} duration={820}>
        <img src={textileImage} alt="Fabric and wallpaper references" className="h-52 w-full object-cover object-[50%_36%] md:h-72" />
      </Reveal>
    </div>
  );
}

export default ContactPage;
