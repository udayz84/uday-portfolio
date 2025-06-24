import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uday Znanam - Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, and Node.js. Building modern web applications with cutting-edge technologies.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Frontend, Backend",
  authors: [{ name: "Uday Znanam" }],
  creator: "Uday Znanam",
  publisher: "Uday Znanam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uday-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Uday Znanam - Full Stack Developer',
    description: 'Full Stack Developer specializing in Next.js, React, and Node.js. Building modern web applications with cutting-edge technologies.',
    siteName: 'Uday Znanam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uday Znanam - Full Stack Developer',
    description: 'Full Stack Developer specializing in Next.js, React, and Node.js',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Uday Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
