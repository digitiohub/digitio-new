import type { Metadata } from "next";
import ogPages from "@/data/og-pages.json";

type OgPage = (typeof ogPages)[number];

type PageMetadataKey = OgPage["key"];

const SITE_NAME = "DigitioHub";
const DEFAULT_SITE_URL = "https://digitiohub.in";
const SITE_URL = process.env.SITE_URL?.trim() || process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
const FAVICON_VERSION =
  process.env.FAVICON_VERSION?.trim() || process.env.NEXT_PUBLIC_FAVICON_VERSION?.trim() || "";

const pageMetadataMap = Object.fromEntries(
  ogPages.map((page) => [page.key, page]),
) as Record<PageMetadataKey, OgPage>;

export function getSiteMetadataBase() {
  return new URL(SITE_URL);
}

export function withAssetVersion(assetPath: string) {
  if (!FAVICON_VERSION) return assetPath;
  const separator = assetPath.includes("?") ? "&" : "?";
  return `${assetPath}${separator}v=${encodeURIComponent(FAVICON_VERSION)}`;
}

export function createPageMetadata(key: PageMetadataKey, routeOverride?: string): Metadata {
  const page = pageMetadataMap[key];
  const imagePath = `/og/${page.slug}.png`;
  const route = routeOverride || page.route;
  const metadataBase = getSiteMetadataBase();
  const pageUrl = new URL(route, metadataBase).toString();
  const imageUrl = new URL(imagePath, metadataBase).toString();

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.ogTitle,
      description: page.description,
      type: "website",
      siteName: SITE_NAME,
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${page.ogTitle} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.description,
      images: [imageUrl],
    },
  };
}
