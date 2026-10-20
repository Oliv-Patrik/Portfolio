import React from 'react';
import { SigilRune } from './SigilRune';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { EducationItem } from '../types';

export const EducationTimeline: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 'edu-swe',
      degree: 'Software Engineering',
      institution: 'Higher Education / Unopar University',
      period: '2025 — Present',
      status: 'Active Student',
      description:
        'Rigorous study of computer science fundamentals, algorithm analysis, object-oriented design, backend system architectures, and reliable database systems. Developing high-throughput applications with strict type safety and modular separation of concerns.',
      highlights: [
        'Data Structures & Algorithmic Complexity',
        'Backend System Design & RESTful APIs (Python, FastAPI)',
        'Relational Databases & SQL Query Optimization',
        'Software Testing, CI/CD, and Version Control Systems',
      ],
      focus: ['Python', 'SQL', 'System Architecture', 'Algorithms', 'APIs'],
      runeTag: 'FORM I · ARCHITECTURE',
    },
    {
      id: 'edu-pbi',
      degree: 'Power BI Analyst',
      institution: 'Business Intelligence & Data Modeling Specialization',
      period: '2025',
      status: 'Certified Specialization',
      description:
        'Specialized curriculum focused on enterprise business intelligence pipelines, VertiPaq tabular engine optimization, advanced DAX calculation logic, and dimensional data modeling (Star / Snowflake schemas).',
      highlights: [
        'Complex DAX Measures (Time Intelligence, Iterators, Dynamic Segmentation)',
        'Data Extraction, Cleaning, and Modeling using Power Query (M Language)',
        'Executive Dashboard Architecture & Cognitive Visual Ergonomics',
        'DirectQuery & Composite Data Models for Big Data',
      ],
      focus: ['Power BI', 'DAX', 'Power Query (M)', 'Data Modeling', 'Star Schema'],
      runeTag: 'FORM II · TELEMETRY',
    },
  ];

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-16">
      {/* Background martial discipline thread */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SigilRune variant="compass" size={28} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#794DBA] font-semibold">
                Chapter II · Academic Pedigree
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1432] tracking-tight">
              Education &amp; Credentials
            </h2>
          </div>

          <p className="text-sm font-mono text-[#76678C] max-w-sm">
            // The dual disciplines of computational structure and visual analytics
          </p>
        </div>

        {/* Timeline Path with Custom Knot & Sigil Milestones */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#DFCFF5] ml-4 sm:ml-8 space-y-12">
          {educationData.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker (Martial Sigil Node) */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-[#FAF8FD] border-2 border-[#7C4DC4] flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C4DC4]" />
              </div>

              {/* Education Card Container */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-[#DFCFF5] hover:border-[#BF9FF3] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] hover:shadow-[0_16px_44px_-16px_rgba(61,36,114,0.16)] transition-all duration-300">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#F2EAFD] text-[#5D33A4] border border-[#DDC9F7]">
                      {item.runeTag}
                    </span>
                    <span className="text-xs font-mono text-[#87789F] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                {/* Main Degree Title */}
                <div className="mb-3">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#211538] tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-[#7C4DC4] mt-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 opacity-75" />
                    {item.institution}
                  </p>
                </div>

                {/* Narrative Summary */}
                <p className="text-[15px] text-[#5C4C74] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Curriculum / Highlights Breakdown */}
                <div className="mb-6 pt-4 border-t border-[#F0E6FB]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6942A6] font-semibold mb-3">
                    Core Disciplines &amp; Focus:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#47365F]">
                        <CheckCircle className="w-4 h-4 text-[#8F5FE8] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#FAF6FE] border border-[#E4D7F7] text-xs font-mono text-[#57368B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
