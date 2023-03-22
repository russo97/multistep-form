<template>
  <section class="formbase">
    <div class="formbase__wrapper">
      <div class="formbase__steps flex justify-center items-center gap-x-4">
        <SingleStep
          v-for="step in howManySteps"
          :key="step"
          :step="step"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SingleStep from '~/components/SingleStep.vue'

const howManySteps = ref(4)
</script>

<style lang="scss" scoped>
  .formbase {
    &__steps {
      height: 170px;
      background: transparent url('/assets/images/bg-sidebar-mobile.svg') center / cover no-repeat;
    }
  }
</style>
