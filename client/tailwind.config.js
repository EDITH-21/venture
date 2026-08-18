/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        ivory: {
          DEFAULT: '#F5F1E8',
          subtle: '#EFEAE0',
          dark: '#E7DFD0',
        },
        'warm-white': '#FCFBF8',
        champagne: {
          DEFAULT: '#C8A96B',
          light: '#E2D2AE',
          dark: '#B08E50',
          subtle: 'rgba(200, 169, 107, 0.12)',
        },
        sage: {
          DEFAULT: '#A8B9A5',
          light: '#C4D1C2',
          dark: '#8B9F88',
        },
        'text-dark': '#202624',
        'text-muted': '#68707C',
        'border-light': '#DEDCD5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(200, 169, 107, 0.15) 0%, rgba(13, 17, 23, 0) 70%)',
        'gradient-card': 'linear-gradient(180deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.95) 100%)',
      },
    },
  },
  plugins: [],
}
