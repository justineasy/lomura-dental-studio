import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface CalendarProps {
  selected: string | null
  onSelect: (iso: string) => void
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function toISO(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const reduce = useReducedMotion()

  const year = view.getFullYear()
  const month = view.getMonth()
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7 // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (Date | null)[] = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

  const canGoPrev = view > new Date(today.getFullYear(), today.getMonth(), 1)
  const canGoNext = view < new Date(today.getFullYear(), today.getMonth() + 4, 1)

  const isDisabled = (d: Date) => {
    const day = d.getDay()
    return d < today || day === 0 // past dates and Sundays
  }

  return (
    <div className="rounded-2xl border border-line bg-ivory p-5 md:p-6">
      <div className="flex items-center justify-between">
        <p className="font-serif text-lg font-light text-ink">
          {MONTHS[month]} <span className="text-ink-faint">{year}</span>
        </p>
        <div className="flex gap-1.5">
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => setView(new Date(year, month - 1, 1))}
            aria-label="Previous month"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink/40 hover:text-ink disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink-soft"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            disabled={!canGoNext}
            onClick={() => setView(new Date(year, month + 1, 1))}
            aria-label="Next month"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink/40 hover:text-ink disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink-soft"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {DAYS.map((d) => (
          <span key={d} className="pb-2 text-[0.625rem] font-semibold uppercase tracking-wider text-ink-faint">
            {d}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`empty-${i}`} />
          const iso = toISO(d)
          const disabled = isDisabled(d)
          const isSelected = selected === iso
          return (
            <motion.button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(iso)}
              whileTap={reduce ? undefined : { scale: 0.92 }}
              aria-label={d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              aria-pressed={isSelected}
              className={`flex aspect-square items-center justify-center rounded-full text-sm transition-colors duration-150 ${
                isSelected
                  ? 'bg-ink font-medium text-ivory'
                  : disabled
                    ? 'text-ink-faint/40'
                    : 'text-ink hover:bg-sage-mist'
              }`}
            >
              {d.getDate()}
            </motion.button>
          )
        })}
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        We are open Monday to Saturday. Sunday appointments by arrangement. Bookings available up to four months ahead.
      </p>
    </div>
  )
}
