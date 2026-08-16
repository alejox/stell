import Image from "next/image";
import { spotlights } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";

export function SpotlightSection() {
  return (
    <section className="relative isolate py-14 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_100%_20%,rgba(214,45,8,0.16)_0%,transparent_65%),radial-gradient(60%_50%_at_0%_80%,rgba(238,181,0,0.12)_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-background),rgba(0,0,0,0.75),var(--color-background))]"
      />

      <div className="section-container flex flex-col gap-16 sm:gap-20">
        <h2 className="sr-only">Más contenido de Stella TV</h2>
        {spotlights.map((spotlight, index) => (
          <article
            key={spotlight.title}
            className={`flex flex-col items-center gap-10 md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="relative w-full max-w-md shrink-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-[100px]"
              />
              <Image
                src={spotlight.image}
                alt={`${spotlight.eyebrow} en Stella TV: ${spotlight.title}`}
                width={450}
                height={600}
                sizes="(min-width: 768px) 28rem, 100vw"
                className="h-auto w-full rounded-card object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-5 text-left">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {spotlight.eyebrow}
              </span>

              <h3 className="text-3xl font-bold text-balance sm:text-4xl">
                {spotlight.title}
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-white/60 text-pretty">
                {spotlight.description}
              </p>

              <CtaLink href="/#planes" className="mt-2">
                Ver precios
              </CtaLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
