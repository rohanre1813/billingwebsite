import type { Metadata } from "next";
import ReceiptClient from "./ReceiptClient";

export const metadata: Metadata = {
  title: "Free Receipt Generator Online — JusBill",
  description:
    "Create payment receipts online for free. Add customer details, payment amount, method and download PDF instantly. Made for Indian businesses.",
  alternates: { canonical: "https://billing.jusbill.online/receipt-generator" },
  openGraph: {
    title: "Free Receipt Generator Online — JusBill",
    description: "Create and download payment receipts as PDF — free for Indian businesses.",
    url: "https://billing.jusbill.online/receipt-generator",
  },
};

export default function ReceiptPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Receipt Generator Online",
            description: "Generate payment receipts online and download PDF",
            url: "https://billing.jusbill.online/receipt-generator",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://billing.jusbill.online" },
                { "@type": "ListItem", position: 2, name: "Receipt Generator", item: "https://billing.jusbill.online/receipt-generator" },
              ],
            },
          }),
        }}
      />
      <ReceiptClient />
    </>
  );
}
