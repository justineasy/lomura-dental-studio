import { Reveal } from '../ui/Reveal'

const points = [
  {
    title: 'Clear communication',
    detail:
      'Every treatment is explained in plain language, with written plans and transparent pricing. You will never leave wondering what was done or why.',
  },
  {
    title: 'Personal treatment plans',
    detail:
      'Your plan is built around your goals, your timeline, and your budget. We present options, not pressure — and we respect whatever you decide.',
  },
  {
    title: 'Follow-up care',
    detail:
      'We call the evening after a difficult procedure. We check in at every recall. And if something is not right, we see you promptly — no charge for worry.',
  },
  {
    title: 'Transparent recommendations',
    detail:
      'We will tell you when a treatment is not needed, when a cheaper option will do, and when to simply watch and wait. Honest advice is the foundation of trust.',
  },
]

export function WhyPatientsReturn() {
  return (
    <section id="patient-experience" className="border-b border-line bg-ivory-deep/60 py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Why Patients Return</p>
              <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
                Care that continues beyond the appointment.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                Most of our new patients arrive by referral. That does not happen because of
                advertising — it happens because of what happens after the treatment is done.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                  alt="A dentist consulting with a patient in a calm treatment room"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="group border-t border-line py-8 transition-colors duration-300 first:border-t-0 first:pt-0 hover:border-ink/20 md:py-9">
                  <div className="flex items-baseline gap-6">
                    <span className="font-serif text-sm font-light text-sage-deep">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-ink md:text-[1.7rem]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-lg pl-10 text-sm leading-relaxed text-ink-soft md:pl-12">
                    {point.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
