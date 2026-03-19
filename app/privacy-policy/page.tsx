import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalPage id="privacy-policy" />;
}
