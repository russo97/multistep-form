<template>
  <h1>Step Page {{ $route.params.step }}</h1>

  <FormBase>
    ok
  </FormBase>
</template>

<script setup>
import { definePageMeta } from '#imports'

import FormBase from '../views/FormBase.vue'

definePageMeta({
  layout: 'main'
})
</script>

<style scoped>

</style>
