/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F3',
          deep: '#F3EFE6',
        },
        ink: {
          DEFAULT: '#211E19',
          soft: '#5B564D',
          faint: '#8A847A',
        },
        sage: {
          DEFAULT: '#7C8B6F',
          deep: '#5E6E53',
          mist: '#E4E8DD',
        },
        beige: {
          DEFAULT: '#E9E1D1',
          deep: '#DCD2BE',
        },
        line: '#E4DDCF',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        450: '450ms',
        650: '650ms',
      },
      maxWidth: {
        shell: '80rem',
      },
    },
  },
  plugins: [],
}
