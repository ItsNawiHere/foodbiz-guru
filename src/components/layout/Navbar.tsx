'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Leaf } from 'lucide-react';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener for transparent → glass transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll(); // check on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] border-b border-white/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="relative flex items-center gap-2 group"
              onClick={closeMobileMenu}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 transition-colors duration-300">
                <Leaf className="w-4 h-4 text-[var(--primary)] transition-transform duration-300 group-hover:rotate-12" />
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold tracking-tight">
                <span className="text-[var(--secondary-dark)]">Food</span>
                <span className="text-[var(--primary)]">Biz</span>
                <span className="text-[var(--secondary-dark)]">Guru</span>
              </span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/5'
                      : 'text-secondary-light hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(22,163,74,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ── Mobile Menu Toggle ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-secondary/5 transition-colors duration-300"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 text-secondary-dark transition-all duration-300 ${
                    isMobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 text-secondary-dark transition-all duration-300 ${
                    isMobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-secondary-dark/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[min(85vw,360px)] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-border-light">
          <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--primary)]/20">
              <Leaf className="w-4 h-4 text-[var(--primary)]" />
            </span>
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
              <span className="text-[var(--secondary-dark)]">Food</span>
              <span className="text-[var(--primary)]">Biz</span>
              <span className="text-[var(--secondary-dark)]">Guru</span>
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="flex items-center justify-center w-9 h-9 rounded-xl hover:bg-secondary/5 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-secondary-dark" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-4 py-4 gap-1 overflow-y-auto h-[calc(100%-72px-88px)]">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? 'text-primary bg-primary/5 border-l-[3px] border-primary'
                  : 'text-secondary hover:text-primary hover:bg-primary/5'
              }`}
              style={{
                transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? 'translateX(0)' : 'translateX(16px)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-light bg-surface/50">
          <Link
            href="/products"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Spacer to push page content below the fixed navbar */}
      <div className="h-[72px] lg:h-[80px]" />
    </>
  );
}
