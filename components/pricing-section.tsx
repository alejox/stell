import { Check, ShieldCheck } from "lucide-react";
import type { Plan } from "@/content/site";
import { planFeatures, plans } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";

function PlanCard({ plan }: { plan: Plan }) {
  const features = [`Ver en ${plan.screens} pantallas`, ...planFeatures];

  return (
    <li
      className={`relative flex flex-col rounded-card p-px transition-transform duration-300 ${
        plan.featured
          ? "bg-linear-[135deg,var(--color-primary),var(--color-primary-to)] lg:-translate-y-3"
          : "bg-white/10 hover:bg-primary/30"
      }`}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-[135deg,var(--color-primary),var(--color-primary-to)] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {plan.badge}
        </span>
      ) : null}

      <div className="flex h-full flex-col items-center rounded-[calc(var(--radius-card)-1px)] bg-surface-raised px-6 pb-8 pt-9 text-center">
        <h3 className="text-2xl font-bold uppercase">{plan.name}</h3>
        <p className="mt-1 text-sm text-primary">{plan.tagline}</p>

        <p className="mt-6 flex items-start justify-center gap-1 leading-none">
          <span className="mt-2 text-2xl font-bold text-primary">$</span>
          <span className="text-7xl font-bold text-primary">{plan.price}</span>
          <span className="mt-2 text-2xl font-bold text-primary">
            {plan.cents}
          </span>
        </p>
        <p className="mt-3 text-sm text-white/50">
          {plan.currency} · {plan.period}
        </p>

        <ul className="mt-8 flex w-full flex-col gap-3 text-left">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 border-b border-white/5 pb-3 text-sm text-white/70 last:border-0"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <CtaLink
          href="#distribuidores"
          variant={plan.featured ? "primary" : "outline"}
          className="mt-8 w-full"
        >
          Comprar
        </CtaLink>

        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/40">
          <ShieldCheck size={14} />
          Compra segura
        </p>
      </div>
    </li>
  );
}

export function PricingSection() {
  return (
    <section id="planes" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url(/image/fondo-flujo-tv.png)] bg-cover bg-center opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-background),rgba(0,0,0,0.7),var(--color-background))]"
      />

      <div className="section-container">
        <SectionHeading
          eyebrow="Planes"
          title="Precios de Stella TV"
          highlight="2026"
          description="Elige el plan que quieras y realiza el pago con un distribuidor autorizado. Tus datos de acceso se envían por correo electrónico."
        />

        <ul className="mt-20 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-white/40">
          Estos precios están disponibles para todos los países. Pagos 100%
          seguros y rápidos.
        </p>
      </div>
    </section>
  );
}
