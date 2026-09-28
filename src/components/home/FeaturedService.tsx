import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'

const points = [
  {
    title: 'Natural-looking results',
    detail:
      'We design around your facial features and existing teeth — not a single idealized tooth shape. The goal is a result that reads as your own.',
  },
  {
    title: 'Personalized planning',
    detail:
      'Every case starts with a digital preview of the proposed outcome. You see the plan, and approve it, before we touch a single tooth.',
  },
  {
    title: 'Modern treatment techniques',
    detail:
      'Minimal-prep and no-prep options, same-day ceramics, and bonding protocols refined over thousands of cases.',
  },
]

export function FeaturedService() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl bg-beige/70 md:block" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1600&auto=format&fit=crop"
                alt="Bright, minimal treatment room used for cosmetic dentistry"
                className="aspect-[4/3.4] w-full object-cover transition-transform duration-700 ease-out-soft hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-xl border border-line md:block">
              <img
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=600&auto=format&fit=crop"
                alt="Dental instruments prepared for a cosmetic procedure"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Featured service</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
              Cosmetic dentistry, quietly done.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
              The best cosmetic work is the kind nobody notices — because it simply looks like you,
              on a good day. That takes planning, restraint, and a steady hand.
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.08 + i * 0.08}>
                <div className="flex gap-5">
                  <span className="mt-1 font-serif text-sm font-light text-sage-deep">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[0.9375rem] font-medium text-ink">{p.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <Link to="/services/cosmetic-dentistry" className="btn-outline mt-10 h-12 px-7">
              Explore Cosmetic Dentistry
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
