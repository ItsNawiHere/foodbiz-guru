import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Mail,
  Leaf,
} from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

// Pre-render all blog post pages at build time
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata based on post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Simple markdown-to-HTML converter for blog content
function renderMarkdown(content: string): string {
  let html = content
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Paragraphs — wrap non-tag lines
    .replace(/^(?!<[h|l|u|o|b])(.*\S.*)$/gm, '<p>$1</p>')
    // Clean up consecutive <li> into <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      return `<ul>${match}</ul>`;
    })
    // Line breaks
    .replace(/\n\n/g, '\n');

  return html;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleHTML = renderMarkdown(post.content);

  return (
    <>
      {/* ═══════════ ARTICLE HEADER ═══════════ */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 pt-8 pb-12 sm:pt-12 sm:pb-16">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-dark mb-6 max-w-4xl leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ ARTICLE CONTENT ═══════════ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: articleHTML }}
              />

              {/* Article styling */}
              <style>{`
                .blog-prose {
                  font-size: 1.0625rem;
                  line-height: 1.8;
                  color: #334155;
                }
                .blog-prose h1 {
                  font-family: var(--font-heading);
                  font-size: 2rem;
                  font-weight: 700;
                  color: #0f172a;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                }
                .blog-prose h2 {
                  font-family: var(--font-heading);
                  font-size: 1.625rem;
                  font-weight: 700;
                  color: #0f172a;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  padding-bottom: 0.5rem;
                  border-bottom: 2px solid #f1f5f9;
                  line-height: 1.3;
                }
                .blog-prose h3 {
                  font-family: var(--font-heading);
                  font-size: 1.3rem;
                  font-weight: 700;
                  color: #1e293b;
                  margin-top: 2rem;
                  margin-bottom: 0.75rem;
                  line-height: 1.4;
                }
                .blog-prose p {
                  margin-bottom: 1.25rem;
                }
                .blog-prose ul {
                  list-style: none;
                  padding-left: 0;
                  margin-bottom: 1.5rem;
                }
                .blog-prose ul li {
                  position: relative;
                  padding-left: 1.75rem;
                  margin-bottom: 0.5rem;
                }
                .blog-prose ul li::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0.6em;
                  width: 8px;
                  height: 8px;
                  background: #16a34a;
                  border-radius: 50%;
                }
                .blog-prose ol {
                  counter-reset: list-counter;
                  list-style: none;
                  padding-left: 0;
                  margin-bottom: 1.5rem;
                }
                .blog-prose ol li {
                  counter-increment: list-counter;
                  position: relative;
                  padding-left: 2.25rem;
                  margin-bottom: 0.5rem;
                }
                .blog-prose ol li::before {
                  content: counter(list-counter);
                  position: absolute;
                  left: 0;
                  top: 0.15em;
                  width: 1.5rem;
                  height: 1.5rem;
                  background: #f0fdf4;
                  color: #16a34a;
                  border-radius: 50%;
                  font-size: 0.75rem;
                  font-weight: 700;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .blog-prose strong {
                  color: #0f172a;
                  font-weight: 600;
                }
                .blog-prose a {
                  color: #16a34a;
                  font-weight: 500;
                  text-decoration: underline;
                  text-decoration-color: #16a34a40;
                  text-underline-offset: 3px;
                  transition: all 0.2s;
                }
                .blog-prose a:hover {
                  color: #15803d;
                  text-decoration-color: #15803d;
                }
                .blog-prose blockquote {
                  border-left: 4px solid #16a34a;
                  padding: 1rem 1.5rem;
                  margin: 1.5rem 0;
                  background: #f0fdf4;
                  border-radius: 0 0.75rem 0.75rem 0;
                  color: #1e293b;
                  font-style: italic;
                }
                .blog-prose code {
                  background: #f1f5f9;
                  padding: 0.15em 0.4em;
                  border-radius: 0.25rem;
                  font-size: 0.875em;
                  color: #0f172a;
                }
              `}</style>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Newsletter CTA */}
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 sticky top-28">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-2">
                  Get Weekly Insights
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  Get actionable food business tips and industry insights
                  delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-colors duration-300"
                  >
                    Subscribe Free
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 border-t border-border" />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-secondary-dark mb-4">
                      Related Articles
                    </h4>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="group block"
                        >
                          <span className="text-xs font-semibold text-primary/70">
                            {rp.category}
                          </span>
                          <h5 className="text-sm font-medium text-secondary-dark group-hover:text-primary transition-colors duration-300 line-clamp-2 mt-0.5">
                            {rp.title}
                          </h5>
                          <span className="text-xs text-muted-light mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {rp.readTime}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>

          {/* Author Card */}
          <div className="mt-16 pt-10 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-2xl">
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-2xl bg-primary/10">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-dark mb-1">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  Helping food entrepreneurs build, launch, and scale successful
                  food businesses in India through practical guides, expert
                  consulting, and industry resources.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    View Guides
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/consulting"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors duration-300"
                  >
                    Book Consulting
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
