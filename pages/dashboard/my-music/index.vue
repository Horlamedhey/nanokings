<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">My Music</h1>
      </div>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <AtomsButton
          class="flex items-center px-10 py-3 mt-6 ml-auto text-white rounded  lato-bold-16 ripple-bg-primary-DEFAULT"
        >
          Create new
          <AtomsIconsAdd class="ml-1" />
        </AtomsButton>
        <div class="flex items-center justify-end mt-10 xl:justify-between">
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
        <div
          class="flex flex-wrap justify-center gap-10  sm:justify-between my-14 xl:mb-0"
        >
          <MoleculesMusicCard
            v-for="(song, i) in songs"
            :key="`song-${i}`"
            :song="song"
            viewDetails
            showInfo
            class="w-[191px] h-[240px] rounded-[7px]"
          />
        </div>
        <div class="xl:hidden">
          <MoleculesPagination :totalCount="50" :pageNumber="1" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import songs from '@/static/data/songs.json'

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
    const filterItems = ref([
      { title: 'All' },
      { title: 'Songs' },
      { title: 'Albums' },
    ])
    const filterMenu = ref(false)
    return { filterItems, filterMenu, songs }
  },
})
</script>
