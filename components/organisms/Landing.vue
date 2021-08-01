<template>
  <div
    class="
      relative
      lg:flex
      items-center
      lg:mt-24
      xl:mt-32
      lg:pb-20
      xl:pb-12
      xxl:mt-48
      2xl:mt-[30rem]
      z-[2]
    "
  >
    <div class="w-full">
      <MoleculesLandingIntro
        class="text-center lg:text-left lg:max-w-lg xl:max-w-2xl"
      />
    </div>
    <MoleculesLandingImage
      class="
        relative
        lg:absolute
        m-auto
        lg:m-0
        lg:z-[1]
        lg:right-6
        xl:right-0
        bottom-0
      "
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
