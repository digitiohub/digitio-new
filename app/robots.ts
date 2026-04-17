import type { MetadataRoute } from "next";
import { getSiteMetadataBase } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const metadataBase = getSiteMetadataBase();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", metadataBase).toString(),
    host: metadataBase.toString(),
  };
}
