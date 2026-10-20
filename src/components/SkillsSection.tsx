import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import {
  Code2,
  Database,
  BarChart3,
  Server,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Shield,
  Zap,
  Activity,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'bi'>('all');

  const backendSkills = [
    {
      name: 'Python Core & Async',
      proficiency: 95,
      level: 'Expert',
      rune: 'PY-01',
      details: 'AsyncIO, Generators, Type Hints, Algorithms, OOP Design',
      accent: '#6A3EB2'
    },
    {
      name: 'REST APIs & FastAPI',
      proficiency: 92,
      level: 'Advanced',
      rune: 'API-02',
      details: 'OpenAPI specs, Pydantic validation, JWT, Middleware',
      accent: '#7C4DC4'
    },
    {
      name: 'PostgreSQL & ORM',
      proficiency: 88,
      level: 'Advanced',
      rune: 'DB-03',
      details: 'Complex relational schemas, Indexing, Constraints, SQLAlchemy',
      accent: '#8F5FE8'
    },
    {
      name: 'Backend Architecture',
      proficiency: 86,
      level: 'Disciplined',
      rune: 'SYS-04',
      details: 'Microservices, Docker containerization, Clean Architecture',
      accent: '#552994'
    }
  ];

  const biSkills = [
    {
      name: 'SQL & Query Optimization',
      proficiency: 94,
      level: 'Expert',
      rune: 'SQL-01',
      details: 'Window functions, CTEs, Aggregations, Performance tuning',
      accent: '#6A3EB2'
    },
    {
      name: 'Power BI Development',
      proficiency: 95,
      level: 'Expert',
      rune: 'PBI-02',
      details: 'Executive reporting, Cognitive visual layout, Dynamic slicers',
      accent: '#7C4DC4'
    },
    {
      name: 'Advanced DAX Formulas',
      proficiency: 92,
      level: 'Advanced',
      rune: 'DAX-03',
      details: 'Filter context, Time Intelligence, Iterators (SUMX), Virtual tables',
      accent: '#8F5FE8'
    },
    {
      name: 'ETL & Dimensional Modeling',
      proficiency: 90,
      level: 'Advanced',
      rune: 'ETL-04',
      details: 'Power Query (M), Star Schema design, VertiPaq compression',
      accent: '#552994'
    }
  ];

  // Visual radar attributes for the infographic matrix
  const radarMetrics = [
    { label: 'Python & APIs', score: 95, domain: 'Backend' },
    { label: 'Relational SQL', score: 94, domain: 'Data' },
    { label: 'Power BI Ergonomics', score: 95, domain: 'BI' },
    { label: 'DAX Modeling', score: 92, domain: 'BI' },
    { label: 'Architecture & Clean Kata', score: 90, domain: 'Discipline' },
    { label: 'Dimensional Warehousing', score: 90, domain: 'Data' },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#FBF9FE] border-b border-[#E8DEF6] overflow-hidden scroll-mt-16"
    >
      {/* Background Grimoire Rune Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.04]">
        <SigilRune variant="grimoire" size={600} />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SigilRune variant="kata" size={28} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#794DBA] font-semibold">
                Chapter II · Technical Cartography
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1432] tracking-tight">
              Skills &amp; Technical Grimoire
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#DFCFF5] shadow-xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#351B60] text-white font-semibold shadow-xs'
                  : 'text-[#63507E] hover:text-[#2E1256]'
              }`}
            >
              Unified View
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('backend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'backend'
                  ? 'bg-[#7C4DC4] text-white font-semibold shadow-xs'
                  : 'text-[#63507E] hover:text-[#2E1256]'
              }`}
            >
              Backend (Python/APIs)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('bi')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'bi'
                  ? 'bg-[#7C4DC4] text-white font-semibold shadow-xs'
                  : 'text-[#63507E] hover:text-[#2E1256]'
              }`}
            >
              BI (SQL/Power BI/DAX)
            </button>
          </div>
        </div>

        {/* Infographic Overview Card */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DFCFF5] shadow-[0_12px_40px_-20px_rgba(72,32,132,0.08)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Infographic Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5FE] border border-[#E0D0F7] text-xs font-mono text-[#6238A8]">
                <Sparkles className="w-3.5 h-3.5 text-[#8F5FE8]" />
                <span>The Dual Discipline Synthesis</span>
              </div>
              
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#1F1335] tracking-tight">
                Deterministic Code Meets <br />
                <span className="italic text-[#7C4DC4] font-normal">Actionable Visual Telemetry</span>
              </h3>

              <p className="text-[14.5px] text-[#594971] leading-relaxed font-normal">
                Engineering excellence relies on two harmonious halves: a backend crafted with clean algorithmic discipline (Python, asynchronous APIs, strict database integrity), and business intelligence that extracts undeniable truth from data noise (SQL aggregations, complex DAX models, cognitive Power BI executive views).
              </p>

              {/* Infographic Micro-Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FAF6FE] border border-[#E9DDF8]">
                  <div className="text-[10px] font-mono text-[#7A6993]">BACKEND SPEED</div>
                  <div className="text-base font-bold font-mono text-[#2B1252] mt-0.5">Asynchronous</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6FE] border border-[#E9DDF8]">
                  <div className="text-[10px] font-mono text-[#7A6993]">DATA PARADIGM</div>
                  <div className="text-base font-bold font-mono text-[#2B1252] mt-0.5">Star Schema</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6FE] border border-[#E9DDF8]">
                  <div className="text-[10px] font-mono text-[#7A6993]">DAX PRECISION</div>
                  <div className="text-base font-bold font-mono text-[#7C4DC4] mt-0.5">Time Intell.</div>
                </div>
              </div>
            </div>

            {/* Infographic Visual Matrix / Hexagonal Telemetry Chart */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#FAF6FE] to-[#F3EAFA] border border-[#E4D5F8]">
              <div className="flex items-center justify-between w-full mb-3 text-xs font-mono text-[#67459A]">
                <span>CAPABILITY_RADAR // 2026</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  ACTIVE_PROFICIENCY
                </span>
              </div>

              {/* SVG Infographic Radar Geometry */}
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-full h-full">
                  {/* Concentric hexagonal / circular rings */}
                  <circle cx="120" cy="120" r="95" stroke="#DFD0F5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  <circle cx="120" cy="120" r="70" stroke="#DFD0F5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  <circle cx="120" cy="120" r="45" stroke="#DFD0F5" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                  
                  {/* Axis lines */}
                  <line x1="120" y1="25" x2="120" y2="215" stroke="#D3BEF1" strokeWidth="0.8" />
                  <line x1="38" y1="72" x2="202" y2="168" stroke="#D3BEF1" strokeWidth="0.8" />
                  <line x1="38" y1="168" x2="202" y2="72" stroke="#D3BEF1" strokeWidth="0.8" />

                  {/* Filled polygon for Patrik's skill signature */}
                  <polygon
                    points="120,32 195,78 190,165 120,205 48,162 45,78"
                    fill="#7C4DC4"
                    fillOpacity="0.18"
                    stroke="#7C4DC4"
                    strokeWidth="2"
                  />

                  {/* Vertices */}
                  <circle cx="120" cy="32" r="4" fill="#3D2472" />
                  <circle cx="195" cy="78" r="4" fill="#7C4DC4" />
                  <circle cx="190" cy="165" r="4" fill="#7C4DC4" />
                  <circle cx="120" cy="205" r="4" fill="#3D2472" />
                  <circle cx="48" cy="162" r="4" fill="#7C4DC4" />
                  <circle cx="45" cy="78" r="4" fill="#7C4DC4" />

                  {/* Center Sigil */}
                  <circle cx="120" cy="120" r="10" fill="#FAF8FD" stroke="#7C4DC4" strokeWidth="1.2" />
                  <circle cx="120" cy="120" r="3" fill="#3D2472" />
                </svg>

                {/* Radar Labels */}
                <span className="absolute top-1 text-[10px] font-mono font-bold text-[#351B60]">Python &amp; APIs (95%)</span>
                <span className="absolute right-0 top-1/4 text-[10px] font-mono font-bold text-[#643AA6]">SQL (94%)</span>
                <span className="absolute right-0 bottom-1/4 text-[10px] font-mono font-bold text-[#643AA6]">Power BI (95%)</span>
                <span className="absolute bottom-1 text-[10px] font-mono font-bold text-[#351B60]">DAX (92%)</span>
                <span className="absolute left-0 bottom-1/4 text-[10px] font-mono font-bold text-[#643AA6]">ETL / M (90%)</span>
                <span className="absolute left-0 top-1/4 text-[10px] font-mono font-bold text-[#643AA6]">System Architecture (86%)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Infographic Detail Columns: Backend (Python/APIs) & Business Intelligence (SQL/Power BI/DAX) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* BACKEND COLUMN */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DFCFF5] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] flex flex-col justify-between space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6FB] mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2EAFD] border border-[#DFCFF5] flex items-center justify-center text-[#6A3EB2]">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                        Backend Systems
                      </h4>
                      <p className="text-xs font-mono text-[#7C6E93]">
                        Python · REST APIs · PostgreSQL · Scalability
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#FAF5FE] border border-[#E0D0F7] text-[11px] font-mono text-[#6A3EB2] font-semibold">
                    FORM I
                  </span>
                </div>

                <p className="text-sm text-[#5B4A72] leading-relaxed mb-6">
                  Constructing reliable, high-throughput backend services designed with clean object boundaries, strict request validation, and deterministic execution pipelines.
                </p>

                {/* Progress Infographic Rows */}
                <div className="space-y-4">
                  {backendSkills.map((skill) => (
                    <div key={skill.name} className="p-3.5 rounded-2xl bg-[#FAF8FD] border border-[#E9DEF7] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#291349] font-mono flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DC4]" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#75648E]">{skill.level}</span>
                          <span className="font-mono font-bold text-[#2A134D] text-xs">{skill.proficiency}%</span>
                        </div>
                      </div>

                      {/* Smooth progress bar */}
                      <div className="w-full h-1.5 bg-[#E8DCF8] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#6A3EB2] to-[#9A6BEB] rounded-full transition-all duration-700"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>

                      <div className="text-[11px] text-[#6E5E85] font-mono">
                        {skill.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Pipeline Flow Diagram (Infographic) */}
              <div className="p-4 rounded-2xl bg-[#1C112E] text-[#E8DCFD] border border-[#3E2568] space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#B19ECE]">
                  <span className="flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-[#9A6BEB]" />
                    <span>DETERMINISTIC INGESTION FLOW</span>
                  </span>
                  <span className="text-emerald-400">LATENCY &lt; 20ms</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-center gap-1">
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    HTTP Payload
                  </div>
                  <span className="text-[#8F5FE8]">→</span>
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    FastAPI Kata
                  </div>
                  <span className="text-[#8F5FE8]">→</span>
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    SQL Store
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* BUSINESS INTELLIGENCE COLUMN */}
          {(activeCategory === 'all' || activeCategory === 'bi') && (
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DFCFF5] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] flex flex-col justify-between space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6FB] mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F2EAFD] border border-[#DFCFF5] flex items-center justify-center text-[#6A3EB2]">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                        Business Intelligence
                      </h4>
                      <p className="text-xs font-mono text-[#7C6E93]">
                        SQL · Power BI · DAX · Data Modeling
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#FAF5FE] border border-[#E0D0F7] text-[11px] font-mono text-[#6A3EB2] font-semibold">
                    FORM II
                  </span>
                </div>

                <p className="text-sm text-[#5B4A72] leading-relaxed mb-6">
                  Transforming chaotic transactional records into pristine visual telemetry. Expert in calculating multi-layered filter contexts in DAX and architecting scalable Star Schemas.
                </p>

                {/* Progress Infographic Rows */}
                <div className="space-y-4">
                  {biSkills.map((skill) => (
                    <div key={skill.name} className="p-3.5 rounded-2xl bg-[#FAF8FD] border border-[#E9DEF7] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#291349] font-mono flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DC4]" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#75648E]">{skill.level}</span>
                          <span className="font-mono font-bold text-[#2A134D] text-xs">{skill.proficiency}%</span>
                        </div>
                      </div>

                      {/* Smooth progress bar */}
                      <div className="w-full h-1.5 bg-[#E8DCF8] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#6A3EB2] to-[#9A6BEB] rounded-full transition-all duration-700"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>

                      <div className="text-[11px] text-[#6E5E85] font-mono">
                        {skill.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BI Tabular Telemetry Flow Diagram (Infographic) */}
              <div className="p-4 rounded-2xl bg-[#1C112E] text-[#E8DCFD] border border-[#3E2568] space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#B19ECE]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#9A6BEB]" />
                    <span>TABULAR MODELLING PIPELINE</span>
                  </span>
                  <span className="text-emerald-400">VERTIPAQ OPTIMIZED</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-center gap-1">
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    Data Warehouse
                  </div>
                  <span className="text-[#8F5FE8]">→</span>
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    Star Schema
                  </div>
                  <span className="text-[#8F5FE8]">→</span>
                  <div className="flex-1 p-1.5 rounded bg-[#2B1849] border border-[#4D2D82]">
                    DAX Measure
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
