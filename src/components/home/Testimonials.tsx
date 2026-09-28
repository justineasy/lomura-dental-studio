import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { Reveal } from '../ui/Reveal'

const ease = [0.22, 0.61, 0.36, 1] as const

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-sage" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const reduce = useReducedMotion()
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused || reduce) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next, reduce])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const visibleCount = 3
  const visibleTestimonials = []
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(index + i) % testimonials.length])
  }

  return (
    <section className="border-b border-line bg-ivory-deep/60 py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Patient Stories</p>
            <h2 className="mt-4 max-w-lg text-4xl leading-[1.08] text-ink md:text-5xl">
              Five stars from patients who value the difference.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-serif text-4xl font-light text-ink">5.0 / 5</p>
                <div className="mt-1"><StarRow /></div>
                <p className="mt-1 text-xs text-ink-faint">Based on verified patient reviews</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={reduce ? false : { opacity: 0, x: direction * 60 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease }}
                className="grid gap-6 md:grid-cols-3"
              >
                {visibleTestimonials.map((t, i) => (
                  <figure
                    key={`${t.name}-${i}`}
                    className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ivory p-7 transition-colors duration-300 hover:bg-white md:p-8"
                  >
                    <div>
                      <StarRow />
                      <blockquote className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-mist font-serif text-sm text-sage-deep">
                        {t.name[0]}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{t.name}</p>
                        <p className="text-xs text-ink-faint">{t.treatment}</p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-ink' : 'w-1.5 bg-line hover:bg-ink/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 hover:border-ink/40 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M11 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-200 hover:border-ink/40 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-ink-faint">
            Testimonials are from fictional patients created for this portfolio demo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
