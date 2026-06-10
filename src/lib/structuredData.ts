import { site } from '../data/site';
import { testimonials, tiers } from '../data/content';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description:
    'Custom websites for established service businesses. Clean, conversion-focused web design that builds trust and turns visitors into inquiries.',
  url: site.url,
  logo: `${site.url}/faviconPNG.png`,
  image: `${site.url}${site.ogImage}`,
  telephone: site.phone,
  email: site.email,
  founder: { '@type': 'Person', name: site.founder },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: { '@type': 'State', name: site.areaServed },
  priceRange: '$$',
  serviceType: ['Website Design', 'Web Development', 'Website Care & Support'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: tiers.map((t) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: t.name.replace(/"/g, ''),
        description: t.features.join(', '),
      },
      price: String(t.amount),
      priceCurrency: 'USD',
    })),
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(testimonials.length),
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5' },
    reviewBody: t.quote,
  })),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
};
