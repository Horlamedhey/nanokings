<template>
  <div>
    <h1 class="stylish-text text-secondary">Your Music,</h1>
    <h1 class="relative inline-block stylish-text text-primary">Worldwide</h1>
    <p class="mt-3 text-secondary lato-medium-14">
      You’ve worked hard for your releases. Now make sure they’re available in
      as many places as possible. With Nanokings Digitals you can put your music
      on digital platforms across the globe.
    </p>
    <div class="mt-6">
      <AtomsButton
        addOnAfter
        icon="AtomsIconsPlay"
        class="block px-5 py-3 m-auto mb-6 text-white rounded sm:mr-3 sm:mb-0 sm:inline-block lato-semibold-16 bg-primary ripple-bg-primary-DEFAULT"
      >
        Get Sarted
      </AtomsButton>
      <AtomsButton
        addOnAfter
        icon="AtomsIconsArrowRight"
        class="block px-5 py-3 m-auto bg-white border rounded sm:inline-block text-accent hover:text-white lato-semibold-16 border-accent ripple-bg-accent-DEFAULT"
      >
        Learn More
      </AtomsButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingIntro',
}
</script>

<style  scoped>
.stylish-text:nth-child(2)::after {
  content: '';
  @apply w-full absolute  sm:h-5 h-2 left-0 bg-accent-light bottom-1 z-[-1]  rounded-full;
}
</style>