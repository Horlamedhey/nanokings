<template>
  <div class="flex items-start">
    <nuxt-img
      :src="`/images/statistics/${statistic.image}.png`"
      width="60px"
      format="webp"
    />
    <div class="ml-4">
      <h2 class="xl:lato-semibold-20 lato-semibold-18 text-secondary-light">
        {{ statistic.title }}
      </h2>
      <div class="mt-5 my-stroke text-primary xl:lora-bold-48 lora-bold-32">
        {{ statistic.value || 0 }}
      </div>
      <div v-if="statistic.addon" class="text-[#0DD00D] lato-semibold-20 mt-4">
        {{ statistic.addon }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  props: {
    statistic: { type: Object, required: true },
  },
}
</script>
<style scoped>
.my-stroke {
  text-shadow: -1px -1px 0 #4361ee, 1px -1px 0 #4361ee, -1px 1px 0 #4361ee,
    1px 1px 0 #4361ee;
}
</style>
