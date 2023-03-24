<template>
  <div class="step">
    <div class="step__wrapper h-full">
      <div
        class="
          step__number
          text-base
          font-bold
          text-white
          font-ubuntu
          flex
          items-center
          justify-center
          h-full
          border
          border-white
          rounded-full
          transition-colors
        "
        :class="{ 'bg-light-blue border-0 font-sans !text-marine-blue': highlighted }"
      >
        {{ step }}
      </div>

      <div class="step__text hidden md:flex">
        <small class="step__info">
          {{ $t('steps.label') }} {{ $t(stepLabel) }}
        </small>

        <strong class="step__label"></strong>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: {
    type: Number,
    required: true
  },

  highlighted: Boolean
})

const stepLabel = computed(() => `steps.items[${props.step - 1}].label`)
</script>

<style lang="scss" scoped>
  .step {
    width: 36px;
    height: 36px;

    &__number {
    }
  }
</style>
