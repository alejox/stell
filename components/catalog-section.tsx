import Image from "next/image";
import { catalog } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function CatalogSection() {
  return (
    <section id="contenido" className="section-container py-14 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="Contenido"
        title="Qué vas a encontrar"
        highlight="dentro de la app"
        description="El catálogo mezcla televisión en vivo y contenido bajo demanda, ordenado por categorías para que llegues rápido a lo que buscas."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {catalog.map((item) => (
          <li
            key={item.title}
            className="surface group overflow-hidden rounded-card transition-colors duration-300 hover:border-primary/40"
          >
            {/* Same ratio as the artwork (600x376), so object-cover has nothing to crop. */}
            <div className="relative aspect-[600/376] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_70%,var(--color-surface-raised))]"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
