<template>
  <main class="main">
    <div class="main__wrapper">
      <router-view />
    </div>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .main {
    &,
    &__wrapper {
      height: 100%;
    }
  }
</style>
