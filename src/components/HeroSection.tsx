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
    <section className="min-h-[100svh] h-screen flex flex-col justify-between px-4 xs:px-6 sm:px-8 md:px-10 relative overflow-hidden bg-[#030303]">
      {/* 3D Dynamic Vanta Background combined with GSAP animations */}
      <VantaBackground
        effect="NET"
        color={0x6f6759}
        backgroundColor={0x030303}
        points={12}
        maxDistance={25}
        spacing={15}
      />

      {/* Top Section: Navbar & Hero Heading */}
      <div className="w-full flex flex-col items-center relative z-10">
        {/* Navbar */}
        <FadeIn delay={0} y={-20} className="w-full">
          <nav className="flex justify-center pt-4 xs:pt-6 md:pt-8 w-full max-w-full">
            <GooeyNav items={navItems} />
          </nav>
        </FadeIn>

        {/* Hero Heading */}
        <div className="overflow-hidden mt-4 xs:mt-5 sm:mt-6 md:mt-8 w-full">
          <FadeIn delay={0.15} y={40}>
            <div className="w-full max-w-full flex justify-center">
              <h1 className="hero-heading font-black uppercase tracking-tight text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-none mb-2 sm:mb-4">
                Hi, i&apos;m supriyo
              </h1>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 w-[210px] xs:w-[250px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[520px] max-w-[85vw] pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={120} strength={3}>
            <img
              src="/meBitmoji.png"
              alt="Supriyo Portrait"
              className="w-full block select-none pointer-events-auto"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-5 xs:pb-6 sm:pb-8 md:pb-10 mt-auto relative z-10 w-full gap-2 xs:gap-4">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.6875rem, 1.2vw + 0.3rem, 1.25rem)' }}
          >
            Driven by AI, automation, and implementing innovation to build impactful digital products.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
