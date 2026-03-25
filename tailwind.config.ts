import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e0c0a',
        cream: '#f5f0e8',
        warm: '#f0e8d5',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c96a',
        },
        rust: '#c0522a',
        sage: '#5a7a5e',
        mist: '#8a9ba8',
        paper: '#faf7f2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'ov-pattern':
          'radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(192,82,42,0.12) 0%, transparent 50%), repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)',
        'ov-card-1':
          'linear-gradient(135deg, #1a1208 0%, #3d2d10 40%, rgba(201,168,76,0.13) 100%)',
        'ov-card-2':
          'linear-gradient(135deg, #0a1a10 0%, #1a3020 40%, rgba(90,122,94,0.13) 100%)',
        'ov-card-3':
          'linear-gradient(135deg, #1a0c0a 0%, #3d1810 40%, rgba(192,82,42,0.13) 100%)',
        'ov-card-4':
          'linear-gradient(135deg, #0a0e1a 0%, #101828 40%, rgba(58,90,138,0.13) 100%)',
        'ov-card-5':
          'linear-gradient(135deg, #1a1015 0%, #2d1a25 40%, rgba(138,58,90,0.13) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          from: { transform: 'scale(0)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 1s',
        'fade-up': 'fade-up 0.4s ease',
        popIn: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
} satisfies Config
