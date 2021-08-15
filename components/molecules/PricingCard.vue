<template>
  <div
    class="flex flex-col justify-between max-w-xs p-3 text-left border-4 rounded-lg  xl:w-full xl:max-w-md sm:p-8 lg:p-4 border-primary"
    :class="prominent ? 'text-white bg-primary' : 'text-primary'"
  >
    <div>
      <h2 class="font-sans rounded-lg lato-semibold-22 tracking-[-0.55px]">
        {{ tier }}
      </h2>
      <div class="flex items-center mt-4">
        <span class="sm:lora-bold-56 lora-bold-48 tracking-[-2.4px] ml-1">
          {{ price | currencyFormatter }}
        </span>
        <span class="sm:lora-bold-20 lora-bold-18 tracking-[-2px] ml-2">
          per year
        </span>
      </div>
      <ul class="mt-6 mb-16 space-y-4">
        <li
          v-for="(feature, j) in features"
          :key="`feature-${j}`"
          class="flex gap-2 text-secondary"
          :class="{ 'text-white': prominent }"
        >
          <AtomsIconsCheck class="inline" />
          <span class="ml-1 lato-bold-16">
            {{ feature }}
          </span>
        </li>
      </ul>
    </div>

    <AtomsButton
      class="px-4 py-2 border-2 rounded-lg  lato-bold-18 border-primary ripple-bg-primary-DEFAULT hover:text-white"
      :class="
        prominent
          ? 'ripple-bg-accent-DEFAULT bg-accent text-white'
          : ' bg-transparent text-primary'
      "
      @click="$emit('subscribe')"
    >
      Subscribe
    </AtomsButton>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    tier: {
      type: String,
      required: true,
    },
    prominent: Boolean,
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>
