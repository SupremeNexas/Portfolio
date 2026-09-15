import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    number: '01',
    category: 'React, Vite, Node.js, Express, PostgreSQL, Prisma, Gemini AI SDK',
    name: 'Expense Tracker',
    bullets: [
      'Built a full-stack AI-native personal finance platform utilizing React, Vite, Node.js, Express, and PostgreSQL.',
      'Integrated Gemini AI SDK to provide automated receipt parsing and data extraction via OCR with 98% accuracy.',
      'Developed multi-workspace support with Prisma ORM for safe relational schema management and multi-account transactions.',
      'Designed interactive expense analytics diagrams and dashboards optimized for high performance and low-latency interaction.'
    ],
    images: {
      col1: [
        '/projects/expense-1.png',
        '/projects/expense-2.png'
      ],
      col2: '/projects/expense-3.png'
    },
    github: 'https://github.com/SupremeNexas/Expense-Tracker'
  },
  {
    number: '02',
    category: 'Node.js, Next.js, Turbopack, Electron, SQLite, Smart Routing',
    name: 'OmniRoute (Contribution & Configuration)',
    bullets: [
      'Built a local multi-provider AI gateway using Node.js, Next.js, and Electron to route queries dynamically across model endpoints.',
      'Implemented custom bundler patches to resolve critical Next.js Turbopack standalone compilation and build errors.',
      'Integrated an SQLite database schema for persistent offline query logs alongside a robust DuckDuckGo web search fallback.',
      'Optimized smart routing algorithms to balance query latency, provider cost, and API rate-limiting rules.'
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
    category: 'Python, PyTorch, Hugging Face Hub, Microsoft Qlib, Quantitative Trading',
    name: 'Kronos Foundation Model',
    bullets: [
      'Developed an autoregressive financial K-line transformer foundation model using Python and PyTorch.',
      'Pre-trained custom architectures on market data representing 45 global stock exchanges to capture cross-market temporal patterns.',
      'Fine-tuned models using Microsoft Qlib and Hugging Face Hub for optimal trading strategy performance in Chinese A-Share markets.',
      'Constructed end-to-end backtesting pipelines to validate model decisions against historical order books and market execution limits.'
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
    category: 'Node.js, Go, Playwright, Bubble Tea',
    name: 'CareerOps Job Search Engine',
    bullets: [
      'Engineered an automated multi-agent job application system utilizing Node.js, Go, and Playwright browser orchestration.',
      'Constructed a resume ATS compiler that aligns structure and keywords with resume parser scoring algorithms.',
      'Designed a terminal user interface (TUI) dashboard using Go and the Bubble Tea library for tracking job statuses in real-time.',
      'Integrated automated workflow pipelines that execute form fills, solve captchas, and archive application receipts.'
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
    category: 'Python, Scikit-learn, LightGBM, XGBoost, Streamlit',
    name: 'Dynamic Taxi Demand Forecasting',
    bullets: [
      'Developed a spatial-temporal demand forecaster and pricing engine built with Scikit-learn, LightGBM, and XGBoost.',
      'Implemented a revenue optimization algorithm that resulted in a simulated 22.23% increase in revenue outcomes.',
      'Built an interactive real-time dashboard application in Python using Streamlit for monitoring demand density maps.',
      'Engineered feature pipelines to handle spatial location grids, seasonal patterns, and weather metadata inputs.'
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
    category: 'Node.js, Express, PostgreSQL, EJS',
    name: 'SocialQuery',
    bullets: [
      'Built a full-stack social media relational data engine in Node.js and Express database layers.',
      'Implemented 10+ complex analytic SQL queries for profile visitor insights, unfollow detection, and trend analysis.',
      'Designed a responsive frontend with EJS templates and modular architecture components for seamless UI navigation.',
      'Achieved database rendering speeds under 100ms through indexed table joins and parameterized PostgreSQL queries.'
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

function ProjectCard({ project, index, totalCards }: { project: typeof projects[0], index: number, totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="sticky z-10"
      style={{
        height: '85vh',
        top: `calc(6rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale, willChange: 'transform' }}
        className="bg-[#080808] border border-[#212121] shadow-2xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 sm:gap-6 overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <div
              className="text-[#D7E2EA] font-black flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: '0.85' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-xs sm:text-sm opacity-60">
                {project.category}
              </p>
              <h3
                className="text-[#D7E2EA] font-medium uppercase mt-1"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#212121] bg-transparent text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            GitHub Code
          </a>
        </div>

        {/* Info & Grid Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
          {/* Bullets List Context */}
          <div className="flex-1 flex flex-col justify-center gap-3">
            <ul className="list-disc pl-5 text-[#9c9c9c] text-sm sm:text-base leading-relaxed flex flex-col gap-3 font-light">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Grid Layout Images */}
          <div className="flex gap-3 sm:gap-4 flex-1 h-full max-h-[300px] lg:max-h-none overflow-hidden">
            <div className="flex flex-col gap-3 sm:gap-4 w-1/3">
              <img
                src={project.images.col1[0]}
                alt={`${project.name} UI screenshot 1`}
                className="w-full h-1/2 rounded-[20px] sm:rounded-[30px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={project.images.col1[1]}
                alt={`${project.name} UI screenshot 2`}
                className="w-full h-1/2 rounded-[20px] sm:rounded-[30px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-2/3 h-full">
              <img
                src={project.images.col2}
                alt={`${project.name} dashboard overview`}
                className="w-full h-full rounded-[20px] sm:rounded-[30px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-10 sm:pt-12 md:pt-16 pb-0 -mt-10 sm:-mt-12 md:-mt-14 relative z-10">
      <h2 className="hero-heading font-black uppercase text-center text-5xl sm:text-6xl md:text-7xl leading-none mb-16 sm:mb-20 md:mb-28">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}
