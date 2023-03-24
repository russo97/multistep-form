// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US'
      }
    },
  },

  alias: {
    assets: '/assets'
  },

  css: [
    '/assets/css/main.scss',
    '/assets/css/style.css'
  ],

  tailwindcss: {
    viewer: false
  },

  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})
