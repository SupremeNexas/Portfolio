import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import Magnet from './Magnet'
import VantaBackground from './VantaBackground'
import GooeyNav from './GooeyNav'

export default function HeroSection() {
  const navItems = [
    { label: 'LinkedIn', href: '#linkedin' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/SupremeNexas/SupremeNexas' }
  ];

  return (
    <section className="h-screen flex flex-col px-6 md:px-10 relative overflow-hidden bg-[#030303]">
      {/* 3D Dynamic Vanta Background combined with GSAP animations */}
      <VantaBackground
        effect="NET"
        color={0x6f6759}
        backgroundColor={0x030303}
        points={12}
        maxDistance={25}
        spacing={15}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="relative z-10">
        <nav className="flex justify-center pt-6 md:pt-8 w-full max-w-full">
            <GooeyNav items={navItems} />
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-2 sm:mt-3 md:mt-4 relative z-10">
        <FadeIn delay={0.15} y={40}>
          <div className="w-full max-w-full flex justify-center">
            <h1 className="hero-heading font-black uppercase tracking-tight text-center text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-none mb-6">
              Hi, i&apos;m supriyo
            </h1>
          </div>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] -ml-[140px] sm:-ml-[180px] md:-ml-[220px] lg:-ml-[260px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="/meBitmoji.png"
              alt="Supriyo Portrait"
              className="w-full block"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto relative z-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            driven by implementing innovation and building impactful digital products.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
