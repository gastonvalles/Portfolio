module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '2xl': '2rem',
        xl: '1.5rem',
        lg: '1.25rem',
        md: '1.125rem',
        base: '0.938rem',
        sm: '0.813rem',
        xs: '0.75rem'
      },
      fontWeight: {
        medium: 500,
        semibold: 600
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'dark-gray': '#0F0F0F',
        'light-gray': '#1B1C1E',
        'light-purple': '#6D57E0'
      }
    }
  },
  plugins: []
}
