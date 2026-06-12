'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  User,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

/* Inline SVG social icons */
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconYoutube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
const IconTwitterX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l7.07 9.34L4 20h1.5l6.18-5.82L17 20h3.5L13.14 10.26 20 4h-1.5l-5.97 5.62L7.5 4H4z"/></svg>
);

const SUBJECTS = [
  'General Inquiry',
  'Product Question',
  'Consulting',
  'Partnership',
  'Other',
];

const FAQS = [
  {
    question: 'How quickly do you respond?',
    answer:
      'We aim to respond to all inquiries within 24–48 business hours. For urgent matters, we recommend reaching out via WhatsApp for faster communication.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'We offer a free 15-minute discovery call to understand your needs and recommend the right guide or consulting service. For in-depth consultations, we have paid sessions with detailed problem-solving.',
  },
  {
    question: 'Can I visit your office?',
    answer:
      'We primarily operate online to serve food entrepreneurs across India. However, we are happy to schedule video calls and can arrange in-person meetings for consulting engagements on a case-by-case basis.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No actual backend — show success state
    setIsSubmitted(true);
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden gradient-hero section-padding">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-dark mb-6">
              Get in{' '}
              <span className="gradient-text-primary">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed">
              Have a question? Want to collaborate? We&apos;d love to hear from
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT FORM + INFO ═══════════ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* ── Left: Contact Form ── */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-dark mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted mb-6 max-w-sm mx-auto">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24–48 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: '',
                          });
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300"
                      >
                        Send Another Message
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary-dark mb-1">
                          Send us a Message
                        </h2>
                        <p className="text-sm text-muted">
                          Fill out the form and we&apos;ll get back to you soon.
                        </p>
                      </div>

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-secondary-dark mb-1.5"
                        >
                          Full Name <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full pl-11 pr-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-secondary-dark mb-1.5"
                        >
                          Email <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@email.com"
                            className="w-full pl-11 pr-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone (optional) */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-secondary-dark mb-1.5"
                        >
                          Phone{' '}
                          <span className="text-muted-light font-normal">
                            (optional)
                          </span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 99999 99999"
                            className="w-full pl-11 pr-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-secondary-dark mb-1.5"
                        >
                          Subject <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select a subject</option>
                            {SUBJECTS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-secondary-dark mb-1.5"
                        >
                          Message <span className="text-error">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 hover:from-primary-dark hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Right: Contact Info ── */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-light font-medium uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-medium text-secondary-dark group-hover:text-primary transition-colors duration-300">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-light font-medium uppercase tracking-wider mb-0.5">
                        Phone
                      </p>
                      <p className="text-sm font-medium text-secondary-dark group-hover:text-primary transition-colors duration-300">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-light font-medium uppercase tracking-wider mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-medium text-secondary-dark">
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-muted-light font-medium uppercase tracking-wider mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      {
                        icon: IconInstagram,
                        href: SITE_CONFIG.social.instagram,
                        label: 'Instagram',
                      },
                      {
                        icon: IconLinkedin,
                        href: SITE_CONFIG.social.linkedin,
                        label: 'LinkedIn',
                      },
                      {
                        icon: IconYoutube,
                        href: SITE_CONFIG.social.youtube,
                        label: 'YouTube',
                      },
                      {
                        icon: IconTwitterX,
                        href: SITE_CONFIG.social.twitter,
                        label: 'Twitter / X',
                      },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface hover:bg-primary/10 text-muted hover:text-primary transition-all duration-300"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/60 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#25D366]/15 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-secondary-dark">
                    Prefer WhatsApp?
                  </h3>
                </div>
                <p className="text-sm text-muted mb-5 leading-relaxed">
                  Chat with us directly for quick answers and support.
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ SECTION ═══════════ */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Quick answers to common questions about reaching us.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface/50 transition-colors duration-300"
                >
                  <span className="font-[family-name:var(--font-heading)] text-base font-bold text-secondary-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-muted-light transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
