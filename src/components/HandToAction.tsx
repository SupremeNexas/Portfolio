import { motion } from 'motion/react';
import { useMemo } from 'react';

/**
 * Dot-matrix open hand reaching inward.
 * Each row is a bitfield: 1 = visible dot, 0 = empty cell.
 * The pattern forms a left hand with fingers extended upward
 * and the palm facing inward (toward center).
 *
 * Grid: 18 columns x 28 rows
 */
const HAND_LEFT: number[][] = [
  //                    thumb area            index  mid  ring  pinky
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],  // 0  — index tip
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],  // 1
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],  // 2
  [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0],  // 3  — middle tip
  [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0],  // 4
  [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0],  // 5  — ring tip
  [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0],  // 6
  [0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],  // 7  — pinky tip
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],  // 8  — fingers merge
  [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],  // 9
  [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0],  // 10 — knuckles
  [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0],  // 11
  [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],  // 12 — upper palm
  [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],  // 13
  [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],  // 14
  [1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],  // 15 — thumb extends
  [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],  // 16
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],  // 17
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],  // 18 — lower palm
  [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],  // 19
  [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],  // 20
  [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],  // 21 — wrist
  [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],  // 22
  [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],  // 23
  [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],  // 24
  [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],  // 25
];

const COLS = HAND_LEFT[0].length;
const ROWS = HAND_LEFT.length;

/** Mirror each row to produce the right hand. */
const HAND_RIGHT = HAND_LEFT.map(row => [...row].reverse());

/**
 * Generate deterministic per-dot opacity values so we avoid Math.random()
 * in the render path. Uses a simple hash seeded from row + col indices.
 */
function buildOpacityMap(pattern: number[][]): number[][] {
  return pattern.map((row, r) =>
    row.map((cell, c) => {
      if (cell === 0) return 0;
      // Simple deterministic pseudo-random: sin-based hash
      const hash = Math.abs(Math.sin(r * 127.1 + c * 311.7) * 43758.5453) % 1;
      return 0.35 + hash * 0.65; // range [0.35 .. 1.0]
    })
  );
}

function DotMatrixHand({ pattern, baseDelay = 0 }: { pattern: number[][]; baseDelay?: number }) {
  const opacities = useMemo(() => buildOpacityMap(pattern), [pattern]);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 6px)`,
        gridTemplateRows: `repeat(${ROWS}, 6px)`,
        gap: '4px',
      }}
    >
      {pattern.map((row, r) =>
        row.map((cell, c) => {
          if (cell === 0) {
            return <div key={`${r}-${c}`} />;
          }
          const stagger = baseDelay + (r * COLS + c) * 0.004;
          return (
            <motion.div
              key={`${r}-${c}`}
              className="rounded-full"
              style={{
                width: 6,
                height: 6,
                backgroundColor: '#f3f3f3',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: opacities[r][c], scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: stagger, ease: 'easeOut' }}
            />
          );
        })
      )}
    </div>
  );
}

export default function HandToAction() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: '#101010', paddingTop: 120, paddingBottom: 120 }}
    >
      {/* ── 1px Graphite section divider ── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#212121' }} />

      {/* ── Content container ── */}
      <div className="flex flex-col items-center gap-14 w-full max-w-[1200px] px-6">

        {/* ── Hands + CTA row ── */}
        <div className="flex items-center justify-center gap-10 md:gap-20">

          {/* Left hand — reaching right */}
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.85, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <DotMatrixHand pattern={HAND_LEFT} baseDelay={0} />
          </motion.div>

          {/* Center — headline */}
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <h2
              className="text-center select-none"
              style={{
                fontFamily: "'Inter', 'Aeonik', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 34,
                lineHeight: 1.03,
                color: '#f3f3f3',
                letterSpacing: '-0.01em',
              }}
            >
              Let&rsquo;s build<br />together
            </h2>

            <p
              className="text-center max-w-[220px]"
              style={{
                color: '#9c9c9c',
                fontFamily: "'JetBrains Mono', 'Input', ui-monospace, monospace",
                fontSize: 13,
                lineHeight: 1.54,
                letterSpacing: '-0.022em',
              }}
            >
              Open to collaborate, connect, or just say hello.
            </p>
          </motion.div>

          {/* Right hand — reaching left (mirrored) */}
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 0.85, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <DotMatrixHand pattern={HAND_RIGHT} baseDelay={0.15} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
