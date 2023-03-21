// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

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
  ],

  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), '/locales/*.json')
        ]
      })
    ]
  }
})
