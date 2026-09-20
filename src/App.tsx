import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import CustomCursor from './components/CustomCursor'
import HeroSection from './components/HeroSection'
import HandToAction from './components/HandToAction'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import GitHubStatsSection from './components/GitHubStatsSection'
import InternshipSection from './components/InternshipSection'
import ContactSection from './components/ContactSection'

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
      <AboutSection />
      <InternshipSection />
      <ProjectsSection />
      <CertificationsSection />
      <GitHubStatsSection />
      <HandToAction />
      <ContactSection />
    </div>
  )
}

export default App
