import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { PrimaryButton } from "./Buttons";
import { navLinks } from "../data/siteContent";

const activeClass = "text-walnut";
const studioLogo = "/ceiredunneinteriorslogo.jpg";

function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <Link to="/" className="rounded-2xl bg-cream/70 p-2 pr-3 shadow-soft transition hover:bg-cream/85" aria-label="Céire Dunne Interiors home">
          <img
            src={studioLogo}
            alt="Céire Dunne Interiors logo"
            className="h-11 w-auto object-contain md:h-14"
          />
        </Link>

        <button
          type="button"
          className="rounded-2xl border border-walnut/35 bg-cream/55 px-4 py-2 text-sm text-charcoal md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide text-charcoal transition hover:text-walnut ${isActive ? activeClass : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <PrimaryButton to="/contact">Book A Consultation</PrimaryButton>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`mx-5 overflow-hidden rounded-3xl bg-cream/85 px-5 transition-all duration-300 md:hidden ${
          open ? "max-h-96 py-5" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base text-charcoal transition hover:text-walnut ${isActive ? activeClass : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <PrimaryButton to="/contact" className="mt-2" onClick={() => setOpen(false)}>
            Book A Consultation
          </PrimaryButton>
        </nav>
      </div>

      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-walnut/15 bg-cream/55">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          <div>
            <img
              src={studioLogo}
              alt="Céire Dunne Interiors logo"
              className="h-12 w-auto max-w-[220px] object-contain"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-sage">Contact</p>
            <p className="text-charcoal/80">ceiredunneinteriors@gmail.com</p>
            <p className="text-charcoal/80">087 9956 0006</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-sage">Studio Focus</p>
            <p className="text-charcoal/80">Thoughtful interiors for real Irish homes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
