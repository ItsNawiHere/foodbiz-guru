'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: integrate with email service
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="gradient-dark">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />

          {/* Floating dots */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-primary/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-primary/20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[40%] right-[10%] w-2 h-2 rounded-full bg-white/10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[35%]"
            animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-primary/20" />
          </motion.div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <Mail className="w-7 h-7 text-primary" />
            </motion.div>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Join Our{' '}
              <span className="text-primary">Growing</span> Community of Food Entrepreneurs
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg mx-auto">
              Get weekly insights on food business, product development, and
              industry trends delivered to your inbox.
            </p>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-light pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-base backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="gradient-primary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 btn-hover shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              className="text-sm text-white/40"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              No spam, ever. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
