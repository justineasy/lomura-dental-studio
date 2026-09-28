import { Reveal } from '../ui/Reveal'

const reasons = [
  {
    number: '01',
    title: 'Personalized Care',
    detail:
      'Every treatment begins with understanding what you actually need. We take the time to listen, examine thoroughly, and plan around your goals — not around a production schedule.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Modern Dentistry',
    detail:
      'Digital tools and contemporary techniques help us plan treatment with greater precision. From 3D imaging to same-day ceramics, technology serves the outcome — never the other way around.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'A Calmer Experience',
    detail:
      'From the reception area to the treatment room, every detail is designed around your comfort. Natural light, considered materials, and appointments that start when you sit down — not ten minutes later.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Trusted Expertise',
    detail:
      'Experienced clinicians with focused specialties and a commitment to thoughtful care. Our doctors trained at the University of the Philippines and continue to practice internationally.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  },
]

export function WhyLumora() {
  return (
    <section id="why-lumora" className="border-b border-line bg-ivory py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Why Patients Choose Lumora</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.08] text-ink md:text-5xl">
            Because great dental care should feel different.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out-soft hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -top-4 -left-2 font-serif text-6xl font-light text-ink/10 md:text-7xl">
                  {reason.number}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <span className="font-serif text-sm font-light text-sage-deep">{reason.number}</span>
                  <h3 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                    {reason.detail}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
