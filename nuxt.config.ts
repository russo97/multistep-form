// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    assets: '/assets'
  },

  css: [
    '/assets/css/style.css',
    '/assets/css/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt'
  ]
})
