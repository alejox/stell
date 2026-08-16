import { ShoppingCart, Store } from "lucide-react";
import { hero } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Layered gradients instead of a hero photo: nothing to download, nothing to push the LCP. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,#241a05_0%,#0d0a06_45%,var(--color-background)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.55)_65%,var(--color-background)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="section-container flex flex-col items-center gap-6 py-24 text-center md:py-36">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {hero.eyebrow}
        </span>

        <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl">
          {hero.title}
        </h1>

        <p className="text-2xl font-bold text-balance sm:text-4xl">
          <span className="text-gradient-brand">{hero.subtitle}</span>
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CtaLink href={hero.primaryCta.href} className="px-8 py-4 text-base">
            <ShoppingCart size={18} />
            {hero.primaryCta.label}
          </CtaLink>
          <CtaLink
            href={hero.secondaryCta.href}
            variant="outline"
            className="px-8 py-4 text-base"
          >
            <Store size={18} />
            {hero.secondaryCta.label}
          </CtaLink>
        </div>

        <dl className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 md:grid-cols-4">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-surface/90 px-4 py-6 backdrop-blur-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wide text-white/50">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
