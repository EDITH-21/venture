/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean white and subtle gray grid surfaces from the blueprint
        blueprint: {
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E9ECEF',
          line: '#DEE2E6',
          muted: '#6C757D',
          dark: '#111827',
        },
        // Deep obsidian for dark sections (Ventures & Final CTA)
        darkness: {
          DEFAULT: '#0B0F17',
          surface: '#111827',
          card: '#161F30',
          border: '#1F293D',
          accent: '#38BDF8',
          purple: '#818CF8',
        },
        // Glowing blueprint blue / cyan accents from the diagram
        cyanic: {
          DEFAULT: '#0284C7',
          light: '#38BDF8',
          glow: 'rgba(56, 189, 248, 0.35)',
        },
        // Legacy compatibility
        cream: {
          DEFAULT: '#F8F9FA',
          surface: '#F1F3F5',
          card: '#FFFFFF',
          dark: '#E9ECEF',
          border: '#E2E8F0',
        },
        forest: {
          DEFAULT: '#0F172A',
          deep: '#0B0F17',
          dark: '#0284C7',
          light: '#2563EB',
          subtle: '#EFF6FF',
          border: 'rgba(37, 99, 235, 0.15)',
        },
        charcoal: {
          DEFAULT: '#0F172A',
          dark: '#020617',
          light: '#1E293B',
          muted: '#475569',
          subtle: '#64748B',
          border: '#E2E8F0',
        },
        obsidian: {
          DEFAULT: '#0B0F17',
          deep: '#06090E',
          surface: '#111827',
        },
        graphite: {
          DEFAULT: '#161F30',
          light: '#1E293B',
          border: '#1F293D',
        },
        champagne: {
          DEFAULT: '#0284C7',
          light: '#38BDF8',
          dark: '#0369A1',
          subtle: 'rgba(2, 132, 199, 0.08)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'blueprint': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'blueprint-hover': '0 20px 35px -5px rgba(15, 23, 42, 0.08), 0 10px 15px -5px rgba(15, 23, 42, 0.04)',
        'cyan-glow': '0 0 30px rgba(56, 189, 248, 0.25)',
        'neon-card': '0 0 0 1px rgba(56, 189, 248, 0.15), 0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'blueprint-grid': 'radial-gradient(#CBD5E1 1px, transparent 1px)',
        'dark-grid': 'radial-gradient(#1E293B 1px, transparent 1px)',
        'cyan-gradient': 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-diagram': 'rotateDiagram 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
