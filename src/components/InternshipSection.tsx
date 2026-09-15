import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const internships = [
  {
    number: '01',
    category: 'ISRO (Space Applications Centre)',
    name: 'Software Engineering Intern',
    duration: '2026',
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

function InternshipCard({ internship, index, totalCards }: { internship: typeof internships[0], index: number, totalCards: number }) {
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
        style={{ scale }}
        className="bg-[#080808] border border-[#212121] shadow-2xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-6 sm:p-8 md:p-10 h-full flex flex-col gap-4 sm:gap-6 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <div
              className="text-[#D7E2EA] font-black flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: '0.85' }}
            >
              {internship.number}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-xs sm:text-sm opacity-60">
                {internship.category}
              </p>
              <h3
                className="text-[#D7E2EA] font-medium uppercase mt-1"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)' }}
              >
                {internship.name}
              </h3>
              <p className="text-[#98ff38] font-light tracking-wide text-xs uppercase mt-1">
                {internship.duration}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
          {/* Bullets List Context */}
          <div className="flex-1 flex flex-col justify-center gap-3">
            <ul className="list-disc pl-5 text-[#9c9c9c] text-sm sm:text-base leading-relaxed flex flex-col gap-3 font-light">
              {internship.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Grid Layout Images */}
          <div className="flex gap-3 sm:gap-4 flex-1 h-full max-h-[300px] lg:max-h-none overflow-hidden">
            <div className="flex flex-col gap-3 sm:gap-4 w-1/3">
              <img
                src={internship.images.col1[0]}
                alt=""
                className="w-full h-1/2 rounded-[20px] sm:rounded-[30px] object-cover"
              />
              <img
                src={internship.images.col1[1]}
                alt=""
                className="w-full h-1/2 rounded-[20px] sm:rounded-[30px] object-cover"
              />
            </div>
            <div className="w-2/3 h-full">
              <img
                src={internship.images.col2}
                alt=""
                className="w-full h-full rounded-[20px] sm:rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function InternshipSection() {
  return (
    <section id="internship" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-6 relative z-10">
      <h2 className="hero-heading font-black uppercase text-center text-5xl sm:text-6xl md:text-7xl leading-none mb-16 sm:mb-20 md:mb-28">
        Internship
      </h2>

      <div className="max-w-7xl mx-auto">
        {internships.map((internship, i) => (
          <InternshipCard
            key={i}
            internship={internship}
            index={i}
            totalCards={internships.length}
          />
        ))}
      </div>
    </section>
  )
}
