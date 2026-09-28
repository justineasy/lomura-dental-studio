import { Reveal } from '../ui/Reveal'

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    detail:
      'A conversation first. What brought you in, what you would like to change, and what has put you off in the past. Nothing happens on day one unless you want it to.',
  },
  {
    number: '02',
    title: 'Build your treatment plan',
    detail:
      'Examination, imaging if needed, and a written plan with transparent pricing. You will know the options, the sequence, and the cost before any treatment begins.',
  },
  {
    number: '03',
    title: 'Feel confident moving forward',
    detail:
      'Treatment at your pace, with time built in for questions. And when it is done, a recall schedule that keeps everything on track without you having to think about it.',
  },
]

export function Experience() {
  return (
    <section className="bg-ink py-24 text-ivory md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow !text-sage">Your visit, step by step</p>
            <h2 className="mt-4 text-4xl leading-[1.08] md:text-5xl">
              What a visit actually feels like.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/60">
              No mystery, no surprises, no being left in a gown wondering what happens next. This is
              the arc of every appointment at Lumora.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                alt="A dentist consulting with a patient"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="group border-t border-ivory/15 py-8 transition-colors duration-300 first:border-t-0 first:pt-0 hover:border-ivory/30 md:py-9">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-sm font-light text-sage transition-colors duration-300 group-hover:text-ivory">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl font-light md:text-[1.7rem]">{step.title}</h3>
                </div>
                <p className="mt-3 max-w-lg pl-10 text-sm leading-relaxed text-ivory/60 md:pl-12">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="border-t border-ivory/15 pt-8">
              <p className="text-sm text-ivory/50">
                Most treatment plans are completed within two to four visits.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
