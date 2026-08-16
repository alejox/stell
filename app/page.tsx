import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { DownloadsSection } from "@/components/downloads-section";
import { PricingSection } from "@/components/pricing-section";
import { DistributorsSection } from "@/components/distributors-section";
import { CatalogSection } from "@/components/catalog-section";
import { SpotlightSection } from "@/components/spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { brand, faqs, plans, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      url: siteUrl,
      logo: `${siteUrl}${brand.logo}`,
      description: brand.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brand.name,
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: `${brand.name} — ${brand.tagline}`,
      description: brand.description,
      inLanguage: "es",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ItemList",
      name: "Planes de Stella TV",
      itemListElement: plans.map((plan, position) => ({
        "@type": "ListItem",
        position: position + 1,
        name: plan.name,
        description: `${plan.tagline}. ${plan.period}. ${plan.screens} pantallas.`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <DownloadsSection />
      <PricingSection />
      <DistributorsSection />
      <CatalogSection />
      <SpotlightSection />
      <FaqSection />
    </>
  );
}
