import { Reveal } from '../ui/Reveal'

const stats = [
  { value: '5.0', label: 'Patient Rating', suffix: '★★★★★' },
  { value: '15+', label: 'Years of Combined Experience' },
  { value: '1,000+', label: 'Patients Cared For' },
  { value: 'Modern', label: 'Digital Dentistry' },
]

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="shell py-12 md:py-16">
        <Reveal>
          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
            Private Dental Care in Makati
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-3xl font-light text-ink md:text-4xl">
                {stat.value}
              </p>
              {stat.suffix && (
                <p className="mt-1 text-xs tracking-wider text-sage">{stat.suffix}</p>
              )}
              <p className="mt-2 text-[0.8125rem] text-ink-soft">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
