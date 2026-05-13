import type { Metadata } from "next";
import GSTCalculatorClient from "./GSTCalculatorClient";

export const metadata: Metadata = {
  title: "Free GST Calculator Online — CGST SGST IGST — JusBill",
  description:
    "Calculate GST instantly online. Add or remove GST at 5%, 12%, 18%, 28% with complete CGST, SGST, and IGST breakdown. Free GST calculator for Indian businesses.",
  alternates: { canonical: "https://billing.jusbill.online/gst-calculator" },
  openGraph: {
    title: "Free GST Calculator Online — CGST SGST IGST Breakdown",
    description: "Add or remove GST with complete tax breakdown. Free online GST calculator for India.",
    url: "https://billing.jusbill.online/gst-calculator",
  },
};

export default function GSTCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free GST Calculator Online",
            url: "https://billing.jusbill.online/gst-calculator",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://billing.jusbill.online" },
                { "@type": "ListItem", position: 2, name: "GST Calculator", item: "https://billing.jusbill.online/gst-calculator" },
              ],
            },
          }),
        }}
      />
      <GSTCalculatorClient />
    </>
  );
}
