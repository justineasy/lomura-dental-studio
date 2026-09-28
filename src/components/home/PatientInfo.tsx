import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { patientFaqs } from '../../data/clinic'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

const infoBlocks = [
  {
    title: 'New Patients',
    detail:
      'Your first visit is an examination and a conversation — about your history, your goals, and what has put you off treatment in the past. No treatment on day one unless you ask for it.',
  },
  {
    title: 'Insurance & Payment',
    detail:
      'We work with major HMO providers and handle the claims for you. Treatment is priced transparently, with written estimates before anything begins and interest-free installment plans available.',
  },
  {
    title: 'Before Your Visit',
    detail:
      'Complete a short online health form before you arrive. Bring a list of medications and your insurance card. If you are anxious, tell us when you book — we will slow everything down.',
  },
]

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

export function PatientInfo() {
  return (
    <section className="shell py-24 md:py-32">
      <SectionHeader
        eyebrow="Patient information"
        title="Everything you need to know before you arrive."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {infoBlocks.map((block, i) => (
          <Reveal key={block.title} delay={i * 0.08}>
            <div className="border-t-2 border-ink pt-5">
              <h3 className="text-[0.9375rem] font-medium text-ink">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{block.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <h3 className="font-serif text-2xl font-light text-ink md:text-3xl">
            Questions, answered.
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            The things patients ask us most often. Something else on your mind? Call us — a real
            person answers.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-line">
            {patientFaqs.map((faq, i) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
