
import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import pt from '../locales/pt-BR.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    locale: 'en',
    messages: {
      en,
      pt
    }
  })

  vueApp.use(i18n)
})
