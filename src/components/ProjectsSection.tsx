import ScrollStack, { ScrollStackItem } from './ScrollStack'

const projects = [
  {
    number: '01',
    category: 'React, Vite, TypeScript, Node.js, Express, PostgreSQL, Prisma, Google Gemini AI',
    name: 'Monerva',
    bullets: [
      'Built a full-stack AI-powered personal finance platform using React, Vite, Node.js, Express, PostgreSQL, and Prisma for transaction, budgeting, savings, credit-card, and shared-expense management.',
      'Integrated Google Gemini for multimodal receipt analysis, automatically extracting transaction details from uploaded receipts and enabling AI-powered financial insights.',
      'Engineered a multi-workspace architecture with Prisma and PostgreSQL, supporting isolated financial data, shared expenses, groups, settlements, and role-aware access.',
      'Built an AI-powered Financial Document Vault with RAG, using local embeddings and PostgreSQL-based retrieval to answer questions from uploaded financial documents with source citations.',
      'Developed interactive financial analytics dashboards for spending trends, budgets, cash flow, savings, and transaction insights with responsive, low-latency UI interactions.'
    ],
    images: {
      col1: [
        '/projects/expense-3.png',
        '/projects/expense-2.png'
      ],
      col2: '/projects/expense-1.png'
    },
    github: 'https://github.com/SupremeNexas/Expense-Tracker',
    website: 'https://expense-tracker-eight-pi-69.vercel.app/',
    architecture: '/projects/monerva/architecture/'
  },
  {
    number: '02',
    category: 'Node.js, Next.js, Electron, SQLite, AI Routing',
    name: 'OmniRoute — Local AI Gateway & Smart Routing',
    bullets: [
      'Built a local AI gateway that intelligently routes requests across multiple model providers from a single unified interface.',
      'Engineered dynamic model selection to balance response latency, provider availability, API limits, and usage cost.',
      'Added persistent offline query logging with SQLite and an integrated web-search fallback for resilient information retrieval.',
      'Developed and maintained custom Next.js/Turbopack build patches to overcome standalone compilation issues and ensure reliable local deployment.'
    ],
    images: {
      col1: [
        '/projects/omniroute-1.png',
        '/projects/omniroute-2.png'
      ],
      col2: '/projects/omniroute-3.png'
    },
    github: 'https://github.com/SupremeNexas/OmniRoute'
  },
  {
    number: '03',
    category: 'Python, PyTorch, Qlib, Hugging Face, Quantitative AI',
    name: 'Kronos — AI-Powered Quantitative Trading Model',
    bullets: [
      'Developed an autoregressive financial K-line transformer foundation model using Python and PyTorch.',
      'Pre-trained custom architectures on market data representing 45 global stock exchanges to capture cross-market temporal patterns.',
      'Fine-tuned models using Microsoft Qlib and Hugging Face Hub for trading strategy research in Chinese A-Share markets.',
      'Built end-to-end backtesting pipelines to evaluate model decisions against historical order books and market execution constraints.'
    ],
    images: {
      col1: [
        '/projects/kronos-1.png',
        '/projects/kronos-2.png'
      ],
      col2: '/projects/kronos-3.png'
    },
    github: 'https://github.com/SupremeNexas/Kronos-Trading'
  },
  {
    number: '04',
    category: 'Node.js, Go, Playwright, Automation, Agentic Workflows',
    name: 'CareerOps — Agentic Job Search & Automation Platform',
    bullets: [
      'Engineered an automated job search and application platform using Node.js, Go, and Playwright browser orchestration.',
      'Built an ATS-focused resume compiler that dynamically aligns resume structure and keywords with job requirements.',
      'Developed a Go-based terminal dashboard with Bubble Tea for real-time application tracking and workflow management.',
      'Designed automated pipelines for job discovery, application workflows, form submission, and application record archiving.'
    ],
    images: {
      col1: [
        '/projects/jobsearch-1.jpg',
        '/projects/jobsearch-2.jpg'
      ],
      col2: '/projects/jobsearch-3.jpg'
    },
    github: 'https://github.com/SupremeNexas/jobsearch'
  },
  {
    number: '05',
    category: 'Python, Scikit-learn, LightGBM, XGBoost, Streamlit, Predictive Analytics',
    name: 'Dynamic Taxi — Demand Forecasting & Pricing Engine',
    bullets: [
      'Developed a spatial-temporal demand forecasting and dynamic pricing engine using Scikit-learn, LightGBM, and XGBoost.',
      'Engineered a revenue optimization model that achieved a simulated 22.23% increase in revenue outcomes on the evaluation scenario.',
      'Built an interactive Streamlit dashboard for monitoring demand patterns and spatial density across taxi zones.',
      'Designed feature pipelines incorporating location grids, seasonal trends, and weather metadata for demand prediction.'
    ],
    images: {
      col1: [
        '/projects/taxi-1.png',
        '/projects/taxi-2.png'
      ],
      col2: '/projects/taxi-3.png'
    },
    github: 'https://github.com/SupremeNexas/dynamic-taxi-demand-pricing'
  },
  {
    number: '06',
    category: 'Node.js, Express, PostgreSQL, EJS, SQL Analytics',
    name: 'SocialQuery — Social Media Analytics Engine',
    bullets: [
      'Built a full-stack social media analytics platform using Node.js, Express, PostgreSQL, and EJS.',
      'Engineered 10+ complex SQL analytics queries for profile visitor insights, unfollow detection, engagement patterns, and trend analysis.',
      'Designed a modular EJS-based frontend with responsive interfaces and structured navigation.',
      'Optimized PostgreSQL queries through indexed joins and parameterized queries, achieving sub-100ms database response times in the tested environment.'
    ],
    images: {
      col1: [
        '/projects/social-query-1.png',
        '/projects/social-query-2.png'
      ],
      col2: '/projects/social-query-3.png'
    },
    github: 'https://github.com/SupremeNexas/socialQuery'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-3 xs:px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-0 -mt-6 sm:-mt-8 relative z-10">
      <h2 className="hero-heading font-black uppercase text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-none mb-6 sm:mb-8">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={24}
          itemScale={0.03}
          itemStackDistance={18}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.9}
        >
          {projects.map((project, i) => (
            <ScrollStackItem
              key={i}
              itemClassName="bg-[#080808] border border-[#212121] shadow-2xl rounded-[32px] xs:rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-5 xs:p-6 sm:p-8 md:p-10 !h-auto min-h-[480px] lg:min-h-[580px] flex flex-col justify-between gap-4 sm:gap-6"
            >
              {/* Top Row: Number, Category, Title, Button */}
              <div className="flex items-start justify-between gap-4 flex-wrap w-full">
                <div className="flex items-start gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1">
                  <div
                    className="text-[#D7E2EA] font-black flex-shrink-0 select-none text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85]"
                  >
                    {project.number}
                  </div>

                  <div className="flex flex-col justify-center min-w-0 flex-1">
                    <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-xs sm:text-sm opacity-60 truncate">
                      {project.category}
                    </p>
                    <h3
                      className="text-[#D7E2EA] font-medium uppercase mt-1 text-lg xs:text-xl sm:text-2xl md:text-3xl leading-snug break-words"
                    >
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 self-start flex items-center gap-2 sm:gap-3 flex-wrap">
                  {project.architecture && (
                    <a
                      href={project.architecture}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-medium uppercase tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 whitespace-nowrap gap-2 shadow-[0_0_20px_rgba(16,185,129,0.15)] active:scale-95"
                    >
                      <span>Architecture</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#333333] bg-transparent text-[#D7E2EA] font-medium uppercase tracking-wider px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 whitespace-nowrap"
                    >
                      Visit Website
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#333333] bg-transparent text-[#D7E2EA] font-medium uppercase tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 whitespace-nowrap"
                    >
                      GitHub Code
                    </a>
                  )}
                </div>
              </div>

              {/* Info & Grid Column Layout */}
              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 flex-1 overflow-hidden">
                {/* Bullets List Context */}
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="list-disc pl-5 text-[#9c9c9c] text-xs xs:text-sm sm:text-base leading-relaxed flex flex-col gap-2.5 sm:gap-3 font-light">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-normal">{bullet}</li>
                    ))}
                  </ul>

                  {project.architecture && (
                    <div className="mt-4 pt-3.5 border-t border-[#1C1C1C] flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2 text-xs text-[#888888]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>9 Interactive Architecture & AI Pipeline Views</span>
                      </div>
                      <a
                        href={project.architecture}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider group py-1"
                      >
                        <span>Explore System Architecture</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Grid Layout Images */}
                <div className="flex gap-3 sm:gap-4 flex-1 h-44 xs:h-52 sm:h-64 lg:h-64 xl:h-72 overflow-hidden shrink-0">
                  <div className="flex flex-col gap-3 sm:gap-4 w-1/3 h-full">
                    <img
                      src={project.images.col1[0]}
                      alt={`${project.name} UI screenshot 1`}
                      className="w-full h-1/2 rounded-[16px] sm:rounded-[24px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={project.images.col1[1]}
                      alt={`${project.name} UI screenshot 2`}
                      className="w-full h-1/2 rounded-[16px] sm:rounded-[24px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="w-2/3 h-full">
                    <img
                      src={project.images.col2}
                      alt={`${project.name} dashboard overview`}
                      className="w-full h-full rounded-[16px] sm:rounded-[24px] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  )
}
