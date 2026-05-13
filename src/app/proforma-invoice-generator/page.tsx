import type { Metadata } from "next";
import ProformaWrapper from "./ProformaWrapper";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export const metadata: Metadata = {
  title: "Free Proforma Invoice Generator Online — JusBill",
  description:
    "Create professional proforma invoices online for free. Perfect for quotations and advance payments. Download PDF instantly.",
  alternates: { canonical: "https://jusbill.online/proforma-invoice-generator" },
  openGraph: {
    title: "Free Proforma Invoice Generator Online — JusBill",
    description: "Create proforma invoices and download PDF free for Indian businesses.",
    url: "https://jusbill.online/proforma-invoice-generator",
  },
};

export default function ProformaInvoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Proforma Invoice Generator Online",
            url: "https://jusbill.online/proforma-invoice-generator",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://jusbill.online" },
                { "@type": "ListItem", position: 2, name: "Proforma Invoice Generator", item: "https://jusbill.online/proforma-invoice-generator" },
              ],
            },
          }),
        }}
      />
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container-xl">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">Proforma Invoice Generator</h1>
          <p className="text-gray-500 text-sm mt-1">
            Create professional proforma invoices for quotations and advance payments — free PDF download
          </p>
        </div>
      </div>
      <ProformaWrapper />
    </>
  );
}
