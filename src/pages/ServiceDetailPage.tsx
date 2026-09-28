import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { getService, services } from '../data/services'
import { Reveal } from '../components/ui/Reveal'
import { ServiceIcon } from '../components/ui/ServiceIcon'

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-[0.9375rem] font-medium text-ink">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-transform duration-300 ${
            open ? 'rotate-45 border-ink/40' : ''
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = getService(slug ?? '')

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="shell grid items-center gap-12 pb-20 pt-36 md:pt-44 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">{service.name}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] text-ink md:text-6xl">{service.tagline}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">{service.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/book" className="btn-primary h-12 px-7">
              Book an Appointment
            </Link>
            <Link to="/doctors" className="btn-outline h-12 px-7">
              Meet the Doctors
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={`${service.name} at Lumora Dental Studio`}
              className="aspect-[4/3.2] w-full object-cover"
              loading="eager"
            />
          </div>
        </Reveal>
      </section>

      {/* Overview + benefits */}
      <section className="border-y border-line bg-ivory-deep/60 py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-light text-ink md:text-4xl">Overview</h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-ink-soft">
              {service.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line bg-ivory p-8">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                What is included
              </h3>
              <ul className="mt-5 space-y-3.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="shell py-20 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-light text-ink md:text-4xl">How treatment works</h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08} y={16}>
              <div className="flex h-full flex-col bg-ivory p-7">
                <span className="font-serif text-sm font-light text-sage-deep">0{i + 1}</span>
                <h3 className="mt-4 text-[0.9375rem] font-medium text-ink">{step.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line bg-ivory-deep/60 py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-light text-ink md:text-4xl">Common questions</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Still unsure? Call us at{' '}
              <a href="tel:+63288174200" className="font-medium text-ink underline underline-offset-2">
                +63 (2) 8817 4200
              </a>{' '}
              — we are happy to talk it through.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-line">
              {service.faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="shell py-20 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-light text-ink md:text-3xl">You might also be interested in</h2>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} y={16}>
              <Link
                to={`/services/${s.slug}`}
                className="group flex h-full items-center justify-between gap-4 bg-ivory p-6 transition-colors duration-300 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sage-deep">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-ink">{s.name}</span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="shell pb-24 md:pb-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-ink px-8 py-14 text-ivory md:flex-row md:items-center md:px-14">
            <div>
              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/60">
                Book a consultation. We will examine, listen, and give you an honest plan — whether
                or not you decide to treat with us.
              </p>
            </div>
            <Link
              to="/book"
              className="btn h-12 shrink-0 bg-ivory px-7 text-ink transition-all duration-300 hover:bg-white active:scale-[0.98]"
            >
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
