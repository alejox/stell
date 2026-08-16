"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="section-container flex h-18 items-center justify-between gap-4">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={150}
            height={49}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href="/stellatv-reseller" variant="outline" className="px-5 py-2">
            Reseller
          </CtaLink>
          <CtaLink href="/#planes" className="px-5 py-2">
            Comprar
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Principal (móvil)"
          className="border-t border-white/5 bg-surface lg:hidden"
        >
          <ul className="section-container flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/5">
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Click bubbles up from either link, closing the menu after navigation. */}
            <li className="flex flex-col gap-3 py-4" onClick={closeMenu}>
              <CtaLink href="/stellatv-reseller" variant="outline">
                Ser revendedor
              </CtaLink>
              <CtaLink href="/#planes">Comprar Stella TV</CtaLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
