<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <client-only>
      <div v-if="$apollo.loading">Loading...</div>
      <div v-else class="py-6">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <div class="flex items-center">
            <AtomsButton @click="$router.go(-1)" class="mt-1">
              <AtomsIconsCircledArrowLeft class="w-8 h-8 text-primary" />
            </AtomsButton>
            <MoleculesBreadcrumbs />
          </div>
        </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <div class="bg-white rounded-2xl mt-[275px] px-6 pb-10">
            <div class="relative flex justify-center pt-[126px]">
              <MoleculesMusicCard
                :song="song"
                :width="287"
                :height="361"
                class="
                  w-[287.3px]
                  h-[361px]
                  rounded-[10.53px]
                  absolute
                  bottom-0
                "
              />
            </div>
            <MoleculesMusicBasicInfo :song="song" />
          </div>
        </div>
      </div>
    </client-only>
  </main>
</template>

<script >
// <script lang="ts">
import {
  defineComponent,
  useRoute,
  computed,
  useFetch,
  useContext,
} from '@nuxtjs/composition-api'
import songs from '@/static/data/songs.json'
import SongQuery from '@/graphs/read/Song'
import apollo from '~/helpers/apollo'

export default defineComponent({
  name: 'Music',
  apollo: {
    song: {
      query: SongQuery,
      variables() {
        return {
          uid: this.$route.params.music,
        }
      },
      prefetch: false,
    },
  },
  data() {
    return {
      song: {},
    }
  },
  // setup() {
  //   const context = useContext()
  //   useFetch(async () => {
  //     await apollo(context)
  //   })
  // },
  async fetch() {
    await apollo(this)
  },
  fetchOnServer: false,
})
</script>
