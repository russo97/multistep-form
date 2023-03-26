<template>
  <main class="main w-full h-full lg:h-auto lg:max-w-[1024px] lg:mx-auto">
    <div class="main__wrapper w-full h-full">
      <router-view />
    </div>
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .main {
    @media (min-width: 1024px) {
      aspect-ratio: 1 / .64;
    }
  }
</style>
