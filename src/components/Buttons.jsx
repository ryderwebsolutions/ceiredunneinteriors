import { Link } from "react-router-dom";

export function PrimaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-2xl border border-sage/25 bg-white/90 px-6 py-3 text-sm font-medium tracking-[0.08em] text-sage shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-sage/35 hover:bg-sage hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${className}`}
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
      className={`inline-flex items-center justify-center rounded-2xl border border-walnut/20 bg-white/90 px-6 py-3 text-sm font-medium tracking-[0.08em] text-charcoal shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
