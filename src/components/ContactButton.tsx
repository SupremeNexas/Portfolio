export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-center text-center rounded-full px-5 py-2.5 xs:px-7 xs:py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[0.6875rem] xs:text-xs sm:text-sm md:text-base text-black bg-white font-semibold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
      style={{
        boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.15)',
        textDecoration: 'none',
      }}
    >
      Contact Me
    </a>
  )
}
