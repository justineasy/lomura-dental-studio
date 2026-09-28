import { services } from '../../data/services'
import { ServiceIcon } from '../ui/ServiceIcon'

interface StepServiceProps {
  selected: string | null
  onSelect: (slug: string) => void
}

export function StepService({ selected, onSelect }: StepServiceProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Choose a service">
      {services.map((service) => {
        const active = selected === service.slug
        return (
          <button
            key={service.slug}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(service.slug)}
            className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
              active
                ? 'border-ink bg-ivory shadow-[0_4px_20px_rgba(33,30,25,0.06)]'
                : 'border-line bg-ivory hover:border-ink/30'
            }`}
          >
            <span
              className={`mt-0.5 transition-colors duration-200 ${
                active ? 'text-ink' : 'text-sage-deep group-hover:text-ink'
              }`}
            >
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block text-[0.9375rem] font-medium text-ink">{service.name}</span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                {service.tagline}
              </span>
            </span>
            <span
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                active ? 'border-ink bg-ink' : 'border-line'
              }`}
              aria-hidden="true"
            >
              {active && (
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-ivory" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
