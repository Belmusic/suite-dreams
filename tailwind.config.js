/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#FF9A00',
      secondary: '#DDDDDD',
      background: '#F5F5F5',
      'primary-hover': '#FFAD33',
      'secondary-hover': '#C4C4C4',
      white: '#FFFFFF',
      black: '#000000',
      yellow: '#E1B32C',
      'dark-gray': '#666666',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    fontSize: {
      sm: '16px',
      base: '18px',
      lg: '22px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '38px',
      '4xl': '70px',
    },
    lineHeight: {
      'extra-loose': '78px',
      loose: '45px',
      relaxed: '36px',
      normal: '32px',
      compact: '30px',
      condensed: '26px',
      snug: '24px',
      tight: '20px',
    },
    fontWeight: {
      bold: '700',
      medium: '500',
      light: '300',
      normal: '400',
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
