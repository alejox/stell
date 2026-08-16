import Image from "next/image";
import Link from "next/link";
import { brand, footer } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="section-container grid gap-12 py-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
        <div className="flex flex-col items-start gap-5">
          <Link href="/">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={49}
              className="h-9 w-auto"
            />
          </Link>

          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            {footer.description}
          </p>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              {column.title}
            </h2>

            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. Todos los derechos
            reservados.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="#" className="transition-colors hover:text-white">
                Términos de uso
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-white">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-white">
                Política de cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
