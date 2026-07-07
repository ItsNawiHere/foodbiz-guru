'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Lightbulb,
  FlaskConical,
  Shield,
  Factory,
  TrendingUp,
  Target,
  type LucideIcon,
} from 'lucide-react';
import { ROADMAP_STEPS } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  FlaskConical,
  Shield,
  Factory,
  TrendingUp,
  Target,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function RoadmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-dark text-sm font-medium mb-4">
            Your Journey
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4">
            Our expertise - Your Roadmap to Food{' '}
            <span className="gradient-text-primary">Business Success</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A clear 5-step framework designed to guide aspiring food
            entrepreneurs from idea to launch in India.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid grid-cols-5 gap-4">
              {ROADMAP_STEPS.map((step) => {
                const Icon = iconMap[step.icon] || Lightbulb;
                return (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className={`flex flex-col items-center text-center group p-4 rounded-2xl transition-colors ${
                      step.step === 3 || step.step === 4 ? 'bg-[var(--primary)]/10' : ''
                    }`}
                  >
                    {/* Step Number + Icon */}
                    <div className="relative mb-6">
                      <div className={`w-24 h-24 rounded-full bg-white flex items-center justify-center transition-all duration-300 relative z-10 ${
                        step.step === 3 || step.step === 4 
                          ? 'border-[3px] border-primary shadow-[0_0_20px_rgba(22,163,74,0.3)] scale-110' 
                          : 'border-2 border-primary/20 shadow-md group-hover:shadow-xl group-hover:border-primary/50'
                      }`}>
                        <Icon className={`w-8 h-8 text-primary ${step.step === 3 || step.step === 4 ? 'scale-110' : ''}`} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full gradient-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-2 group-hover:text-primary transition-colors flex flex-col items-center gap-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed px-2">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8 sm:pl-12">
              {/* Vertical Line */}
              <div className="absolute left-[15px] sm:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

              <div className="space-y-10">
                {ROADMAP_STEPS.map((step) => {
                  const Icon = iconMap[step.icon] || Lightbulb;
                  return (
                    <motion.div
                      key={step.step}
                      variants={itemVariants}
                      className="relative flex gap-4 sm:gap-6 items-start group"
                    >
                      {/* Step circle */}
                      <div className="absolute -left-8 sm:-left-12 flex-shrink-0">
                        <div className="relative">
                          <div className={`rounded-full bg-white flex items-center justify-center transition-all ${
                            step.step === 3 || step.step === 4
                              ? 'w-[36px] h-[36px] sm:w-[54px] sm:h-[54px] border-[3px] border-primary shadow-[0_0_15px_rgba(22,163,74,0.4)] relative -left-1'
                              : 'w-[30px] h-[30px] sm:w-[46px] sm:h-[46px] border-2 border-primary/30 shadow-md group-hover:border-primary'
                          }`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" strokeWidth={2} />
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full gradient-primary text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">
                            {step.step}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`rounded-xl p-5 sm:p-6 flex-1 border transition-shadow ${
                        step.step === 3 || step.step === 4 
                          ? 'bg-[var(--primary)]/10 border-primary/30 shadow-md' 
                          : 'bg-surface border-border-light group-hover:shadow-md'
                      }`}>
                        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-1.5 group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
