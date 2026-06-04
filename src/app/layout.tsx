import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { ScarcityBanner } from "@/components/ScarcityBanner";
import { LeadMagnetPopup } from "@/components/LeadMagnetPopup";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Analytics } from "@/components/Analytics";
import { rootMetadata } from "@/content/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#1A3B5D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <meta name="msvalidate.01" content="EF340871B3925EDE3C797C6D51617BEC" />
      </head>
      <body className={`min-h-screen pb-[4.5rem] sm:pb-0 ${plusJakarta.className}`}>
        <Analytics />
        <JsonLd />
        <ScarcityBanner />
        <SiteHeader />
        <main className="pb-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <StickyMobileCta />
        <WhatsAppFloat />
        <LeadMagnetPopup />
      </body>
    </html>
  );
}
