import FadeIn from './FadeIn'

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#030303] pt-10 xs:pt-14 sm:pt-20 pb-16 xs:pb-24 sm:pb-32 px-4 xs:px-6 sm:px-8 md:px-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 xs:gap-12 sm:gap-16 lg:gap-24">

        {/* Left Column: Heading & Context */}
        <div className="flex-1 flex flex-col justify-start">
          <FadeIn delay={0.1} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight text-[#fcfcfc] leading-[0.9] text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Let&apos;s Build<br />Something<br />Incredible.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="text-[#8a8a8a] mt-4 xs:mt-6 sm:mt-8 text-sm xs:text-base sm:text-lg md:text-xl font-light tracking-wide max-w-md leading-relaxed">
              Whether it&apos;s AI, full-stack development, or innovative digital products, I&apos;m always excited to collaborate on ideas that create meaningful impact.
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1 w-full max-w-xl">
          <FadeIn delay={0.3} y={30}>
            <form
              className="flex flex-col gap-8 xs:gap-10 sm:gap-12"
              action="mailto:supriyoc999@gmail.com"
              method="POST"
              encType="text/plain"
            >

              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full bg-transparent border-b border-[#212121] py-3 xs:py-4 text-[#fcfcfc] text-base xs:text-lg sm:text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors peer"
                  placeholder="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 xs:top-4 text-[#8a8a8a] text-sm xs:text-base sm:text-lg uppercase tracking-widest transition-all peer-focus:-top-5 xs:peer-focus:-top-6 peer-focus:text-[0.6875rem] xs:peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-5 xs:peer-valid:-top-6 peer-valid:text-[0.6875rem] xs:peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text pointer-events-none"
                >
                  Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="Reply-To"
                  required
                  className="w-full bg-transparent border-b border-[#212121] py-3 xs:py-4 text-[#fcfcfc] text-base xs:text-lg sm:text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors peer"
                  placeholder="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 xs:top-4 text-[#8a8a8a] text-sm xs:text-base sm:text-lg uppercase tracking-widest transition-all peer-focus:-top-5 xs:peer-focus:-top-6 peer-focus:text-[0.6875rem] xs:peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-5 xs:peer-valid:-top-6 peer-valid:text-[0.6875rem] xs:peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text pointer-events-none"
                >
                  Email
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#212121] py-3 xs:py-4 text-[#fcfcfc] text-base xs:text-lg sm:text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors resize-none peer"
                  placeholder="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 xs:top-4 text-[#8a8a8a] text-sm xs:text-base sm:text-lg uppercase tracking-widest transition-all peer-focus:-top-5 xs:peer-focus:-top-6 peer-focus:text-[0.6875rem] xs:peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-5 xs:peer-valid:-top-6 peer-valid:text-[0.6875rem] xs:peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text pointer-events-none"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 xs:mt-4 self-start bg-[#fcfcfc] text-[#030303] px-6 py-3 xs:px-8 xs:py-3.5 sm:px-10 sm:py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-xs xs:text-sm"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
