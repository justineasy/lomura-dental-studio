import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { doctors } from '../data/doctors'
import { services } from '../data/services'
import { formatDateLong } from '../lib/booking'
import type { BookingConfirmation } from '../lib/booking'
import { Calendar } from '../components/booking/Calendar'
import { StepService } from '../components/booking/StepService'
import { StepDoctor } from '../components/booking/StepDoctor'
import { StepTime } from '../components/booking/StepTime'
import { StepDetails } from '../components/booking/StepDetails'
import type { PatientInfo } from '../components/booking/StepDetails'
import { StepConfirm } from '../components/booking/StepConfirm'
import { clinic } from '../data/clinic'

const stepLabels = ['Service', 'Doctor', 'Date', 'Time', 'Details', 'Confirm']

const emptyPatient: PatientInfo = { fullName: '', email: '', phone: '', message: '' }

function SummaryRow({ label, value, placeholder }: { label: string; value?: string; placeholder: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ivory/40">
        {label}
      </span>
      <span className={`text-right text-sm ${value ? 'text-ivory' : 'text-ivory/30'}`}>
        {value ?? placeholder}
      </span>
    </div>
  )
}

export function BookingPage() {
  const [step, setStep] = useState(1)
  const [serviceSlug, setServiceSlug] = useState<string | null>(null)
  const [doctorSlug, setDoctorSlug] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [patient, setPatient] = useState<PatientInfo>(emptyPatient)
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null)
  const reduce = useReducedMotion()

  const service = useMemo(() => services.find((s) => s.slug === serviceSlug), [serviceSlug])
  const doctor = useMemo(() => doctors.find((d) => d.slug === doctorSlug), [doctorSlug])

  const canContinue =
    (step === 1 && !!serviceSlug) ||
    (step === 2 && !!doctorSlug) ||
    (step === 3 && !!date) ||
    (step === 4 && !!time) ||
    step >= 5

  const goNext = () => canContinue && setStep((s) => Math.min(s + 1, 6))
  const goBack = () => setStep((s) => Math.max(s - 1, 1))

  const reset = () => {
    setStep(1)
    setServiceSlug(null)
    setDoctorSlug(null)
    setDate(null)
    setTime(null)
    setPatient(emptyPatient)
    setConfirmation(null)
  }

  /* ---------- Success screen ---------- */
  if (confirmation) {
    return (
      <section className="shell flex min-h-[calc(100vh-4.5rem)] items-center pb-20 pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto w-full max-w-xl text-center"
        >
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-mist text-sage-deep">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="eyebrow mt-8">Appointment confirmed</p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            See you soon, {confirmation.patientName.split(' ')[0]}.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Your appointment is booked. We have sent a confirmation to your email with everything
            you need to know before your visit.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line text-left">
            {[
              { label: 'Reference', value: confirmation.reference },
              { label: 'Service', value: confirmation.service },
              { label: 'Doctor', value: confirmation.doctor },
              { label: 'Date', value: formatDateLong(confirmation.date) },
              { label: 'Time', value: confirmation.time },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between gap-6 px-6 py-4 ${
                  i > 0 ? 'border-t border-line' : ''
                } bg-ivory`}
              >
                <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                  {row.label}
                </span>
                <span className="text-right text-sm font-medium text-ink">{row.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink-faint">
            Need to change something? Call us at{' '}
            <a href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`} className="font-medium text-ink underline underline-offset-2">
              {clinic.phone}
            </a>{' '}
            at least 24 hours in advance. For same-day changes, try our mobile at{' '}
            <a href={`tel:${clinic.mobile.replace(/[^+\d]/g, '')}`} className="font-medium text-ink underline underline-offset-2">
              {clinic.mobile}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-outline h-12 px-7">
              Back to Home
            </Link>
            <button type="button" onClick={reset} className="btn-ghost h-12 px-7">
              Book Another Appointment
            </button>
          </div>
        </motion.div>
      </section>
    )
  }

  /* ---------- Flow ---------- */
  return (
    <section className="shell pb-24 pt-32 md:pt-40">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: summary */}
        <div>
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Book an appointment</p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-[1.08] text-ink md:text-5xl">
              Six quick steps.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Choose your treatment, pick a time that suits, and we will take care of the rest.
              It takes about two minutes.
            </p>

            {/* Progress */}
            <ol className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Booking progress">
              {stepLabels.map((label, i) => {
                const n = i + 1
                const done = n < step
                const current = n === step
                return (
                  <li key={label} className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.625rem] font-semibold transition-colors duration-300 ${
                        done
                          ? 'bg-sage text-ivory'
                          : current
                            ? 'bg-ink text-ivory'
                            : 'border border-line text-ink-faint'
                      }`}
                      aria-current={current ? 'step' : undefined}
                    >
                      {done ? (
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        n
                      )}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        current ? 'text-ink' : done ? 'text-ink-soft' : 'text-ink-faint'
                      }`}
                    >
                      {label}
                    </span>
                  </li>
                )
              })}
            </ol>

            {/* Live summary */}
            <div className="mt-10 rounded-2xl bg-ink p-6 text-ivory md:p-7">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ivory/40">
                Your appointment
              </p>
              <div className="mt-3">
                <SummaryRow label="Service" value={service?.name} placeholder="Not selected" />
                <SummaryRow label="Doctor" value={doctor?.name} placeholder="Not selected" />
                <SummaryRow
                  label="Date"
                  value={date ? formatDateLong(date) : undefined}
                  placeholder="Not selected"
                />
                <SummaryRow label="Time" value={time ?? undefined} placeholder="Not selected" />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ivory/40">
                {clinic.address.street}, {clinic.address.city}
              </p>
            </div>
          </div>
        </div>

        {/* Right: steps */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {step === 1 && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    What do you need?
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    Choose the treatment you are booking. Not sure? Book a consultation.
                  </p>
                  <div className="mt-7">
                    <StepService
                      selected={serviceSlug}
                      onSelect={(slug) => {
                        setServiceSlug(slug)
                        setTime(null)
                      }}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    Who would you like to see?
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    All three of our dentists are excellent. Choose by specialty or by face.
                  </p>
                  <div className="mt-7">
                    <StepDoctor
                      selected={doctorSlug}
                      onSelect={(slug) => {
                        setDoctorSlug(slug)
                        setTime(null)
                      }}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    Pick a day.
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    We are open Monday to Saturday, with Sunday appointments by arrangement.
                  </p>
                  <div className="mt-7">
                    <Calendar
                      selected={date}
                      onSelect={(iso) => {
                        setDate(iso)
                        setTime(null)
                      }}
                    />
                  </div>
                </div>
              )}

              {step === 4 && date && doctorSlug && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    Pick a time.
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    Available times for {formatDateLong(date)}.
                  </p>
                  <div className="mt-7">
                    <StepTime
                      doctorSlug={doctorSlug}
                      date={date}
                      selected={time}
                      onSelect={setTime}
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    Your details.
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    So we can confirm your appointment and send you a reminder.
                  </p>
                  <div className="mt-7">
                    <StepDetails
                      value={patient}
                      onChange={setPatient}
                      onBack={goBack}
                      onNext={goNext}
                    />
                  </div>
                </div>
              )}

              {step === 6 && service && doctor && date && time && (
                <div>
                  <h2 className="font-serif text-2xl font-light text-ink md:text-3xl">
                    One last check.
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    Review your appointment below. You can still change anything.
                  </p>
                  <div className="mt-7">
                    <StepConfirm
                      service={service.name}
                      doctor={doctor.name}
                      date={date}
                      time={time}
                      patient={patient}
                      onBack={goBack}
                      onSuccess={setConfirmation}
                    />
                  </div>
                </div>
              )}

              {/* Back / continue for steps 1-4 */}
              {step < 5 && (
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1}
                    className="btn-ghost disabled:invisible"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M11 18l-6-6 6-6" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canContinue}
                    className="btn-primary h-12 px-8 disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
