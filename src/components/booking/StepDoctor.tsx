import { doctors } from '../../data/doctors'

interface StepDoctorProps {
  selected: string | null
  onSelect: (slug: string) => void
}

export function StepDoctor({ selected, onSelect }: StepDoctorProps) {
  return (
    <div className="grid gap-3" role="radiogroup" aria-label="Choose a doctor">
      {doctors.map((doctor) => {
        const active = selected === doctor.slug
        return (
          <button
            key={doctor.slug}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(doctor.slug)}
            className={`group flex items-center gap-5 rounded-2xl border p-4 text-left transition-all duration-200 md:p-5 ${
              active
                ? 'border-ink bg-ivory shadow-[0_4px_20px_rgba(33,30,25,0.06)]'
                : 'border-line bg-ivory hover:border-ink/30'
            }`}
          >
            <img
              src={doctor.portrait}
              alt=""
              className="h-14 w-14 shrink-0 rounded-full object-cover md:h-16 md:w-16"
              loading="lazy"
            />
            <span className="flex-1">
              <span className="block font-serif text-lg font-light text-ink md:text-xl">
                {doctor.name}
              </span>
              <span className="mt-0.5 block text-xs text-ink-soft md:text-sm">{doctor.role}</span>
            </span>
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
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
      <p className="mt-2 text-xs text-ink-faint">
        Not sure which doctor is right? Choose any — we will match you at confirmation.
      </p>
    </div>
  )
}
