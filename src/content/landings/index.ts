import { landing as devopsOutsourcing } from "./data/devops-outsourcing";
import { landing as awsDevops } from "./data/aws-devops";
import { landing as kubernetes } from "./data/kubernetes";
import { landing as terraformIac } from "./data/terraform-iac";
import { landing as ciCd } from "./data/ci-cd";
import { landing as monitoring } from "./data/monitoring";
import { landing as cloudCostOptimization } from "./data/cloud-cost-optimization";
import { landing as infrastructureSecurity } from "./data/infrastructure-security";
import { landing as cloudMigration } from "./data/cloud-migration";
import { landing as infrastructureSupport } from "./data/infrastructure-support";
import { landing as highLoad } from "./data/high-load";
import { landing as managedHosting } from "./data/managed-hosting";
import { landing as apiDevelopment } from "./data/api-development";
import { landing as aiInfrastructure } from "./data/ai-infrastructure";
import { landing as devopsForStartups } from "./data/devops-for-startups";
import {
  LANDING_LOCALES,
  type Landing,
  type LandingEntry,
  type LandingLocale,
} from "./types";

/** Registry order is the order used in the sitemap and in link lists. */
export const LANDINGS: Record<string, LandingEntry> = {
  "devops-outsourcing": devopsOutsourcing,
  "aws-devops": awsDevops,
  kubernetes,
  "terraform-iac": terraformIac,
  "ci-cd": ciCd,
  monitoring,
  "cloud-cost-optimization": cloudCostOptimization,
  "infrastructure-security": infrastructureSecurity,
  "cloud-migration": cloudMigration,
  "infrastructure-support": infrastructureSupport,
  "high-load": highLoad,
  "managed-hosting": managedHosting,
  "api-development": apiDevelopment,
  "ai-infrastructure": aiInfrastructure,
  "devops-for-startups": devopsForStartups,
};

export const LANDING_SLUGS = Object.keys(LANDINGS);

export function hasLandings(locale: string): locale is LandingLocale {
  return (LANDING_LOCALES as readonly string[]).includes(locale);
}

/** Returns the landing for a locale, or null where it is not published. */
export function getLanding(locale: string, slug: string): Landing | null {
  if (!hasLandings(locale)) return null;
  return LANDINGS[slug]?.[locale] ?? null;
}

export { LANDING_LOCALES };
export type { Landing, LandingLocale };
