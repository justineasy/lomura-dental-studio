import { portfolioContact } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'

export function GetInTouch() {
  return (
    <section className="border-t border-line bg-ivory py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-ink md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              I design and build modern, high-performance websites for businesses that want a
              stronger digital presence.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col justify-center lg:pl-10">
              <div className="border-l-2 border-ink pl-6">
                <p className="font-serif text-2xl font-light text-ink">{portfolioContact.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{portfolioContact.role}</p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${portfolioContact.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <span>{portfolioContact.phone}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href={`mailto:${portfolioContact.email}`}
                  className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <span>{portfolioContact.email}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href={portfolioContact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <span>View Portfolio</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <a
                href={`mailto:${portfolioContact.email}`}
                className="btn-primary mt-10 h-12 px-7"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
