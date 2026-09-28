import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'
import { ServiceIcon } from '../ui/ServiceIcon'

export function Services() {
  return (
    <section className="border-y border-line bg-ivory-deep/60 py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="What we do"
            title="Care for every stage of your smile."
            copy="From routine check-ups to full smile rehabilitation — one team, one plan, no being passed around."
          />
          <Reveal delay={0.1}>
            <Link to="/services" className="link-underline">
              View all services
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08} y={16}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col bg-ivory p-7 transition-colors duration-300 hover:bg-white md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sage-deep transition-colors duration-300 group-hover:text-ink">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-serif text-sm font-light text-ink-faint">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-light text-ink">{service.name}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <p className="mt-4 text-xs text-ink-faint">{service.priceRange}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink">
                  <span className="relative">
                    Learn more
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
