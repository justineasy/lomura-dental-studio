import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="shell flex min-h-[calc(100vh-4.5rem)] items-center justify-center pb-20 pt-32">
      <div className="text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 font-serif text-5xl font-light text-ink md:text-6xl">404</h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
          The page you are looking for does not exist. It may have been moved, or the link may be
          wrong.
        </p>
        <Link to="/" className="btn-primary mt-8 h-12 px-7">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
