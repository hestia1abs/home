import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Alex_Brush } from 'next/font/google';

import './global.css';

import { Toaster } from '@/components/ui/sonner';
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema, ProductSchema, FAQSchema } from '@/components/StructuredData';
import { GoogleAnalytics } from '@/components/Analytics';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hyperspeed } from '@/components/animations/Hyperspeed';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });
const alexBrush = Alex_Brush({ weight: '400', subsets: ['latin'], variable: '--font-alex-brush' });



export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hestialabs.in'),
  title: 'Hestia Labs — Intelligence That Acts',
  description: 'Custom hardware, software, and AI designed from scratch for presence, control, and embodied intelligence. Meet Kara and Mark — cloud intelligences that interact with the physical world.',
  keywords: ['intelligent infrastructure', 'ambient intelligence', 'AI hardware', 'smart home', 'HX47', 'HxTP protocol', 'edge computing', 'embodied AI', 'Kara', 'Mark', 'Hestia Labs'],
  openGraph: {
    title: 'Hestia Labs — Intelligence That Acts',
    description: 'The moment intelligence learned to act. Custom hardware, cloud AI, and a sovereign protocol — built from scratch for the physical world.',
    url: 'https://hestialabs.in',
    siteName: 'Hestia Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hestia Labs — Intelligence That Acts',
    description: 'Cloud intelligence that interacts with the physical world. Custom hardware. Sovereign protocol. Built from nothing.',
    creator: '@hestialabs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark shadow-none overflow-x-hidden">
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <WebSiteSchema />
        <ProductSchema />
        <FAQSchema />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${alexBrush.variable} font-mono bg-black min-h-screen antialiased flex flex-col`}>

        <Hyperspeed />
        <GoogleAnalytics />
          <Header />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
