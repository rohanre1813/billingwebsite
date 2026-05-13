import type { Metadata } from "next";
import GSTInvoiceClient from "./GSTInvoiceClient";

export const metadata: Metadata = {
  title: "Free GST Invoice Generator Online — JusBill",
  description:
    "Create professional GST invoices online for free. Add items, auto-calculate CGST, SGST, IGST and download PDF instantly. No signup needed. Made for Indian businesses.",
  keywords: [
    "GST invoice generator",
    "free GST invoice maker",
    "GST bill generator India",
    "online invoice India",
    "CGST SGST IGST invoice",
    "tax invoice generator",
  ],
  alternates: { canonical: "https://billing.jusbill.online/gst-invoice-generator" },
  openGraph: {
    title: "Free GST Invoice Generator Online — JusBill",
    description: "Create GST invoices with CGST, SGST & IGST. Download PDF free.",
    url: "https://billing.jusbill.online/gst-invoice-generator",
  },
};

export default function GSTInvoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free GST Invoice Generator Online",
            description:
              "Create professional GST invoices with CGST SGST IGST calculations online for free",
            url: "https://billing.jusbill.online/gst-invoice-generator",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://billing.jusbill.online" },
                { "@type": "ListItem", position: 2, name: "GST Invoice Generator", item: "https://billing.jusbill.online/gst-invoice-generator" },
              ],
            },
          }),
        }}
      />
      <GSTInvoiceClient />
    </>
  );
}
