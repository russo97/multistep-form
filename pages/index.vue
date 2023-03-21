<template>
  <h1>Home</h1>

  <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>

  <NuxtLink to="/step-1">Next Page</NuxtLink>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'

useHead({
  title: 'Personal Info | Multistep Form'
})

definePageMeta({
  layout: 'main'
})
</script>

<style lang="scss" scoped>
</style>
