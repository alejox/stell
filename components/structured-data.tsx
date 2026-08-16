import { brand, faqs, plans, seo, siteUrl, steps } from "@/content/site";

/**
 * JSON-LD for the landing page. Search engines read this instead of guessing:
 * who publishes the site, what is sold, at what price, and which questions the
 * page already answers.
 */
export function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}${brand.logo}`,
    description: seo.description,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    inLanguage: "es",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: "es",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    primaryImageOfPage: `${siteUrl}${seo.socialImage}`,
  };

  const prices = plans.map((plan) => Number(`${plan.price}.${plan.cents}`));

  const product = {
    "@type": "Product",
    "@id": `${siteUrl}/#product`,
    name: `Cuenta ${brand.name}`,
    description: seo.description,
    image: `${siteUrl}${seo.socialImage}`,
    brand: { "@type": "Brand", name: brand.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: plans.length,
      availability: "https://schema.org/InStock",
      offers: plans.map((plan, index) => ({
        "@type": "Offer",
        name: `${brand.name} — ${plan.tagline}`,
        price: prices[index],
        priceCurrency: plan.currency,
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#planes`,
      })),
    },
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${siteUrl}/#como-comprar`,
    name: `Cómo comprar una cuenta de ${brand.name}`,
    description:
      "Los tres pasos para contratar el servicio: elegir el plan, contactar al distribuidor autorizado del país y recibir los datos de acceso.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${siteUrl}/#como-comprar`,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, webPage, product, howTo, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escaping "<" keeps a stray "</script>" in any copy from closing the tag.
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
