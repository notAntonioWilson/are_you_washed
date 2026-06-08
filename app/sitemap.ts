import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/results", "/reviews", "/about", "/contact", "/privacy-policy", "/terms-of-service", "/disclaimer"];
  const now = new Date();

  const staticEntries = routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.6,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries];
}
