import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About JusBill — Free GST Billing Platform for India",
  description: "Learn about JusBill, India's free online GST invoicing and billing platform. Our mission is to make professional billing accessible to every Indian business.",
  alternates: { canonical: "https://billing.jusbill.online/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-hero-gradient py-16 border-b border-gray-100">
        <div className="container-xl text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 mb-6">About JusBill</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to make professional, GST-compliant billing accessible and free for every Indian freelancer, shop owner, and small business.
          </p>
        </div>
      </div>

      <div className="container-xl py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Story & Mission</h2>
          <p className="mb-6 leading-relaxed">
            JusBill was born out of a simple observation: millions of Indian freelancers, shopkeepers, consultants, and small business owners were struggling with complicated Excel sheets, expensive billing software, or manual paperwork just to generate a basic GST invoice.
          </p>
          <p className="mb-6 leading-relaxed">
            We firmly believe that essential business tools should be accessible to everyone, regardless of the size of their business. That is why we built JusBill — a comprehensive, easy-to-use suite of billing and invoicing tools designed specifically for the Indian tax structure (CGST, SGST, IGST). Our mission is to empower small enterprises by removing the technical and financial friction of daily invoicing, allowing business owners to focus on what truly matters: growing their business.
          </p>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mt-12 mb-6">Who We Help</h2>
          <p className="mb-6 leading-relaxed">
            JusBill is tailored for the backbone of the Indian economy. Whether you are a freelance graphic designer needing a quick invoice, a local retailer generating payment receipts, a startup creating proforma invoices for enterprise clients, or a small agency calculating salary slips for your employees, our platform is built for you.
          </p>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mt-12 mb-6">Why Is JusBill Free?</h2>
          <p className="mb-6 leading-relaxed">
            You might wonder, "How can such a comprehensive tool be completely free?" Our platform is supported by tasteful, non-intrusive advertising (such as Google AdSense). This allows us to cover our server and development costs without ever having to charge our users, hide features behind a paywall, or add watermarks to your professional documents.
          </p>

          <h2 className="text-3xl font-heading font-bold text-gray-900 mt-12 mb-6">Privacy & Security You Can Trust</h2>
          <p className="mb-6 leading-relaxed">
            Trust is the foundation of our service. We know that business data is highly sensitive. That is why JusBill is designed as a client-side application. When you enter your invoice details, buyer information, or pricing data, it is processed entirely within your web browser. <strong>We do not store, collect, or transmit your business data to our servers.</strong> Once you close the page, your data is gone. Your privacy and data security are 100% guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 mb-14">
          {[
            { icon: Target, title: "Our Mission", text: "To democratize professional billing in India by providing free, high-quality, GST-compliant invoice tools to every business." },
            { icon: Users, title: "Who We Serve", text: "Freelancers, shopkeepers, startups, consultants, and MSMEs across India who need quick, professional billing." },
            { icon: CheckCircle, title: "What We Offer", text: "Free GST Invoice Generator, Receipt Generator, GST Calculator, Proforma Invoice, and Salary Slip Generator." },
            { icon: Heart, title: "Our Promise", text: "Always free. No watermarks. No signup required. Your business data stays strictly private on your device." },
          ].map((item) => (
            <div key={item.title} className="card p-6 flex gap-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                <item.icon size={24} className="text-brand-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-10 text-center border border-brand-100">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Start Billing for Free</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">No signup. No credit card. No watermark. Just generate professional, print-ready PDF invoices instantly.</p>
          <Link href="/gst-invoice-generator" className="btn-primary text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all">Create Your First Invoice Free</Link>
        </div>
      </div>
    </div>
  );
}
