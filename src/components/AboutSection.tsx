import React, { useState } from 'react';
import { SigilRune } from './SigilRune';
import { Code, Database, Layers, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'backend' | 'bi'>('backend');
  const [copiedCode, setCopiedCode] = useState(false);

  const pythonSnippet = `# Disciplined RESTful Architecture
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="TelemetryAPI", version="1.0.0")

class MetricPayload(BaseModel):
    sensor_id: str = Field(..., example="AGRO-09")
    moisture_index: float = Field(..., ge=0.0, le=100.0)
    nitrogen_level: float = Field(..., ge=0.0)

@app.post("/api/v1/telemetry/ingest", status_code=201)
async def ingest_telemetry(payload: MetricPayload):
    # Deterministic validation & processing
    record = await telemetry_service.persist(payload)
    return {"status": "persisted", "record_id": record.id}`;

  const daxSnippet = `// Optimized DAX Measure: Rolling Growth
Rolling_Quarterly_Revenue := 
VAR _CurrentDate = MAX('Date'[Date])
VAR _PriorQuarter = 
    CALCULATE(
        [Total Gross Revenue],
        DATESINPERIOD('Date'[Date], _CurrentDate, -1, QUARTER)
    )
VAR _Result = 
    DIVIDE(
        [Total Gross Revenue] - _PriorQuarter,
        _PriorQuarter,
        0
    )
RETURN 
    _Result`;

  const copyActiveCode = () => {
    const textToCopy = activeTab === 'backend' ? pythonSnippet : daxSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F6F1FB]/60 border-y border-[#E8DEF6] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Sigil & Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SigilRune variant="kata" size={28} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#794DBA] font-semibold">
                Chapter I · Foundations
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1432] tracking-tight">
              About Me
            </h2>
          </div>

          <p className="text-sm font-mono text-[#76678C] max-w-sm">
            // Synthesis of algorithmic discipline and visual intelligence
          </p>
        </div>

        {/* Short Text Highlighting Backend & Business Intelligence Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Text Block (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 backdrop-blur-md border border-[#DFCFF5] shadow-[0_10px_30px_-15px_rgba(75,34,130,0.09)] space-y-5">
              <p className="text-[16px] sm:text-[17px] text-[#331B54] leading-relaxed font-normal">
                I am a Software Engineering Student and Data Analyst with deep expertise in 
                <strong className="text-[#6236A9] font-semibold"> Backend systems (Python, APIs)</strong> and 
                <strong className="text-[#6236A9] font-semibold"> Business Intelligence (SQL, Power BI, DAX)</strong>.
              </p>

              <p className="text-[14.5px] text-[#5F4F79] leading-relaxed">
                Trained with the mindset of martial arts discipline, I approach every software artifact as a practice of precision: code must be deterministic, APIs structured without bloat, and analytics dashboards crafted to deliver instant cognitive clarity to decision makers.
              </p>

              {/* Core Competency Highlights */}
              <div className="pt-2 space-y-3 border-t border-[#EEE4FB]">
                <div className="flex items-center gap-2.5 text-[13.5px] text-[#2F1A52]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0" />
                  <span><strong>Backend Engineering:</strong> Python, FastAPI, REST APIs, PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] text-[#2F1A52]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0" />
                  <span><strong>Business Intelligence:</strong> SQL queries, Power BI reporting, advanced DAX</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] text-[#2F1A52]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0" />
                  <span><strong>Architectural Ethos:</strong> Deterministic models, zero latency, data integrity</span>
                </div>
              </div>
            </div>

            {/* Martial Arts Discipline Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#ECE0F9] to-[#E5D4F8] border border-[#D3BEF1] flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center text-[#552A96] shadow-xs shrink-0">
                <SigilRune variant="knot" size={24} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#5A339B] font-bold">
                  The Martial Discipline of Code
                </h4>
                <p className="text-xs text-[#523E6E] mt-0.5">
                  Repetition breeds perfection. Whether executing a kata or refactoring an ingestion pipeline, balance and deliberate structure always triumph over chaotic speed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Code / Telemetry Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#1C122F] text-[#F3EDFD] border border-[#3E2568] shadow-xl overflow-hidden">
              
              {/* Tab Selector & Controls */}
              <div className="px-5 py-3.5 bg-[#150B25] border-b border-[#351E58] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                  <span className="text-xs font-mono text-[#A494BF] ml-2">
                    {activeTab === 'backend' ? 'backend/api_telemetry.py' : 'bi_models/financial_kpis.dax'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#24143D] p-0.5 rounded-lg flex text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab('backend')}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeTab === 'backend'
                          ? 'bg-[#7C4DC4] text-white font-medium'
                          : 'text-[#B5A5CE] hover:text-white'
                      }`}
                    >
                      Python &amp; APIs
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('bi')}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeTab === 'bi'
                          ? 'bg-[#7C4DC4] text-white font-medium'
                          : 'text-[#B5A5CE] hover:text-white'
                      }`}
                    >
                      Power BI &amp; DAX
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={copyActiveCode}
                    className="p-1.5 rounded-lg bg-[#271542] hover:bg-[#3B1F64] text-[#C9B9E3] hover:text-white transition-colors text-xs flex items-center gap-1"
                    title="Copy Code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Preview Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                <pre className="text-[#E7DAFD]">
                  <code>{activeTab === 'backend' ? pythonSnippet : daxSnippet}</code>
                </pre>
              </div>

              {/* Code Summary Footer */}
              <div className="px-5 py-3 bg-[#170E28] border-t border-[#2F1B4E] flex items-center justify-between text-xs text-[#9F8EB9]">
                <span>
                  {activeTab === 'backend'
                    ? 'Paradigm: Type-safe, asynchronous FastAPI microservice'
                    : 'Paradigm: Optimized tabular model measure with filter context evaluation'}
                </span>
                <span className="font-mono text-[11px] text-[#A679F4]">
                  {activeTab === 'backend' ? 'Python 3.12 · REST' : 'DAX · VertiPaq Engine'}
                </span>
              </div>
            </div>

            {/* Quick Skill Badges below Code */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="p-3 rounded-2xl bg-white/70 border border-[#DFCFF5] text-center">
                <div className="text-[11px] font-mono text-[#7B6E92]">LANGUAGE</div>
                <div className="text-sm font-semibold text-[#291448] mt-0.5">Python 3.x</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#DFCFF5] text-center">
                <div className="text-[11px] font-mono text-[#7B6E92]">DATABASE</div>
                <div className="text-sm font-semibold text-[#291448] mt-0.5">SQL &amp; Postgres</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#DFCFF5] text-center">
                <div className="text-[11px] font-mono text-[#7B6E92]">ANALYTICS</div>
                <div className="text-sm font-semibold text-[#291448] mt-0.5">Power BI</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#DFCFF5] text-center">
                <div className="text-[11px] font-mono text-[#7B6E92]">FORMULAS</div>
                <div className="text-sm font-semibold text-[#291448] mt-0.5">DAX Measures</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
