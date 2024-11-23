import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PlausibleProvider from 'next-plausible';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Modern SaaS Landing Page',
  description: 'A beautiful, production-ready landing page for your SaaS product',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_SITE_DOMAIN || ''} customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}