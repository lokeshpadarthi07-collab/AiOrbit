import type { Metadata, Viewport } from "next";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "AIOrbit - The Home of Everything AI.",
    template: "%s | AIOrbit",
  },
  description:
    "Discover the tools, companies, and technologies shaping the global AI ecosystem",
  openGraph: {
    title: "AIOrbit - The Home of Everything AI.",
    description:
      "Discover the tools, companies, and technologies shaping the global AI ecosystem",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIOrbit - The Home of Everything AI.",
    description:
      "Discover the tools, companies, and technologies shaping the global AI ecosystem",
  },
};

import { MainShell } from "@/components/MainShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans bg-black text-white selection:bg-white/30" suppressHydrationWarning>
        <ReactQueryProvider>
          <main className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-clip">
            <MainShell>
              {children}
            </MainShell>
            <Toaster />
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
