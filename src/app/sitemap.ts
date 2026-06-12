import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/about",
    "/products",
    "/resources",
    "/blog",
    "/consulting",
    "/contact",
  ];

  const routes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
