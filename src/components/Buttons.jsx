import { Link } from "react-router-dom";

export function PrimaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-2xl bg-sage px-6 py-3 text-sm font-medium tracking-[0.08em] text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-walnut hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${className}`}
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
      className={`inline-flex items-center justify-center rounded-2xl border border-walnut/35 bg-cream/60 px-6 py-3 text-sm font-medium tracking-[0.08em] text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-linen/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
