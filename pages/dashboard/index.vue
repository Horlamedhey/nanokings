<template>
  <!-- <div class="box-border mx-auto mt-20 sm:container bg-[#F6F7FE]"></div> -->
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Welcome VaryAble,</h1>
            <h4 class="lato-normal-14 sm:lato-normal-16 text-secondary-light">Here is the current overview of your account.</h4>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Statistics -->
            <div class="flex flex-col md:flex-row">
              <div class="rounded-[15px] bg-primary text-white">
                <h2 class="lato-medium-20">Wallet Balance</h2>
                <h1>
                  <AtomsIconsNaira/>
                  129,000
                  </h1>
              </div>
            </div>
            
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DashboardHome',
  layout: 'dashboard',
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
