import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CertificateModal, CertificateModalData } from './CertificateModal'

const internships = [
  {
    number: '01',
    category: 'ISRO (Space Applications Centre)',
    name: 'Software Engineering Intern',
    duration: '2026',
    certificate: {
      title: 'ISRO Space Applications Centre Internship',
      issuer: 'ISRO (Space Applications Centre)',
      fileUrl: '/certificates/Supriyo-Chauhduri-isro-certificate.pdf'
    },
    bullets: [
      'Engineered PulsarNav AI, an autonomous deep-space navigation framework utilizing X-ray millisecond pulsars (MSPs) as natural geometric beacons to eliminate Earth-ground tracking latency.',
      'Modeled X-ray photon Time-of-Arrival (TOA) tracking using Non-Homogeneous Poisson Processes (NHPP) and reconstructed pulse profiles via epoch folding.',
      'Implemented Cross Correlation, Nonlinear Least Squares (NLS), and Maximum Likelihood Estimation (MLE) algorithms for pulse phase delay calculation.',
      'Fused celestial observation delays with on-board IMU sensor data inside an Extended Kalman Filter (EKF) for precision spacecraft position, velocity, and clock bias recovery.'
    ],
    images: {
      col1: [
        '/internships/landing.png',
        '/internships/research.png'
      ],
      col2: '/internships/dashboard.png'
    },
  }
]

function InternshipCard({
  internship,
  index,
  totalCards,
  onViewCertificate
}: {
  internship: typeof internships[0]
  index: number
  totalCards: number
  onViewCertificate: (cert: CertificateModalData) => void
}) {
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
      className="sticky z-10 w-full"
      style={{
        minHeight: 'min(70vh, 620px)',
        top: `clamp(3rem, 5vh + ${index * 12}px, 5rem + ${index * 20}px)`,
      }}
    >
      <motion.div
        style={{ scale, willChange: 'transform' }}
        className="bg-[#080808] border border-[#212121] shadow-2xl rounded-[24px] xs:rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-4 xs:p-6 sm:p-7 md:p-8 min-h-[420px] xs:min-h-[460px] lg:h-[68vh] lg:max-h-[620px] flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden"
      >
        {/* Top Row: Number, Category, Title, Duration, Certificate Button */}
        <div className="flex items-start justify-between gap-3 sm:gap-4 flex-wrap w-full">
          <div className="flex items-start gap-3 xs:gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1">
            <div
              className="text-[#D7E2EA] font-black flex-shrink-0 select-none text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85]"
            >
              {internship.number}
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-[0.6875rem] xs:text-xs sm:text-sm opacity-60 truncate">
                {internship.category}
              </p>
              <h3
                className="text-[#D7E2EA] font-medium uppercase mt-0.5 sm:mt-1 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug break-words"
              >
                {internship.name}
              </h3>
              <p className="text-[#98ff38] font-mono text-[0.6875rem] xs:text-xs tracking-wider uppercase mt-1">
                {internship.duration}
              </p>
            </div>
          </div>

          {internship.certificate && (
            <div className="shrink-0 self-start">
              <button
                type="button"
                onClick={() => onViewCertificate(internship.certificate)}
                className="inline-flex items-center justify-center rounded-full border border-[#333333] bg-transparent text-[#D7E2EA] font-medium uppercase tracking-wider px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                View Certificate
              </button>
            </div>
          )}
        </div>

        {/* Content Layout: Bullets & Image Showcase */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1 overflow-hidden min-h-0">
          {/* Bullets List */}
          <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto pr-1">
            <ul className="list-disc pl-4 sm:pl-5 text-[#9c9c9c] text-xs xs:text-sm sm:text-base leading-relaxed flex flex-col gap-2 sm:gap-3 font-light">
              {internship.bullets.map((bullet, i) => (
                <li key={i} className="leading-normal">{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Grid Layout Images */}
          <div className="flex gap-2.5 xs:gap-3 sm:gap-4 flex-1 h-36 xs:h-44 sm:h-52 md:h-64 lg:h-full lg:max-h-none overflow-hidden shrink-0">
            <div className="flex flex-col gap-2.5 xs:gap-3 sm:gap-4 w-1/3 h-full">
              <img
                src={internship.images.col1[0]}
                alt="ISRO internship screenshot 1"
                className="w-full h-1/2 rounded-[14px] xs:rounded-[18px] sm:rounded-[24px] md:rounded-[30px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={internship.images.col1[1]}
                alt="ISRO internship screenshot 2"
                className="w-full h-1/2 rounded-[14px] xs:rounded-[18px] sm:rounded-[24px] md:rounded-[30px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-2/3 h-full">
              <img
                src={internship.images.col2}
                alt="ISRO internship dashboard"
                className="w-full h-full rounded-[14px] xs:rounded-[18px] sm:rounded-[24px] md:rounded-[30px] object-cover"
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

export default function InternshipSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null)

  return (
    <>
      <section id="internship" className="bg-[#0C0C0C] px-3 xs:px-5 sm:px-8 md:px-10 pt-8 xs:pt-10 md:pt-14 pb-4 relative z-10">
        <h2 className="hero-heading font-black uppercase text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-none mb-6 xs:mb-8 md:mb-10">
          Internship
        </h2>

        <div className="max-w-7xl mx-auto">
          {internships.map((internship, i) => (
            <InternshipCard
              key={i}
              internship={internship}
              index={i}
              totalCards={internships.length}
              onViewCertificate={(cert) => setSelectedCert(cert)}
            />
          ))}
        </div>
      </section>

      {/* Shared Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  )
}
