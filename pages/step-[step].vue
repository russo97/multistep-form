<template>
  <h1>Step Page {{ $route.params.step }}</h1>

  <span>
    {{ $t('pages.title[3]') }}
  </span>

  <FormBase>
    ok
  </FormBase>
</template>

<script setup>
import { definePageMeta, useRoute } from '#imports'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $route = useRoute()

import FormBase from '../views/FormBase.vue'

const stepTitle = `pages.title[${$route.params.step - 1}]`

useHead({
  title: `${t(stepTitle)} | ${t('project-name')}`
})

definePageMeta({
  name: 'step',
  layout: 'main',
  validate: (route) => {
    return /^step-[1-4]$/.test(`step-${route.params.step}`)
  }
})
</script>

<style scoped>

</style>
