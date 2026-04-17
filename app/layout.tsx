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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
