export default function HyperHero() {
  return (
    <section className="bg-[#101010] min-h-screen flex flex-col items-center pt-24 pb-20 px-6 font-aeonik">

      {/* Top Nav (Cleaned - matches Image 3: No dropdowns) */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 bg-[#101010]/80 backdrop-blur z-50 border-b border-[#212121]">
        <h1 className="text-[18px] font-normal text-[#f3f3f3]">Hyperstudio</h1>
        <div className="flex gap-12 text-[13px] uppercase tracking-wider text-[#9c9c9c]">
          <span className="cursor-pointer hover:text-[#f3f3f3]">SERVICES</span>
          <span className="cursor-pointer hover:text-[#f3f3f3]">PORTFOLIO</span>
          <span className="cursor-pointer hover:text-[#f3f3f3]">PROCESS</span>
        </div>
        <button className="bg-white text-[#101010] px-[24px] py-[10px] rounded-[9999px] text-[14px] font-medium uppercase">
          LET'S CHAT
        </button>
      </nav>

      {/* Hero Content Block */}
      <div className="flex flex-col items-center text-center mt-12 z-10 w-full max-w-[1200px]">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-[14px] py-[6px] mb-6 rounded-[4px] bg-[#1a1a1a] border border-[#212121]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#98ff38]"></span>
          <span className="text-[#9c9c9c] text-[12px] uppercase tracking-widest">
            2/5 SPOTS LEFT FOR AUGUST
          </span>
        </div>

        {/* Massive Headline */}
        <h2 className="font-normal text-[#f3f3f3] text-center" style={{ fontSize: '63px', lineHeight: 1.05, letterSpacing: '-0.69px' }}>
          World-class branding and<br />websites for startups.
        </h2>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 mb-24">
          <button className="bg-[#ffffff] text-[#101010] px-[24px] py-[12px] rounded-[9999px] uppercase text-[14px] font-medium flex items-center gap-2">
            START NOW ↗
          </button>
          <button className="bg-transparent border border-[#ffffff] text-[#ffffff] px-[20px] py-[10px] rounded-[8px] uppercase text-[14px]">
            VIEW WORK ↓
          </button>
        </div>

        {/* 3. The 3D Matrix Hands built natively */}
        <div className="flex items-center justify-center gap-[40px] md:gap-[80px] w-full py-12 relative overflow-hidden h-[400px]">
          <img
            src="https://framerusercontent.com/images/X6b9iX492A7v16b47cWb3V6bY0.jpg" // Using an exact dotted hands reference
            alt="Dotted Hands"
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
            style={{ filter: 'grayscale(100%) contrast(1.2)' }}
          />

          <div className="flex flex-col items-center relative z-10 mx-auto">
            {/* The LinkedIn pill button directly in the center */}
            <a href="https://www.linkedin.com/in/supriyo-linkedin" target="_blank" rel="noopener noreferrer"
               className="bg-[#ffffff] text-[#101010] px-[28px] py-[14px] rounded-[9999px] text-[14px] uppercase font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
               style={{ boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>CONNECT ON LINKEDIN</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
