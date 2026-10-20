import React, { useState, useEffect } from 'react';
import { SigilRune } from './SigilRune';
import {
  Sprout,
  MessageSquareCode,
  Gauge,
  BarChart3,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Droplets,
  Wind,
  Send,
  Zap,
  CheckCircle2,
  X,
  Code2,
  Github,
  Check,
  RefreshCw,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { ProjectItem } from '../types';

export const ProjectsGrid: React.FC = () => {
  // Category filter state
  const [filterCategory, setFilterCategory] = useState<'all' | 'featured' | 'backend' | 'bi'>('all');

  // State for EcoTrip interactive calculator
  const [distanceKm, setDistanceKm] = useState<number>(340);
  const [vehicleType, setVehicleType] = useState<'hybrid' | 'electric' | 'combustion'>('hybrid');

  // State for Data Insights dynamic BI chart
  const [biTimeframe, setBiTimeframe] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');
  const [biMetric, setBiMetric] = useState<'revenue' | 'margin'>('revenue');
  const [showDaxLogic, setShowDaxLogic] = useState<boolean>(false);

  // Modal inspection state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // ConversaFina interactive message state
  const [chatScenario, setChatScenario] = useState<number>(0);
  const chatScenarios = [
    {
      user: "Explain the discrepancy in Q3 invoice reconciliations for Account 409.",
      bot: "Parsing telemetry: Identified 2 unmapped tax credit entries ($1,420.00). Automated SQL reconciliation pipeline flagged missing VAT code.",
      tag: "FINANCIAL_NLP // RESOLVED"
    },
    {
      user: "Generate optimized DAX measure for customer churn probability.",
      bot: "Formulating: CALCULATE(COUNTROWS('Customers'), FILTER('Customers', [DaysSinceLastOrder] > 90 && [AvgBasketValue] < 50)).",
      tag: "DAX_SYNTHESIZER // OK"
    }
  ];

  // Study Zine embedded iframe state
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const [iframeError, setIframeError] = useState<boolean>(false);
  const [iframeReloadKey, setIframeReloadKey] = useState<number>(0);

  // Fallback timeout (~8s) for iframe loading
  useEffect(() => {
    setIframeLoaded(false);
    setIframeError(false);

    const timer = setTimeout(() => {
      setIframeLoaded((loaded) => {
        if (!loaded) {
          setIframeError(true);
        }
        return loaded;
      });
    }, 8000);

    return () => clearTimeout(timer);
  }, [iframeReloadKey]);

  const handleReloadIframe = () => {
    setIframeReloadKey((prev) => prev + 1);
  };

  // EcoTrip calculation helpers
  const emissionFactors = {
    combustion: 0.192,
    hybrid: 0.108,
    electric: 0.045
  };
  const totalCo2 = Math.round(distanceKm * emissionFactors[vehicleType]);
  const savingsVsCombustion = Math.max(0, Math.round(distanceKm * (emissionFactors.combustion - emissionFactors[vehicleType])));
  const treesEquivalent = (savingsVsCombustion / 21).toFixed(1);

  // Data Insights dynamic data by quarter
  const biData = {
    Q1: {
      revenue: [38, 45, 52, 60, 48, 65, 72, 80],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      total: '$460,000',
      growth: '+8.4%',
      targetAchieved: '94.2%',
      margin: '28.4%'
    },
    Q2: {
      revenue: [44, 50, 58, 64, 59, 70, 78, 88],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      total: '$513,000',
      growth: '+11.5%',
      targetAchieved: '97.8%',
      margin: '31.2%'
    },
    Q3: {
      revenue: [52, 60, 68, 74, 71, 84, 92, 104],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      total: '$605,000',
      growth: '+17.9%',
      targetAchieved: '103.4%',
      margin: '34.8%'
    },
    Q4: {
      revenue: [62, 70, 79, 85, 88, 96, 110, 122],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      total: '$712,000',
      growth: '+22.1%',
      targetAchieved: '108.0%',
      margin: '36.5%'
    }
  };

  const currentBi = biData[biTimeframe];

  const projects: ProjectItem[] = [
    {
      id: 'study-zine',
      title: 'Study Zine (Zine de Estudos)',
      subtitle: 'Study Management & Productivity Platform with Authentic Zine/Punk Aesthetic',
      category: 'Frontend & Productivity',
      description:
        'A study management and productivity platform featuring an authentic "Zine/Punk" aesthetic. Helps students organize their routines, maintain focus with an integrated Pomodoro timer, and track daily progress.',
      longDescription:
        'Study Zine (Zine de Estudos) bridges disciplined academic workflows with a distinct, raw, and expressive "Zine/Punk" visual identity. Built with React, TypeScript, and Vite, the platform features an ambient Pomodoro timer with auditory focus alerts, daily goal tracking, visual consistency charts, comprehensive academic subject syllabus organization, session history logs, CSV data export, and native Google Drive API integration for cloud synchronization and backups—all with complete bilingual support (Portuguese and English).',
      tags: ['React', 'TypeScript', 'Vite', 'Google Drive API', 'Zine / Punk UI', 'Pomodoro Timer', 'Bilingual EN/PT'],
      metrics: [
        { label: 'Focus Mode', value: 'Pomodoro + Audio Chime' },
        { label: 'Data Sovereignty', value: 'Google Drive API + CSV' },
        { label: 'Locale Engine', value: 'Bilingual (PT / EN)' },
        { label: 'Consistency', value: 'Daily Goals & Streaks' }
      ],
      accentColor: '#8F5FE8',
      interfaceType: 'zine',
      liveUrl: 'https://zine-de-estudos.vercel.app/#sessoes',
      repoUrl: 'https://github.com/Oliv-Patrik/Zine-de-Estudos',
      features: [
        'Pomodoro Timer & Focus Mode: Integrated focus tools with custom auditory alerts to maximize concentration during study sessions.',
        'Performance Management: Daily goal tracking, streak counters, and visual consistency charts to monitor daily progress.',
        'Subject Organization: A comprehensive manager for academic subjects, including a detailed history of study sessions.',
        'Security & Data: History export to CSV and native Google Drive integration for data backup and synchronization.',
        'Accessibility: Full bilingual support with seamless toggling between Portuguese and English.'
      ],
      codeSnippet: {
        lang: 'typescript',
        code: `// Study Zine: Google Drive Cloud Backup & Session Synchronization
export async function syncSessionToDrive(sessionData: StudySessionState): Promise<SyncResponse> {
  const driveClient = await initGoogleDriveOAuth({
    scope: 'https://www.googleapis.com/auth/drive.file'
  });
  
  const payload = JSON.stringify({
    timestamp: new Date().toISOString(),
    subjects: sessionData.subjects,
    pomodoroHistory: sessionData.history,
    version: '2.4.0-zine'
  }, null, 2);

  return await driveClient.files.createOrUpdate({
    name: 'study_zine_backup.json',
    mimeType: 'application/json',
    body: payload
  });
}`
      }
    },
    {
      id: 'monitor-agro',
      title: 'Monitor-Agro',
      subtitle: 'Smart AgTech Telemetry & IoT Sensor Architecture',
      category: 'Software & Backend',
      description:
        'A high-precision agronomic monitoring platform engineered with a Python backend. Ingests real-time soil moisture, evapotranspiration, and micro-climate sensor streams to prevent crop stress.',
      longDescription:
        'Monitor-Agro represents the intersection of edge device integration and scalable backend processing. The Python ingestion engine uses asynchronous event loops to process thousands of sensor telemetry packets per second, validating metrics against biological threshold katas before indexing into a PostgreSQL time-series store.',
      tags: ['Python', 'FastAPI', 'IoT Telemetry', 'PostgreSQL', 'Docker'],
      metrics: [
        { label: 'Ingestion Latency', value: '< 18ms' },
        { label: 'Sensor Uptime', value: '99.94%' }
      ],
      accentColor: '#6B35BA',
      interfaceType: 'agro',
      codeSnippet: {
        lang: 'python',
        code: `class AgroTelemetryService:
    async def process_soil_sample(self, packet: SensorPacket) -> Status:
        variance = self.evaluate_moisture_threshold(packet.moisture)
        if variance.is_critical:
            await self.trigger_irrigation_kata(packet.sector_id)
        return await self.repository.commit(packet)`
      }
    },
    {
      id: 'conversafina',
      title: 'ConversaFina',
      subtitle: 'Intelligent Conversational Agent & API Orchestration',
      category: 'Software & Backend',
      description:
        'A sleek natural language assistant designed for high-context financial and analytical queries. Combines modern chat ergonomics with strict backend API routing and deterministic data retrieval.',
      longDescription:
        'ConversaFina bridges user inquiries directly to database endpoints. By structuring user intents through a disciplined multi-stage parser, the system translates conversational questions regarding invoices, billing status, and sales metrics into optimized queries without hallucination.',
      tags: ['Python', 'REST APIs', 'NLP Processing', 'WebSockets', 'Tailwind'],
      metrics: [
        { label: 'Response Velocity', value: '42 tokens/s' },
        { label: 'Intent Accuracy', value: '98.7%' }
      ],
      accentColor: '#7C4DC4',
      interfaceType: 'chat',
      codeSnippet: {
        lang: 'python',
        code: `@router.post("/chat/query")
async def handle_conversafina_turn(intent_req: IntentRequest):
    schema = await semantic_classifier.resolve(intent_req.prompt)
    resolved_data = await orm_service.fetch_deterministic(schema)
    return format_conversational_response(resolved_data)`
      }
    },
    {
      id: 'calculadora-ecotrip',
      title: 'Calculadora EcoTrip',
      subtitle: 'Eco Route Telemetry & Carbon Optimization Engine',
      category: 'Software & Backend',
      description:
        'A sleek web application calculating real-time carbon offsets, fuel economy matrices, and sustainable routing options for transport logistics. Built with mathematical precision.',
      longDescription:
        'Calculadora EcoTrip calculates greenhouse gas footprints across multimodal transportation networks. Using deterministic fuel consumption algorithms based on elevation gradients, vehicular weight, and powertrain coefficients, the platform provides actionable green routing analytics.',
      tags: ['Python Backend', 'TypeScript', 'Green Algorithms', 'Data Modeling'],
      metrics: [
        { label: 'CO2 Reduction Rate', value: 'Up to 38%' },
        { label: 'Route Precision', value: 'O(log N)' }
      ],
      accentColor: '#532B94',
      interfaceType: 'calculator',
      codeSnippet: {
        lang: 'typescript',
        code: `export function calculateEmissions(distance: number, mode: Powertrain): EcoMetric {
  const emissionFactor = POWERTRAIN_FACTORS[mode];
  const grossKgCo2 = distance * emissionFactor;
  return { co2Kg: grossKgCo2, treesSaved: grossKgCo2 / TREE_ABSORPTION_FACTOR };
}`
      }
    },
    {
      id: 'data-insights',
      title: 'Data Insights',
      subtitle: 'Enterprise Business Intelligence & DAX Analytics Suite',
      category: 'Data & Business Intelligence',
      description:
        'A dynamic corporate BI cockpit powered by optimized DAX calculations, dimensional modeling, and interactive visual telemetry. Replaces opaque spreadsheets with live visual intelligence.',
      longDescription:
        'Data Insights showcases deep Power BI and DAX engineering capability. Utilizing customized star-schema architectures and highly optimized VertiPaq tabular calculations, this suite provides executive-level variance tracking, customer retention cohorts, and time-intelligence projections in milliseconds.',
      tags: ['Power BI', 'Advanced DAX', 'SQL', 'Dimensional Modeling', 'ETL'],
      metrics: [
        { label: 'Query Performance', value: '< 250ms' },
        { label: 'Data Compression', value: '8.4x VertiPaq' }
      ],
      accentColor: '#451D7E',
      interfaceType: 'bi-dashboard',
      codeSnippet: {
        lang: 'dax',
        code: `Gross_Margin_Variance_% := 
DIVIDE(
    [Actual Gross Margin] - [Budgeted Gross Margin],
    [Budgeted Gross Margin],
    BLANK()
)`
      }
    }
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#FAF8FD] border-b border-[#E8DEF6] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SigilRune variant="telemetry" size={28} />
              <span className="font-mono text-xs uppercase tracking-widest text-[#794DBA] font-semibold">
                Chapter III · Practical Grimoire
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F1432] tracking-tight">
              Selected Projects
            </h2>
          </div>

          <p className="text-sm font-mono text-[#76678C] max-w-sm">
            // Full-stack productivity, disciplined backend engines &amp; dynamic BI telemetry
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#EADCFA]/80">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#35195B] text-white shadow-sm font-semibold'
                : 'bg-white text-[#63537C] hover:bg-[#F2E8FC] border border-[#DFCFF5]'
            }`}
          >
            All Projects (5)
          </button>

          <button
            type="button"
            onClick={() => setFilterCategory('featured')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              filterCategory === 'featured'
                ? 'bg-[#7C4DC4] text-white shadow-sm font-semibold'
                : 'bg-white text-[#63537C] hover:bg-[#F2E8FC] border border-[#DFCFF5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Featured: Study Zine (1)</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterCategory('backend')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filterCategory === 'backend'
                ? 'bg-[#35195B] text-white shadow-sm font-semibold'
                : 'bg-white text-[#63537C] hover:bg-[#F2E8FC] border border-[#DFCFF5]'
            }`}
          >
            Software &amp; Backend (3)
          </button>

          <button
            type="button"
            onClick={() => setFilterCategory('bi')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filterCategory === 'bi'
                ? 'bg-[#35195B] text-white shadow-sm font-semibold'
                : 'bg-white text-[#63537C] hover:bg-[#F2E8FC] border border-[#DFCFF5]'
            }`}
          >
            Data &amp; Business Intelligence (1)
          </button>
        </div>

        {/* =========================================================================
            FEATURED CENTERPIECE CARD: STUDY ZINE (Zine de Estudos)
            Rendered when filter is 'all' or 'featured'
           ========================================================================= */}
        {(filterCategory === 'all' || filterCategory === 'featured') && (
          <div className="mb-12">
            <div className="group rounded-3xl bg-white border border-[#D5C0F2] shadow-[0_16px_48px_-16px_rgba(75,37,136,0.14)] hover:shadow-[0_24px_64px_-16px_rgba(124,77,196,0.26)] transition-all duration-300 overflow-hidden relative">
              {/* Top illuminated glow runner on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#8F5FE8] to-transparent z-20" />

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Panel: Real Embedded Application (7 cols) */}
                <div className="lg:col-span-7 bg-[#1C122E] border-b lg:border-b-0 lg:border-r border-[#2C1D48] flex flex-col min-h-[560px] lg:min-h-[640px] relative overflow-hidden">
                  
                  {/* Browser Window Frame Header */}
                  <div className="px-4 py-3 bg-[#160E26] border-b border-[#2C1C47] flex items-center justify-between gap-3 shrink-0">
                    
                    {/* Window Controls & URL bar */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                      </div>

                      {/* URL Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24153E] border border-[#3D2364] text-[11px] font-mono text-[#D8C7F5] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="truncate">zine-de-estudos.vercel.app</span>
                      </div>
                    </div>

                    {/* Window Frame Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={handleReloadIframe}
                        className="p-1.5 rounded-lg bg-[#24153E] hover:bg-[#341E56] text-[#C4AFE5] hover:text-white border border-[#3D2364] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8F5FE8] cursor-pointer"
                        aria-label="Recarregar prévia do Zine de Estudos"
                        title="Recarregar prévia"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href="https://zine-de-estudos.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#24153E] hover:bg-[#341E56] text-[#C4AFE5] hover:text-white border border-[#3D2364] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8F5FE8] flex items-center gap-1.5 text-[11px] font-mono cursor-pointer"
                        aria-label="Abrir Zine de Estudos em nova aba"
                        title="Abrir em nova aba"
                      >
                        <span className="hidden sm:inline">Abrir em nova aba</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                  {/* Browser Window Body & Iframe Stage */}
                  <div className="relative flex-1 w-full h-full min-h-[500px] lg:min-h-[580px] bg-[#140D24] overflow-hidden">
                    
                    {/* Neutral Loading Spinner / Skeleton */}
                    {!iframeLoaded && !iframeError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#160E27] text-white z-10 space-y-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#291745] border border-[#4E2B80] flex items-center justify-center shadow-lg">
                          <Loader2 className="w-5 h-5 text-[#A855F7] animate-spin" />
                        </div>
                        <div className="text-center space-y-1">
                          <p className="text-xs font-mono text-[#D8C7F5] font-semibold">
                            Carregando Zine de Estudos...
                          </p>
                          <p className="text-[11px] font-mono text-[#8F7BAE]">
                            Iniciando prévia interativa oficial
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Fallback Screen (if blocked by browser/network or exceeds 8s) */}
                    {iframeError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#180F2A] text-white z-20 space-y-4 text-center">
                        <div className="w-12 h-12 rounded-2xl bg-[#2A1647] border border-[#532C86] flex items-center justify-center shadow-md">
                          <AlertCircle className="w-6 h-6 text-[#C084FC]" />
                        </div>
                        <div className="space-y-1.5 max-w-sm">
                          <h4 className="font-serif-heading text-lg font-semibold text-white">
                            Não foi possível carregar a prévia
                          </h4>
                          <p className="text-xs text-[#BBA9D9] leading-relaxed">
                            Alguns navegadores ou extensões de privacidade restringem a incorporação de páginas externas. Você pode interagir com o app real diretamente em nova aba.
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
                          <a
                            href="https://zine-de-estudos.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C4DC4] to-[#9C27B0] hover:from-[#8F5FE8] hover:to-[#AB47BC] text-white text-xs font-mono flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8F5FE8]"
                            aria-label="Abrir Zine de Estudos em nova aba"
                          >
                            <span>Abrir em nova aba</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={handleReloadIframe}
                            className="px-3.5 py-2 rounded-xl bg-[#2A1847] hover:bg-[#3A2261] border border-[#4A297A] text-[#D8C7F5] text-xs font-mono flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#8F5FE8] cursor-pointer"
                            aria-label="Tentar recarregar a prévia do iframe"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Tentar novamente</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Real Embedded Iframe */}
                    <iframe
                      key={iframeReloadKey}
                      src="https://zine-de-estudos.vercel.app/"
                      title="Zine de Estudos – prévia interativa"
                      loading="lazy"
                      allow="clipboard-write; fullscreen"
                      referrerPolicy="strict-origin-when-cross-origin"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                      onLoad={() => {
                        setIframeLoaded(true);
                        setIframeError(false);
                      }}
                      className={`w-full h-full min-h-[500px] lg:min-h-[580px] border-0 transition-opacity duration-300 ${
                        iframeLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                  </div>

                </div>

                {/* Right/Card Details & Actions (5 cols) */}
                <div className="lg:col-span-5 p-7 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    
                    {/* Header Kicker */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EDE1FA] border border-[#D5BFF2] text-[11px] font-mono text-[#582A97] font-semibold">
                          FEATURED PRODUCTION APP
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#7C4DC4] font-semibold">
                        2025 // VERCEL
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#1F1432] tracking-tight">
                        Study Zine (Zine de Estudos)
                      </h3>
                      <p className="font-mono text-xs text-[#7B4CBD] mt-1 font-medium">
                        Productivity &amp; Study Management · Authentic Zine/Punk Aesthetic
                      </p>
                    </div>

                    <p className="text-[14.5px] text-[#55456E] leading-relaxed">
                      A study management and productivity platform featuring an authentic &apos;Zine/Punk&apos; aesthetic. The application helps students organize their routines, maintain deep focus via an ambient Pomodoro timer, and track daily progress with visual consistency graphs.
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-2 border-t border-[#F0E6FB]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#69489E] font-bold">
                        Key Features &amp; Highlights:
                      </div>
                      <ul className="space-y-2 text-xs text-[#4F3F6B]">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0 mt-0.5" />
                          <span><strong>Pomodoro Timer &amp; Focus Mode:</strong> Integrated focus clock with sound alerts to maximize concentration.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0 mt-0.5" />
                          <span><strong>Performance Management:</strong> Daily goal tracking and visual consistency streak charts to monitor progress.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0 mt-0.5" />
                          <span><strong>Subject Organization:</strong> Comprehensive syllabus manager with in-depth study session history logs.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0 mt-0.5" />
                          <span><strong>Security &amp; Data:</strong> History export to CSV and native Google Drive API integration for cloud synchronization.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7C4DC4] shrink-0 mt-0.5" />
                          <span><strong>Accessibility:</strong> Dual bilingual engine (English and Portuguese) with instant locale toggles.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8A79A5] mb-2 font-medium">
                        Technologies Used:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {['React', 'TypeScript', 'Vite', 'Google Drive API', 'Zine / Punk UI', 'Web Audio API'].map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full bg-[#FAF5FE] border border-[#DFCFF5] text-[11px] font-mono text-[#583391]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Action Buttons Row */}
                  <div className="space-y-2.5 pt-4 border-t border-[#F0E6FB]">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      {/* Primary Link: Launch Live Application */}
                      <a
                        href="https://zine-de-estudos.vercel.app/#sessoes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#673AB7] to-[#8E24AA] hover:from-[#7545C6] hover:to-[#9C27B0] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(103,58,183,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                      >
                        <span>Launch Study Zine</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      {/* Secondary Link: View GitHub Repo */}
                      <a
                        href="https://github.com/Oliv-Patrik/Zine-de-Estudos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl bg-[#201138] hover:bg-[#34185E] text-white font-medium text-xs flex items-center justify-center gap-2 border border-[#482877] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Github className="w-3.5 h-3.5 text-[#D6BEFA]" />
                        <span>Source Code</span>
                      </a>
                    </div>

                    {/* Inspect System Blueprint Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[0])}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5FE] hover:bg-[#F2E8FC] border border-[#DFCFF5] text-[#34185E] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inspect System Architecture &amp; Code Kata</span>
                      <Code2 className="w-3.5 h-3.5 text-[#7C4DC4]" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SPECIALIZED ENGINEERING SYSTEMS (2x2 Grid)
            Rendered when filter is 'all', 'backend', or 'bi'
           ========================================================================= */}
        {(filterCategory === 'all' || filterCategory === 'backend' || filterCategory === 'bi') && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* CARD 1: Monitor-Agro */}
            {(filterCategory === 'all' || filterCategory === 'backend') && (
              <div className="group rounded-3xl bg-white border border-[#DFCFF5] hover:border-[#B58FF2] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] hover:shadow-[0_24px_60px_-15px_rgba(124,77,196,0.24)] hover:scale-[1.018] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col overflow-hidden relative">
                {/* Top illuminated glow runner on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F5FE8]/0 to-transparent group-hover:via-[#8F5FE8]/80 transition-all duration-500 z-10" />
                
                {/* Sleek App Interface Mockup: Monitor-Agro */}
                <div className="bg-gradient-to-b from-[#FAF5FF] to-[#F1E8FB] border-b border-[#E9DEF7] p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7D6F8] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                      <span className="font-mono text-xs text-[#5D379B] ml-2 font-medium">agro.telemetry.io/sensors</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E9DDFC] text-[11px] font-mono text-[#542B94]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>SECTOR_07 LIVE</span>
                    </div>
                  </div>

                  {/* Sensor Telemetry Widget Grid */}
                  <div className="grid grid-cols-3 gap-2.5 mb-3">
                    <div className="p-3 rounded-xl bg-white/90 border border-[#E8DEF8] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#7A6994] font-medium">
                        <Droplets className="w-3 h-3 text-[#7C4DC4]" />
                        <span>Moisture</span>
                      </div>
                      <div className="text-base font-bold text-[#2A144E] mt-1 font-mono">68.4%</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Optimal Band</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/90 border border-[#E8DEF8] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#7A6994] font-medium">
                        <Cpu className="w-3 h-3 text-[#7C4DC4]" />
                        <span>NPK Ratio</span>
                      </div>
                      <div className="text-base font-bold text-[#2A144E] mt-1 font-mono">14:8:12</div>
                      <div className="text-[10px] text-emerald-600 font-medium">Calibrated</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/90 border border-[#E8DEF8] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#7A6994] font-medium">
                        <Wind className="w-3 h-3 text-[#7C4DC4]" />
                        <span>Soil Temp</span>
                      </div>
                      <div className="text-base font-bold text-[#2A144E] mt-1 font-mono">22.8°C</div>
                      <div className="text-[10px] text-emerald-600 font-medium">+0.4° Variance</div>
                    </div>
                  </div>

                  {/* Sleek SVG Sensor Trend Line */}
                  <div className="p-3 rounded-xl bg-white/95 border border-[#E8DEF8] shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] text-[#695A82] mb-2 font-mono">
                      <span>SOIL MOISTURE TIME-SERIES (24H STREAM)</span>
                      <span className="text-[#7C4DC4] font-semibold">PYTHON ASYNC INGEST</span>
                    </div>
                    <svg viewBox="0 0 380 75" className="w-full h-16">
                      <defs>
                        <linearGradient id="agroGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8F5FE8" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#8F5FE8" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="0,55 35,48 70,52 110,38 150,42 190,26 230,30 270,18 310,24 350,14 380,10 380,75 0,75"
                        fill="url(#agroGrad)"
                      />
                      <polyline
                        points="0,55 35,48 70,52 110,38 150,42 190,26 230,30 270,18 310,24 350,14 380,10"
                        fill="none"
                        stroke="#7C4DC4"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <circle cx="380" cy="10" r="3.5" fill="#3D2472" />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-[#7C4DC4] uppercase tracking-wider">
                        Smart AgTech &amp; Python Backend
                      </span>
                      <Sprout className="w-4 h-4 text-[#7C4DC4]" />
                    </div>
                    <h3 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                      Monitor-Agro
                    </h3>
                    <p className="text-[14.5px] text-[#5C4C74] mt-2 leading-relaxed">
                      Real-time agronomic telemetry platform with asynchronous Python microservices, IoT ingestion pipelines, and predictive soil health indexes.
                    </p>
                  </div>

                  {/* Tags & Explore Button */}
                  <div className="space-y-4 pt-3 border-t border-[#F0E6FB]">
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'FastAPI', 'IoT Stream', 'PostgreSQL'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF5FE] border border-[#E3D4F7] text-[11px] font-mono text-[#583391]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[1])}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5FE] hover:bg-[#F2E8FC] border border-[#DFCFF5] text-[#34185E] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inspect System Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* CARD 2: ConversaFina */}
            {(filterCategory === 'all' || filterCategory === 'backend') && (
              <div className="group rounded-3xl bg-white border border-[#DFCFF5] hover:border-[#B58FF2] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] hover:shadow-[0_24px_60px_-15px_rgba(124,77,196,0.24)] hover:scale-[1.018] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col overflow-hidden relative">
                {/* Top illuminated glow runner on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F5FE8]/0 to-transparent group-hover:via-[#8F5FE8]/80 transition-all duration-500 z-10" />
                
                {/* Sleek App Interface Mockup: ConversaFina */}
                <div className="bg-gradient-to-b from-[#FAF5FF] to-[#F1E8FB] border-b border-[#E9DEF7] p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7D6F8] mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#3D2472] text-white flex items-center justify-center">
                        <SigilRune variant="minimal" size={14} />
                      </div>
                      <span className="font-mono text-xs text-[#5D379B] font-semibold">ConversaFina // AI Agent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChatScenario((prev) => (prev === 0 ? 1 : 0))}
                        className="px-2.5 py-0.5 rounded-full bg-[#E5D5F9] hover:bg-[#D9C4F5] text-[10.5px] font-mono text-[#4A2487] transition-colors cursor-pointer"
                      >
                        Cycle Prompt
                      </button>
                      <span className="text-[11px] font-mono text-[#7B6D94]">42 tok/s</span>
                    </div>
                  </div>

                  {/* Chat Message Flow */}
                  <div className="space-y-2.5 min-h-[148px] flex flex-col justify-end">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] p-2.5 rounded-2xl rounded-tr-xs bg-[#3E2473] text-white text-xs leading-relaxed shadow-xs">
                        {chatScenarios[chatScenario].user}
                      </div>
                    </div>

                    {/* Assistant Response with Grimoire Tag */}
                    <div className="flex justify-start items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#8F5FE8] text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div className="max-w-[88%] p-3 rounded-2xl rounded-tl-xs bg-white border border-[#E5D7F8] text-[#291746] text-xs leading-relaxed shadow-xs">
                        <div className="text-[10px] font-mono text-[#7C4DC4] font-semibold mb-1">
                          {chatScenarios[chatScenario].tag}
                        </div>
                        {chatScenarios[chatScenario].bot}
                      </div>
                    </div>
                  </div>

                  {/* Chat Input Bar */}
                  <div className="mt-3 flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E3D3F7]">
                    <input
                      type="text"
                      readOnly
                      value="Type command or DAX query..."
                      className="flex-1 bg-transparent px-2 text-xs text-[#8A7B9F] font-mono focus:outline-none"
                    />
                    <button
                      type="button"
                      className="w-7 h-7 rounded-lg bg-[#7C4DC4] text-white flex items-center justify-center shadow-xs cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-[#7C4DC4] uppercase tracking-wider">
                        Conversational Engine &amp; APIs
                      </span>
                      <MessageSquareCode className="w-4 h-4 text-[#7C4DC4]" />
                    </div>
                    <h3 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                      ConversaFina
                    </h3>
                    <p className="text-[14.5px] text-[#5C4C74] mt-2 leading-relaxed">
                      Sleek conversational assistant bridging user queries to backend REST APIs, automated invoice validation, and intelligent data summaries.
                    </p>
                  </div>

                  {/* Tags & Explore Button */}
                  <div className="space-y-4 pt-3 border-t border-[#F0E6FB]">
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'REST APIs', 'Semantic Parsing', 'WebSockets'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF5FE] border border-[#E3D4F7] text-[11px] font-mono text-[#583391]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[2])}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5FE] hover:bg-[#F2E8FC] border border-[#DFCFF5] text-[#34185E] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inspect System Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* CARD 3: Calculadora EcoTrip */}
            {(filterCategory === 'all' || filterCategory === 'backend') && (
              <div className="group rounded-3xl bg-white border border-[#DFCFF5] hover:border-[#B58FF2] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] hover:shadow-[0_24px_60px_-15px_rgba(124,77,196,0.24)] hover:scale-[1.018] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col overflow-hidden relative">
                {/* Top illuminated glow runner on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F5FE8]/0 to-transparent group-hover:via-[#8F5FE8]/80 transition-all duration-500 z-10" />
                
                {/* Sleek App Interface Mockup: Calculadora EcoTrip */}
                <div className="bg-gradient-to-b from-[#FAF5FF] to-[#F1E8FB] border-b border-[#E9DEF7] p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7D6F8] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                      <span className="font-mono text-xs text-[#5D379B] ml-2 font-medium">ecotrip.calculator.app</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#6A439E] font-semibold">GREEN_ALGO_V2</span>
                  </div>

                  {/* Interactive Distance & Vehicle Simulator */}
                  <div className="p-3.5 rounded-2xl bg-white/95 border border-[#E7DCF7] space-y-3.5 shadow-2xs">
                    {/* Distance Slider */}
                    <div>
                      <div className="flex justify-between text-xs font-mono text-[#5A3888] mb-1">
                        <span>Trip Distance:</span>
                        <strong className="text-[#2C1450] font-bold">{distanceKm} km</strong>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="1000"
                        step="10"
                        value={distanceKm}
                        onChange={(e) => setDistanceKm(Number(e.target.value))}
                        className="w-full accent-[#7C4DC4] cursor-pointer"
                      />
                    </div>

                    {/* Powertrain Selector */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      {(['combustion', 'hybrid', 'electric'] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setVehicleType(mode)}
                          className={`flex-1 py-1.5 rounded-lg font-mono text-[11px] uppercase transition-colors cursor-pointer ${
                            vehicleType === mode
                              ? 'bg-[#3D2472] text-white font-semibold'
                              : 'bg-[#F2EAFD] text-[#553386] hover:bg-[#E9DEF9]'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>

                    {/* Live Output Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="p-2 rounded-xl bg-[#FAF6FE] border border-[#ECE0FA] text-center">
                        <div className="text-[10px] text-[#7C6E94] font-mono">ESTIMATED CO2</div>
                        <div className="text-sm font-bold text-[#2A144E] font-mono mt-0.5">{totalCo2} kg</div>
                      </div>
                      <div className="p-2 rounded-xl bg-[#FAF6FE] border border-[#ECE0FA] text-center">
                        <div className="text-[10px] text-[#7C6E94] font-mono">SAVINGS</div>
                        <div className="text-sm font-bold text-emerald-700 font-mono mt-0.5">-{savingsVsCombustion} kg</div>
                      </div>
                      <div className="p-2 rounded-xl bg-[#FAF6FE] border border-[#ECE0FA] text-center">
                        <div className="text-[10px] text-[#7C6E94] font-mono">TREE EQUIV.</div>
                        <div className="text-sm font-bold text-[#6D3CAE] font-mono mt-0.5">+{treesEquivalent}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-[#7C4DC4] uppercase tracking-wider">
                        Carbon Footprint &amp; Route Telemetry
                      </span>
                      <Gauge className="w-4 h-4 text-[#7C4DC4]" />
                    </div>
                    <h3 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                      Calculadora EcoTrip
                    </h3>
                    <p className="text-[14.5px] text-[#5C4C74] mt-2 leading-relaxed">
                      Interactive carbon estimation engine modeling powertrain efficiencies, multimodal transit alternatives, and quantifiable environmental impact.
                    </p>
                  </div>

                  {/* Tags & Explore Button */}
                  <div className="space-y-4 pt-3 border-t border-[#F0E6FB]">
                    <div className="flex flex-wrap gap-1.5">
                      {['TypeScript', 'Algorithms', 'Carbon Modeling', 'Tailwind'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF5FE] border border-[#E3D4F7] text-[11px] font-mono text-[#583391]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[3])}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5FE] hover:bg-[#F2E8FC] border border-[#DFCFF5] text-[#34185E] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inspect System Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* CARD 4: Data Insights (Centerpiece Dynamic BI Charts) */}
            {(filterCategory === 'all' || filterCategory === 'bi') && (
              <div className="group rounded-3xl bg-white border border-[#DFCFF5] hover:border-[#B58FF2] shadow-[0_12px_36px_-16px_rgba(61,36,114,0.08)] hover:shadow-[0_24px_60px_-15px_rgba(124,77,196,0.24)] hover:scale-[1.018] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col overflow-hidden relative">
                {/* Top illuminated glow runner on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8F5FE8]/0 to-transparent group-hover:via-[#8F5FE8]/80 transition-all duration-500 z-10" />
                
                {/* Sleek App Interface Mockup: Data Insights Dynamic BI Dashboard */}
                <div className="bg-gradient-to-b from-[#251341] to-[#170B2B] text-white p-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#3B2261] mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-xs text-[#E1D3F8] font-semibold">
                        POWER BI // EXECUTIVE TELEMETRY
                      </span>
                    </div>
                    
                    {/* Quarter Filter Selector */}
                    <div className="flex items-center gap-1 bg-[#2C184C] p-0.5 rounded-lg text-xs font-mono">
                      {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => setBiTimeframe(q)}
                          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                            biTimeframe === q
                              ? 'bg-[#7C4DC4] text-white font-bold'
                              : 'text-[#B8A4D4] hover:text-white'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic KPI Row */}
                  <div className="grid grid-cols-3 gap-2.5 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-[#2E184E]/90 border border-[#482977]">
                      <div className="text-[10px] font-mono text-[#A896C5]">GROSS REVENUE</div>
                      <div className="text-base font-bold font-mono text-white mt-0.5">{currentBi.total}</div>
                      <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        <span>{currentBi.growth} YoY</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#2E184E]/90 border border-[#482977]">
                      <div className="text-[10px] font-mono text-[#A896C5]">TARGET ATTAIN.</div>
                      <div className="text-base font-bold font-mono text-white mt-0.5">{currentBi.targetAchieved}</div>
                      <div className="text-[10px] font-mono text-[#C4A8F0]">DAX Benchmark</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#2E184E]/90 border border-[#482977]">
                      <div className="text-[10px] font-mono text-[#A896C5]">NET MARGIN</div>
                      <div className="text-base font-bold font-mono text-white mt-0.5">{currentBi.margin}</div>
                      <div className="text-[10px] font-mono text-emerald-400">Stable Buffer</div>
                    </div>
                  </div>

                  {/* Dynamic Interactive SVG BI Bar & Trend Chart */}
                  <div className="p-3 rounded-xl bg-[#1C0E33] border border-[#3E2365]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#9B87B8] mb-2">
                      <span>SALES BY MONTH &amp; MARGIN VARIANCE</span>
                      <button
                        type="button"
                        onClick={() => setShowDaxLogic(!showDaxLogic)}
                        className="text-[10.5px] text-[#C4A8F0] hover:text-white underline cursor-pointer"
                      >
                        {showDaxLogic ? 'Hide DAX' : 'Inspect DAX'}
                      </button>
                    </div>

                    {showDaxLogic ? (
                      <div className="p-2 rounded bg-[#10081E] border border-[#4E2B80] font-mono text-[11px] text-[#D8C7F5] leading-relaxed">
                        <code>{`VAR _Base = CALCULATE(SUM('Sales'[Amount]), 'Date'[Quarter] = "${biTimeframe}")\nRETURN DIVIDE(_Base, [PriorPeriodBase], 0)`}</code>
                      </div>
                    ) : (
                      <div className="h-24 flex items-end justify-between gap-1.5 pt-2">
                        {currentBi.revenue.map((val, i) => {
                          const heightPercent = Math.round((val / 130) * 100);
                          return (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                              <div className="w-full flex items-end justify-center h-18 bg-[#2C184A]/40 rounded-t-md relative">
                                <div
                                  style={{ height: `${heightPercent}%` }}
                                  className="w-full bg-gradient-to-t from-[#673AB7] to-[#9C27B0] rounded-t-md transition-all duration-500 group-hover/bar:brightness-125"
                                />
                                <div className="absolute -top-6 bg-[#3F1E70] text-[9px] px-1 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-mono pointer-events-none z-10">
                                  ${val}k
                                </div>
                              </div>
                              <span className="text-[9.5px] font-mono text-[#8C7AAB]">
                                {currentBi.labels[i]}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-[#7C4DC4] uppercase tracking-wider">
                        Dynamic BI Charts &amp; DAX Modeling
                      </span>
                      <BarChart3 className="w-4 h-4 text-[#7C4DC4]" />
                    </div>
                    <h3 className="font-serif-heading text-2xl font-semibold text-[#1F1432]">
                      Data Insights
                    </h3>
                    <p className="text-[14.5px] text-[#5C4C74] mt-2 leading-relaxed">
                      Enterprise Business Intelligence solution featuring dynamic Power BI charts, custom DAX metrics, VertiPaq tabular optimizations, and interactive KPI governance.
                    </p>
                  </div>

                  {/* Tags & Explore Button */}
                  <div className="space-y-4 pt-3 border-t border-[#F0E6FB]">
                    <div className="flex flex-wrap gap-1.5">
                      {['Power BI', 'DAX Measures', 'SQL Queries', 'Star Schema'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FAF5FE] border border-[#E3D4F7] text-[11px] font-mono text-[#583391]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[4])}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FAF5FE] hover:bg-[#F2E8FC] border border-[#DFCFF5] text-[#34185E] font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inspect System Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* Deep Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-[#D5C1F1] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#7C4DC4] font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#201338] mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#66567F] mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-[#FAF5FE] hover:bg-[#EFE2FC] text-[#3E2472] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct External Action Links */}
            {(selectedProject.liveUrl || selectedProject.repoUrl) && (
              <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-[#F6EFFD] border border-[#E4D2F8]">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#673AB7] to-[#8E24AA] hover:from-[#7545C6] hover:to-[#9C27B0] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#201138] hover:bg-[#34185E] text-white font-medium text-xs flex items-center justify-center gap-2 border border-[#482877] transition-all"
                  >
                    <Github className="w-4 h-4 text-[#D6BEFA]" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#4E2B88] font-bold">
                System Overview &amp; Architecture
              </h4>
              <p className="text-[14.5px] text-[#55456E] leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Key Features & System Highlights if defined */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#4E2B88] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Key Features &amp; System Highlights</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#523F6E]">
                  {selectedProject.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF5FE] border border-[#EADBFA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DC4] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Kata / Technical Snippet */}
            {selectedProject.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#6A4D94]">
                  <span>CODE_SNIPPET // {selectedProject.codeSnippet.lang.toUpperCase()}</span>
                  <span>DETERMINISTIC_FORM</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#1C122E] text-[#EDE4FC] border border-[#3E2568] font-mono text-xs leading-relaxed overflow-x-auto">
                  <pre>
                    <code>{selectedProject.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Key Metrics */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-2xl bg-[#FAF5FE] border border-[#E4D5F8]">
                    <div className="text-[11px] font-mono text-[#78698E]">{m.label}</div>
                    <div className="text-base sm:text-lg font-bold text-[#2A144E] font-mono mt-0.5 truncate">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Chips */}
            <div className="pt-2 border-t border-[#F0E6FB] flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#FAF5FE] border border-[#DFCFF5] text-xs font-mono text-[#543088]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Action */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#301655] hover:bg-[#4B2382] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
