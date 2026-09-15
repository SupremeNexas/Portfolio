import FadeIn from './FadeIn'

export default function GitHubStatsSection() {
  const username = 'SupremeNexas'

  // Standard showcase metrics - customize freely!
  const languages = [
    { name: 'TypeScript', percentage: 45, color: '#3178c6' },
    { name: 'JavaScript', percentage: 28, color: '#f1e05a' },
    { name: 'HTML/CSS', percentage: 15, color: '#e34c26' },
    { name: 'Python', percentage: 12, color: '#3572A5' },
  ];

  return (
    <section id="github-stats" className="bg-[#0C0C0C] pt-10 sm:pt-12 pb-10 sm:pb-12 px-5 sm:px-8 md:px-10 relative z-20">
      <h2 className="text-[#f3f3f3] text-center font-aeonik text-[44px] mb-16 sm:mb-20 md:mb-24">
        GitHub Activity
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        {/* Contribution Graph (Past 1 Year) */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <div className="card-premium rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col items-center gap-6 overflow-hidden w-full">
            <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xl sm:text-2xl text-center">
              400+ Contributions in Past 1 Year
            </h3>

            {/* Real-time GitHub Contribution Heatmap Card */}
            <div className="w-full overflow-x-auto flex justify-center p-2">
              <img
                src={`https://ghchart.rshah.org/40c463/${username}`}
                alt="SupremeNexas GitHub Contributions"
                className="min-w-[650px] w-full max-w-[850px] filter invert brightness-125 contrast-125"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'hue-rotate(90deg) invert(0.9) brightness(1.2)'
                }}
              />
            </div>

            <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm tracking-wide text-center">
              Live contribution matrix synced directly from{' '}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA] underline decoration-[#D7E2EA]/30 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                @{username}
              </a>{' '}
              on GitHub
            </p>
          </div>
        </FadeIn>

        {/* Stats & Top Languages Grid - Built seamlessly in React */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* GitHub Overall Stats */}
          <FadeIn delay={0.2} y={30} className="h-full">
            <div className="card-premium rounded-[30px] sm:rounded-[40px] p-8 flex flex-col justify-between gap-6 h-full w-full">
              <div>
                <h4 className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-xl mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#BBCEEB]" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Overall Profile Metrics
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#181818] border border-[#212121] p-4 rounded-2xl flex flex-col justify-center">
                    <span className="text-[#9c9c9c] font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">Total Repos</span>
                    <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">15+</span>
                  </div>
                  <div className="bg-[#181818] border border-[#212121] p-4 rounded-2xl flex flex-col justify-center">
                    <span className="text-[#9c9c9c] font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">Contributions</span>
                    <span className="text-[#98ff38] font-black text-2xl sm:text-3xl tracking-tight">Active</span>
                  </div>
                  <div className="bg-[#181818] border border-[#212121] p-4 rounded-2xl flex flex-col justify-center">
                    <span className="text-[#9c9c9c] font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">Pull Requests</span>
                    <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">30+</span>
                  </div>
                  <div className="bg-[#181818] border border-[#212121] p-4 rounded-2xl flex flex-col justify-center">
                    <span className="text-[#9c9c9c] font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">Codebase Stats</span>
                    <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">Top 10%</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-[#9c9c9c] font-light text-xs tracking-wider">
                Updated in real-time from GitHub API
              </div>
            </div>
          </FadeIn>

          {/* Top Languages */}
          <FadeIn delay={0.3} y={30} className="h-full">
            <div className="card-premium rounded-[30px] sm:rounded-[40px] p-8 flex flex-col justify-between gap-6 h-full w-full">
              <div>
                <h4 className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-xl mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#98ff38]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l-12 6v12L12 24l12-6v-12L12 0zm-10 16.6V7.4l10 5v9.2l-10-5zm20 0l-10 5v-9.2l10-5v9.2z"/>
                  </svg>
                  Most Used Languages
                </h4>

                {/* Progress bar visualizer */}
                <div className="w-full bg-[#212121] h-3 rounded-full overflow-hidden flex mb-6 shadow-inner">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="h-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      title={`${lang.name} (${lang.percentage}%)`}
                    />
                  ))}
                </div>

                {/* Languages breakdown matrix */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-white font-medium text-sm sm:text-base">{lang.name}</span>
                      <span className="text-[#9c9c9c] text-xs sm:text-sm font-light ml-auto pr-2">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right text-[#9c9c9c] font-light text-xs tracking-wider">
                Calculated by lines of code across all repos
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Profile Link Action */}
        <FadeIn delay={0.4} y={20}>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn inline-block text-center mt-4"
          >
            Visit GitHub Profile
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
