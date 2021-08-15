<template>
  <div
    class="rounded-[15px] text-white w-[291px] h-[145.5px] overflow-hidden"
    :class="color"
  >
    <div class="h-full px-5 py-4 bg-amount-card">
      <h2 class="lato-medium-20">{{ title }}</h2>

      <div class="flex items-center mt-4">
        <span class="ml-1 lora-bold-42">
          {{ amount | currencyFormatter }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmountCard',
  props: {
    title: { type: String, required: true },
    amount: { type: Number, default: 0 },
    color: { type: String, default: '' },
  },
}
</script>
