module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0F0F0F',
        'light-gray': '#1B1C1E',
        'light-purple': '#6D57E0',
        'dark-purple': '#5740dd',
        'blue': '#0B66C2',
        'light-blue': '#1B8CD8'
      },
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440pd' },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slideUp: 'slideUp 0.5s',
        slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)'
      },
      animationDelay: {
        0: '0s',
        2: '0.2s',
        4: '0.4s',
        6: '0.6s'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' }
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
