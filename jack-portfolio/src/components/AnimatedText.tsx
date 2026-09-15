import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  })

  const characters = text.split('')

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => {
        const opacity = useTransform(
          scrollYProgress,
          [i / characters.length, (i + 1) / characters.length],
          [0.2, 1]
        )

        return (
          <span key={i} style={{ position: 'relative' }}>
            <span style={{ visibility: 'hidden' }}>{char}</span>
            <motion.span
              style={{
                position: 'absolute',
                left: 0,
                opacity
              }}
            >
              {char}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}
