/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'magnolia': 'hsl(217, 100%, 97%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'marine-blue': 'hsl(213, 96%, 18%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'strawberry-red': 'hsl(354, 84%, 57%)'
      },

      fontFamily: {
        ubuntu: 'Ubuntu, sans-serif'
      },

      backgroundImage: {
        'mobile-pattern': 'url("/assets/images/bg-sidebar-mobile.svg")',
        'desktop-pattern': 'url("/assets/images/bg-sidebar-desktop.svg")'
      }
    }
  },
  plugins: [],
}
