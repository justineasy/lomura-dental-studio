import { Link } from 'react-router-dom'
import { clinic } from '../../data/clinic'
import { Reveal } from '../ui/Reveal'

export function ClosingCTA() {
  return (
    <section className="shell pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-20 text-center text-ivory md:py-28">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-beige/10 blur-3xl"
            aria-hidden="true"
          />
          <p className="eyebrow !text-sage">Book an Appointment</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-light leading-[1.08] md:text-6xl">
            Your next appointment starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory/60">
            Tell us what you need and our team will help you find the right next step.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="btn h-12 bg-ivory px-7 text-ink transition-all duration-300 hover:bg-white active:scale-[0.98]"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
              className="btn h-12 border border-ivory/30 px-7 text-ivory transition-all duration-300 hover:border-ivory/60 hover:bg-ivory/5 active:scale-[0.98]"
            >
              Call the Clinic
            </a>
          </div>
          <p className="mt-6 text-sm text-ivory/50">
            <a
              href={`tel:${clinic.phone.replace(/[^+\d]/g, '')}`}
              className="font-medium text-ivory/70 underline underline-offset-2 transition-colors hover:text-ivory"
            >
              {clinic.phone}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
