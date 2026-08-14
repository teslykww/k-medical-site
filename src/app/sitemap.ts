import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { baseUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/stomatology", "/doctor", "/diagnostic", "/articles"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
    })),
  ];
}
