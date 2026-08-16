import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faqs" className="section-container py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            align="start"
            eyebrow="FAQ"
            title="Preguntas"
            highlight="frecuentes"
            description="Acá están las respuestas a las dudas más comunes sobre la aplicación: cómo renovar Stella TV, cómo adquirir una cuenta y bastante más."
          />

          <Image
            src="/image/dudas-magis-tv.81befdbc.png"
            alt=""
            width={578}
            height={699}
            sizes="(min-width: 1024px) 24rem, 60vw"
            className="mx-auto h-auto w-3/5 max-w-sm lg:mx-0 lg:w-full"
          />
        </div>

        <ul className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <li key={faq.question}>
              <details className="surface group rounded-2xl px-6 transition-colors duration-300 open:border-primary/40 hover:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold marker:content-none">
                  {faq.question}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="border-t border-white/10 py-5 text-sm leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
