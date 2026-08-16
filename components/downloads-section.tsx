import { Box, Download, Monitor, Smartphone, Tv } from "lucide-react";
import type { DeviceLink } from "@/content/site";
import { devices } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = {
  smartphone: Smartphone,
  tv: Tv,
  box: Box,
  monitor: Monitor,
} as const;

function DeviceCard({ device }: { device: DeviceLink }) {
  const Icon = icons[device.icon];

  return (
    <li>
      <a
        href={device.href}
        className="surface group flex h-full flex-col items-center gap-4 rounded-card p-8 text-center transition-colors duration-300 hover:border-primary/40"
      >
        <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon size={26} />
        </span>

        <h3 className="text-lg font-semibold uppercase tracking-wide">
          {device.name}
        </h3>

        <p className="text-sm leading-relaxed text-white/60">
          {device.description}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary">
          <Download size={16} />
          Descargar APK
        </span>
      </a>
    </li>
  );
}

export function DownloadsSection() {
  return (
    <section id="descargar" className="section-container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Descargar"
        title="Dónde se instala"
        highlight="Stella TV"
        description="Hay dos archivos de instalación: uno pensado para celular y tablet, y otro para televisores y dispositivos conectados al TV. Descarga el que corresponda a tu equipo."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {devices.map((device) => (
          <DeviceCard key={device.name} device={device} />
        ))}
      </ul>
    </section>
  );
}
