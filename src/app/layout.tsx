import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: Define a CSS variable
});

const title = "TrackToInvoice – Time Tracking to Invoicing, Instantly";
const description = "TrackToInvoice lets freelancers upload time logs and instantly generate branded invoices — with zero setup and no messy spreadsheets.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    // Add a placeholder image URL - replace with actual URL later if available
    // images: ['/og-image.png'], 
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    // images: ['/twitter-image.png'], // Add placeholder Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
