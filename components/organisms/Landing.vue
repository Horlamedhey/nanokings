<template>
  <div
    class="lg:mt-24 xl:mt-52 lg:pb-[2.5rem] xl:pb-0 xxl:pb-4 2xl:pb-36 xxl:mt-40 2xl:mt-[21rem] z-[2]"
  >
    <div class="w-full">
      <MoleculesLandingIntro
        class="px-4 text-center lg:text-left lg:max-w-lg"
      />
    </div>
    <MoleculesLandingImage
      class="relative lg:absolute lg:top-[4rem] xl:top-[4rem] lg:right-[1.5%] xl:right-[6%] m-auto xxl:right-[5%] xxl:top-24 2xl:right-[13%] 2xl:top-16 z-[1]"
    />
    <div id="who-are-we"></div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style lang="scss" scoped>
</style>