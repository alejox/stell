import Image from "next/image";
import { spotlights } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";

export function SpotlightSection() {
  return (
    <section className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url(/image/fondo-de-la-web-flujotv-black.png)] bg-cover bg-center opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-background),rgba(0,0,0,0.75),var(--color-background))]"
      />

      <div className="section-container flex flex-col gap-20">
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
                alt=""
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

              <CtaLink href="#planes" className="mt-2">
                Contratar
              </CtaLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
