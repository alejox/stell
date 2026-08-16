import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { DownloadsSection } from "@/components/downloads-section";
import { PricingSection } from "@/components/pricing-section";
import { DistributorsSection } from "@/components/distributors-section";
import { CatalogSection } from "@/components/catalog-section";
import { SpotlightSection } from "@/components/spotlight-section";
import { FaqSection } from "@/components/faq-section";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
      <StructuredData />
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
