import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

export default function AboutSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative px-4 xs:px-6 sm:px-8 md:px-10 py-12 xs:py-16 sm:py-20 md:py-24 overflow-hidden bg-[#030303]">
      {/* Decorative Images - Intelligently responsive, non-obstructive */}
      <FadeIn delay={0.1} x={-60} y={0} duration={0.9} className="absolute top-[3%] xs:top-[4%] left-[1%] xs:left-[2%] sm:left-[3%] md:left-[4%] w-[65px] xs:w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px] pointer-events-none opacity-50 xs:opacity-70 sm:opacity-100 select-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Icon"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-60} y={0} duration={0.9} className="absolute bottom-[4%] xs:bottom-[6%] left-[2%] xs:left-[3%] sm:left-[6%] md:left-[8%] lg:left-[10%] w-[55px] xs:w-[75px] sm:w-[110px] md:w-[150px] lg:w-[180px] pointer-events-none opacity-50 xs:opacity-70 sm:opacity-100 select-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={60} y={0} duration={0.9} className="absolute top-[3%] xs:top-[4%] right-[1%] xs:right-[2%] sm:right-[3%] md:right-[4%] w-[65px] xs:w-[90px] sm:w-[130px] md:w-[170px] lg:w-[210px] pointer-events-none opacity-50 xs:opacity-70 sm:opacity-100 select-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Icon"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={60} y={0} duration={0.9} className="absolute bottom-[4%] xs:bottom-[6%] right-[2%] xs:right-[3%] sm:right-[6%] md:right-[8%] lg:right-[10%] w-[70px] xs:w-[95px] sm:w-[130px] md:w-[180px] lg:w-[220px] pointer-events-none opacity-50 xs:opacity-70 sm:opacity-100 select-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 z-10 w-full max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black tracking-tight text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-none">
            About Supriyo
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 w-full">
          <div className="w-full max-w-[580px] px-2 xs:px-4">
            <AnimatedText
              text="A software engineer focused on building intelligent, scalable, and user-centric digital products. I combine software engineering, AI, and automation to turn complex ideas into seamless experiences and production-ready systems. Driven by curiosity and a commitment to implementing innovation, I build technology that doesn't just work — it works smarter."
              className="text-[#D7E2EA] font-medium text-center leading-relaxed text-sm xs:text-base sm:text-lg md:text-xl lg:text-[1.35rem]"
            />
          </div>

          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
