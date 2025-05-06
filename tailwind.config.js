/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hyundai-blue': {
          DEFAULT: '#002C5F',
          dark: '#001F42',
          light: '#3D5D80'
        },
        'hyundai-red': {
          DEFAULT: '#E63312',
          dark: '#C52B0F',
          light: '#F05F45'
        },
        'hyundai-silver': {
          DEFAULT: '#E4DCD3',
          dark: '#C7BDB0',
          light: '#F0EAE4'
        },
        'success': {
          DEFAULT: '#34C759',
          light: '#5AD27D',
          dark: '#28A046'
        },
        'warning': {
          DEFAULT: '#FF9500',
          light: '#FFAA33',
          dark: '#D97E00'
        },
        'error': {
          DEFAULT: '#FF3B30',
          light: '#FF6359',
          dark: '#D93027'
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};