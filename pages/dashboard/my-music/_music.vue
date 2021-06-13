<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <div class="py-6">
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
              class="w-[287.3px] h-[361px] rounded-[10.53px] absolute bottom-0"
            />
          </div>
          <MoleculesMusicBasicInfo :song="song" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, useRoute, computed } from '@nuxtjs/composition-api'
import songs from '@/static/data/songs.json'

export default defineComponent({
  name: 'Music',
  layout: 'dashboard',
  setup() {
    const route = useRoute()
    const song = computed(() =>
      songs.find(
        (v) =>
          v.title.toLowerCase() ===
          route.value.params.music.split('-').join(' ')
      )
    )
    return { song }
  },
})
</script>
