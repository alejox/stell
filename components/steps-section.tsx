import { steps } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";

export function StepsSection() {
  return (
    <section id="como-comprar" className="section-container py-14 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="Cómo comprar"
        title="De la web a tu pantalla"
        highlight="en tres pasos"
        description="No hay carrito ni pasarela de pago: la compra se coordina directo con el distribuidor de tu país, que trabaja con los medios de pago de tu plaza."
      />

      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="surface relative flex flex-col gap-4 rounded-card p-8"
          >
            <span
              aria-hidden="true"
              className="text-5xl font-bold leading-none text-primary/25"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-xl font-semibold">{step.title}</h3>

            <p className="text-sm leading-relaxed text-white/60">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <CtaLink href="/#distribuidores" className="px-8 py-4 text-base">
          Ver distribuidores por país
        </CtaLink>
      </div>
    </section>
  );
}
