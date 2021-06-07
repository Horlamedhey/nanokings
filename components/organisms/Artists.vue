<template>
  <div>
    <h2 class="text-center lora-bold-32">
      <span class="text-primary">Artists</span>
    </h2>
    <p
      class="px-5 mt-4 text-center sm:px-20 sm:lato-normal-20 lato-normal-14 text-secondary-light"
    >
      Distribute your music & monitor your activities. Get your music on all
      major platforms. View analytics on your dashboard.
    </p>
    <div class="px-4 xl:container">
      <div
        class="flex flex-col border md:flex-row border-primary rounded-[10px] overflow-hidden mt-14 lg:w-4/5 xl:w-8/12 xxl:w-6/12 m-auto"
      >
        <div
          class="relative flex-none w-full h-64 sm:h-auto md:w-1/2 xl:w-5/12"
        >
          <nuxt-img
            src="/images/artists/olamide.png"
            alt="olamide"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div class="w-full p-6 lg:p-8">
          <span class="text-primary">
            <AtomsIconsStar class="inline" fill />
            <AtomsIconsStar class="inline" fill />
            <AtomsIconsStar class="inline" fill />
            <AtomsIconsStar class="inline" fill />
            <AtomsIconsStar class="inline" />
          </span>
          <p class="mt-8 sm:mt-10 lora-bold-18 lg:lora-bold-29 text-secondary">
            Amazing Professionals at what they do. I assure you get the best
            service from NanoKings Digital. The very best.
          </p>
          <p class="mt-4 sm:mt-7 lora-bold-16 lg:lora-bold-20 text-secondary">
            Olamide
          </p>
          <p class="mt-1 text-secondary lato-medium-12">Rapper, YBNL</p>

          <div class="flex justify-between mt-12 sm:mt-16">
            <div>
              <span class="lato-semibold-16 text-primary">
                01<span class="lato-semibold-16 text-secondary">/04</span>
              </span>
            </div>
            <div>
              <AtomsButton
                rounded
                class="bg-transparent ripple-bg-primary-DEFAULT group"
              >
                <AtomsIconsChevronLeft
                  class="inline text-gray-400 group-hover:text-white"
                />
              </AtomsButton>
              <AtomsButton
                rounded
                class="bg-transparent ripple-bg-primary-DEFAULT group"
              >
                <AtomsIconsChevronRight
                  class="inline text-primary group-hover:text-white"
                />
              </AtomsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pricing"></div>
  </div>
</template>

<script>
export default {
  name: 'Artists',
  data() {
    return {
      artists: [
        {
          content:
            'Sign up and create an account This is easy! Registering takes less than a minute, and you can even do it on your mobile device.',
          image: 'one',
        },
        {
          content:
            'Select and create a distribution release Let us know what you want to release then login to the artiste portal and upload your content. Need any help? Just ask.',
          image: 'two',
        },
        {
          content:
            'We collect, and distribute your content across multiple channels such as iTunes, Apple Music, Boomplay, Spotify, YouTube and up to 50+ other stores & streaming services.',
          image: 'three',
        },
        {
          content:
            'Receive payment and release reports. It is important to see the rewards of your hardwork so we ensure you get payment on time as well as detailed monthly music sales Logs.',
          image: 'four',
        },
      ],
    }
  },
}
</script>
