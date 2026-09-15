import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20">
      {/* Decorative Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon Icon"
          className="w-full"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Object"
          className="w-full"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego Icon"
          className="w-full"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group"
          className="w-full"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 w-full max-w-full">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black tracking-tight text-center text-5xl sm:text-6xl md:text-7xl leading-none">
            About Supriyo
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="a software engineer passionate about building scalable, AI-powered, and user-centric applications. I create modern digital experiences with a strong focus on performance, clean architecture, and intuitive design. Driven by curiosity and a commitment to implementing innovation, I enjoy turning complex ideas into polished, production-ready products."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />

          <ContactButton />
        </div>
      </div>
    </section>
  )
}
