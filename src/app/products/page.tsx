"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ShoppingBag,
  Package,
  Sparkles,
  Plus,
  Minus,
  ArrowRight,
  Star,
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-[var(--primary-light)] text-[var(--primary-dark)]",
  Popular: "bg-blue-50 text-blue-700",
  New: "bg-orange-50 text-orange-700",
};

const faqs = [
  {
    question: "What format are the guides in?",
    answer:
      "All guides are delivered as professionally designed PDF documents that you can read on any device — phone, tablet, or computer. They also include editable Excel/Google Sheet templates where applicable.",
  },
  {
    question: "How do I access the guides after purchase?",
    answer:
      "Once your payment is confirmed, you'll receive an instant download link via email. You'll also get access to a personal dashboard where you can re-download your guides anytime.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 7-day satisfaction guarantee. If you're not happy with the guide, reach out to us within 7 days of purchase and we'll process a full refund — no questions asked.",
  },
  {
    question: "Are the guides updated regularly?",
    answer:
      "Yes! All guides are updated whenever there are significant regulatory changes or industry updates. Once you purchase a guide, you get free lifetime updates.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-[var(--border)] rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--surface)] transition-colors"
      >
        <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--secondary-dark)] text-lg pr-4">
          {question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--surface)] flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-[var(--primary)]" />
          ) : (
            <Plus className="w-4 h-4 text-[var(--muted)]" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProductsPage() {
  const bundlePrice = 1999;
  const bundleOriginalPrice = PRODUCTS.reduce((sum, p) => sum + p.originalPrice, 0);
  const bundleSavePercent = Math.round(
    ((bundleOriginalPrice - bundlePrice) / bundleOriginalPrice) * 100
  );

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden bg-[var(--surface)] section-padding">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] text-sm font-semibold">
                <ShoppingBag className="w-4 h-4" />
                Shop Guides
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-6"
            >
              Premium Food Business{" "}
              <span className="gradient-text-primary">Guides</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto"
            >
              Practical, actionable guides designed to help you build, launch,
              and grow your food business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========== Product Grid ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover flex flex-col"
              >
                {/* Icon Header */}
                <div className="relative bg-gradient-to-br from-[var(--surface)] to-[var(--surface-alt)] p-8 text-center">
                  <div className="text-6xl mb-2">{product.icon}</div>

                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                        badgeStyles[product.badge] || ""
                      }`}
                    >
                      {product.badge === "Bestseller" && (
                        <Star className="w-3 h-3 inline mr-1 -mt-0.5" />
                      )}
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category */}
                  <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-1">
                    {product.title}
                  </h3>

                  <p className="text-sm text-[var(--muted-light)] mb-3">
                    {product.subtitle}
                  </p>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-[var(--secondary-light)]"
                      >
                        <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + Button pushed to bottom */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-[var(--secondary-dark)]">
                        ₹{product.price}
                      </span>
                      <span className="text-lg text-[var(--muted-light)] line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-sm font-semibold text-[var(--primary)]">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % off
                      </span>
                    </div>

                    <button className="w-full py-3.5 px-6 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-xl btn-hover transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Buy Now
                    </button>
                    <p className="text-xs text-[var(--muted-light)] text-center mt-2">
                      Razorpay payments coming soon
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== Bundle Offer Section ========== */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Gradient border */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[var(--primary)] via-emerald-400 to-[var(--primary)] opacity-70 blur-[1px]" />

            <div className="relative bg-white rounded-3xl p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold">
                      <Sparkles className="w-3 h-3" />
                      BEST VALUE
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold">
                      Save {bundleSavePercent}%
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-4">
                    Get All 6 Guides —{" "}
                    <span className="gradient-text-primary">
                      Complete Food Business Bundle
                    </span>
                  </h2>

                  <ul className="space-y-2 mb-6">
                    {PRODUCTS.map((p) => (
                      <li
                        key={p.id}
                        className="flex items-center gap-2 text-sm text-[var(--secondary-light)]"
                      >
                        <span className="text-base">{p.icon}</span>
                        <span>{p.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Price & CTA */}
                <div className="shrink-0 text-center lg:text-right">
                  <div className="mb-4">
                    <span className="block text-sm text-[var(--muted)] mb-1">
                      Bundle Price
                    </span>
                    <div className="flex items-baseline gap-3 justify-center lg:justify-end">
                      <span className="text-5xl font-bold text-[var(--secondary-dark)]">
                        ₹{bundlePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xl text-[var(--muted-light)] line-through">
                        ₹{bundleOriginalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <button
                    disabled
                    className="w-full sm:w-auto px-10 py-4 bg-[var(--muted-light)] text-white font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2 mx-auto lg:mx-0"
                  >
                    <Package className="w-5 h-5" />
                    Coming Soon
                  </button>
                  <p className="text-xs text-[var(--muted-light)] mt-2">
                    Bundle pricing will be available with Razorpay integration
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ Section ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3"
            >
              Got Questions?
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)]"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--muted)] mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
