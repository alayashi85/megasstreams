import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "ar"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/en`,
      },
    },
  }));
}
