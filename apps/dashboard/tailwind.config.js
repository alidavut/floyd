module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@floyd/ui/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        'drop-in': {
          '0%': { transform: 'translateY(-10%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'drop-out': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(10%)', opacity: 0 }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s linear forwards',
        'fade-out': 'fade-out 0.2s linear forwards',
        'drop-in': 'drop-in 0.2s linear forwards',
        'drop-out': 'drop-out 0.2s linear forwards'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
