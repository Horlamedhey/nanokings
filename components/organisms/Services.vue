<template>
  <div>
    <div class="pt-20 pb-40 bg-landscape bg-opacity-20">
      <h2 class="text-center lora-bold-32">
        <span class="text-primary">Our</span>
        <span class="text-accent">Services</span>
      </h2>
      <p
        class="px-5 mt-4 text-center  sm:px-20 sm:lato-normal-20 lato-normal-14 text-secondary-light"
      >
        License, distribute and monetize your music. All in one place. You can
        upload your music and have it delivered globally to all major platforms.
      </p>
      <div
        class="flex flex-wrap justify-center grid-cols-2 gap-16 px-5 mt-10  sm:px-20 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="(service, i) in services"
          :key="`service-${i}`"
          class="w-full text-center md:w-5/12 lg:w-3/12 2xl:w-2/12 sm:text-left"
        >
          <div class="service-icon">
            <nuxt-img
              :src="`/images/services/${service.image}.svg`"
              format="webp"
              :alt="service.image"
            />
          </div>
          <h4 class="mt-4 lato-bold-20 text-primary">{{ service.title }}</h4>
          <p class="mt-6 lato-medium-14 text-secondary">
            {{ service.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Detailed Analytics',
          content:
            'Understand your sales and identify trends to optimize your release strategy.',
          image: 'detailed-analytics',
        },
        {
          title: 'Marketing Support',
          content:
            'We can help you market your song to enable Artists generate more royalties from their music.',
          image: 'marketing-support',
        },
        {
          title: 'Music Distribution',
          content: 'We distribute your music to over 100 digital platforms.',
          image: 'music-distribution',
        },
        {
          title: 'Promotion',
          content: 'We offer advice on promotion for Artist growth.',
          image: 'promotion',
        },
        {
          title: 'Fan Links',
          content: `Obtain your Fan Links and let your fans listen your music from their favorite platform.\n
        Get your music into our Curated playlists and more to become famous today.`,
          image: 'fan-links',
        },
        {
          title: 'Artists Services',
          content:
            'We can advice Artists on any areas they may struggle with by getting Spotify and Apple music verified Artist profile.',
          image: 'artists-services',
        },
      ],
    }
  },
}
</script>

<style scoped>
.service-icon {
  height: 78px;
  width: 78px;
  background: rgba(255, 255, 255, 0.58);
  box-shadow: 0 78px 62.4px rgb(67 97 238 / 7%),
    0px 32.5865px 26.0692px rgb(67 97 238 / 5%),
    0px 17.4223px 13.9379px rgb(67 97 238 / 4%),
    0px 9.76681px 7.81345px rgb(67 97 238 / 4%),
    0px 5.18708px 4.14966px rgb(67 97 238 / 3%),
    0px 2.15846px 1.72677px rgb(67 97 238 / 2%);
  border-radius: 50%;
  padding: 15px;
  @apply m-auto sm:m-0;
}
</style>