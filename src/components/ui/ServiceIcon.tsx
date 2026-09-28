interface ServiceIconProps {
  name: string
  className?: string
}

const paths: Record<string, JSX.Element> = {
  general: (
    <>
      <path d="M7 3.5c-2.5 0-4 1.8-4 4 0 3 2 4.5 3 6.5.7 1.4 1 3 1.5 4.5.3 1 .8 2 1.5 2s1.2-1 1.5-2c.3-.8.5-1.5 1-1.5s.7.7 1 1.5c.3 1 .8 2 1.5 2s1.2-1 1.5-2c.5-1.5.8-3.1 1.5-4.5 1-2 3-3.5 3-6.5 0-2.2-1.5-4-4-4-2 0-3.5 1-5 1s-3-1-5-1Z" />
    </>
  ),
  preventive: (
    <>
      <path d="M12 3.5c-4.5 0-8 3-8 7.5 0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11 0-4.5-3.5-7.5-8-7.5Z" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  cosmetic: (
    <>
      <path d="M12 3.5c-4.5 0-8 3-8 7.5 0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11 0-4.5-3.5-7.5-8-7.5Z" />
      <path d="M8.5 12.5c1-1.5 2.2-2.2 3.5-2.2s2.5.7 3.5 2.2" />
    </>
  ),
  implants: (
    <>
      <path d="M9 3.5h6M10 3.5v4l-1.5 3v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-8L14 7.5v-4" />
      <path d="M8.5 13.5h7" />
    </>
  ),
  orthodontics: (
    <>
      <rect x="3.5" y="7" width="17" height="10" rx="4" />
      <path d="M3.5 12h17M8 12v3M12 12v3.5M16 12v3" />
    </>
  ),
  whitening: (
    <>
      <path d="M12 3.5c-4.5 0-8 3-8 7.5 0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11 0-4.5-3.5-7.5-8-7.5Z" />
      <path d="M12 8.5l1 2.2 2.4.3-1.8 1.6.5 2.4-2.1-1.2-2.1 1.2.5-2.4-1.8-1.6 2.4-.3 1-2.2Z" />
    </>
  ),
}

export function ServiceIcon({ name, className = 'h-6 w-6' }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.general}
    </svg>
  )
}
