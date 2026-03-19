import type { Metadata } from "next";
import ogPages from "@/data/og-pages.json";

type OgPage = (typeof ogPages)[number];

type PageMetadataKey = OgPage["key"];

const SITE_NAME = "DigitioHub";
const DEFAULT_SITE_URL = "https://digitiohub.in";

const pageMetadataMap = Object.fromEntries(
  ogPages.map((page) => [page.key, page]),
) as Record<PageMetadataKey, OgPage>;

export function getSiteMetadataBase() {
  return new URL(DEFAULT_SITE_URL);
}

export function createPageMetadata(key: PageMetadataKey): Metadata {
  const page = pageMetadataMap[key];
  const imagePath = `/og/${page.slug}.png`;
  const pageUrl = new URL(page.route, DEFAULT_SITE_URL).toString();
  const imageUrl = new URL(imagePath, DEFAULT_SITE_URL).toString();

  return {
    title: page.title,
    description: page.description,
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
