import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = createPageMetadata("portfolio");

export default function PortfolioPage() {
    return <PortfolioClient />;
}
