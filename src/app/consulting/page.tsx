"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  FlaskConical,
  Shield,
  Factory,
  Check,
  Calendar,
  MessageSquare,
  Cog,
  TrendingUp,
  Clock,
  Plus,
  Minus,
  ArrowRight,
  Phone,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { CONSULTING_SERVICES, SITE_CONFIG } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Map icon strings from constants to lucide components
const iconMap: Record<string, LucideIcon> = {
  Rocket,
  FlaskConical,
  Shield,
  Factory,
};

const howItWorks = [
  {
    step: 1,
    icon: Calendar,
    title: "Book",
    description: "Schedule a convenient time slot via WhatsApp or our booking form.",
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "Discuss",
    description: "Share your challenges and goals in a focused 1-on-1 session.",
  },
  {
    step: 3,
    icon: Cog,
    title: "Implement",
    description: "Get a clear action plan with step-by-step implementation guidance.",
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Grow",
    description: "Execute the strategy and watch your food business thrive.",
  },
];
const faqs = [
  {
    question: "How do I book a consultation session?",
    answer:
      "Consultation sessions are launching soon. Once available, you can book a session directly through our website to schedule a convenient time slot.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "We start by understanding your current situation, challenges, and goals. Then we dive deep into solutions — whether it's business planning, regulatory compliance, or manufacturing setup. You'll leave with a clear, actionable plan.",
  },
  {
    question: "What's the pricing for consultation sessions?",
    answer:
      "Pricing varies based on the type and duration of the session. Startup and Regulatory consultations are 60-minute sessions, while Manufacturing Setup are 90-minute deep-dive sessions. Contact us via our contact form for more details.",
  },
  {
    question: "Can I get a consultation for a specific topic not listed here?",
    answer:
      "Absolutely! While these are our core consulting areas, we're happy to discuss any food business challenge you're facing. Reach out via our contact form, and we'll create a custom session tailored to your needs.",
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
      transition={{ delay: index * 0.08, duration: 0.5 }}
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

export default function ConsultingPage() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden bg-[var(--surface)] section-padding">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[var(--primary)]/3 blur-3xl" />
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
                <Phone className="w-4 h-4" />
                Expert Consulting
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-6"
            >
              Expert Food Business{" "}
              <span className="gradient-text-primary">Consulting</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Get personalized guidance to navigate the challenges of starting
              and growing your food business in India
            </motion.p>

            <motion.div variants={fadeInUp}>
              <div
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)]/10 text-[var(--primary)] font-semibold rounded-xl"
              >
                <Clock className="w-5 h-5" />
                Launching Soon
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== Services Grid ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-4"
            >
              How We Can Help You
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--muted)] text-lg max-w-2xl mx-auto"
            >
              Specialized consulting services tailored for food entrepreneurs at
              every stage of their journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {CONSULTING_SERVICES.map((service) => {
              const IconComp = iconMap[service.icon] || Rocket;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden card-hover flex flex-col"
                >
                  {/* Green top accent */}
                  <div className="h-1 bg-gradient-to-r from-[var(--primary)] to-emerald-400" />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon + Duration */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--primary-light)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">
                        <IconComp className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--muted)] text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[var(--muted)] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-[var(--secondary-light)]"
                        >
                          <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button pushed to bottom */}
                    <div className="mt-auto">
                      <div
                        className="w-full py-3.5 px-6 bg-[var(--surface)] text-[var(--muted)] font-semibold rounded-xl flex items-center justify-center gap-2 border border-[var(--border)]"
                      >
                        Launching Soon
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========== How It Works ========== */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3"
            >
              Simple Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)]"
            >
              How It Works
            </motion.h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/40 to-[var(--primary)]/20" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16"
            >
              {howItWorks.map((step) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className="text-center relative"
                >
                  {/* Step number */}
                  <div className="relative mx-auto mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[var(--primary)] flex items-center justify-center mx-auto shadow-md relative z-10">
                      <step.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[var(--primary)] text-white text-xs font-bold flex items-center justify-center z-20 shadow-sm">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)]"
            >
              Common Questions
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
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--secondary-dark)] to-[var(--primary-dark)] text-white p-8 sm:p-12 lg:p-16 text-center shadow-2xl"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6 border border-white/10">
                <Sparkles className="w-4 h-4" />
                Let&apos;s Get Started
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-white mb-4">
                Ready to Start Your Food Business Journey?
              </h2>

              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                Take the first step today. Book a call or explore our
                comprehensive guides to kickstart your food business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white/60 font-semibold rounded-xl border border-white/5"
                >
                  <Clock className="w-5 h-5" />
                  Launching Soon
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Guides
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
