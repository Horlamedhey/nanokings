<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">My Music</h1>
      </div>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <AtomsButton
          to="/dashboard/my-music/create-music"
          icon="AtomsIconsAdd"
          addOnAfter
          class="items-center inline-block px-10 py-3 mt-6 ml-auto text-white rounded  lato-bold-16 ripple-bg-primary-DEFAULT"
        >
          Create new
        </AtomsButton>

        <div class="flex items-center justify-start mt-10 xl:justify-between">
          <div class="hidden xl:block">
            <MoleculesPagination :totalCount="50" :pageNumber="1" />
          </div>
          <div class="flex items-center">
            <MoleculesSearch />
            <MoleculesDropdown
              id="musicFilter-menu-button"
              :show="filterMenu"
              title="All"
              :items="filterItems"
              @toggle="filterMenu = !filterMenu"
            />
          </div>
        </div>
        <client-only>
          <div v-if="$apollo.loading">Loading...</div>
          <div
            v-else-if="songs.length === 0"
            class="flex items-center justify-center h-40 text-xl text-center  text-secondary-lighter"
          >
            You have not added any song yet.
            <br />
            Click on the create button to add your first "Single" for free.
          </div>
          <div
            class="flex flex-wrap justify-center gap-10  sm:justify-start my-14 xl:mb-0"
          >
            <MoleculesMusicCard
              v-for="(song, i) in songs"
              :key="`song-${i}`"
              :song="song"
              viewDetails
              showInfo
              :width="191"
              :height="240"
              class="w-[191px] h-[240px] rounded-[7px]"
            />
          </div>
        </client-only>
        <div class="xl:hidden">
          <MoleculesPagination :totalCount="50" :pageNumber="1" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// <script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable/dist'
import SongsQuery from '@/graphs/read/Songs'
import apollo from '~/helpers/apollo'

export default defineComponent({
  name: 'MyMusic',
  apollo: {
    songs: {
      query: SongsQuery,
      variables() {
        return { user: this.$realmApp.currentUser.customData._id }
      },
      prefetch: false,
    },
  },
  data() {
    return {
      songs: [],
      filterItems: [{ title: 'All' }, { title: 'Songs' }, { title: 'Albums' }],
      filterMenu: false,
    }
  },
  async fetch() {
    await apollo(this)
  },
  // setup() {
  //   const context = useContext()
  //   const filterItems = ref([
  //     { title: 'All' },
  //     { title: 'Songs' },
  //     { title: 'Albums' },
  //   ])
  //   const filterMenu = ref(false)
  //   useFetch(async () => {
  //     await apollo(context)
  //     // const { result, loading, error } = useQuery(
  //     //   SongsQuery,
  //     //   {},
  //     //   {
  //     //     fetchPolicy: 'no-cache',
  //     //     prefetch: false,
  //     //   }
  //     // )
  //     // console.log(result)
  //   })
  //   // const songs = ref([])
  //   // const songs = useResult(result)

  //   return {
  //     filterItems,
  //     filterMenu,
  //     // songs,
  //     // error,
  //     // loading,
  //   }
  // },
  fetchOnServer: false,
})
</script>
