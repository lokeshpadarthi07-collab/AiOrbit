import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = {
  title: "AIOrbit - The Home of Everything AI.",
  description:
    "Discover the tools, companies, and technologies shaping the global AI ecosystem",
  openGraph: {
    title: "AIOrbit - The Home of Everything AI.",
    description:
      "Discover the tools, companies, and technologies shaping the global AI ecosystem",
    siteName: "AIOrbit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIOrbit - The Home of Everything AI.",
    description:
      "Discover the tools, companies, and technologies shaping the global AI ecosystem",
  },
};

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center bg-[#000000]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
      </div>
    }>
      <HomeClient />
    </Suspense>
  );
}
