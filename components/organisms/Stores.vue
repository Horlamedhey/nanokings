<template>
  <div>
    <h2 class="text-center lora-bold-32">
      <span class="text-primary">Our</span>
      <span class="text-accent">Stores</span>
    </h2>
    <p
      class="px-5 mt-4 text-center sm:px-20 sm:lato-normal-20 lato-normal-14 text-secondary-light"
    >
      Reach over a million users worldwide. Sign up and start uploading music in
      less than 5 minutes.
    </p>
    <MoleculesPlatforms
      :platforms="platforms"
      class="grid grid-cols-4 mt-20 place-items-center place-content-center"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Stores',
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
