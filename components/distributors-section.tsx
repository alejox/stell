"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { countries, distributorWhatsapp, distributors } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function DistributorsSection() {
  const [selectedName, setSelectedName] = useState(countries[0].name);

  const selected =
    countries.find((country) => country.name === selectedName) ?? countries[0];

  return (
    <section id="distribuidores" className="section-container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Distribuidores"
        title="Elegí un distribuidor"
        highlight="de tu país"
        description="Contactá directamente al distribuidor autorizado de tu país para comprar tu cuenta, renovarla o resolver cualquier duda."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-2.5">
        {countries.map((country) => {
          const isSelected = country.name === selected.name;

          return (
            <button
              key={country.name}
              type="button"
              onClick={() => setSelectedName(country.name)}
              aria-pressed={isSelected}
              className={`inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isSelected
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-white/10 bg-surface-raised text-white/70 hover:border-primary/40 hover:text-white"
              }`}
            >
              <Image
                src={country.flag}
                alt=""
                width={24}
                height={18}
                className="h-4 w-6 rounded-[2px] object-cover"
              />
              {country.name}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {selected.distributors.map((id) => {
          const distributor = distributors[id];

          return (
            <li
              key={`${selected.name}-${id}`}
              className="surface flex flex-col gap-5 rounded-card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <Image
                  src={selected.flag}
                  alt=""
                  width={40}
                  height={30}
                  className="h-7 w-10 rounded-[3px] object-cover"
                />
                <div>
                  <p className="font-semibold">{distributor.name}</p>
                  <p className="text-xs text-white/40">{selected.name}</p>
                </div>
              </div>

              <p className="inline-flex items-center gap-2 text-sm text-white/60">
                <Phone size={14} className="text-primary" />
                {distributor.phone}
              </p>

              <div className="mt-auto flex flex-wrap gap-2.5">
                <a
                  href={distributorWhatsapp(distributor, selected.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-2.5 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-black"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                  <span className="sr-only">
                    de {distributor.name} en {selected.name}
                  </span>
                </a>

                {distributor.telegram ? (
                  <a
                    href={distributor.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/70 transition-colors hover:border-[#29A9EB] hover:text-white"
                  >
                    <Send size={15} />
                    Telegram
                    <span className="sr-only">
                      de {distributor.name} en {selected.name}
                    </span>
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 text-center text-sm text-white/40">
        ¿Tarjeta, transferencia o cripto? Cada distribuidor te indica los medios
        de pago disponibles en tu país.
      </p>
    </section>
  );
}
