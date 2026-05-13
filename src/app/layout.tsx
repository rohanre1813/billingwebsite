import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jusbill.online"),
  title: {
    default: "JusBill — Free GST Billing & Invoice Tools Online",
    template: "%s | JusBill",
  },
  description:
    "JusBill is a free online billing and invoicing platform for Indian businesses. Create GST invoices, receipts, salary slips and more — no signup required.",
  keywords: [
    "GST invoice generator",
    "free invoice maker India",
    "GST bill generator",
    "receipt generator",
    "GST calculator India",
    "proforma invoice India",
    "salary slip generator",
    "online billing India",
    "CGST SGST IGST calculator",
  ],
  authors: [{ name: "JusBill", url: "https://jusbill.online" }],
  creator: "JusBill",
  publisher: "JusBill",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jusbill.online",
    siteName: "JusBill",
    title: "JusBill — Free GST Billing & Invoice Tools Online",
    description:
      "Create GST invoices, receipts, salary slips online for free. Made for Indian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JusBill — Free GST Billing & Invoice Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JusBill — Free GST Billing & Invoice Tools Online",
    description: "Create GST invoices, receipts, salary slips online for free.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jusbill.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JusBill",
              url: "https://jusbill.online",
              description:
                "Free online GST billing and invoicing platform for Indian businesses",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://jusbill.online/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
