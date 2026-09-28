import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { clinic } from '../data/clinic'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const reduce = useReducedMotion()

  const validate = () => {
    const next: Record<string, string> = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'Please tell us a little more.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setState('sending')
    // Simulated send — replace with a real endpoint in production.
    setTimeout(() => setState('sent'), 1100)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === 'sent' ? (
          <motion.div
            key="sent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            className="flex min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-line bg-ivory p-10 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h3 className="mt-5 font-serif text-2xl font-light text-ink">Message received.</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
              Thank you, {form.name.split(' ')[0]}. We will reply within one working day.
            </p>
            <button
              type="button"
              onClick={() => {
                setState('idle')
                setForm({ name: '', email: '', message: '' })
              }}
              className="btn-ghost mt-6"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-line bg-ivory p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  className="field-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-700">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="field-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="field-label">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                className="field-input resize-none"
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-700">{errors.message}</p>}
            </div>
            {state === 'error' && (
              <p className="mt-4 text-sm text-red-700">
                Something went wrong. Please try again, or call us directly.
              </p>
            )}
            <button
              type="submit"
              disabled={state === 'sending'}
              className="btn-primary mt-6 h-12 w-full disabled:opacity-60"
            >
              {state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you."
        copy="Questions about treatment, pricing, or whether we are the right fit — send a message or call. A real person answers."
      />

      <section className="shell grid gap-12 pb-24 md:pb-32 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="space-y-10">
          <Reveal>
            <div>
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                Visit us
              </h2>
              <address className="mt-4 text-base not-italic leading-relaxed text-ink">
                {clinic.address.street}
                <br />
                {clinic.address.city}, {clinic.address.region} {clinic.address.zip}
                <br />
                {clinic.address.country}
              </address>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                Get in touch
              </h2>
              <p className="mt-4 space-y-2 text-base">
                <a
                  href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
                  className="block text-ink transition-colors hover:text-sage-deep"
                >
                  {clinic.phone}
                </a>
                <a
                  href={`tel:${clinic.mobile.replace(/[^+\d]/g, '')}`}
                  className="block text-ink transition-colors hover:text-sage-deep"
                >
                  {clinic.mobile}
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className="block text-ink transition-colors hover:text-sage-deep"
                >
                  {clinic.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                Opening hours
              </h2>
              <dl className="mt-4 space-y-2">
                {clinic.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 border-b border-line pb-2 text-sm">
                    <dt className="text-ink-soft">{h.days}</dt>
                    <dd className="text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map showing the location of Lumora Dental Studio in Makati City"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0150%2C14.5450%2C121.0350%2C14.5600&layer=mapnik&marker=14.5522%2C121.0250"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-ink px-8 py-14 text-ivory md:flex-row md:items-center md:px-14">
            <div>
              <h2 className="font-serif text-3xl font-light md:text-4xl">
                The fastest way to book is often the phone.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/60">
                Call us and we will find a time that suits — or book online in about two minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/book"
                className="btn h-12 bg-ivory px-7 text-ink transition-all duration-300 hover:bg-white active:scale-[0.98]"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
                className="btn h-12 border border-ivory/30 px-7 text-ivory transition-all duration-300 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.98]"
              >
                {clinic.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
