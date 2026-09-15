import FadeIn from './FadeIn'

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#030303] pt-10 sm:pt-16 pb-24 sm:pb-32 px-6 sm:px-8 md:px-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24">

        {/* Left Column: Heading & Context */}
        <div className="flex-1 flex flex-col justify-start">
          <FadeIn delay={0.1} y={30}>
            <h2
              className="font-black uppercase tracking-tight text-[#fcfcfc] leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              Let's Build<br />Something<br />Incredible.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <p className="text-[#8a8a8a] mt-8 text-lg sm:text-xl font-light tracking-wide max-w-md">
              Whether it&apos;s AI, full-stack development, or innovative digital products, I&apos;m always excited to collaborate on ideas that create meaningful impact.
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Impeccable Form */}
        <div className="flex-1 w-full max-w-xl">
          <FadeIn delay={0.3} y={30}>
            <form
              className="flex flex-col gap-12"
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
                  className="w-full bg-transparent border-b border-[#212121] py-4 text-[#fcfcfc] text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors peer"
                  placeholder="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-[#8a8a8a] text-lg uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text"
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
                  className="w-full bg-transparent border-b border-[#212121] py-4 text-[#fcfcfc] text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors peer"
                  placeholder="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-[#8a8a8a] text-lg uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text"
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
                  className="w-full bg-transparent border-b border-[#212121] py-4 text-[#fcfcfc] text-xl placeholder-transparent focus:outline-none focus:border-[#fcfcfc] transition-colors resize-none peer"
                  placeholder="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-[#8a8a8a] text-lg uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#fcfcfc] peer-valid:-top-6 peer-valid:text-xs peer-valid:text-[#fcfcfc] cursor-text"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 self-start bg-[#fcfcfc] text-[#030303] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
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
