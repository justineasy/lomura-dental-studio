import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 0.61, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative overflow-hidden pt-[4.5rem]">
      <div className="shell grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-0">
        <motion.div style={reduce ? undefined : { y: textY }} className="relative z-10 max-w-xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow"
          >
            Makati City · Metro Manila · Philippines
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 text-[2.75rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            A more thoughtful approach to dental care.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Modern dentistry, experienced clinicians, and a calmer experience — right in the heart
            of Makati.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link to="/book" className="btn-primary h-12 px-7">
              Book an Appointment
            </Link>
            <Link to="/doctors" className="btn-outline h-12 px-7">
              Meet Our Doctors
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-12 flex items-center gap-6 text-[0.8125rem] text-ink-faint"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              New patients welcome
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="hidden sm:inline">Mon – Sat, 8:00 AM – 7:00 PM</span>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative overflow-hidden rounded-2xl"
          >
            <motion.img
              style={reduce ? undefined : { y: imgY, scale: 1.12 }}
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
              alt="A calm, modern dental treatment room at Lumora Dental Studio in Makati"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4] lg:aspect-[4/4.6]"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="absolute -bottom-5 left-6 hidden max-w-[13rem] rounded-xl border border-line bg-ivory/95 p-4 shadow-[0_8px_30px_rgba(33,30,25,0.08)] backdrop-blur-sm md:block"
          >
            <p className="font-serif text-lg font-light text-ink">A quieter kind of clinic</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">
              Natural light, considered materials, and appointments that run on time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
