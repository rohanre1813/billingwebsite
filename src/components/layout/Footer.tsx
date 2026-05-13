import Link from "next/link";
import { FileText, Receipt, Calculator, FileSpreadsheet, DollarSign, Mail, Phone, MapPin } from "lucide-react";

const tools = [
  { label: "GST Invoice Generator", href: "/gst-invoice-generator" },
  { label: "Receipt Generator", href: "/receipt-generator" },
  { label: "GST Calculator", href: "/gst-calculator" },
  { label: "Proforma Invoice", href: "/proforma-invoice-generator" },
  { label: "Salary Slip Generator", href: "/salary-slip-generator" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">JB</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Jus<span className="text-brand-400">Bill</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Free online billing and invoicing platform for Indian businesses. Create GST invoices, receipts, and salary slips instantly — no signup needed.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-400 shrink-0" />
                <span>support@jusbill.online</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-400 shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Free Tools</h3>
            <ul className="space-y-2.5">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-gray-900 border border-gray-800">
              <p className="text-xs text-gray-500 leading-relaxed">
                🇮🇳 Made for India — Supports GST, CGST, SGST &amp; IGST calculations as per Indian tax laws.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} JusBill.online — All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Free GST Invoice Generator · Receipt Generator · GST Calculator
          </p>
        </div>
      </div>
    </footer>
  );
}
