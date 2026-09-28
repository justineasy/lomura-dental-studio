import { Link } from 'react-router-dom'
import { doctors } from '../../data/doctors'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Doctors() {
  return (
    <section className="border-y border-line bg-ivory-deep/60 py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Meet the team"
            title="Experienced hands. A personal approach."
            copy="Four dentists, one standard: work that is planned carefully, explained honestly, and done once — properly."
          />
          <Reveal delay={0.1}>
            <Link to="/doctors" className="link-underline">
              Meet all doctors
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.slug} delay={i * 0.1}>
              <Link to={`/doctors/${doctor.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={doctor.portrait}
                    alt={`Portrait of ${doctor.name}`}
                    className="aspect-[4/4.6] w-full object-cover object-[center_18%] transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-serif text-xl font-light text-ink transition-colors duration-200 group-hover:text-sage-deep">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{doctor.role}</p>
                  <p className="mt-1 text-xs text-ink-faint">{doctor.years} years of experience</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink">
                    <span className="relative">
                      View Profile
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-300 ease-out-soft group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
