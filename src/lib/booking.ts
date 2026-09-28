import { doctors } from '../data/doctors'
import { services } from '../data/services'

/**
 * Mock scheduling layer.
 *
 * Every function here is async and simulates network latency so the UI
 * exercises real loading states. To connect a real scheduling API,
 * replace the bodies of these functions with fetch() calls — the
 * signatures and return types are designed to stay the same.
 */

export interface TimeSlot {
  id: string
  time: string
  available: boolean
}

export interface BookingRequest {
  serviceSlug: string
  doctorSlug: string
  date: string // ISO yyyy-mm-dd
  time: string
  fullName: string
  email: string
  phone: string
  message?: string
}

export interface BookingConfirmation {
  reference: string
  service: string
  doctor: string
  date: string
  time: string
  patientName: string
}

const ALL_TIMES = ['08:30', '09:45', '11:00', '13:15', '14:30', '15:45', '17:00']

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Deterministic pseudo-random so "booked" slots are stable between renders. */
function seededRandom(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i)
    h |= 0
  }
  return () => {
    h = (h * 1103515245 + 12345) & 0x7fffffff
    return h / 0x7fffffff
  }
}

export async function getAvailableTimes(doctorSlug: string, date: string): Promise<TimeSlot[]> {
  await delay(450)

  const day = new Date(date + 'T12:00:00').getDay()

  // Sundays: clinic closed — exercises the empty state.
  if (day === 0) return []

  // Dr. Villanueva does not run orthodontic clinics on Fridays.
  if (doctorSlug === 'andrea-villanueva' && day === 5) return []

  // A couple of dates are fully booked — exercises the "no times" state.
  const dayOfMonth = Number(date.slice(8, 10))
  if (dayOfMonth % 9 === 0) return []

  const rand = seededRandom(`${doctorSlug}-${date}`)
  return ALL_TIMES.map((time) => ({
    id: `${date}-${time}`,
    time,
    available: rand() > 0.35,
  }))
}

export async function submitBooking(request: BookingRequest): Promise<BookingConfirmation> {
  await delay(1200)

  // Simulated network/validation failure so the error state is reachable.
  // In production, this is where a non-2xx response would throw.
  if (Math.random() < 0.08) {
    throw new Error('We could not confirm your appointment. Please try again.')
  }

  const service = services.find((s) => s.slug === request.serviceSlug)
  const doctor = doctors.find((d) => d.slug === request.doctorSlug)

  return {
    reference: `LUM-${Date.now().toString(36).toUpperCase()}`,
    service: service?.name ?? request.serviceSlug,
    doctor: doctor?.name ?? request.doctorSlug,
    date: request.date,
    time: request.time,
    patientName: request.fullName,
  }
}

export function formatDateLong(iso: string): string {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
