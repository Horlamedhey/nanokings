<template>
  <div>
    <nuxt-img
      v-for="(platform, i) in platforms"
      :key="`platform-${i}`"
      :src="`/images/platforms/${platform}.svg`"
      sizes="md:60px lg:100px xxl:130px 2xl:145px"
      format="webp"
      :alt="platform"
      class="filter grayscale"
    />
  </div>
</template>

<script>
export default {
  name: 'Platforms',
  props: { platforms: { type: Array, required: true } },
}
</script>
