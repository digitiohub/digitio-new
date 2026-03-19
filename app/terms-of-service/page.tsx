import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("terms-of-service");

export default function TermsOfServicePage() {
  return <LegalPage id="terms-of-service" />;
}
