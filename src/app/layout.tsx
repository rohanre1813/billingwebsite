import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GA_ID = "G-8KL9W9QJEE";

export const metadata: Metadata = {
  metadataBase: new URL("https://billing.jusbill.online"),
  title: {
    default: "JusBill — Free GST Billing & Invoice Tools Online",
    template: "%s | JusBill",
  },
  verification: {
  google: "38nrBs6JRy2Vd_4rMpeiya3uJ_iXSpzWoNkipdFK-EM",
  
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
  authors: [{ name: "JusBill", url: "https://billing.jusbill.online" }],
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
    url: "https://billing.jusbill.online",
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
    canonical: "https://billing.jusbill.online",
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
              url: "https://billing.jusbill.online",
              description:
                "Free online GST billing and invoicing platform for Indian businesses",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://billing.jusbill.online/blog?q={search_term_string}",
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

        {/* Google Analytics 4 — production only */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Google AdSense — verification script */}
        {process.env.NODE_ENV === "production" && (
          <Script
            id="google-adsense"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2865599533422047"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
