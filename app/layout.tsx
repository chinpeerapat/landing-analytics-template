import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Modern SaaS Landing Page",
  description:
    "A beautiful, production-ready landing page for your SaaS product",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Add Plausible Analytics script dynamically */}
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_SITE_DOMAIN || ""}
          src={`${
            process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || ""
          }/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js`}
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
