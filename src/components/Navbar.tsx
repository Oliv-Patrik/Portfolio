import React, { useState, useEffect } from 'react';
import { SigilRune } from './SigilRune';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8FD]/85 backdrop-blur-md border-b border-[#E7DCF6]/80 shadow-[0_4px_24px_-10px_rgba(61,36,114,0.08)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with Sigil */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C4DC4] rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F1E8FC] to-[#E3D2F8] border border-[#D5C2F3] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <SigilRune variant="compass" size={22} />
          </div>
          <div>
            <span className="font-serif-heading font-semibold text-[17px] text-[#241738] tracking-tight group-hover:text-[#673AB7] transition-colors block leading-tight">
              Patrik de Oliveira
            </span>
            <span className="text-[11px] text-[#7C6E91] font-mono tracking-wider block">
              ENG · DATA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-[#5E5173]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#381B6D] transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7C4DC4] rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Status indicator & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3ECFB] border border-[#DFCFF5] text-[12px] text-[#4E317E]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available for hire</span>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#321759] text-white text-[13px] font-medium hover:bg-[#4E2789] hover:shadow-[0_8px_20px_-6px_rgba(50,23,89,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#321759] hover:bg-[#F2EBFB] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8FD]/95 backdrop-blur-xl border-b border-[#E3D3F7] px-6 py-5 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#2E1A47] hover:text-[#7C4DC4] py-2 border-b border-[#F0E6FA]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#7B6E90] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Open for opportunities
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-full bg-[#321759] text-white text-xs font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
