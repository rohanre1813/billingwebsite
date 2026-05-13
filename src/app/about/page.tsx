import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About JusBill — Free GST Billing Platform for India",
  description: "Learn about JusBill, India's free online GST invoicing and billing platform. Our mission is to make professional billing accessible to every Indian business.",
  alternates: { canonical: "https://jusbill.online/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-hero-gradient py-16 border-b border-gray-100">
        <div className="container-xl text-center">
          <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">About JusBill</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re on a mission to make professional GST billing accessible to every Indian business — for free.
          </p>
        </div>
      </div>

      <div className="container-xl py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            JusBill was born out of a simple frustration: Indian freelancers, shopkeepers, and small business owners were paying for expensive billing software or struggling with Excel sheets just to create a basic GST invoice. We believed that should not be the case.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Today, JusBill serves thousands of Indian businesses — from solo freelancers to growing startups — providing free, instant, and professional billing tools at jusbill.online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {[
            { icon: Target, title: "Our Mission", text: "To democratize professional billing in India by providing free, GST-compliant invoice tools to every business, regardless of size." },
            { icon: Users, title: "Who We Serve", text: "Freelancers, shopkeepers, startups, consultants, and small businesses across India who need quick, professional billing." },
            { icon: CheckCircle, title: "What We Offer", text: "Free GST Invoice Generator, Receipt Generator, GST Calculator, Proforma Invoice, and Salary Slip Generator." },
            { icon: Heart, title: "Our Promise", text: "Always free. No watermarks. No signup. No data storage. Your business data stays private." },
          ].map((item) => (
            <div key={item.title} className="card p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-brand-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 text-center border border-brand-100">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">Start Billing for Free</h2>
          <p className="text-gray-600 mb-6">No signup. No credit card. No watermark. Just professional GST invoices.</p>
          <Link href="/gst-invoice-generator" className="btn-primary">Create Your First Invoice Free</Link>
        </div>
      </div>
    </div>
  );
}
