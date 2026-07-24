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
 * Contact endpoints.
 *
 * TODO(owner): replace the placeholder handles below with the real ones.
 * They are intentionally kept in one place so no component hardcodes them.
 */
export const CONTACTS = {
  email: "hello@dvocorp.com",
  telegramUsername: "dvocorp",
  telegramUrl: "https://t.me/dvocorp",
  /** Shown as a fallback when a visitor prefers a scheduled call. */
  responseWindowHours: 24,
} as const;

export const PRODUCTS = {
  mediaProcessing: {
    id: "media-processing",
    name: "DVO Media Processing",
    url: "https://mp.dvocorp.com",
    host: "mp.dvocorp.com",
  },
} as const;

export const SOCIAL = [
  { id: "telegram", label: "Telegram", href: CONTACTS.telegramUrl },
  { id: "github", label: "GitHub", href: "https://github.com/DVO-corp" },
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
  ai: "ai-infrastructure",
  infrastructure: "infrastructure",
  products: "products",
  about: "about",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Order used by the main navigation and the sitemap. */
export const NAV_ORDER: RouteKey[] = [
  "services",
  "ai",
  "infrastructure",
  "products",
  "about",
  "contact",
];

/** Builds an internal, locale-prefixed, trailing-slash path. */
export function path(locale: Locale, route: RouteKey = "home"): string {
  const slug = ROUTES[route];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
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
  | "observability"
  | "cloud"
  | "ai"
  | "data";

export const TECH_STACK: { id: TechGroupId; items: string[] }[] = [
  {
    id: "orchestration",
    items: [
      "Kubernetes",
      "K3s",
      "Docker",
      "Helm",
      "Terraform",
      "Ansible",
      "Nginx",
      "Traefik",
    ],
  },
  {
    id: "cicd",
    items: [
      "GitLab CI",
      "GitHub Actions",
      "Argo CD",
      "GitOps",
      "Docker Registry",
      "Renovate",
    ],
  },
  {
    id: "observability",
    items: [
      "Grafana",
      "Prometheus",
      "Loki",
      "Grafana Alloy",
      "Alertmanager",
      "Uptime Kuma",
    ],
  },
  {
    id: "cloud",
    items: [
      "Hetzner",
      "AWS",
      "DigitalOcean",
      "Cloudflare",
      "Proxmox",
      "S3 / MinIO",
      "Restic",
    ],
  },
  {
    id: "ai",
    items: [
      "ComfyUI",
      "PyTorch",
      "CUDA",
      "vLLM",
      "Ollama",
      "Whisper",
      "FFmpeg",
      "Triton",
    ],
  },
  {
    id: "data",
    items: [
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Celery",
      "FastAPI",
      "Node.js",
      "Python",
      "Go",
    ],
  },
];

/** Total distinct technologies — used by the animated counters. */
export const TECH_COUNT = TECH_STACK.reduce(
  (total, group) => total + group.items.length,
  0,
);

/* ------------------------------------------------------------------ */
/* Forms                                                               */
/* ------------------------------------------------------------------ */

/**
 * The contact form posts nowhere today. When a backend appears, point this at
 * the endpoint (e.g. `/api/lead` or a serverless function) and flip DEMO_MODE
 * off — the form component already handles both paths.
 */
export const FORM = {
  endpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  get demoMode() {
    return !this.endpoint;
  },
} as const;

export const ANALYTICS = {
  /** Left empty on purpose; wire a provider in when one is chosen. */
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
} as const;
