import { Link } from 'react-router-dom'
import { clinic } from '../../data/clinic'
import { portfolioContact } from '../../data/portfolio'

const serviceLinks = [
  { label: 'General Dentistry', to: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', to: '/services/cosmetic-dentistry' },
  { label: 'Dental Implants', to: '/services/dental-implants' },
  { label: 'Orthodontics', to: '/services/orthodontics' },
]

const doctorLinks = [
  { label: 'Dr. Sofia Reyes', to: '/doctors/sofia-reyes' },
  { label: 'Dr. Miguel Santos', to: '/doctors/miguel-santos' },
  { label: 'Dr. Andrea Villanueva', to: '/doctors/andrea-villanueva' },
  { label: 'Dr. Daniel Navarro', to: '/doctors/daniel-navarro' },
]

const infoLinks = [
  { label: 'About the Studio', to: '/about' },
  { label: 'Patient Information', to: '/patient-information' },
  { label: 'Book an Appointment', to: '/book' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory-deep">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <p className="font-serif text-2xl font-medium tracking-[0.08em] text-ink">LUMORA</p>
            <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-ink-faint">
              Dental Studio
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              Modern dentistry. Thoughtfully delivered. A premium private dental practice in the
              heart of Makati City, Metro Manila.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Makati City · Metro Manila · Philippines
            </div>
          </div>

          <nav aria-label="Services">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">Services</p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Doctors and information">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">Studio</p>
            <ul className="mt-4 space-y-2.5">
              {doctorLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              {infoLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-soft transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">Visit</p>
            <address className="mt-4 space-y-2.5 text-sm not-italic leading-relaxed text-ink-soft">
              <p>
                {clinic.address.street}
                <br />
                {clinic.address.city}, {clinic.address.region} {clinic.address.zip}
              </p>
              <p>
                <a href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-ink">
                  {clinic.phone}
                </a>
                <br />
                <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-ink">
                  {clinic.email}
                </a>
              </p>
            </address>
            <dl className="mt-5 space-y-1.5 text-sm">
              {clinic.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 text-ink-soft">
                  <dt>{h.days}</dt>
                  <dd className="text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col items-start justify-between gap-4 py-6 text-xs text-ink-faint sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
            <p>© {new Date().getFullYear()} Lumora Dental Studio. All rights reserved.</p>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <p className="text-ink-faint/70">Portfolio Concept Project</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-ink">
              Terms
            </a>
            <a
              href={portfolioContact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 transition-colors hover:text-ink"
            >
              <span>Designed & Developed by {portfolioContact.name}</span>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
