import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { getAvailableTimes } from '../../lib/booking'
import type { TimeSlot } from '../../lib/booking'

interface StepTimeProps {
  doctorSlug: string
  date: string
  selected: string | null
  onSelect: (time: string) => void
}

function TimeSlotSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-12 animate-pulse rounded-xl bg-ink/[0.05]" />
      ))}
    </div>
  )
}

export function StepTime({ doctorSlug, date, selected, onSelect }: StepTimeProps) {
  const [slots, setSlots] = useState<TimeSlot[] | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    let cancelled = false
    setSlots(null)
    getAvailableTimes(doctorSlug, date).then((result) => {
      if (!cancelled) setSlots(result)
    })
    return () => {
      cancelled = true
    }
  }, [doctorSlug, date])

  if (slots === null) {
    return (
      <div aria-live="polite" aria-busy="true">
        <p className="mb-3 text-sm text-ink-soft">Checking availability…</p>
        <TimeSlotSkeleton />
      </div>
    )
  }

  if (slots.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-ivory p-10 text-center">
        <p className="font-serif text-xl font-light text-ink">No appointments on this day.</p>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
          This day is fully booked or the clinic is closed. Please choose another date from the
          previous step.
        </p>
      </div>
    )
  }

  const anyAvailable = slots.some((s) => s.available)

  if (!anyAvailable) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-ivory p-10 text-center">
        <p className="font-serif text-xl font-light text-ink">Fully booked.</p>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
          All remaining times on this date have been taken. Please select another day.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4" role="radiogroup" aria-label="Choose a time">
      {slots.map((slot) => {
        const active = selected === slot.time
        return (
          <motion.button
            key={slot.id}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={!slot.available}
            onClick={() => onSelect(slot.time)}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            className={`flex h-12 items-center justify-center rounded-xl border text-sm transition-all duration-150 ${
              active
                ? 'border-ink bg-ink font-medium text-ivory'
                : slot.available
                  ? 'border-line bg-ivory text-ink hover:border-ink/40'
                  : 'cursor-not-allowed border-transparent bg-ink/[0.04] text-ink-faint/50 line-through'
            }`}
          >
            {slot.time}
          </motion.button>
        )
      })}
    </div>
  )
}
