import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact JusBill — Get in Touch",
  description: "Contact JusBill for support, feedback, or business inquiries. We'd love to hear from you.",
  alternates: { canonical: "https://billing.jusbill.online/contact" },
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
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to providing reliable, free tools for Indian businesses. Whether you have a technical issue, a feature request, or need help understanding our tools, our team is here for you.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Support", value: "jusbill.contact@gmail.com" },
                { icon: MapPin, label: "Location", value: "India" },
                { icon: Clock, label: "Response Time", value: "Within 24-48 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-900 font-medium mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-brand-50 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                💡 Need Immediate Help?
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                For general billing questions, GST calculations, or formatting rules, check out our <a href="/blog" className="text-brand-600 font-semibold hover:underline">Blog and Guides</a> first — we have answered the most common questions there!
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
