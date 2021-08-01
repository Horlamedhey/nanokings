<template>
  <div class="box-border mx-auto mt-20 sm:container">
    <!-- Landing -->
    <OrganismsLanding class="px-6 xl:px-0" />

    <!-- Platforms -->
    <MoleculesPlatforms
      :platforms="platforms"
      class="hidden mt-10 lg:mt-20 justify-evenly sm:flex"
    />
    <!-- Who are we -->
    <OrganismsWhoAreWe
      class="
        mt-24
        md:mt-16
        lg:mt-20
        xl:mt-28
        xxl:mt-72
        2xl:mt-[33rem]
        lg:grid lg:grid-cols-2
      "
    />
    <!-- Our Services -->
    <OrganismsServices />

    <!-- Why choose us and  How it works -->
    <div
      class="
        object-fill
        pb-24
        bg-right-top bg-no-repeat
        xl:pb-32
        xxl:pb-44
        2xl:pb-52
        bg-pattern2 bg-clip-border
      "
    >
      <!-- Why choose us -->
      <OrganismsReasons class="grid sm:grid-cols-2" />
      <!-- How it works -->
      <OrganismsHows class="mt-36" />
    </div>
    <!-- Artists -->
    <OrganismsArtists class="mt-10 lg:mt-32" />
    <!-- Pricing -->
    <OrganismsPricing class="mt-36" />
    <!-- Our Stores -->
    <OrganismsStores class="mt-24" />
    <!-- Download -->
    <OrganismsDownload class="mt-24" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Home',
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
      'mtn-music',
      'youtube',
      'shazam',
      'vuclip',
    ])
    return { platforms }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
. {
@apply min-h-screen flex justify-center items-center text-center ;
}
*/
</style>
