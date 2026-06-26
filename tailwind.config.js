/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F1F6F4',
        surface: '#D9E8E2',
        primary: '#114C5A',
        secondary: '#172B36',
        accent: '#FFC801',
        'accent-2': '#FF9932',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,76,90,0.04), 0 8px 24px -12px rgba(17,76,90,0.12)',
        lift: '0 2px 4px rgba(17,76,90,0.06), 0 18px 40px -18px rgba(17,76,90,0.22)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '120' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseNode: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        dashMove: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-24' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { transform: 'scaleY(0.2)', opacity: '0.4' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        spinY: {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
        spinYReverse: {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(-360deg) rotateX(-360deg)' },
        },
        orbit: {
          '0%': { transform: 'rotateZ(0deg) translateX(var(--orbit-r, 120px)) rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg) translateX(var(--orbit-r, 120px)) rotateZ(-360deg)' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        flow: 'flow 2.4s linear infinite',
        pulseNode: 'pulseNode 2.6s ease-in-out infinite',
        dashMove: 'dashMove 1.2s linear infinite',
        ticker: 'ticker 38s linear infinite',
        rise: 'rise 0.9s ease-out forwards',
        blink: 'blink 1.8s ease-in-out infinite',
        spinY: 'spinY 18s linear infinite',
        spinYReverse: 'spinYReverse 14s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
