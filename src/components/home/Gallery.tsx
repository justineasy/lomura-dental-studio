import { gallery } from '../../data/gallery'
import { Reveal } from '../ui/Reveal'
import { SectionHeader } from '../ui/SectionHeader'

export function Gallery() {
  return (
    <section className="shell py-24 md:py-32">
      <SectionHeader
        eyebrow="The space"
        title="A studio designed to slow you down."
        copy="Natural light, warm materials, and rooms that feel more like a design studio than a clinic. This is where your treatment happens."
      />

      <div className="mt-14 grid auto-rows-[12rem] grid-cols-2 gap-3 md:auto-rows-[15rem] md:grid-cols-4 md:gap-4">
        {gallery.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 4) * 0.06}
            className={
              item.span === 'wide'
                ? 'col-span-2'
                : item.span === 'tall'
                  ? 'row-span-2'
                  : ''
            }
          >
            <figure className="group relative h-full w-full overflow-hidden rounded-xl">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/50 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="text-sm font-medium text-ivory">{item.caption}</span>
                <span className="text-[0.625rem] uppercase tracking-eyebrow text-ivory/70">
                  Lumora
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
