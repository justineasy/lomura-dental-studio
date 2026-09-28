import { useState } from 'react'
import type { FormEvent } from 'react'

export interface PatientInfo {
  fullName: string
  email: string
  phone: string
  message: string
}

interface StepDetailsProps {
  value: PatientInfo
  onChange: (info: PatientInfo) => void
  onBack: () => void
  onNext: () => void
}

export function StepDetails({ value, onChange, onBack, onNext }: StepDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const next: Record<string, string> = {}
    if (value.fullName.trim().length < 2) next.fullName = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) next.email = 'Please enter a valid email address.'
    if (value.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) onNext()
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className="field-label">
            Full name
          </label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            className="field-input"
            placeholder="Jane Cooper"
            value={value.fullName}
            onChange={(e) => onChange({ ...value, fullName: e.target.value })}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-700">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="booking-phone" className="field-label">
            Phone
          </label>
          <input
            id="booking-phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+63 917 555 0100"
            value={value.phone}
            onChange={(e) => onChange({ ...value, phone: e.target.value })}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-700">{errors.phone}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="booking-email" className="field-label">
          Email
        </label>
        <input
          id="booking-email"
          type="email"
          autoComplete="email"
          className="field-input"
          placeholder="you@example.com"
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>}
      </div>
      <div className="mt-5">
        <label htmlFor="booking-message" className="field-label">
          Anything we should know? <span className="font-normal text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="booking-message"
          rows={4}
          className="field-input resize-none"
          placeholder="Anxiety about dental visits, a preference for a specific time of day, questions about a treatment…"
          value={value.message}
          onChange={(e) => onChange({ ...value, message: e.target.value })}
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={onBack} className="btn-ghost">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back
        </button>
        <button type="submit" className="btn-primary h-12 px-8">
          Review Appointment
        </button>
      </div>
    </form>
  )
}
