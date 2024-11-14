/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'scale-in': 'scale-in 0.2s ease-out',
      }
    },
  },
  plugins: [],
};