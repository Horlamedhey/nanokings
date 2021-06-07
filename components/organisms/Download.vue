<template>
  <div>
    <h2 class="text-center lora-bold-32">
      <span class="text-primary">Download</span>
      <span class="text-accent">App</span>
    </h2>
    <p
      class="px-5 mt-4 text-center sm:px-20 sm:lato-normal-20 lato-normal-14 text-secondary-light"
    >
      License, distribute and monetize your music. All in one place. You can
      upload your music and have it delivered globally to all major platforms.
    </p>
    <div class="mt-10 text-center">
      <AtomsButton
        addOnAfter
        icon="AtomsIconsPlaystore"
        class="block px-5 py-3 m-auto mb-6 text-white rounded sm:mr-3 sm:mb-0 sm:inline-block lato-semibold-16 bg-primary ripple-bg-primary-DEFAULT"
        content-class="mr-2"
      >
        Get on Playstore
      </AtomsButton>
      <AtomsButton
        addOnAfter
        icon="AtomsIconsAppstore"
        class="block px-5 py-3 m-auto bg-white border rounded sm:inline-block text-primary hover:text-white lato-semibold-16 border-primary ripple-bg-primary-DEFAULT"
      >
        Get on App Store
      </AtomsButton>
    </div>

    <!-- App mock -->
    <nuxt-img src="/images/app-mock.png" class="mx-auto mt-24" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Download',
  // props: {
  //   user: {
  //     type: Object as () => User,
  //     required: true,
  //   },
  // },

  setup() {
    const platforms = ref([
      'apple-music',
      'vevo',
      'deezer',
      'spotify',
      'youtube',
      'shazam',
      'vuclip',
      'mtn-music',
      'amazon-music',
    ])
    return { platforms }
  },
})
</script>
