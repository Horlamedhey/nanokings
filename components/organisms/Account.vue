<template>
  <div class="bg-pattern1">
    <div class="flex min-h-screen bg-white bg-opacity-50">
      <div class="relative hidden w-1/2 bg-cover lg:block bg-login">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.37)]"
        >
          <AtomsIconsLogoVariant class="mx-auto mt-12" />
        </div>
      </div>

      <div
        class="flex flex-col justify-center max-w-lg px-10 py-5 mx-auto my-6 shadow-none 2xl:max-w-2xl lg:w-1/2"
      >
        <slot name="extra-header"></slot>
        <div>
          <h1
            class="relative lora-bold-24 sm:lora-bold-32 text-secondary welcome"
          >
            {{ heading }}
          </h1>
          <h3
            class="mt-6 lato-normal-14 sm:lato-normal-20 text-secondary-light"
          >
            {{ subHeading }}
          </h3>
        </div>
        <slot></slot>
        <h4
          class="mt-6 text-center lato-normal-18 sm:lato-normal-20 text-secondary-light"
        >
          {{ footer }}
          <nuxt-link
            :to="subFooterLink"
            class="text-primary sm:lato-bold-20 lato-bold-18"
          >
            {{ subFooter }}
          </nuxt-link>
        </h4>
        <slot name="extra-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Account',
  props: {
    heading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: String,
      required: true,
    },
    footer: {
      type: String,
      required: true,
    },
    subFooter: {
      type: String,
      required: true,
    },
    subFooterLink: {
      type: String,
      required: true,
    },
  },
})
</script>

<style>
.welcome::after {
  content: '';
  @apply absolute bottom-[-0.5rem] left-0 w-14 rounded-full bg-primary h-[5px];
}
</style>
