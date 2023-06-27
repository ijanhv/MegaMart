/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          // shades of F52B6E
          50: '#FDEAF0',
          100: '#FBD2DC',
          200: '#F8B9C8',
          300: '#F59FB4',
          400: '#F286A0',
          500: '#F06D8C',
          600: '#EE5478',
          700: '#EB3B64',
          800: '#E82250',
        },
        // shades of 403B3D
        secondary: {
          50: '#F2F2F2',
          100: '#D9D9D9',
          200: '#BFBFBF',
          300: '#A6A6A6',
          400: '#8C8C8C',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
        },

      }

    
    }
    },
  
  plugins: [],
};
