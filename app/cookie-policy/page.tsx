import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("cookie-policy");

export default function CookiePolicyPage() {
  return <LegalPage id="cookie-policy" />;
}
