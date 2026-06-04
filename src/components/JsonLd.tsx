import { siteConfig } from "@/content/site";
import { retainerTiers } from "@/content/services";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
  logo: `${siteConfig.url}/images/alphax-logo.svg`,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.linkedinUrl,
    siteConfig.behanceUrl,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Monthly retainers",
    itemListElement: retainerTiers.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price.replace(/[^\d,]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/services#retainers`,
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you only work with travel agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AlphaX is a travel-only design studio for agencies, DMCs, and tour operators in India.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a free sample before signing up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Message us on WhatsApp with your route or offer and we will share a sample post or reel frame.",
      },
    },
    {
      "@type": "Question",
      name: "Are retainers locked in long term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Monthly plans can be paused or cancelled anytime — no long-term contract.",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
