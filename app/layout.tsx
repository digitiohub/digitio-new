import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/footer";
import { getSiteMetadataBase, withAssetVersion } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteMetadataBase(),
  title: "DigitioHub",
  description: "DigitioHub is a leading digital marketing agency that provides comprehensive, high-quality solutions tailored to elevate your business, drive tangible results, and establish your brand's digital presence.",
  icons: {
    icon: [
      { url: withAssetVersion("/favicon.ico") },
      { url: withAssetVersion("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: withAssetVersion("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: withAssetVersion("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: withAssetVersion("/site.webmanifest"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DigitioHub",
  description:
    "DigitioHub builds AI-driven digital systems, products, and campaigns that help modern businesses grow with clarity and measurable results.",
  url: "https://digitiohub.in",
  logo: "https://digitiohub.in/logos/logo_blue.png",
  founder: {
    "@type": "Person",
    name: "Somesh Chaudhari",
  },
  email: "info@digitiohub.in",
  telephone: "+91-84839-52398",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room No. 520, Bhaskarachraya Building, Somaiya Vidyavihar, Vidyavihar (E)",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400077",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@digitiohub.in",
    telephone: "+91-84839-52398",
    contactType: "customer support",
  },
  knowsAbout: [
    "Web Development",
    "Cloud Solutions",
    "App Development",
    "Software Development",
    "AI Solutions",
    "Graphic Design",
    "Creative Branding",
    "Search Engine Optimization",
    "Social Media Management",
  ],
  sameAs: [
    "https://github.com/digitiohub",
    "https://github.com/digitiohubsolutions/",
    "https://www.linkedin.com/company/digitiohub/",
    "https://www.instagram.com/digitiohub/",
    "https://www.youtube.com/@DigitioHub",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30 overflow-x-clip flex flex-col`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
