/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Obsidian Palette matching the exact reference image
        cosmic: {
          bg: '#040711',
          surface: '#080C1A',
          card: '#0D1326',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(139, 92, 246, 0.4)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        // Glowing Cosmic Violet & Purple Accent
        violet: {
          DEFAULT: '#8B5CF6',
          glow: '#A855F7',
          dark: '#6D28D9',
          light: '#C084FC',
        },
        // Cyber Cyan & Electric Blue Accent
        cyan: {
          DEFAULT: '#06B6D4',
          glow: '#38BDF8',
          dark: '#0284C7',
          light: '#7DD3FC',
        },
        // Neon Indigo
        indigo: {
          DEFAULT: '#6366F1',
          glow: '#818CF8',
          dark: '#4338CA',
        },
        // Legacy compat
        obsidian: {
          DEFAULT: '#040711',
          deep: '#02040A',
          surface: '#080C1A',
        },
        graphite: {
          DEFAULT: '#0D1326',
          light: '#131C38',
          border: '#1E294B',
        },
        charcoal: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
        cream: {
          DEFAULT: '#040711',
          surface: '#080C1A',
        },
        forest: {
          DEFAULT: '#8B5CF6',
          subtle: 'rgba(139, 92, 246, 0.12)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'cosmic-glow': '0 0 50px -10px rgba(139, 92, 246, 0.4)',
        'cyan-glow': '0 0 40px -10px rgba(56, 189, 248, 0.45)',
        'card-glow': '0 0 25px rgba(139, 92, 246, 0.15)',
        'orb-glow': '0 0 80px rgba(168, 85, 247, 0.5)',
      },
      backgroundImage: {
        'cosmic-radial': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.08) 40%, rgba(4, 7, 17, 0) 70%)',
        'nebula-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(4, 7, 17, 0.95) 100%)',
        'purple-cyan': 'linear-gradient(135deg, #A855F7 0%, #6366F1 50%, #38BDF8 100%)',
        'purple-cyan-text': 'linear-gradient(90deg, #C084FC 0%, #818CF8 50%, #38BDF8 100%)',
        'stars-pattern': 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'orbit-spin': 'orbitSpin 35s linear infinite',
        'orbit-reverse': 'orbitSpin 45s linear infinite reverse',
        'nebula-pulse': 'nebulaPulse 6s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        orbitSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        nebulaPulse: {
          '0%': { opacity: '0.3', transform: 'scale(0.95)' },
          '100%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
