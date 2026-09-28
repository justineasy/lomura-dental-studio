import { Reveal } from '../ui/Reveal'

const points = [
  { label: 'New patients welcome', detail: 'Book online or by phone' },
  { label: 'Modern treatment rooms', detail: 'Designed for comfort' },
  { label: 'Personalized treatment plans', detail: 'Written, priced, explained' },
]

export function Intro() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">A different kind of dental visit</p>
            <h2 className="mt-4 max-w-lg text-4xl leading-[1.08] text-ink md:text-5xl">
              Modern dentistry without the clinical feel.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Lumora began with a simple observation: people do not avoid the dentist because they
                do not care about their teeth. They avoid it because the experience has always felt
                rushed, clinical, and a little bit cold.
              </p>
              <p>
                So we built the practice we would want to visit. Appointments that start on time.
                Treatment rooms with natural light and considered materials. Treatment plans that are
                written down, priced transparently, and explained before anything begins.
              </p>
              <p>
                The dentistry itself is thoroughly modern — digital imaging, 3D-planned implants,
                same-day crowns — but the way it is delivered is deliberately unhurried.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {points.map((p) => (
                <li key={p.label} className="bg-ivory p-5">
                  <p className="text-sm font-medium text-ink">{p.label}</p>
                  <p className="mt-1 text-[0.8125rem] text-ink-faint">{p.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Warm, minimal interior detail of the Lumora studio"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out-soft hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between text-xs text-ink-faint">
            <span className="uppercase tracking-eyebrow">The Studio</span>
            <span>Makati City, Metro Manila</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
