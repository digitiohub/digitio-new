import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getPortfolioHubData } from "@/lib/sectors";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = createPageMetadata("portfolio");

export default async function PortfolioPage() {
    const { sectors, projects } = await getPortfolioHubData();

    return (
        <PortfolioClient
            sectors={sectors}
            projects={projects}
        />
    );
}
