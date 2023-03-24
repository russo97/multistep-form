<template>
  <section class="formbase w-full h-full">
    <div class="formbase__wrapper w-full h-full lg:p-4 lg:bg-white">
      <div
        class="
          flex
          lg:flex-col
          gap-x-4
          lg:gap-y-8
          justify-center
          lg:justify-start
          pt-9
          lg:p-8
          lg:w-[288px]
          h-[170px]
          lg:h-full
          bg-center
          bg-cover
          bg-no-repeat
          bg-mobile-pattern
          lg:bg-desktop-pattern
        "
      >
        <SingleStep
          v-for="step in howManySteps"
          :key="step"
          :step="step"
          :highlighted="+route.params.step === step"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from '#app'

import SingleStep from '~/components/SingleStep.vue'

const howManySteps = ref(4)

const route = useRoute()
</script>

<style lang="scss" scoped>
</style>
