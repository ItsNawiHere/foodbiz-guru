'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Desktop shows 3, tablet 2, mobile 1
  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCount]);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isInView, next]);

  const visibleTestimonials = TESTIMONIALS.slice(
    currentIndex,
    currentIndex + visibleCount
  );

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
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark mb-4">
            What Our{' '}
            <span className="gradient-text-primary">Community</span> Says
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Real stories from real entrepreneurs who transformed their food
            business journey with FoodBiz Guru.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-border-light flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-border-light flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-border-light border-l-4 border-l-primary/60 hover:shadow-md transition-shadow relative"
                  >
                    {/* Quote icon */}
                    <div className="absolute top-5 right-5">
                      <Quote className="w-8 h-8 text-primary/10" />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400 fill-amber-400"
                          />
                        )
                      )}
                    </div>

                    {/* Quote Text */}
                    <p className="text-secondary-dark/80 leading-relaxed mb-6 text-[15px]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                      <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-dark text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-8 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
