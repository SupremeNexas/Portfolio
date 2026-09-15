import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

declare global {
  interface Window {
    THREE: any
    VANTA: any
  }
}

interface VantaBackgroundProps {
  effect?: 'NET' | 'WAVES' | 'FOG'
  color?: number
  backgroundColor?: number
  points?: number
  maxDistance?: number
  spacing?: number
}

export default function VantaBackground({
  effect = 'NET',
  color = 0x6f6759,             // Match portfolio's compass gold accent
  backgroundColor = 0x030303,   // Match portfolio's obsidian black
  points = 10,
  maxDistance = 22,
  spacing = 16,
}: VantaBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<any>(null)
  const [isIntersecting, setIsIntersecting] = useState(true)

  // IntersectionObserver to pause rendering when component is off-screen
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, { threshold: 0 })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let isMounted = true

    // Function to load external scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
      })
    }

    const initVanta = async () => {
      try {
        // 1. Ensure Three.js is loaded into window.THREE
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
        }

        // 2. Load the requested Vanta effect script
        const effectName = effect.toLowerCase()
        const vantaScriptUrl = `https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.${effectName}.min.js`

        await loadScript(vantaScriptUrl)

        if (!isMounted || !containerRef.current) return

        // 3. Initialize the Vanta effect cleanly
        if (window.VANTA && window.VANTA[effect]) {
          vantaEffectRef.current = window.VANTA[effect]({
            el: containerRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: color,
            backgroundColor: backgroundColor,
            points: points,
            maxDistance: maxDistance,
            spacing: spacing,
            showDots: true,
          })

          // 4. Combine with GSAP for an interactive background entrance and breathing effect
          if (containerRef.current) {
            gsap.fromTo(
              containerRef.current,
              { opacity: 0, scale: 1.05 },
              { opacity: 0.85, scale: 1, duration: 2, ease: 'power2.out' }
            )

            // Subtle continuous breathing animation via GSAP
            gsap.to(containerRef.current, {
              opacity: 0.65,
              duration: 4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            })
          }
        }
      } catch (error) {
        console.error('Failed to initialize Vanta background effect:', error)
      }
    }

    initVanta()

    // 5. Cleanup memory on unmount
    return () => {
      isMounted = false
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy()
        vantaEffectRef.current = null
      }
    }
  }, [effect, color, backgroundColor, points, maxDistance, spacing])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{
        display: isIntersecting ? 'block' : 'none',
        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
      }}
    />
  )
}
