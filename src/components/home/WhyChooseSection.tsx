'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Headphones,
} from 'lucide-react';

const values = [
  {
    icon: GraduationCap,
    title: 'Industry Expertise',
    description:
      'Deep knowledge in food science, technology, and business backed by real industry experience.',
  },
  {
    icon: BookOpen,
    title: 'Practical Guides',
    description:
      'No theory overload. Every guide is action-oriented with templates, checklists, and step-by-step instructions.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description:
      '500+ entrepreneurs have used our guides and consulting to successfully launch and grow their food businesses.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description:
      'Get expert support through consulting sessions, WhatsApp, and our growing community of food entrepreneurs.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-dark text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4">
            Why Food Entrepreneurs Choose{' '}
            <span className="gradient-text-primary">FoodBiz Guru</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            We combine deep industry knowledge with practical, actionable
            guidance to help you succeed in the food business.
          </p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-7 border border-border-light hover:border-primary/20 card-hover text-center"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <Icon
                      className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
