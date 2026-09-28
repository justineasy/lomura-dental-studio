import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 0.61, 0.36, 1] as const

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'revealing' | 'done'>('loading')
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setProgress(100)
      setPhase('revealing')
      const timer = setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }

    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 15 + 8
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setPhase('revealing')
        setTimeout(() => {
          setPhase('done')
          onComplete()
        }, 600)
      }
      setProgress(Math.min(current, 100))
    }, 120)

    return () => clearInterval(interval)
  }, [reduce, onComplete])

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
      initial={reduce ? false : { opacity: 1 }}
      animate={reduce ? undefined : { opacity: phase === 'revealing' ? 0 : 1 }}
      transition={{ duration: phase === 'revealing' ? 0.6 : 0, ease }}
      aria-hidden={phase === 'revealing'}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col items-center"
      >
        <span className="font-serif text-[2rem] font-medium tracking-[0.12em] text-ink">
          LUMORA
        </span>
        <span className="mt-2 text-[0.625rem] font-semibold uppercase tracking-[0.32em] text-ink-faint">
          Dental Studio
        </span>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 h-px w-40 overflow-hidden bg-line"
      >
        <motion.div
          className="h-full bg-ink"
          initial={reduce ? false : { width: '0%' }}
          animate={reduce ? undefined : { width: `${progress}%` }}
          transition={{ duration: 0.3, ease }}
        />
      </motion.div>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 text-[0.625rem] font-medium uppercase tracking-[0.22em] text-ink-faint"
      >
        Loading experience
      </motion.p>
    </motion.div>
  )
}
