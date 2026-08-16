import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-linear-[135deg,var(--color-primary),var(--color-primary-to)] text-black shadow-[0_10px_30px_-12px_rgba(238,181,0,0.6)] hover:shadow-[0_16px_40px_-12px_rgba(238,181,0,0.8)] hover:brightness-110",
  outline:
    "border-2 border-primary text-content hover:bg-primary/10 hover:text-primary",
  ghost: "text-white/70 hover:text-white",
};

/** Renders an anchor for external targets and a Link for in-app routes. */
export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
