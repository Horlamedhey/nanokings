<template>
  <div>
    <div class="relative pt-[22rem] bg-primary hidden lg:flex justify-center">
      <nuxt-img
        src="/images/image2.png"
        alt="image-2"
        class="absolute bottom-0"
        sizes=" lg:50vw xl:50vw xxl:50vw 2xl:50vw"
      />
    </div>
    <div class="px-10 py-20 lg:py-24 bg-pattern1 bg-opacity-30">
      <div class="relative mx-auto who-are-we w-[fit-content]">
        <h2 class="text-center lora-bold-32">
          <span class="text-primary accent-cross-dash">Who</span> are we?
        </h2>
      </div>
      <p class="mt-6 sm:lato-normal-20 lato-normal-14 text-secondary-light">
        We bring simplicity to creative minds, giving independent artists access
        to smart services and useful data that makes it easy for them build
        their own success.
      </p>
      <p class="sm:lato-normal-20 lato-normal-14 text-secondary-light">
        There’s a monumental shift happening among people who make music and
        earnings. Modern artists want to be independent and still acquire
        wealth's for themselves. They want to create, collaborate and promote in
        new ways, pushing culture forward while building a passion economy. They
        want to build their brand and run their business on their own terms.
        This can only be possible digitally.
      </p>
    </div>
    <div id="services"></div>
  </div>
</template>

<script>
export default {
  name: 'WhoAreWe',
}
</script>

<style scoped>
.who-are-we::before {
  content: '';
  background-image: url('/images/curve-down-primary.png');
  @apply absolute bottom-4 left-[-4.8rem] w-20 h-20 bg-no-repeat;
}
.who-are-we::after {
  content: '';
  background-image: url('/images/curve-down-accent.png');
  @apply absolute bottom-4 right-[-3.8rem] w-20 h-20 bg-no-repeat;
}
.accent-cross-dash {
  @apply relative;
}
.accent-cross-dash::after {
  content: '';
  @apply w-full absolute  h-[30%] left-0 bg-accent-lightest bottom-1 z-[-1]  rounded-full;
}
</style>