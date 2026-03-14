import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from '@/components/ui/sonner';
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema } from '@/components/StructuredData';
import { GoogleAnalytics } from '@/components/Analytics';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Hestia Labs — The Future of Intelligent Homes',
  description: 'Premium hardware intelligence at the edge. Building the next generation of smart home protocols and devices.',
  openGraph: {
    title: 'Hestia Labs — The Future of Intelligent Homes',
    description: 'Hardware intelligence at the edge. Smart home systems that feel alive.',
    url: 'https://hestialabs.in',
    siteName: 'Hestia Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hestia Labs — The Future of Intelligent Homes',
    description: 'Hardware intelligence at the edge.',
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
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans min-h-screen antialiased flex flex-col`}>
        <GoogleAnalytics />
        <AuthProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
