import { Reveal } from './Reveal'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, copy, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <Reveal className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl leading-[1.08] text-ink">{title}</h2>
      {copy && <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">{copy}</p>}
    </Reveal>
  )
}
