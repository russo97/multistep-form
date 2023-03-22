<template>
  <div class="step">
    <div class="step__wrapper">
      <div class="step__number">
        {{ step }}
      </div>

      <div class="step__text">
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
  }
})

const stepLabel = computed(() => `steps.items[${props.step - 1}].label`)
</script>

<style lang="scss" scoped></style>
