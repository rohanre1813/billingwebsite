import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact JusBill — Get in Touch",
  description: "Contact JusBill for support, feedback, or business inquiries. We'd love to hear from you.",
  alternates: { canonical: "https://jusbill.online/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-hero-gradient py-16 border-b border-gray-100">
        <div className="container-xl text-center">
          <h1 className="text-4xl font-heading font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-xl max-w-xl mx-auto">Have a question or feedback? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="container-xl py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "support@jusbill.online" },
                { icon: MapPin, label: "Location", value: "India" },
                { icon: Clock, label: "Response Time", value: "Within 24-48 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-800 font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                💡 <strong>Tip:</strong> For billing questions, check our <a href="/blog" className="text-blue-600 underline">Blog</a> first — most common questions are answered there!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-7">
            <h2 className="font-heading font-bold text-gray-900 mb-5 text-xl">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
