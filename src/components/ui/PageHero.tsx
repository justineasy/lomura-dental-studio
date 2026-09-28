import { Reveal } from './Reveal'

interface PageHeroProps {
  eyebrow: string
  title: string
  copy?: string
}

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="shell pt-36 pb-16 md:pt-44 md:pb-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl leading-[1.05] text-ink">{title}</h1>
        {copy && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy}</p>}
      </Reveal>
    </section>
  )
}
