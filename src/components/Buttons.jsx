import { Link } from "react-router-dom";

export function PrimaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border border-charcoal/12 bg-charcoal px-6 py-3 text-sm font-medium tracking-[0.14em] text-cream shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-charcoal hover:bg-walnut focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border border-charcoal/14 bg-white/78 px-6 py-3 text-sm font-medium tracking-[0.14em] text-charcoal shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-charcoal/28 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
