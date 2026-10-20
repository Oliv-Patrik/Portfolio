import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import { ContactForm } from './ContactForm';
import { Github, Linkedin, Mail, Copy, Check, ArrowUp, Send, Heart, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'patrikoli49@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#201138] text-[#EADBFA] pt-20 pb-12 overflow-hidden scroll-mt-12">
      
      {/* Subtle Grimoire Watermark in Footer */}
      <svg
        className="absolute -right-20 -bottom-20 w-[420px] h-[420px] pointer-events-none opacity-[0.07] text-[#D8C4F8]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.2" />
        <polygon points="100,20 170,100 100,180 30,100" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Contact Grid: Information & Inscription Form */}
        <div className="pb-16 border-b border-[#3D2366] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Connections (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#B39CD7]">
              <SigilRune variant="minimal" size={16} />
              <span className="uppercase tracking-widest">Digital Grimoire // Final Inscription</span>
            </div>
            
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Ready to construct <br />
              <span className="italic text-[#CBB2F5] font-normal">disciplined systems?</span>
            </h2>

            <p className="text-[#BCAECF] text-base leading-relaxed font-normal">
              Whether you are architecting a resilient Python backend, optimizing heavy DAX analytics pipelines, or discovering insights across vast SQL databases, let&apos;s build with precision.
            </p>

            {/* Quick Email Copy Container */}
            <div className="p-4 rounded-2xl bg-[#2B164A] border border-[#482877] flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#3D2168] flex items-center justify-center text-[#D6BEFA] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono text-[#A491C2]">DIRECT INQUIRIES</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-mono text-white hover:text-[#CBB2F5] transition-colors truncate block"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-xl bg-[#7C4DC4] hover:bg-[#8F5FE8] text-white text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connection Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              {/* GitHub: github.com/Oliv-Patrik */}
              <a
                href="https://github.com/Oliv-Patrik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-2xl bg-[#2B164A] hover:bg-[#391E60] border border-[#482877] hover:border-[#8050C9] text-[#E0D2F8] hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-mono group shadow-xs"
              >
                <Github className="w-4 h-4 text-[#C1A8EC] group-hover:scale-110 transition-transform" />
                <span className="truncate">github.com/Oliv-Patrik</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/oliveira-patrik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-[#2B164A] hover:bg-[#391E60] border border-[#482877] hover:border-[#8050C9] text-[#E0D2F8] hover:text-white transition-all flex items-center justify-center group shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#C1A8EC] group-hover:scale-110 transition-transform" />
              </a>

              {/* Email Icon */}
              <a
                href={`mailto:${emailAddress}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl bg-[#2B164A] hover:bg-[#391E60] border border-[#482877] hover:border-[#8050C9] text-[#E0D2F8] hover:text-white transition-all flex items-center justify-center group shadow-xs"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#C1A8EC] group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Location & Ethos Tag */}
            <div className="p-3 rounded-2xl bg-[#271442] border border-[#3E2164] text-xs font-mono text-[#A896C2] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8F5FE8]" />
                <span>Base: Remote / Brazil</span>
              </span>
              <span className="text-emerald-400">STATUS: AVAILABLE</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Minimalist Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9683AF]">
          
          <div className="flex items-center gap-2.5">
            <SigilRune variant="minimal" size={16} />
            <span className="text-white font-serif-heading font-medium text-sm tracking-tight">
              Patrik de Oliveira
            </span>
            <span className="text-[#6D5A85]">·</span>
            <span>Software Engineering &amp; Business Intelligence</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 · Built with Martial Discipline</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#2B164A] hover:bg-[#3E216B] text-[#CDB8F2] hover:text-white transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
