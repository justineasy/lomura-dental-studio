import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { formatDateLong, submitBooking } from '../../lib/booking'
import type { BookingConfirmation } from '../../lib/booking'
import type { PatientInfo } from './StepDetails'

interface StepConfirmProps {
  service: string
  doctor: string
  date: string
  time: string
  patient: PatientInfo
  onBack: () => void
  onSuccess: (confirmation: BookingConfirmation) => void
}

export function StepConfirm({ service, doctor, date, time, patient, onBack, onSuccess }: StepConfirmProps) {
  const [state, setState] = useState<'idle' | 'submitting' | 'error'>('idle')
  const reduce = useReducedMotion()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const confirmation = await submitBooking({
        serviceSlug: service,
        doctorSlug: doctor,
        date,
        time,
        fullName: patient.fullName,
        email: patient.email,
        phone: patient.phone,
        message: patient.message || undefined,
      })
      onSuccess(confirmation)
    } catch {
      setState('error')
    }
  }

  const rows = [
    { label: 'Service', value: service },
    { label: 'Doctor', value: doctor },
    { label: 'Date', value: formatDateLong(date) },
    { label: 'Time', value: time },
    { label: 'Name', value: patient.fullName },
    { label: 'Email', value: patient.email },
    { label: 'Phone', value: patient.phone },
  ]

  return (
    <form onSubmit={onSubmit}>
      <div className="overflow-hidden rounded-2xl border border-line">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.4 }}
            className={`flex items-start justify-between gap-6 px-6 py-4 ${
              i > 0 ? 'border-t border-line' : ''
            } bg-ivory`}
          >
            <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
              {row.label}
            </span>
            <span className="text-right text-sm font-medium text-ink">{row.value}</span>
          </motion.div>
        ))}
      </div>

      {patient.message && (
        <p className="mt-4 rounded-xl bg-sage-mist/50 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Your note: </span>
          {patient.message}
        </p>
      )}

      {state === 'error' && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4" role="alert">
          <p className="text-sm font-medium text-red-800">We could not confirm your appointment.</p>
          <p className="mt-1 text-sm text-red-700">
            This is usually a temporary issue. Please try again — or call us at +63 (2) 8817 4200
            and we will book you in directly.
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} disabled={state === 'submitting'} className="btn-ghost disabled:opacity-50">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back
        </button>
        <button type="submit" disabled={state === 'submitting'} className="btn-primary h-12 px-8 disabled:opacity-60">
          {state === 'submitting' ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory/30 border-t-ivory" aria-hidden="true" />
              Confirming…
            </>
          ) : (
            'Confirm Appointment'
          )}
        </button>
      </div>
    </form>
  )
}
