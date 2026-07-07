"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
  Award,
  Target,
  ArrowRight,
  Sparkles,
  Heart,
  Eye,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Food Science Background",
    description:
      "Formal education in Food Technology with deep understanding of food science principles.",
  },
  {
    icon: Briefcase,
    title: "Practical Industry Knowledge",
    description:
      "A strong foundation in food manufacturing, quality assurance, and product development applied to real-world challenges.",
  },
  {
    icon: BookOpen,
    title: "Growing Resource Library",
    description:
      "Practical guides covering every stage of starting a food business in India — with more being added regularly.",
  },
  {
    icon: Users,
    title: "Built for Entrepreneurs",
    description:
      "Everything on this platform is designed to help aspiring food business owners take confident first steps.",
  },
  {
    icon: Award,
    title: "FSSAI & Regulatory Expertise",
    description:
      "Deep expertise in FSSAI licensing, food safety compliance, labelling norms, and export regulations.",
  },
  {
    icon: Target,
    title: "Practical, Results-Driven Approach",
    description:
      "Every guide and session is designed for real-world implementation — no fluff, just actionable strategies.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden bg-[var(--surface)] section-padding">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--primary)]/3 to-transparent blur-3xl" />
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
                <Sparkles className="w-4 h-4" />
                Our Story
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-6"
            >
              About{" "}
              <span className="gradient-text-primary">FoodBiz Guru</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto"
            >
              Simplifying food industry knowledge for entrepreneurs across India
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========== My Story Section ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3"
              >
                Our Guru's Story
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-6"
              >
                A Passion for Food &amp; Entrepreneurship
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-5 text-[var(--muted)] leading-relaxed text-base sm:text-lg"
              >
                <p>
                  Our founder is a <strong className="text-[var(--secondary)]">Food Technology professional</strong> with
                  a deep passion for making food industry knowledge accessible
                  to every aspiring entrepreneur in India.
                </p>
                <p>
                  With a background in{" "}
                  <strong className="text-[var(--secondary)]">food technology, product development, and regulatory compliance</strong>,
                  they have been exploring and learning the complexities of the Indian food
                  industry — from FSSAI licensing to manufacturing setup, from
                  product formulation to export documentation.
                </p>
                <p>
                  They realized that most of this critical knowledge was either
                  scattered across the internet, locked behind expensive
                  consultants, or written in jargon that first-time entrepreneurs
                  couldn't understand. That's why they created{" "}
                  <strong className="text-[var(--primary)]">FoodBiz Guru</strong> — to bridge
                  this gap and give every food entrepreneur the tools, knowledge,
                  and confidence to succeed.
                </p>
                <p>
                  Whether you're a home baker dreaming of a bakery, a food
                  technologist planning a startup, or an existing manufacturer
                  looking to expand — FoodBiz Guru is here to guide you every step of the
                  way.
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Illustration Area */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Main card */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[var(--primary-light)] via-[var(--primary-50)] to-white border border-[var(--border)] shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🧑‍🔬</div>
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--secondary-dark)] mb-2">
                      Food Technologist
                    </p>
                    <p className="text-[var(--muted)] text-sm">
                      Food Technology Professional &bull; Entrepreneur
                    </p>
                  </div>
                </div>

                {/* Floating accent cards */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 bg-white rounded-2xl shadow-lg p-4 border border-[var(--border)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--secondary-dark)]">6+</p>
                      <p className="text-[10px] text-[var(--muted)]">Guides</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 bg-white rounded-2xl shadow-lg p-4 border border-[var(--border)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                      <Users className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--secondary-dark)]">100%</p>
                      <p className="text-[10px] text-[var(--muted)]">Passion</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== Mission & Vision Section ========== */}
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
              What Drives Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)]"
            >
              Mission &amp; Vision
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-60 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-4">
                  Our Mission
                </h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  To simplify complex food industry knowledge and make it
                  accessible to every aspiring food entrepreneur in India.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] opacity-60 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[var(--secondary)]" />
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-4">
                  Our Vision
                </h3>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  To become India&apos;s most trusted platform for food business
                  education, empowering the next generation of food entrepreneurs across India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== Why Learn From Me Section ========== */}
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
              Why FoodBiz Guru
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-4"
            >
              Why Learn From Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--muted)] text-lg max-w-2xl mx-auto"
            >
              Real-world expertise combined with a passion for education — here&apos;s
              what sets FoodBiz Guru apart.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {credentials.map((cred) => (
              <motion.div
                key={cred.title}
                variants={fadeInUp}
                className="group bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] card-hover hover:bg-white hover:border-[var(--primary)]/30"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors duration-300">
                  <cred.icon className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--secondary-dark)] mb-2">
                  {cred.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {cred.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-bold text-white mb-4">
                Ready to Build Your Food Business?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Get personalized guidance from an industry expert. Let&apos;s turn
                your food business idea into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white/60 font-semibold rounded-xl border border-white/5"
                >
                  Consulting (Launching Soon)
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
                >
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
