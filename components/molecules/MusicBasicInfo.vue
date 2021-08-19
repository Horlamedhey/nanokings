<template>
  <div>
    <div class="mt-4">
      <h2 class="text-secondary-lightest lato-medium-20">Title</h2>
      <h2 class="mt-3 capitalize lato-semibold-20 text-secondary-light">
        {{ song.title }}
      </h2>
    </div>
    <div
      class="flex flex-wrap justify-start gap-8 mt-10  sm:gap-10 lg:justify-between"
    >
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Artists</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.artiste }}
        </h2>
      </div>
      <div>
        <h2 class="capitalize text-secondary-lightest lato-medium-20">
          Performing Artists
        </h2>
        <h2 class="mt-3 capitalize lato-semibold-20 text-secondary-light">
          {{ song.creatives }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Type</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.musicType }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Format</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.format || 'mp3' }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Release Date</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ new Date(song.releasedOn).toLocaleDateString() }}
        </h2>
      </div>
    </div>
    <div class="inline-grid mt-10">
      <h2 class="text-secondary-lightest lato-medium-20">Music File</h2>
      <AtomsButton
        icon="AtomsIconsCircledArrowDown"
        addOnAfter
        class="
          text-white
          ripple-bg-primary-DEFAULT
          lato-semibold-16
          rounded-[5px]
          px-8
          py-3
          mt-4
        "
        :href="`https://res.cloudinary.com/befittinglife/video/upload/v1625927520/nanokings/songs/${song.music}.mp3`"
      >
        Download
      </AtomsButton>
    </div>
    <div class="mt-10">
      <h2 class="text-secondary-lightest lato-medium-20">
        Available Platforms
      </h2>
      <MoleculesPlatforms
        :platforms="song.platforms || []"
        class="flex flex-wrap justify-between mt-3  sxs:justify-start sxs:gap-8 sm:justify-center lg:justify-start xl:gap-0 xl:justify-center"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicBasicInfo',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
}
</script>
