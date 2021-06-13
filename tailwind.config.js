const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ripple: (theme) => ({
      colors: theme('colors'),
      darken: 0.1,
    }),
    container: {
      padding: {
        // xs: '1rem',
        // sm: '1rem',
        // lg: '1rem',
        // xl: '1rem',
        // xxl: '1rem',
        // 2xl: '1rem'
      },
    },
    screens: {
      xs: { min: '320px' },
      sxs: { min: '380px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      xxl: { min: '1536px' },
      '2xl': { min: '1904px' },
    },
    fill: (theme) => ({
      secondary: theme('colors.secondary'),
      accent: theme('colors.accent'),
      accent2: theme('colors.accent2'),
    }),
    extend: {
      backgroundImage: (theme) => ({
        pattern1: "url('/images/bgs/pattern1.png')",
        pattern2: "url('/images/bgs/pattern2.svg')",
        pattern3: "url('/images/bgs/pattern3.svg')",
        landscape: "url('/images/bgs/rough-landscape.jpg')",
        login: "url('/images/bgs/login-signup.svg')",
        'amount-card': "url('/images/bgs/amount-card.svg')",
        profile: "url('/images/bgs/profile.svg')",
      }),
      fontSize: {
        xxs: '.428rem',
        // tinier: '.813rem',
        // '1xl': '1.375rem',
        // '2-5xl': '1.75rem',
        // '3-5xl': '2rem',
        // '4-5xl': '2.5rem',
        // 'xxs-important': '.625rem !important',
        // 'tinier-important': '.813rem !important',
        // 'sm-important': '.875rem !important',
        // '1xl-important': '1.375rem !important',
        // '2-5xl-important': '1.75rem !important',
        // '3-5xl-important': '2rem !important',
        // '4-5xl-important': '2.5rem !important',
      },
      colors: {
        primary: {
          DEFAULT: '#4361EE',
          dark: '#1240DD',
          alt: '#7693F4',
          light: '#7389F2',
          lighter: '#A1B0F7',
          lightest: '#D0D8FB',
        },
        secondary: {
          DEFAULT: '#232323',
          dark: '#14142B',
          light: '#575757',
          lighter: '#8A8A8A',
          lightest: '#BDBDBD',
        },
        accent: {
          DEFAULT: '#D03E7E',
          light: '#DA679A',
          lighter: '#E490B5',
          lightest: '#EEB9D0',
        },
        curtain: 'rgba(0,0,0,0.4)',
        success: '#27AE60',
        'success-light': '#00C48C',
        error: '#EB5757',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
        lora: ['Lora', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-ripple')()],
}
