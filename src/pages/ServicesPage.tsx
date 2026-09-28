import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ServiceIcon } from '../components/ui/ServiceIcon'
import { ClosingCTA } from '../components/home/ClosingCTA'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Care for every stage of your smile."
        copy="Six areas of dentistry, one standard of care. Every treatment is planned digitally, priced transparently, and delivered without rush."
      />

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.08} y={16}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-white md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sage-deep transition-colors duration-300 group-hover:text-ink">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-serif text-sm font-light text-ink-faint">0{i + 1}</span>
                </div>
                <h2 className="mt-8 font-serif text-3xl font-light text-ink">{service.name}</h2>
                <p className="mt-1 text-sm italic text-ink-faint">{service.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink">
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
      </section>

      <ClosingCTA />
    </>
  )
}
