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
          :highlighted="+$route.params.step === step"
        />
      </div>

      <div class="flex flex-col flex-1">
        <div
          class="
            mx-4
            px-6
            py-[30px]
            lg:mx-0
            lg:px-[100px]
            bg-white
            -mt-[70px]
            lg:mt-0
            rounded-lg
          "
        >
          <slot />
        </div>

        <div
          class="flex items-center h-[70px] bg-white mt-auto px-4 lg:mx-0 lg:px-[100px]"
        >
          <router-link
            v-if="!isFirstStep"
            to=""
            class="
              text-sm
              font-ubuntu
              font-medium
              text-cool-gray
              hover:text-marine-blue
              transition-colors
              lg:text-base
            "
          >
            {{ t('back') }}
          </router-link>

          <BaseButton
            :label="t('next-step')"
            class="
              ml-auto
              px-5
              py-[10px]
              rounded-md
              text-sm
              text-white
              font-medium
              font-ubuntu
              bg-marine-blue
              lg:hover:bg-opacity-80
              transition-colors
              lg:text-base
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from '#app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import SingleStep from '~/components/SingleStep.vue'
import BaseButton from '~/components/BaseButton.vue'

const howManySteps = ref(4)

const $route = useRoute()

const isFirstStep = parseInt($route.params.step) === 1
</script>

<style lang="scss" scoped>
</style>
