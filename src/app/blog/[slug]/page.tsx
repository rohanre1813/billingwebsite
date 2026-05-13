import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.meta.title} — JusBill Blog`,
    description: post.meta.description,
    alternates: { canonical: `https://billing.jusbill.online/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      url: `https://billing.jusbill.online/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.meta.title,
            description: post.meta.description,
            author: { "@type": "Organization", name: post.meta.author },
            publisher: { "@type": "Organization", name: "JusBill", url: "https://billing.jusbill.online" },
            datePublished: post.meta.date,
            url: `https://billing.jusbill.online/blog/${slug}`,
          }),
        }}
      />

      {/* Header Ad */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" />
        </div>
      </div>

      <div className="container-xl py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Article */}
          <article className="flex-1 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-600 truncate">{post.meta.title}</span>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <span className="badge-blue mb-3 inline-block">{post.meta.category}</span>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 leading-tight mb-4">
                {post.meta.title}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-5">{post.meta.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-5">
                <span className="flex items-center gap-1.5"><Calendar size={14} />{post.meta.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{post.meta.readingTime}</span>
                <span className="font-medium text-gray-600">By {post.meta.author}</span>
              </div>
            </div>

            {/* Inline Ad */}
            <div className="mb-8 flex justify-center">
              <AdPlaceholder size="leaderboard" label="In-article Ad" />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-h3:mt-6">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.meta.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                {post.meta.tags.map((tag) => (
                  <span key={tag} className="badge bg-gray-100 text-gray-600">{tag}</span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 bg-brand-50 border border-brand-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-heading font-bold text-gray-900 mb-1">Ready to create your GST invoice?</h3>
                <p className="text-sm text-gray-600">Use JusBill&apos;s free GST invoice generator — no signup, instant PDF download.</p>
              </div>
              <Link href="/gst-invoice-generator" className="btn-primary shrink-0 text-sm">
                Create Free Invoice <ArrowRight size={14} />
              </Link>
            </div>

            {/* Back */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm mt-8 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            <AdPlaceholder size="rectangle" label="Sidebar Ad" />
            <div className="card p-5">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 text-sm">Free Billing Tools</h3>
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
          </aside>
        </div>

        <div className="mt-10 flex justify-center">
          <AdPlaceholder size="leaderboard" label="Footer Ad" />
        </div>
      </div>
    </>
  );
}
