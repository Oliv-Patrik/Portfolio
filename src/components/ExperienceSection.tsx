import React from 'react';
import { SigilRune } from './SigilRune';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { ExperienceItem } from '../types';

export const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'exp-bi',
      role: 'Jr. BI Analyst',
      company: 'Plusval Agroavícola LTDA',
      period: '2025 — Present',
      location: 'On-Site / Paraná',
      status: 'Current Engagement',
      summary:
        'Architecting executive Power BI solutions, authoring optimized DAX measures for tabular data models, and designing automated SQL extraction pipelines that translate complex organizational transactions into real-time decision telemetry.',
      achievements: [
        'Engineered dynamic corporate reporting suites utilized by leadership to track revenue variance, churn indexes, and operational margins.',
        'Authored high-performance DAX calculations (Time Intelligence, dynamic segmentation, moving averages) reducing dashboard query latency by over 45%.',
        'Structured Star Schema data models with dimensional integrity, establishing single sources of truth across disparate database tables.',
        'Collaborated with operational teams to automate daily ETL runs, replacing manual reporting workflows with scheduled automated refreshes.',
      ],
      technologies: ['Power BI', 'Advanced DAX', 'SQL', 'Data Modeling', 'Power Query (M)', 'Excel VBA'],
      disciplineRule: 'KATA OF VISUAL TELEMETRY: ZERO NOISE, INSTANT SIGNAL',
    },
    {
      id: 'exp-billing',
      role: 'Billing Analyst',
      company: 'Plusval Agroavícola LTDA',
      period: '2022 — 2025',
      location: 'On-Site / Paraná',
      summary:
        'Governed transactional accuracy, billing cycle reconciliations, automated dispute resolution flows, and audit trail verifications across large-scale customer accounts and enterprise ERP billing modules.',
      achievements: [
        'Executed end-to-end invoice reconciliation for enterprise tiers, maintaining a 99.8% transactional accuracy rate across monthly billing cycles.',
        'Developed automated SQL verification scripts to flag discrepancy variances between contract terms and billing ledger line items.',
        'Partnered with accounting and software engineering to streamline billing database syncs, reducing manual validation overhead by 35%.',
        'Documented comprehensive standard operating procedures (SOPs) and audit checklists, establishing deterministic billing governance.',
      ],
      technologies: ['SQL Queries', 'ERP Systems', 'Financial Reconciliation', 'Process Automation', 'Excel Modeling'],
      disciplineRule: 'KATA OF TRANSACTIONAL INTEGRITY: DETERMINISTIC LEDGERS',
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#FAF8FD] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SigilRune variant="kata" size={28} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#794DBA] font-semibold">
                Chapter IV · Battle-Tested Praxis
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1432] tracking-tight">
              Professional Experience
            </h2>
          </div>

          <p className="text-sm font-mono text-[#76678C] max-w-sm">
            // Clean typography detailing demonstrated impact in analytics &amp; financial operations
          </p>
        </div>

        {/* Roles Listing with Clean Modern Typography & Grimoire Runes */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DFCFF5] hover:border-[#BE9EF3] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.07)] hover:shadow-[0_16px_44px_-16px_rgba(61,36,114,0.15)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Period, Role & Discipline Seal (4 cols) */}
                <div className="lg:col-span-4 space-y-4 lg:pr-6 lg:border-r border-[#F0E6FB]">
                  
                  {/* Discipline Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5FE] border border-[#E1D1F7] text-[11px] font-mono text-[#6A3EB2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DC4]" />
                    <span>{exp.disciplineRule}</span>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#1F1432] tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-[#7C4DC4] mt-1 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 opacity-80" />
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  {/* Metadata pills */}
                  <div className="space-y-2 text-xs font-mono text-[#77688F] pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#8F5FE8]" />
                      <span>{exp.period}</span>
                      {exp.status && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-sans font-medium border border-emerald-200">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#8F5FE8]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Small Sigil Stamp */}
                  <div className="pt-4 hidden sm:block opacity-60">
                    <SigilRune variant="minimal" size={24} />
                  </div>
                </div>

                {/* Right Column: Narrative, Accomplishments & Technologies (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Summary */}
                  <p className="text-[15.5px] text-[#47375E] leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Bulleted Achievements with Martial Precision */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#643FA1] font-semibold">
                      Key Deliverables &amp; System Improvements:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-sm text-[#4E3F66] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#8F5FE8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-4 border-t border-[#F0E6FB] flex flex-wrap items-center gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#FAF5FE] border border-[#E2D3F7] text-xs font-mono text-[#57358C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
