import {
  COMPANY,
  CONTACTS,
  LOCALE_TAGS,
  PRODUCTS,
  SITE_URL,
  SOCIAL,
  absoluteUrl,
  path,
  type Locale,
  type RouteKey,
} from "@/content/site";
import { getDictionary } from "@/content/locales";

type Json = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Markets we actually sell to; mirrored in the copy and the promotion plan. */
const AREA_SERVED = [
  "Ukraine",
  "Poland",
  "Moldova",
  "Lithuania",
  "Latvia",
  "Estonia",
  "Czechia",
  "Romania",
  "Germany",
  "European Union",
];

const KNOWS_ABOUT = [
  "DevOps",
  "Amazon Web Services",
  "Amazon EKS",
  "Kubernetes",
  "Terraform",
  "Infrastructure as code",
  "CI/CD",
  "GitOps",
  "Monitoring and alerting",
  "Cloud cost optimization",
  "Cloud migration",
  "Site reliability engineering",
];

export function organizationSchema(locale: Locale): Json {
  const dict = getDictionary(locale);
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: COMPANY.expansion,
    url: SITE_URL,
    description: dict.seo.home.description,
    email: CONTACTS.email,
    telephone: CONTACTS.phone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
      width: 512,
      height: 512,
    },
    sameAs: SOCIAL.map((s) => s.href),
    knowsLanguage: Object.values(LOCALE_TAGS),
    areaServed: AREA_SERVED,
    knowsAbout: KNOWS_ABOUT,
    address: { "@type": "PostalAddress", addressCountry: "UA" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACTS.infoEmail,
        telephone: CONTACTS.phone,
        url: absoluteUrl(path(locale, "contact")),
        availableLanguage: ["Ukrainian", "English", "Russian"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACTS.email,
        telephone: CONTACTS.phone,
        availableLanguage: ["Ukrainian", "English", "Russian"],
      },
    ],
  };
}

export function websiteSchema(locale: Locale): Json {
  const dict = getDictionary(locale);
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: COMPANY.name,
    description: dict.seo.home.description,
    inLanguage: LOCALE_TAGS[locale],
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; route: RouteKey }[],
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(path(locale, item.route)),
    })),
  };
}

/** Only emit this where the questions are actually rendered on the page. */
export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Breadcrumbs for pages that are not top-level routes (search landings). */
export function trailSchema(trail: { name: string; url: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}): Json {
  return {
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
    url: service.url,
  };
}

export function softwareApplicationSchema(
  locale: Locale,
  app: { name: string; description: string },
): Json {
  return {
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: PRODUCTS.metaplatho.url,
    inLanguage: LOCALE_TAGS[locale],
    publisher: { "@id": ORG_ID },
  };
}

/** Wraps one or more nodes into a single `@graph` document. */
export function graph(nodes: Json[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}
