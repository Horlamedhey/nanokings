<template>
  <!-- <div class="box-border mx-auto mt-20 sm:container bg-[#F6F7FE]"></div> -->
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">My Music</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div
                class="border-4 border-gray-200 border-dashed rounded-lg h-96"
              ></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MyMusic',
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
