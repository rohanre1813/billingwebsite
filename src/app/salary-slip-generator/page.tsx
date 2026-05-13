import type { Metadata } from "next";
import SalarySlipClient from "./SalarySlipClient";

export const metadata: Metadata = {
  title: "Free Salary Slip Generator Online — JusBill",
  description:
    "Generate professional salary slips online for free. Add earnings, deductions, PF, TDS and download PDF instantly. Made for Indian HR teams and businesses.",
  alternates: { canonical: "https://jusbill.online/salary-slip-generator" },
  openGraph: {
    title: "Free Salary Slip Generator Online — JusBill",
    description: "Create salary slips with PF, TDS deductions and download PDF free.",
    url: "https://jusbill.online/salary-slip-generator",
  },
};

export default function SalarySlipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Salary Slip Generator Online",
            url: "https://jusbill.online/salary-slip-generator",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://jusbill.online" },
                { "@type": "ListItem", position: 2, name: "Salary Slip Generator", item: "https://jusbill.online/salary-slip-generator" },
              ],
            },
          }),
        }}
      />
      <SalarySlipClient />
    </>
  );
}
