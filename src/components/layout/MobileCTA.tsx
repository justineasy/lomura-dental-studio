import { Link } from 'react-router-dom'
import { clinic } from '../../data/clinic'

export function MobileCTA() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
      <div className="flex gap-2 rounded-2xl border border-line bg-ivory/95 p-2 shadow-[0_8px_30px_rgba(33,30,25,0.15)] backdrop-blur-md">
        <a
          href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
          className="btn flex-1 border border-line text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </a>
        <Link to="/book" className="btn-primary flex-1">
          Book an Appointment
        </Link>
      </div>
    </div>
  )
}
