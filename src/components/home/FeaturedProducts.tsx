'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, IndianRupee } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const featuredProducts = PRODUCTS.slice(0, 3);

const badgeColors: Record<string, string> = {
  Bestseller: 'bg-amber-100 text-amber-800 border-amber-200',
  Popular: 'bg-blue-100 text-blue-800 border-blue-200',
  New: 'bg-primary-light text-primary-dark border-primary/20',
};

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-surface section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/60 text-primary-dark text-sm font-medium mb-4">
            Our Guides
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4">
            Essential Guides for{' '}
            <span className="gradient-text-primary">Food Entrepreneurs</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Practical, action-oriented guides designed to save you time, money,
            and costly mistakes on your food business journey.
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <Link
                href={`/products/${product.id}`}
                className="group block h-full"
              >
                <div className="glass rounded-2xl p-7 h-full flex flex-col card-hover border border-border-light hover:border-primary/20 relative overflow-hidden">
                  {/* Background subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:to-primary/[0.06] transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Badge */}
                    {product.badge && (
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${badgeColors[product.badge] || 'bg-gray-100 text-gray-800 border-gray-200'}`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-secondary-dark mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-border-light">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center text-2xl font-bold text-secondary-dark">
                          <IndianRupee className="w-5 h-5" />
                          {product.price}
                        </span>
                        <span className="flex items-center text-sm text-muted line-through">
                          <IndianRupee className="w-3 h-3" />
                          {product.originalPrice}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        View Guide
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary text-primary font-semibold btn-hover hover:bg-primary hover:text-white transition-colors"
          >
            View All Guides
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
