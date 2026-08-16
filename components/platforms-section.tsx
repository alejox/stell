import { platforms } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Glyph } from "@/components/ui/glyph";

export function PlatformsSection() {
  return (
    <section id="dispositivos" className="section-container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Dispositivos"
        title="Donde quieras verlo"
        description="Una sola cuenta, sincronizada en todas tus pantallas. Empezá en el teléfono y seguí en la tele desde el mismo punto."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform) => (
          <li
            key={platform.name}
            className="flex flex-col gap-3 rounded-card border border-surface-border bg-surface-raised p-6 transition-colors hover:border-accent-soft/40"
          >
            <span className="grid size-11 place-items-center rounded-lg bg-surface-overlay text-accent-soft">
              <Glyph path={platform.icon} />
            </span>
            <h3 className="text-lg font-semibold">{platform.name}</h3>
            <p className="text-sm leading-relaxed text-content-secondary">
              {platform.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
