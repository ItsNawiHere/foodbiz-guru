'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Search,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle,
  X,
} from 'lucide-react';
import { FREE_RESOURCES, SITE_CONFIG } from '@/lib/constants';

const CATEGORIES = ['All', 'Checklist', 'Template', 'Guide'];

const categoryColors: Record<string, string> = {
  Checklist: 'bg-blue-50 text-blue-700 border-blue-200',
  Template: 'bg-purple-50 text-purple-700 border-purple-200',
  Guide: 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState<string[]>([]);

  const filteredResources =
    activeCategory === 'All'
      ? FREE_RESOURCES
      : FREE_RESOURCES.filter((r) => r.category === activeCategory);

  const handleDownloadClick = (id: string) => {
    if (submitted.includes(id)) {
      // Already submitted for this resource — allow direct "download"
      return;
    }
    setDownloadingId(id);
    setEmail('');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted((prev) => [...prev, downloadingId!]);
    setDownloadingId(null);
    setEmail('');
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden gradient-hero section-padding">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4" />
              100% Free — No Credit Card Required
            </span>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-dark mb-6">
              Free Resources{' '}
              <span className="gradient-text-primary">&amp; Templates</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed">
              Download free guides, checklists, and templates to kickstart your
              food business journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CATEGORY FILTER ═══════════ */}
      <section className="sticky top-[72px] lg:top-[80px] z-30 bg-white/90 backdrop-blur-xl border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-surface text-muted hover:bg-surface-alt hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-2 text-sm text-muted">
              <Search className="w-4 h-4" />
              {filteredResources.length} resource
              {filteredResources.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ RESOURCE GRID ═══════════ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-400 overflow-hidden"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                        categoryColors[resource.category] ||
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {resource.category}
                    </span>
                  </div>

                  <div className="p-6 lg:p-8">
                    {/* Emoji Icon */}
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/5 rounded-2xl mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                      <span className="text-3xl">{resource.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-dark mb-3 group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Download Count */}
                    <div className="flex items-center gap-2 mb-6 text-sm text-muted-light">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloadCount} downloads</span>
                    </div>

                    {/* Download / Email Capture */}
                    {downloadingId === resource.id ? (
                      <motion.form
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        onSubmit={handleEmailSubmit}
                        className="space-y-3"
                      >
                        <p className="text-sm font-medium text-secondary-dark">
                          Enter your email to download
                        </p>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@email.com"
                              required
                              className="w-full pl-10 pr-3 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>
                          <button
                            type="submit"
                            className="flex-shrink-0 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-colors duration-300"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => setDownloadingId(null)}
                          className="text-xs text-muted-light hover:text-muted transition-colors"
                        >
                          Cancel
                        </button>
                      </motion.form>
                    ) : submitted.includes(resource.id) ? (
                      <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        Download link sent to your email!
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDownloadClick(resource.id)}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 w-full justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-300"
                      >
                        Download Free
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl gradient-dark text-white p-8 sm:p-12 lg:p-16"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-white">
                Want More In-Depth Guides?
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Explore our premium guides with detailed templates, frameworks,
                and step-by-step instructions to accelerate your food business
                journey.
              </p>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(22,163,74,0.4)] hover:-translate-y-0.5"
              >
                Browse Premium Guides
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ EMAIL CAPTURE MODAL (Overlay) ═══════════ */}
      <AnimatePresence>
        {downloadingId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-dark/40 backdrop-blur-sm p-4 lg:hidden"
            onClick={() => setDownloadingId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark">
                  Get Your Free Download
                </h3>
                <button
                  onClick={() => setDownloadingId(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface transition-colors"
                >
                  <X className="w-4 h-4 text-muted" />
                </button>
              </div>
              <p className="text-sm text-muted mb-4">
                Enter your email and we&apos;ll send the download link right
                away.
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Now
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
