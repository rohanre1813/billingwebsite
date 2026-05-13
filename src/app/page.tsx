import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Receipt,
  Calculator,
  FileSpreadsheet,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Star,
} from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export const metadata: Metadata = {
  title: "JusBill — Free GST Billing & Invoice Tools Online",
  description:
    "Create GST bills and invoices online for free. No signup required. Instant PDF download. Made for Indian freelancers, shopkeepers, and small businesses.",
  alternates: { canonical: "https://billing.jusbill.online" },
};

const tools = [
  {
    icon: FileText,
    title: "GST Invoice Generator",
    description:
      "Create professional GST invoices with CGST, SGST & IGST calculations. Download PDF instantly.",
    href: "/gst-invoice-generator",
    badge: "Most Popular",
    color: "bg-blue-500",
  },
  {
    icon: Receipt,
    title: "Receipt Generator",
    description:
      "Generate payment receipts for your customers with all payment details and download as PDF.",
    href: "/receipt-generator",
    badge: "Free",
    color: "bg-green-500",
  },
  {
    icon: Calculator,
    title: "GST Calculator",
    description:
      "Calculate GST instantly. Add or remove GST at 5%, 12%, 18%, or 28% with full breakdown.",
    href: "/gst-calculator",
    badge: "Quick",
    color: "bg-purple-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Proforma Invoice Generator",
    description:
      "Create proforma invoices for quotations and advance payments. Professional format.",
    href: "/proforma-invoice-generator",
    badge: "New",
    color: "bg-orange-500",
  },
  {
    icon: DollarSign,
    title: "Salary Slip Generator",
    description:
      "Generate salary slips with earnings, deductions, PF, TDS calculations. PDF download.",
    href: "/salary-slip-generator",
    badge: "HR Tool",
    color: "bg-teal-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Instant & Free",
    description:
      "No registration, no subscription. Create unlimited invoices and bills completely free.",
  },
  {
    icon: Shield,
    title: "GST Compliant",
    description:
      "All invoices follow Indian GST laws with correct CGST, SGST, IGST calculations.",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description:
      "Browser-based tool. Works on mobile, tablet, and desktop. No app download needed.",
  },
  {
    icon: FileText,
    title: "PDF Download",
    description:
      "Download professional PDF invoices and bills with a single click. Print-ready format.",
  },
  {
    icon: CheckCircle,
    title: "No Data Stored",
    description:
      "Your billing data stays in your browser. We never store or share your business data.",
  },
  {
    icon: Star,
    title: "Made for India",
    description:
      "Designed specifically for Indian tax structure — supports all Indian states and GST rates.",
  },
];

