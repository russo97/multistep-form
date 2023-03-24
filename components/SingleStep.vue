<template>
  <div class="w-[36px] h-[36px] lg:w-full lg:h-auto">
    <div class="step__wrapper h-full flex items-center gap-4">
      <div
        class="
          text-base
          font-bold
          text-white
          font-ubuntu
          flex
          items-center
          justify-center
          border
          border-white
          rounded-full
          transition-colors
          w-[36px]
          h-[36px]
          shrink-1
        "
        :class="{ 'bg-light-blue border-0 font-sans !text-marine-blue': highlighted }"
      >
        {{ step }}
      </div>

      <div class="step__text hidden lg:flex flex-col">
        <small class="step__info uppercase text-cool-gray font-ubuntu text-xs">
          {{ $t('steps.label') }} {{ step }}
        </small>

        <strong class="step__label uppercase text-white font-ubuntu text-sm">
          {{ $t(stepLabel) }}
        </strong>
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
