export default function HandToAction() {
  return (
    <section id="linkedin" className="relative w-full bg-[#101010] pt-12 pb-16 sm:pb-24 border-t border-[#212121] overflow-hidden flex items-center justify-center min-h-[400px]">

      {/* The Dotted Hands Image */}
      <img
        src="/hands.png"
        alt="Dotted hands pointing at center"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        style={{ filter: 'brightness(1.5)', pointerEvents: 'none' }}
      />

      {/* LinkedIn Logo Hotspot — Precisely positioned over the circle */}
      <a
        href="https://www.linkedin.com/in/supriyo-chaudhuri-691573228/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-[51%] top-[51%] -translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        title="Connect on LinkedIn"
        aria-label="Connect on LinkedIn"
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-white transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </section>
  );
}
