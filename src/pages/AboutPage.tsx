import { Link } from 'react-router-dom'
import { doctors } from '../data/doctors'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ClosingCTA } from '../components/home/ClosingCTA'

const values = [
  {
    title: 'Plan first, drill second',
    detail:
      'Every case begins with a plan — digitally where possible. If we cannot explain why a treatment is worth doing, we do not do it.',
  },
  {
    title: 'Time is part of the treatment',
    detail:
      'Appointments are scheduled with room to breathe. Rushing is how mistakes happen, and how anxiety builds.',
  },
  {
    title: 'Honest over profitable',
    detail:
      'We will tell you when a treatment is not needed, when a cheaper option will do, and when to simply watch and wait.',
  },
  {
    title: 'Quietly excellent',
    detail:
      'No gimmicks, no upselling, no loyalty points. Just dentistry that works, in a space that calms you down.',
  },
]

const tech = [
  {
    title: 'Digital imaging & CBCT',
    detail: '3D scans that show bone, nerve, and tissue in a single appointment — with a fraction of the radiation of traditional CT.',
  },
  {
    title: 'Intraoral scanning',
    detail: 'No messy impressions. A digital model of your mouth in minutes, used for crowns, aligners, and smile design.',
  },
  {
    title: 'Same-day ceramics',
    detail: 'In-house milling means many crowns and veneers are designed, made, and fitted in a single visit.',
  },
  {
    title: 'Microscope-assisted dentistry',
    detail: 'Surgical-grade magnification for the precision work that determines how long a restoration lasts.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="A practice built around a simple idea."
        copy="That dentistry should feel considered — in how it is planned, how it is delivered, and how it is priced."
      />

      {/* Philosophy */}
      <section className="shell grid gap-12 pb-24 md:pb-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
            Our philosophy
          </h2>
          <div className="mt-6 max-w-md space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Lumora opened in 2019 with three treatment rooms and a conviction: that a dental
              practice could be excellent without being exhausting. That you could use the best
              modern techniques without the atmosphere of a production line.
            </p>
            <p>
              Seven years on, the conviction has not changed. We are still small on purpose. We take
              fewer patients, spend more time with each one, and measure ourselves by outcomes —
              not by how many chairs we can fill in a day.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} y={16}>
              <div className="h-full bg-ivory p-7">
                <span className="font-serif text-sm font-light text-sage-deep">0{i + 1}</span>
                <h3 className="mt-4 text-[0.9375rem] font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The clinic */}
      <section className="border-y border-line bg-ivory-deep/60 py-24 md:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                alt="Consultation room with natural light and warm materials"
                className="aspect-[4/3.2] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden w-40 overflow-hidden rounded-xl border border-line md:block">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"
                alt="Studio interior detail"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">The clinic</p>
              <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
                Designed to lower your heart rate.
              </h2>
              <div className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  The studio occupies the 28th floor of One Pacific Place in Makati City, with floor-to-ceiling
                  windows overlooking the Makati skyline. We kept the natural light and spent our budget where it matters:
                  on the chairs, the imaging equipment, and the acoustics.
                </p>
                <p>
                  Treatment rooms face the city, not the corridor. There is no antiseptic smell —
                  we use hospital-grade ventilation without the institutional everything. Most
                  patients notice it within a minute of sitting down.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Technology</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-[1.08] text-ink md:text-5xl">
            Modern where it counts, human everywhere else.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {tech.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 0.08} y={16}>
              <div className="h-full bg-ivory p-8">
                <h3 className="text-[0.9375rem] font-medium text-ink">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line bg-ivory-deep/60 py-24 md:py-32">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">The team</p>
              <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
                The people behind the practice.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/doctors" className="link-underline">
                Meet the doctors
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.slug} delay={i * 0.1}>
                <Link to={`/doctors/${doctor.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={doctor.portrait}
                      alt={`Portrait of ${doctor.name}`}
                      className="aspect-[4/4.4] w-full object-cover object-[center_18%] transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-light text-ink transition-colors group-hover:text-sage-deep">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{doctor.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-12 max-w-xl text-sm leading-relaxed text-ink-soft">
              Behind the dentists: four hygienists, two treatment coordinators, and a practice
              manager who has been with us since the first week. Most of our team has been here for
              years — which is why you will see the same faces every visit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Patient experience */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Patient experience</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
              What makes it different.
            </h2>
            <div className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                It is hard to point at one thing. It is the appointment that starts when you sit
                down, not ten minutes later. The treatment plan that arrives by email before you
                have left the building. The phone call the evening after a difficult procedure.
              </p>
              <p>
                We ask every new patient the same question at their second visit: what would you
                change? The answers shape how we run the practice — and they have changed it more
                than once.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1400&auto=format&fit=crop"
                alt="A dentist consulting with a patient in a calm treatment room"
                className="aspect-[4/3.2] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
