// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    assets: '/assets'
  },

  css: [
    '/assets/css/main.scss',
    '/assets/css/style.css'
  ],

  tailwindcss: {
  },

  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})
