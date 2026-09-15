export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-block text-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-black bg-white font-semibold uppercase tracking-widest transition-transform hover:scale-105"
      style={{
        boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.15)',
        textDecoration: 'none',
      }}
    >
      Contact Me
    </a>
  )
}
