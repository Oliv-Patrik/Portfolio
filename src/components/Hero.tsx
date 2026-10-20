import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import { ArrowDown, Sparkles, Terminal, BarChart2, ShieldCheck, ExternalLink, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [runeInteractiveAngle, setRuneInteractiveAngle] = useState(0);

  const rotateRune = () => {
    setRuneInteractiveAngle((prev) => prev + 45);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Precision martial arts flow lines SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8F5FE8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C9B7EA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3D2472" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Subtle horizontal alignment threads */}
        <line x1="0" y1="180" x2="100%" y2="180" stroke="#E5DAF6" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="0" y1="420" x2="100%" y2="420" stroke="#E5DAF6" strokeWidth="0.8" strokeDasharray="2 12" />
        {/* Grimoire coordinate marks */}
        <circle cx="90%" cy="180" r="4" fill="#9A75DC" opacity="0.6" />
        <circle cx="10%" cy="420" r="4" fill="#9A75DC" opacity="0.6" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Disciplined Eyebrow with sigil rune */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#DAC8F4] shadow-xs text-[#522F88] text-[13px] font-medium tracking-wide">
              <SigilRune variant="minimal" size={16} />
              <span className="font-mono text-[11.5px] uppercase tracking-wider text-[#734CB4]">Digital Grimoire · Edition 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F5FE8]" />
              <span className="text-[#321759]">Martial Arts Discipline in Code</span>
            </div>

            {/* Big Bold Headline: Patrik de Oliveira */}
            <div className="space-y-2">
              <h1 className="font-serif-heading text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-[#1C142A] tracking-tight leading-[1.04]">
                Patrik <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B1055] via-[#5F34A8] to-[#8F5FE8] italic font-normal">
                  de Oliveira
                </span>
              </h1>
              
              {/* Exact Subtitle: Software Engineering Student & Data Analyst */}
              <p className="text-xl sm:text-2xl md:text-[26px] font-medium text-[#4D386B] tracking-tight pt-2">
                Software Engineering Student &amp; Data Analyst
              </p>
            </div>

            {/* Concise Mission / Grimoire Philosophy */}
            <p className="text-[16px] sm:text-[17px] text-[#63537D] leading-relaxed max-w-xl font-normal">
              Merging the computational rigour of <span className="text-[#2C1352] font-semibold">Backend Engineering</span> with the sharp clarity of <span className="text-[#2C1352] font-semibold">Business Intelligence</span>. Every line of code and SQL query is executed like a deliberate martial kata—clean, deterministic, and built without wasted motion.
            </p>

            {/* Dual Discipline Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl">
              <div className="p-3.5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E7DCF6] hover:border-[#BF9FF3] transition-all group shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-[#321759]">
                  <div className="p-1.5 rounded-lg bg-[#F2EAFD] text-[#6B3BB8] group-hover:scale-105 transition-transform">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">Backend Systems</span>
                </div>
                <p className="text-xs text-[#6F6088] leading-relaxed">
                  Python, RESTful APIs, robust microservices &amp; clean architectures designed for stability.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E7DCF6] hover:border-[#BF9FF3] transition-all group shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5 text-[#321759]">
                  <div className="p-1.5 rounded-lg bg-[#F2EAFD] text-[#6B3BB8] group-hover:scale-105 transition-transform">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">Business Intelligence</span>
                </div>
                <p className="text-xs text-[#6F6088] leading-relaxed">
                  SQL, Power BI &amp; DAX modeling delivering real-time actionable executive telemetry.
                </p>
              </div>
            </div>

            {/* Actions & Anchors */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#2C1150] hover:bg-[#482084] text-white text-[14.5px] font-medium shadow-[0_12px_28px_-8px_rgba(44,17,80,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explore Selected Projects</span>
                <ArrowDown className="w-4 h-4 text-[#DAC4FA]" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#341B5C] border border-[#D8C7F3] text-[14.5px] font-medium hover:shadow-sm transition-all flex items-center gap-2"
              >
                <span>Initiate Contact</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Visual Column (5 cols) - Digital Grimoire Sigil & Telemetry Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Interactive Glassmorphism Grimoire Instrument */}
            <div className="relative w-full max-w-[420px] p-6 sm:p-7 rounded-[28px] bg-gradient-to-b from-white/80 via-[#FAF6FE]/90 to-[#F4ECFC]/80 backdrop-blur-xl border border-[#DFCEF7] shadow-[0_24px_50px_-20px_rgba(72,32,132,0.18)]">
              
              {/* Header of instrument */}
              <div className="flex items-center justify-between border-b border-[#E9DCF8] pb-3 mb-5 text-xs">
                <div className="flex items-center gap-2 font-mono text-[#5B3794]">
                  <span className="w-2 h-2 rounded-full bg-[#7C4DC4] animate-ping" />
                  <span>GRIMOIRE_V3.9 // DISCIPLINE</span>
                </div>
                <button
                  type="button"
                  onClick={rotateRune}
                  title="Click to orient sigil"
                  className="px-2.5 py-1 rounded-full bg-[#EFE4FD] hover:bg-[#E3D0FA] text-[#4C2887] text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Cycle Sigil</span>
                </button>
              </div>

              {/* Central Geometric Rune (Digital Grimoire + Martial Arts Kata Seal) */}
              <div className="relative flex items-center justify-center my-4 py-4">
                {/* Outer concentric dial with degrees */}
                <div
                  className="transition-transform duration-700 ease-out"
                  style={{ transform: `rotate(${runeInteractiveAngle}deg)` }}
                >
                  <SigilRune variant="grimoire" size={200} animated={true} />
                </div>

                {/* Floating telemetry tags */}
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-white/90 border border-[#DBC8F5] text-[11px] font-mono text-[#5E3B99] shadow-xs">
                  α = 0.982 [Clean]
                </div>
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-white/90 border border-[#DBC8F5] text-[11px] font-mono text-[#5E3B99] shadow-xs">
                  KATA_STATE: READY
                </div>
              </div>

              {/* Grimoire Telemetry Ledger */}
              <div className="space-y-2.5 pt-3 border-t border-[#EBDFF8] text-[13px]">
                <div className="flex items-center justify-between text-[#61527C]">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#7C4DC4]" />
                    <span>Backend Stacks</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#25133E] bg-[#EFE7FB] px-2 py-0.5 rounded">
                    Python · REST · SQL
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#61527C]">
                  <span className="flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5 text-[#7C4DC4]" />
                    <span>Analytics Core</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#25133E] bg-[#EFE7FB] px-2 py-0.5 rounded">
                    Power BI · DAX · ETL
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#61527C]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#7C4DC4]" />
                    <span>Operational Ethos</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#25133E] bg-[#EFE7FB] px-2 py-0.5 rounded">
                    Martial Precision
                  </span>
                </div>
              </div>

              {/* Status footer strip */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-[#7B6E94] font-mono">
                <span>LATITUDE: -23.5505 S</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>

            {/* Ambient accent rune behind card */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-25">
              <SigilRune variant="telemetry" size={100} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
