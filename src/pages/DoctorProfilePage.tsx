import { Link, Navigate, useParams } from 'react-router-dom'
import { getDoctor, doctors } from '../data/doctors'
import { Reveal } from '../components/ui/Reveal'

export function DoctorProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const doctor = getDoctor(slug ?? '')

  if (!doctor) {
    return <Navigate to="/doctors" replace />
  }

  const others = doctors.filter((d) => d.slug !== doctor.slug)

  return (
    <>
      <section className="shell grid gap-12 pb-20 pt-36 md:pt-44 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={doctor.portrait}
              alt={`Portrait of ${doctor.name}`}
              className="aspect-[4/4.4] w-full object-cover object-[center_18%]"
              loading="eager"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs text-ink-faint">
              <Link to="/doctors" className="transition-colors hover:text-ink">
                Our Doctors
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-soft">{doctor.name}</span>
            </nav>
            <h1 className="mt-4 text-5xl font-light leading-[1.05] text-ink md:text-6xl">
              {doctor.name}
            </h1>
            <p className="mt-3 text-lg text-ink-soft">{doctor.role}</p>
            <p className="mt-1 text-sm text-ink-faint">{doctor.years} years of experience</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink-soft">
              {doctor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                Education & credentials
              </h2>
              <ul className="mt-4 space-y-2.5">
                {doctor.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/book" className="btn-primary h-12 px-7">
                Book with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
              </Link>
              <Link to="/contact" className="btn-outline h-12 px-7">
                Contact the Studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                  Areas of expertise
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {doctor.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                  Professional memberships
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {doctor.memberships.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div>
                <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                  Languages
                </h2>
                <p className="mt-4 text-sm text-ink-soft">{doctor.languages.join(' · ')}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl bg-ivory p-8">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                Approach to patient care
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                {doctor.approach}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell">
          <Reveal>
            <h2 className="text-2xl font-light text-ink md:text-3xl">The rest of the team</h2>
          </Reveal>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.1}>
                <Link to={`/doctors/${d.slug}`} className="group flex items-center gap-5">
                  <div className="w-24 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={d.portrait}
                      alt={`Portrait of ${d.name}`}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-light text-ink transition-colors group-hover:text-sage-deep">
                      {d.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-soft">{d.shortRole}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
