<template>
  <div>
    <h2 class="text-center lora-bold-32">
      <span class="text-primary">How it</span>
      <span class="text-accent">works</span>
    </h2>
    <div
      class="grid gap-10 px-6 py-10 sm:px-10 lg:px-12 xl:px-16 justify-items-center"
    >
      <div
        v-for="(how, i) in hows"
        :key="`how-${i}`"
        class="flex items-center md:w-9/12"
      >
        <nuxt-img
          :src="`/images/hows/${how.image}.svg`"
          :alt="how.image"
          format="webp"
          class="w-[26.64px] h-[26.64px] sm:w-[46.8px] sm:h-[46.8px] mr-4 sm:mr-8"
        ></nuxt-img>
        <div
          class="lato-normal-11 sm:lato-normal-20 text-secondary how-content"
        >
          {{ how.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hows',
  data() {
    return {
      hows: [
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

<style scoped>
.how-content {
  box-shadow: 0px 100px 80px rgb(67 97 238 / 3%),
    0px 41.7776px 33.4221px rgb(67 97 238 / 2%),
    0px 22.3363px 17.869px rgb(67 97 238 / 2%),
    0px 12.5216px 10.0172px rgb(67 97 238 / 2%),
    0px 6.6501px 5.32008px rgb(67 97 238 / 1%),
    0px 2.76726px 2.21381px rgb(67 97 238 / 1%);
  border-radius: 10px;
  padding: 20px;
  background-color: white;
}
</style>