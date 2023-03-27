<template>
  <button class="flex items-center justify-center">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: () => ''
  }
})
</script>

<style scoped>

</style>
