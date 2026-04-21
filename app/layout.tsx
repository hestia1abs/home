import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "./components/toaster";
import { ScrollPreventer } from "./components/ScrollPreventer";
import { GoogleAnalytics } from "./components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://hestialabs.in'),

  title: {
    default: 'Hestia Labs — Sovereign AI for the Physical World',
    template: '%s | Hestia Labs',
  },

  description:
    'Hestia Labs builds HxTP — a cryptographically-signed, local-first execution protocol for AI-controlled hardware. Deterministic smart home and building automation infrastructure for India.',

  keywords: [

    'HxTP protocol',
    'IoT Execution protocol',
    'signed command execution',
    'local-first smart home',
    'edge AI infrastructure',
    'MQTT alternative',
    'zero-trust IoT',
    'embedded AI SDK',
  
    'smart apartment automation India',
    'building automation system India',
    'smart home infrastructure India',
    'IoT platform for builders',
    'smart building solutions Assam',
   
    'AI agent IoT control',
    'deterministic AI execution',
    'sovereign AI infrastructure',
    'local AI home automation',
    'AI hardware control plane',
  ],

  authors: [{ name: 'Sanju Das', url: 'https://hestialabs.in' }],
  creator: 'Hestia Labs',
  publisher: 'Hestia Labs',

  alternates: {
    canonical: 'https://hestialabs.in',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Hestia Labs — Sovereign AI Execution for the Physical World',
    description:
      'HxTP is the execution protocol for AI-controlled hardware. Cryptographically signed, local-first, auditable. Built for smart homes, smart buildings, and industrial automation in India.',
    url: 'https://hestialabs.in',
    siteName: 'Hestia Labs',
    locale: 'en_IN',        // changed to en_IN — India-first signal
    type: 'website',
    images: [
      {
        url: '/logo_h.png',   
        width: 1200,
        height: 630,
        alt: 'Hestia Labs — HxTP Execution Protocol for AI and IoT',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hestia Labs — Sovereign AI Execution for the Physical World',
    description:
      'HxTP: the signed, auditable, local-first protocol that lets AI control physical hardware. Smart home. Smart buildings. Edge-native. India-built.',
    creator: '@hestialabs',
    images: ['/logo_h.png'],
  },

  category: 'technology',

  // Structured entity signals for LLM crawlers and Google Knowledge Graph
  other: {
    'application-name': 'Hestia Labs',
    'geo.region': 'IN-AS',         
    'geo.placename': 'Guwahati, Assam, India',
    'geo.position': '26.3228;91.0020',
    'ICBM': '26.3228, 91.0020',
    'og:locale:alternate': 'hi_IN',  
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="bg-black text-white min-h-screen selection:bg-red-900/40">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold"
        >
          Skip to main content
        </a>
        <ScrollPreventer />
        {children}
        <Toaster />    
        <GoogleAnalytics/>
      </body>
    </html>
  );
}
