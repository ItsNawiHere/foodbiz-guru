'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Leaf, Cherry, Wheat, Star, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    rotate: [0, i % 2 === 0 ? 8 : -8, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
    },
  }),
};

const stats = [
  { label: 'Practical Guides' },
  { label: 'Free Resources' },
  { label: 'Expert Consulting' },
];

export function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 py-12 md:py-16 lg:py-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/60 border border-primary/15 text-primary-dark text-sm font-medium backdrop-blur-sm">
                <span className="text-base">🚀</span>
                Your Food Business Journey Starts Here
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-secondary-dark mb-6"
            >
              Helping Food Entrepreneurs{' '}
              <span className="gradient-text-primary">Build, Launch</span> and{' '}
              <span className="gradient-text-primary">Scale</span> Successful
              Food Businesses in India.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Learn food business setup, licensing, manufacturing, compliance, 
              and growth through practical guides and expert insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <Link
                href="/products"
                className="group gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 btn-hover shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
              >
                Explore Guides
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/consulting"
                className="group px-8 py-4 rounded-full text-lg font-semibold border-2 border-secondary-dark text-secondary-dark inline-flex items-center gap-2 btn-hover hover:bg-secondary-dark hover:text-white transition-colors w-full sm:w-auto justify-center"
              >
                Consulting (Launching Soon)
              </Link>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="w-px h-10 bg-border hidden sm:block -ml-3 mr-0" />
                  )}
                  <div>
                    <div className="text-lg font-bold text-secondary-dark">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="flex-1 relative w-full max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square">
              {/* Main Circle */}
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/10 via-primary-light/40 to-primary-50 border border-primary/10 flex items-center justify-center">
                <div className="w-3/5 h-3/5 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <Leaf className="w-16 h-16 md:w-20 md:h-20 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-[5%] left-[15%] w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg border border-border-light flex items-center justify-center"
                custom={0}
                variants={floatVariants}
                animate="animate"
              >
                <span className="text-2xl md:text-3xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-[8%] right-[10%] w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg border border-border-light flex items-center justify-center"
                custom={1}
                variants={floatVariants}
                animate="animate"
              >
                <span className="text-xl md:text-2xl">📋</span>
              </motion.div>

              <motion.div
                className="absolute bottom-[15%] left-[5%] w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg border border-border-light flex items-center justify-center"
                custom={2}
                variants={floatVariants}
                animate="animate"
              >
                <span className="text-2xl md:text-3xl">🧪</span>
              </motion.div>

              <motion.div
                className="absolute bottom-[10%] right-[12%] w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-lg border border-border-light flex items-center justify-center"
                custom={3}
                variants={floatVariants}
                animate="animate"
              >
                <span className="text-xl md:text-2xl">🏭</span>
              </motion.div>

              <motion.div
                className="absolute top-[40%] right-[2%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-light/60 flex items-center justify-center"
                custom={4}
                variants={floatVariants}
                animate="animate"
              >
                <Cherry className="w-5 h-5 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-[30%] left-[2%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100/60 flex items-center justify-center"
                custom={5}
                variants={floatVariants}
                animate="animate"
              >
                <Wheat className="w-5 h-5 text-amber-600" />
              </motion.div>

              {/* Decorative dots */}
              <motion.div
                className="absolute top-[18%] left-[45%] w-3 h-3 rounded-full bg-primary/30"
                custom={2}
                variants={floatVariants}
                animate="animate"
              />
              <motion.div
                className="absolute bottom-[25%] right-[35%] w-2 h-2 rounded-full bg-accent/40"
                custom={3}
                variants={floatVariants}
                animate="animate"
              />
              <motion.div
                className="absolute top-[55%] left-[8%] w-2 h-2 rounded-full bg-primary/25"
                custom={1}
                variants={floatVariants}
                animate="animate"
              />

              {/* Star accents */}
              <motion.div
                className="absolute bottom-[35%] left-[15%]"
                custom={4}
                variants={floatVariants}
                animate="animate"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
              </motion.div>
              <motion.div
                className="absolute top-[12%] right-[35%]"
                custom={5}
                variants={floatVariants}
                animate="animate"
              >
                <Star className="w-4 h-4 text-primary/40 fill-primary/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
