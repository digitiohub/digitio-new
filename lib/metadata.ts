import type { Metadata } from "next";
import ogPages from "@/data/og-pages.json";

type OgPage = (typeof ogPages)[number];

type PageMetadataKey = OgPage["key"];

const SITE_NAME = "DigitioHub";

const pageMetadataMap = Object.fromEntries(
  ogPages.map((page) => [page.key, page]),
) as Record<PageMetadataKey, OgPage>;

export function getSiteMetadataBase() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
}

export function createPageMetadata(key: PageMetadataKey): Metadata {
  const page = pageMetadataMap[key];
  const imagePath = `/og/${page.slug}.png`;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.ogTitle,
      description: page.description,
      type: "website",
      siteName: SITE_NAME,
      url: page.route,
      images: [
        {
          url: imagePath,
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
      images: [imagePath],
    },
  };
}
