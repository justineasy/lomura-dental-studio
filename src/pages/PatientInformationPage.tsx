import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { newPatientSteps, patientFaqs } from '../data/clinic'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ClosingCTA } from '../components/home/ClosingCTA'

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0)
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

export function PatientInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient information"
        title="Everything you need to know before you arrive."
        copy="What to bring, how payment works, and what happens at your first visit. If something is missing, call us — we will walk you through it."
      />

      {/* New patient steps */}
      <section className="shell py-16 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {newPatientSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} y={16}>
              <div className="h-full bg-ivory p-8">
                <span className="font-serif text-sm font-light text-sage-deep">0{i + 1}</span>
                <h2 className="mt-4 text-[0.9375rem] font-medium text-ink">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Insurance & payment */}
      <section className="border-y border-line bg-ivory-deep/60 py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-light text-ink md:text-4xl">Insurance & payment</h2>
            <div className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                We work with most major PPO insurance plans and handle the claims on your behalf —
                you pay only your portion at the time of treatment. If you are unsure whether we
                accept your plan, call us with your insurer’s name and we will check before you
                book.
              </p>
              <p>
                For treatment not covered by insurance, we provide a written estimate with all
                options before anything begins. Interest-free payment plans are available for
                treatment over $1,000, and we accept all major credit cards, HSA, and FSA.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line bg-ivory p-8">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                We accept
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink-soft">
                {[
                  'Delta Dental',
                  'Cigna',
                  'MetLife',
                  'Aetna',
                  'Guardian',
                  'United Concordia',
                  'HSA / FSA cards',
                  'Interest-free plans',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="shell grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-light text-ink md:text-4xl">Common questions</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            The questions we hear most often. Something else on your mind? Call us at{' '}
            <a href="tel:+63288174200" className="font-medium text-ink underline underline-offset-2">
              +63 (2) 8817 4200
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {patientFaqs.map((faq, i) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </Reveal>
      </section>

      <ClosingCTA />
    </>
  )
}
