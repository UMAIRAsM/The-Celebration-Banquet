/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F5EB',
          100: '#F2EAD7',
          200: '#E9D8B6',
          300: '#E0C695',
          400: '#D7B474',
          500: '#CDA253',
          600: '#BD8F42',
          700: '#9D7836',
          800: '#7D612B',
          900: '#5D491F',
        },
        secondary: {
          50: '#F9E6E6',
          100: '#F3CDCD',
          200: '#E89B9B',
          300: '#DC6969',
          400: '#D14747',
          500: '#B53535',
          600: '#962A2A',
          700: '#781F1F',
          800: '#591414',
          900: '#3B0A0A',
        },
        accent: '#D4AF37',
        dark: '#222222',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};