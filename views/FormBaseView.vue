<template>
  <section class="w-full h-full">
    <div
      class="
        flex
        flex-col
        lg:flex-row
        w-full
        h-full
        lg:p-4
        lg:bg-white
      "
    >
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
          lg:rounded-xl
        "
      >
        <SingleStep
          v-for="step in howManySteps"
          :key="step"
          :step="step"
          :highlighted="+route.params.step === step"
        />
      </div>

      <div class="flex flex-col flex-1">
        <div
          class="
            flex-1
            mx-4
            px-6
            py-[30px]
            lg:mx-0
            lg:px-[100px]
            bg-white
            -mt-[70px]
            lg:mt-0
          "
        >
          <slot />
        </div>

        <div
          class="flex items-center h-[70px] bg-white mt-auto px-4 lg:mx-0 lg:px-[100px]"
        >
          go back
        </div>
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
