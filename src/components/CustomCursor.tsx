import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable custom cursor for desktop devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setHasFinePointer(mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    if (!mediaQuery.matches) return () => mediaQuery.removeEventListener('change', handleMediaChange)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [isVisible, cursorX, cursorY])

  if (!hasFinePointer) return null

  return (
    <motion.div
      id="cursor"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border-2 border-white mix-blend-difference hidden lg:block backdrop-invert select-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0
      }}
    />
  )
}
