import type { MetadataRoute } from "next";
import { getIndexablePaths, getSeoSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSeoSiteUrl();
  const allow = getIndexablePaths();

  return {
    rules: [
      {
        userAgent: "*",
        allow,
        disallow: ["/test"],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}
