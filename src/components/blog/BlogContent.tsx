'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Calendar, Search, Mail, Send } from 'lucide-react';
import { BLOG_CATEGORIES } from '@/lib/constants';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  'Food Business': 'bg-emerald-50 text-emerald-700',
  FSSAI: 'bg-blue-50 text-blue-700',
  'Product Development': 'bg-purple-50 text-purple-700',
  Manufacturing: 'bg-orange-50 text-orange-700',
  'Food Safety': 'bg-red-50 text-red-700',
  Packaging: 'bg-amber-50 text-amber-700',
  'Career Guidance': 'bg-cyan-50 text-cyan-700',
  Uncategorized: 'bg-gray-50 text-gray-700',
};

interface BlogContentProps {
  posts: BlogPost[];
}

export function BlogContent({ posts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter(
          (p) => p.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
        );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden gradient-hero section-padding">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-dark mb-6">
              Food Business{' '}
              <span className="gradient-text-primary">Blog</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed">
              Insights, guides, and tips to help you succeed in the food
              industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CATEGORY FILTER ═══════════ */}
      <section className="sticky top-[72px] lg:top-[80px] z-30 bg-white/90 backdrop-blur-xl border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-surface text-muted hover:bg-surface-alt hover:text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BLOG GRID ═══════════ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-surface-alt rounded-full">
                <Search className="w-8 h-8 text-muted-light" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-dark mb-3">
                No Posts Found
              </h3>
              <p className="text-muted">
                No blog posts in this category yet. Check back soon!
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-400 overflow-hidden"
                  >
                    {/* Cover gradient */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-surface relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                          {post.category === 'Food Business'
                            ? '🚀'
                            : post.category === 'FSSAI'
                            ? '📋'
                            : post.category === 'Packaging'
                            ? '📦'
                            : post.category === 'Product Development'
                            ? '🧪'
                            : post.category === 'Manufacturing'
                            ? '🏭'
                            : post.category === 'Food Safety'
                            ? '🛡️'
                            : '📝'}
                        </span>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[post.category] ||
                            categoryColors['Uncategorized']
                          }`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Title */}
                      <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-light">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Read More */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════ NEWSLETTER CTA ═══════════ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl gradient-dark text-white p-8 sm:p-12 lg:p-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-xl mx-auto">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary/20 rounded-2xl">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-white">
                Stay Updated
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Get the latest food business insights, guides, and industry
                updates delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 rounded-full text-primary font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You&apos;re subscribed! Check your inbox.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
