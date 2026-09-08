/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Asteya Warm Cream & Off-White System
        cream: {
          DEFAULT: '#FAF8F5',
          surface: '#F3EFE6',
          card: '#FFFFFF',
          dark: '#EDE7DA',
          border: '#E5DFD3',
        },
        // Sophisticated Sea-Green & Deep Forest Accent System
        forest: {
          DEFAULT: '#1B4332',
          deep: '#0F291E',
          dark: '#133526',
          light: '#2D6A4F',
          subtle: '#E8F1EC',
          border: '#2D6A4F33',
        },
        // Charcoal & Near-Black Editorial Typography System
        charcoal: {
          DEFAULT: '#111813',
          dark: '#0A0F0C',
          light: '#212B25',
          muted: '#526058',
          subtle: '#7A8880',
          border: '#D8D2C4',
        },
        // Legacy surfaces for Admin Console
        obsidian: {
          DEFAULT: '#0D1117',
          deep: '#080B0F',
          surface: '#12171F',
        },
        graphite: {
          DEFAULT: '#161B22',
          light: '#21262D',
          border: '#30363D',
        },
        champagne: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          dark: '#0F291E',
          subtle: 'rgba(27, 67, 50, 0.08)',
        },
        sage: {
          DEFAULT: '#2D6A4F',
          light: '#E8F1EC',
          dark: '#1B4332',
        },
        'warm-white': '#FFFFFF',
        'text-dark': '#111813',
        'text-muted': '#526058',
        'border-light': '#E5DFD3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(17, 24, 19, 0.04)',
        'card': '0 4px 20px rgba(17, 24, 19, 0.06)',
        'card-hover': '0 12px 32px rgba(17, 24, 19, 0.09)',
        'elevation': '0 20px 48px rgba(17, 24, 19, 0.08)',
      },
      backgroundImage: {
        'radial-subtle': 'radial-gradient(circle at 50% 0%, rgba(27, 67, 50, 0.06) 0%, rgba(250, 248, 245, 0) 70%)',
      },
    },
  },
  plugins: [],
}
