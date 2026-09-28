import { Reveal } from '../ui/Reveal'

const steps = [
  {
    number: '01',
    title: 'Book',
    detail: 'Choose a convenient appointment time.',
  },
  {
    number: '02',
    title: 'Meet',
    detail: 'Discuss your goals and concerns with your dentist.',
  },
  {
    number: '03',
    title: 'Plan',
    detail: 'Receive a personalized treatment plan.',
  },
  {
    number: '04',
    title: 'Smile',
    detail: 'Continue your care with confidence.',
  },
]

export function PatientJourney() {
  return (
    <section className="border-b border-line bg-ivory-deep/60 py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Your Visit, Simplified</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.08] text-ink md:text-5xl">
            Four steps to a healthier smile.
          </h2>
        </Reveal>

        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-line" aria-hidden="true" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.12}>
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-ivory font-serif text-sm font-light text-ink">
                      {step.number}
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-light text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-0 md:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-line" aria-hidden="true" />
                )}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink bg-ivory font-serif text-sm font-light text-ink">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-xl font-light text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
