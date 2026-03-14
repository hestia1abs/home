import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from '@/components/ui/sonner';
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema } from '@/components/StructuredData';
import { GoogleAnalytics } from '@/components/Analytics';

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
  title: 'Hestia Labs',
  description: 'Hardware intelligence at the edge.',
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
