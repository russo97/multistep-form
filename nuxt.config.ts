// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    assets: '/assets'
  },

  css: [
    '/assets/css/main.scss'
  ],

  tailwindcss: {
  },

  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})
