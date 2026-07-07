'use client';

import Link from 'next/link';
import { Send, Leaf } from 'lucide-react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

/* Inline SVG social icons (brand icons removed from lucide-react) */
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

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { label: 'Free Guides', href: '/resources' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'FSSAI Guide', href: '/products' },
  { label: 'Food Business Blog', href: '/blog' },
];

const socialLinks = [
  { icon: IconInstagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: IconLinkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
  { icon: IconYoutube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
  { icon: IconTwitterX, href: SITE_CONFIG.social.twitter, label: 'Twitter / X' },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary-dark text-white overflow-hidden">
      {/* Subtle decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      {/* ── Top Divider ── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Main Footer Content ── */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 lg:py-20">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-6">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 transition-colors duration-300">
                <Leaf className="w-5 h-5 text-[var(--primary)] transition-transform duration-300 group-hover:rotate-12" />
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight">
                <span className="text-white">Food</span>
                <span className="text-[var(--primary)]">Biz</span>
                <span className="text-white">Guru</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 text-white/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-white/90 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm text-white/50 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-white/90 mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm text-white/50 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-widest text-white/90 mb-2">
              Stay Updated
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Get free food business tips, guides, and industry insights delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(22,163,74,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
              <span className="hidden sm:block">•</span>
              <p>Made with ❤️ for food entrepreneurs</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
