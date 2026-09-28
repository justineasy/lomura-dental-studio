import { clinic } from '../../data/clinic'
import { Reveal } from '../ui/Reveal'

export function Location() {
  return (
    <section className="border-b border-line bg-ivory py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">In the Heart of Makati</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.08] text-ink md:text-5xl">
            Find us in the city's most connected district.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map showing the location of Lumora Dental Studio in Makati City"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.0150%2C14.5450%2C121.0350%2C14.5600&layer=mapnik&marker=14.5522%2C121.0250"
                className="h-80 w-full md:h-96"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Address
                  </h3>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-ink">
                    {clinic.address.street}
                    <br />
                    {clinic.address.city}, {clinic.address.region} {clinic.address.zip}
                    <br />
                    {clinic.address.country}
                  </address>
                </div>

                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Contact
                  </h3>
                  <p className="mt-3 space-y-1.5 text-sm">
                    <a
                      href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
                      className="block text-ink transition-colors hover:text-sage-deep"
                    >
                      {clinic.phone}
                    </a>
                    <a
                      href={`tel:${clinic.mobile.replace(/[^+\d]/g, '')}`}
                      className="block text-ink transition-colors hover:text-sage-deep"
                    >
                      {clinic.mobile}
                    </a>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="block text-ink transition-colors hover:text-sage-deep"
                    >
                      {clinic.email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Opening Hours
                  </h3>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    {clinic.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4">
                        <dt className="text-ink-soft">{h.days}</dt>
                        <dd className="text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-ink-faint">
                    Getting Here
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {clinic.landmark}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {clinic.parking}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-ivory-deep/60 p-6">
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">Nearest landmarks:</span> Greenbelt (5 min
                  walk), Ayala Triangle Gardens (7 min walk), Glorietta (10 min walk). MRT Ayala
                  station is a 12-minute walk or a short jeepney ride.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
