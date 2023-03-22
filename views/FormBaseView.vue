<template>
  <section class="formbase">
    <div class="formbase__wrapper">
      <div class="formbase__steps flex justify-center gap-x-4 pt-9">
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
  .formbase {
    &__steps {
      height: 170px;
      background: transparent url('/assets/images/bg-sidebar-mobile.svg') center / cover no-repeat;
    }
  }
</style>
