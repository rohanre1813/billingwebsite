import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export const metadata: Metadata = {
  title: "GST & Billing Blog — Tips, Guides & Tax News — JusBill",
  description:
    "Learn about GST invoicing, billing, CGST, SGST, IGST, and Indian tax laws. Free guides and tips for Indian freelancers and small businesses.",
  alternates: { canonical: "https://billing.jusbill.online/blog" },
  openGraph: {
    title: "GST & Billing Blog — JusBill",
    description: "Learn GST invoicing, billing and tax tips for Indian businesses.",
    url: "https://billing.jusbill.online/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Header Ad */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" />
        </div>
      </div>

      {/* Hero */}
      <div className="bg-hero-gradient py-14 border-b border-gray-100">
        <div className="container-xl text-center">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 mb-4">
            GST &amp; Billing Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Free guides, tips and tutorials on GST invoicing, billing formats, and Indian tax laws for freelancers and small businesses.
          </p>
        </div>
      </div>

      <div className="container-xl py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Posts Grid */}
          <div className="flex-1">
            {posts.length === 0 ? (
              <p className="text-gray-400">No blog posts found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card p-6 group flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="badge-blue">{post.category}</span>
                    </div>
                    <h2 className="font-heading font-bold text-gray-900 text-lg group-hover:text-brand-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
                    </div>
                    <span className="text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            <AdPlaceholder size="rectangle" label="Sidebar Ad" />

            <div className="card p-5">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 text-sm">Popular Tools</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "GST Invoice Generator", href: "/gst-invoice-generator" },
                  { label: "Receipt Generator", href: "/receipt-generator" },
                  { label: "GST Calculator", href: "/gst-calculator" },
                  { label: "Proforma Invoice", href: "/proforma-invoice-generator" },
                  { label: "Salary Slip Generator", href: "/salary-slip-generator" },
                ].map((t) => (
                  <li key={t.href}>
                    <Link href={t.href} className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors">
                      <ArrowRight size={12} className="text-brand-400" />
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 text-sm">GST Resources</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li>• GST Rate: 0%, 5%, 12%, 18%, 28%</li>
                <li>• CGST + SGST = Intrastate</li>
                <li>• IGST = Interstate supply</li>
                <li>• HSN Code required for goods</li>
                <li>• SAC Code for services</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex justify-center">
          <AdPlaceholder size="leaderboard" label="Footer Ad" />
        </div>
      </div>
    </div>
  );
}
