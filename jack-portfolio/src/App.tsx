import { lazy, Suspense, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import CustomCursor from './components/CustomCursor'
import HeroSection from './components/HeroSection'
import HandToAction from './components/HandToAction'

const AboutSection = lazy(() => import('./components/AboutSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const CertificationsSection = lazy(() => import('./components/CertificationsSection'))
const GitHubStatsSection = lazy(() => import('./components/GitHubStatsSection'))
const InternshipSection = lazy(() => import('./components/InternshipSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

const MinimalLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem',
    color: '#8b8b8b',
    fontFamily: 'monospace',
    letterSpacing: '0.05em'
  }}>
    <span style={{
      animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }}>
      loading segments...
    </span>
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .5; }
      }
    `}</style>
  </div>
)

function App() {
  useEffect(() => {
    // Initialize Lenis with premium smooth scrolling configuration
    const lenis = new Lenis({
      lerp: 0.08,                // Premium weight: low value feels heavier and smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing for fallback/programmatic
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      // Automatic integration for in-page #anchor clicks
      anchors: true
    })

    // Custom animation tick loop for maximum cross-browser refresh rate stability
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ overflowX: 'clip' }}>
      <CustomCursor />
      <HeroSection />
      {/* <MarqueeSection /> */}
      <Suspense fallback={<MinimalLoader />}>
        <AboutSection />
        <InternshipSection />
        <ProjectsSection />
        <CertificationsSection />
        <GitHubStatsSection />
        <HandToAction />
        <ContactSection />
      </Suspense>
    </div>
  )
}

export default App
