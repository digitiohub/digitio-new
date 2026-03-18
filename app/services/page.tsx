import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = createPageMetadata("services");

export default function ServicesPage() {
  return <ServicesClient />;
}
