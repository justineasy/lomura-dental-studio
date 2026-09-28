import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 0.61, 0.36, 1] as const

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const reduce = useReducedMotion()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter')

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit')
    }
  }, [children, displayChildren])

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('enter')
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }, reduce ? 0 : 200)
      return () => clearTimeout(timeout)
    }
  }, [transitionStage, children, reduce])

  if (reduce) {
    return <>{displayChildren}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: transitionStage === 'enter' ? 1 : 0,
        y: transitionStage === 'enter' ? 0 : -8,
      }}
      transition={{ duration: 0.35, ease }}
    >
      {displayChildren}
    </motion.div>
  )
}
