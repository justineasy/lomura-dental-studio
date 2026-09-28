import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Why Lumora', to: '/#why-lumora' },
  { label: 'Patient Experience', to: '/#patient-experience' },
  { label: 'About', to: '/about' },
]

function Wordmark() {
  return (
    <Link to="/" className="flex flex-col" aria-label="Lumora Dental Studio — home">
      <span className="font-serif text-[1.35rem] font-medium tracking-[0.08em] text-ink">LUMORA</span>
      <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.28em] text-ink-faint">
        Dental Studio
      </span>
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.includes('#')) {
      e.preventDefault()
      const [path, hash] = to.split('#')
      const targetPath = path || '/'
      if (location.pathname !== targetPath) {
        window.location.href = to
      } else {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-line'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className={({ isActive }) =>
                  `text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="btn-primary hidden h-10 px-5 sm:inline-flex"
            >
              Book an Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" className={"h-5 w-5"} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="shell flex h-[4.5rem] items-center justify-between">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className={"h-5 w-5"} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="shell flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
              {[{ label: 'Home', to: '/' }, ...navItems, { label: 'Contact', to: '/contact' }].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.08 + i * 0.05, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <Link
                    to={item.to}
                    onClick={(e) => handleNavClick(e, item.to)}
                    className="group flex items-baseline justify-between border-b border-line py-4"
                  >
                    <span className="font-serif text-3xl font-light text-ink transition-colors group-hover:text-sage-deep">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-eyebrow text-ink-faint">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="shell pb-10">
              <Link to="/book" className="btn-primary h-12 w-full">
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
