/**
 * Central, non-localised site configuration.
 *
 * Everything that is not translated text lives here: contacts, product URLs,
 * social links, the technology stack and the route table. Change a value here
 * and it propagates to the header, footer, contact page, JSON-LD and sitemap.
 */

export const SITE_URL = "https://dvocorp.com";

export const COMPANY = {
  name: "DVO Corp",
  legalName: "DVO Corp",
  shortName: "DVO",
  /** DevOps, Virtualization & Optimization */
  expansion: "DevOps, Virtualization & Optimization",
  foundingLocation: "Ukraine",
  domain: "dvocorp.com",
} as const;

/**
 * Contact endpoints. Kept in one place so no component hardcodes them —
 * header, footer, contact page, CTA blocks and JSON-LD all read from here.
 */
export const CONTACTS = {
  /** Support and project requests. */
  email: "support@dvocorp.com",
  /** General and partnership enquiries. */
  infoEmail: "info@dvocorp.com",
  phone: "+380 63 932 08 74",
  phoneHref: "tel:+380639320874",
  telegramUsername: "dvocorp",
  telegramUrl: "https://t.me/dvocorp",
  instagramUrl: "https://instagram.com/dvocorp",
  /** Shown as a fallback when a visitor prefers a scheduled call. */
  responseWindowHours: 24,
} as const;

export const PRODUCTS = {
  metaplatho: {
    id: "metaplatho",
    name: "MetaPlatho",
    url: "https://metaplatho.com",
    host: "metaplatho.com",
    apiDocsUrl: "https://metaplatho.com/docs/api",
  },
} as const;

export const SOCIAL = [
  { id: "telegram", label: "Telegram", href: CONTACTS.telegramUrl },
  { id: "instagram", label: "Instagram", href: CONTACTS.instagramUrl },
] as const;

/* ------------------------------------------------------------------ */
/* Locales                                                             */
/* ------------------------------------------------------------------ */

export const LOCALES = ["uk", "en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uk";

/** BCP-47 tags used for <html lang>, hreflang and Open Graph. */
export const LOCALE_TAGS: Record<Locale, string> = {
  uk: "uk-UA",
  en: "en",
  ru: "ru",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  ru: "Русский",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/* ------------------------------------------------------------------ */
/* Routes                                                              */
/* ------------------------------------------------------------------ */

/** Route slugs are shared across locales to keep URLs short and stable. */
export const ROUTES = {
  home: "",
  services: "services",
  infrastructure: "infrastructure",
  products: "products",
  about: "about",
  contact: "contact",
  privacy: "privacy",
  terms: "terms",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Order used by the main navigation and the sitemap. */
export const NAV_ORDER: RouteKey[] = [
  "services",
  "infrastructure",
  "products",
  "about",
  "contact",
];

/**
 * Legal pages. Kept out of NAV_ORDER on purpose — they belong in the footer,
 * not the main navigation — but they are real, indexable URLs, so the sitemap
 * appends them separately.
 */
export const LEGAL_ROUTES: RouteKey[] = ["privacy", "terms"];

/** Builds an internal, locale-prefixed, trailing-slash path. */
export function path(locale: Locale, route: RouteKey = "home"): string {
  const slug = ROUTES[route];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Path of a search landing; landings live under the services section. */
export function landingPath(locale: Locale, slug: string): string {
  return `/${locale}/${ROUTES.services}/${slug}/`;
}

export function absoluteUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

/* ------------------------------------------------------------------ */
/* Technology stack                                                    */
/* ------------------------------------------------------------------ */

export type TechGroupId =
  | "orchestration"
  | "cicd"
  | "cloud"
  | "iac"
  | "network"
  | "observability"
  | "data"
  | "runtime"
  | "workloads";

/**
 * The technology showcase.
 *
 * Deliberately curated rather than exhaustive: each group lists the tools a
 * prospective client would recognise and buy on, not every package we have
 * ever touched.
 */
export const TECH_STACK: { id: TechGroupId; items: string[] }[] = [
  {
    id: "orchestration",
    items: [
      "Kubernetes",
      "AWS EKS",
      "Self-managed Kubernetes",
      "Docker",
      "Helm",
      "Argo CD",
      "Flux",
      "Horizontal Pod Autoscaler",
      "KEDA",
      "Kubernetes RBAC",
    ],
  },
  {
    id: "cicd",
    items: [
      "GitLab CI/CD",
      "GitHub Actions",
      "GitOps",
      "GitLab Runner",
      "Kaniko",
      "AWS ECR",
      "Zero-downtime deploy",
      "Rollback",
    ],
  },
  {
    id: "cloud",
    items: [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon VPC",
      "Amazon S3",
      "Amazon EBS",
      "AWS NLB",
      "AWS CloudFront",
      "AWS IAM",
      "Hetzner Cloud",
      "Cloudflare R2",
      "DigitalOcean",
    ],
  },
  {
    id: "iac",
    items: [
      "Terraform",
      "Terragrunt",
      "Terraform modules",
      "Ansible",
      "SOPS",
      "DNS as code",
    ],
  },
  {
    id: "network",
    items: [
      "NGINX Ingress",
      "Traefik",
      "Cloudflare",
      "Cloudflare WAF",
      "cert-manager",
      "Let's Encrypt",
      "TLS / SSL",
      "Network Policies",
      "WireGuard / VPN",
    ],
  },
  {
    id: "observability",
    items: [
      "Prometheus",
      "VictoriaMetrics",
      "Grafana",
      "Loki",
      "Grafana Alloy",
      "Alertmanager",
      "kube-prometheus-stack",
      "Sentry",
    ],
  },
  {
    id: "data",
    items: [
      "PostgreSQL",
      "MySQL / MariaDB",
      "ClickHouse",
      "Redis",
      "S3 / MinIO",
            "Backup & restore",
    ],
  },
  {
    id: "runtime",
    items: [
      "Python",
      "Node.js",
      "Go",
      "PHP",
      "Java",
      "Bash",
      "Linux",
      "REST API",
      "Webhooks",
    ],
  },
  {
    id: "workloads",
    items: [
      "Redis queues",
      "RabbitMQ",
      "Kafka",
      "FFmpeg",
      "GPU workers",
      "LLM serving",
      "AI agents",
      "Scale-to-zero",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Forms                                                               */
/* ------------------------------------------------------------------ */

export const ANALYTICS = {
  /** Left empty on purpose; wire a provider in when one is chosen. */
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
} as const;