const faqs = [
  {
    question: "What is JusBill and why is it free?",
    answer:
      "JusBill is a comprehensive, web-based billing platform designed specifically for Indian businesses. We offer tools like GST Invoice Generators, Receipt Makers, and Salary Slip generators. It is 100% free because we are supported by tasteful, non-intrusive advertisements. There are no hidden fees, subscriptions, or watermarks.",
  },
  {
    question: "How secure is my business and invoice data?",
    answer:
      "Extremely secure. JusBill operates entirely as a client-side application. This means when you enter your buyer details, pricing, and GSTINs, that data never leaves your computer. We do not store your data on our servers. Once you close your browser tab, the data is permanently erased. Your privacy is our top priority.",
  },
  {
    question: "Does the invoice generator support CGST, SGST, and IGST?",
    answer:
      "Yes. Our tools are built strictly according to the Indian Central Goods and Services Tax Rules, 2017. The invoice generator automatically calculates CGST and SGST for intrastate (same state) supplies, and IGST for interstate (between states) supplies based on the GST rate you select.",
  },
  {
    question: "Do I need a GSTIN to use the invoice generator?",
    answer:
      "No, a GSTIN is completely optional. If you are a small business operating below the GST threshold, a freelancer, or an unregistered business, you can simply leave the GSTIN field blank and generate a standard Bill of Supply or regular invoice.",
  },
  {
    question: "Can I download the invoice as a PDF?",
    answer:
      "Yes. Every tool on JusBill — including the Proforma Invoice and Salary Slip generators — allows you to download a professional, print-ready PDF document with a single click. You can also print it directly from your browser.",
  },
  {
    question: "Who can use JusBill?",
    answer:
      "JusBill is perfect for Indian freelancers, shopkeepers, consultants, digital agencies, and small-to-medium enterprises (MSMEs). Anyone who needs to generate a professional billing document quickly without paying for expensive software will benefit from our tools.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Freelance Web Developer, Bangalore",
    text: "JusBill has made invoicing so simple. I create and send GST invoices to my clients in under 2 minutes. No more Excel sheets!",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Boutique Owner, Delhi",
    text: "I use the receipt generator every day for my shop. It's fast, professional looking, and my customers love the PDFs.",
    stars: 5,
  },
  {
    name: "Amit Verma",
    role: "Startup Founder, Mumbai",
    text: "The GST calculator saved me so much time. I can quickly check CGST and SGST breakdowns without any CA consultation.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "JusBill — Free GST Billing & Invoice Tools",
            description:
              "Free online GST invoice generator and billing tools for Indian businesses",
            url: "https://billing.jusbill.online",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "JusBill",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              operatingSystem: "Web Browser",
            },
          }),
        }}
      />

      {/* Header Ad */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" label="728×90" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-blue inline-flex mb-6">
              🇮🇳 Made for Indian Businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight tracking-tight">
              Create GST Bills &amp; Invoices{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-accent-600">
                Online for Free
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Generate professional GST invoices, receipts, salary slips and
              more — instantly, for free. No signup. No watermark. Perfect for
              Indian freelancers, shopkeepers &amp; small businesses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gst-invoice-generator"
                id="hero-cta-invoice"
                className="btn-primary text-base px-8 py-4"
              >
                <FileText size={18} />
                Create GST Invoice Free
              </Link>
              <Link
                href="/gst-calculator"
                id="hero-cta-calculator"
                className="btn-secondary text-base px-8 py-4"
              >
                <Calculator size={18} />
                GST Calculator
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400">
              ✓ No signup &nbsp;·&nbsp; ✓ No watermark &nbsp;·&nbsp; ✓ PDF
              download &nbsp;·&nbsp; ✓ 100% Free
            </p>
          </div>
        </div>
      </section>

      {/* Inline Ad */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" label="In-content Ad" />
        </div>
      </div>

      {/* Trust & Description Section (SEO/AdSense content) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-xl max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">What is JusBill?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            JusBill is India&apos;s premier free online platform for generating professional, GST-compliant billing documents. We understand that running a small business, managing a freelance career, or operating a retail shop is hard enough without having to worry about complex accounting software or messy Excel templates. 
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            That is why we built a suite of intuitive, browser-based tools that allow anyone to create stunning GST invoices, proforma invoices, payment receipts, and salary slips in seconds. Our tools automatically handle complex CGST, SGST, and IGST calculations so you can focus on what matters most — growing your business. Best of all? It is completely free, secure, and requires no account registration.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="section-title">All Free Billing Tools</h2>
            <p className="section-subtitle mx-auto">
              Everything you need to manage billing and invoicing for your
              Indian business — all in one place, completely free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                id={`tool-card-${tool.href.replace("/", "")}`}
                className="card p-7 group flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl ${tool.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <tool.icon size={22} className="text-white" />
                  </div>
                  <span className="badge-blue text-xs">{tool.badge}</span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold mt-auto">
                  Use Free Tool <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Choose JusBill?</h2>
            <p className="section-subtitle mx-auto">
              Trusted by thousands of Indian freelancers, shopkeepers, and
              small business owners every month.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                  <benefit.icon size={20} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Ad */}
      <div className="bg-white py-6">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="inline" label="In-content Ad (300×250)" />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="section-title">Loved by Indian Businesses</h2>
            <p className="section-subtitle mx-auto">
              Here&apos;s what our users say about JusBill.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-cta-gradient">
        <div className="container-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Start Creating Free Invoices Today
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of Indian businesses using JusBill to simplify their
            billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gst-invoice-generator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-lg"
            >
              <FileText size={18} />
              GST Invoice Generator
            </Link>
            <Link
              href="/receipt-generator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Receipt size={18} />
              Receipt Generator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Everything you need to know about JusBill.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Read our GST billing guides <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <div className="bg-white py-4 border-t border-gray-100">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" label="Footer Ad" />
        </div>
      </div>
    </>
  );
}
