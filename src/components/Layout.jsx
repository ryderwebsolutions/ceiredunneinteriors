import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { PrimaryButton } from "./Buttons";
import { navLinks } from "../data/siteContent";

const activeClass = "text-walnut";
const studioLogo = "/ceiredunneinteriorslogo-removebg-preview.png";
const fallbackLogo = "/ceiredunneinteriorslogo.jpg";

function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-charcoal/8 bg-white/92 px-3 py-2.5 shadow-soft backdrop-blur-xl md:rounded-full md:px-6 md:py-3">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 md:grid-cols-[auto_1fr_auto] md:gap-6">
            <Link to="/" className="flex min-w-0 items-center gap-2.5 pr-1 md:gap-3" aria-label="Céire Dunne Interiors home" onClick={() => setOpen(false)}>
              <img
                src={studioLogo}
                alt="Céire Dunne Interiors logo"
                className="h-14 w-auto shrink-0 object-contain md:h-12"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = fallbackLogo;
                }}
              />
              <div className="min-w-0">
                <p className="hidden text-[0.68rem] uppercase tracking-[0.24em] text-charcoal/45 md:block">Interior Design Studio</p>
                <p
                  className="truncate whitespace-nowrap text-[1.06rem] leading-none text-charcoal md:text-[1.36rem]"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  Céire Dunne Interiors
                </p>
              </div>
            </Link>

            <nav className="hidden items-center justify-center gap-7 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal/72 transition hover:text-charcoal ${isActive ? activeClass : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center justify-self-end gap-3">
              <PrimaryButton to="/contact" className="hidden px-5 py-2.5 md:inline-flex">
                Book Consultation
              </PrimaryButton>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/12 bg-white/86 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-charcoal shadow-soft transition hover:bg-white md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation menu"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          <div
            id="mobile-nav"
            className={`overflow-hidden transition-all duration-400 md:hidden ${open ? "max-h-[420px] pt-4" : "max-h-0 pt-0"}`}
          >
            <nav className="grid gap-2 rounded-[1.75rem] border border-charcoal/8 bg-white p-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.17em] text-charcoal/75 transition hover:bg-paper-white hover:text-charcoal ${
                      isActive ? "bg-paper-white text-charcoal" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <PrimaryButton to="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Book Consultation
              </PrimaryButton>
            </nav>
          </div>
        </div>
      </header>

      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>

      <footer className="mt-28 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-20">
          <div>
            <img
              src={studioLogo}
              alt="Céire Dunne Interiors logo"
              className="h-14 w-auto max-w-[230px] object-contain"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackLogo;
              }}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/68">
              Calm, tailored interiors with an editorial eye for material warmth, spatial flow, and understated luxury.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/48">Contact</p>
            <p className="text-charcoal/80">ceiredunneinteriors@gmail.com</p>
            <p className="text-charcoal/80">087 9956 0006</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/48">Explore</p>
            <div className="grid gap-2">
              {navLinks.filter((link) => link.path !== "/").map((link) => (
                <Link key={link.path} to={link.path} className="text-charcoal/80 transition hover:text-charcoal">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
