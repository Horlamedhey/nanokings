<template>
  <div>
    <div>
      <h2 class="text-secondary-lightest lato-medium-20">Title</h2>
      <h2 class="mt-3 lato-semibold-20 text-secondary-light">
        {{ song.title }}
      </h2>
    </div>
    <div class="flex justify-between mt-10">
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Artists</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.artists }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">
          Performing Artists
        </h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.performingArtists }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Type</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.type }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Format</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.format }}
        </h2>
      </div>
      <div>
        <h2 class="text-secondary-lightest lato-medium-20">Release Date</h2>
        <h2 class="mt-3 lato-semibold-20 text-secondary-light">
          {{ song.date }}
        </h2>
      </div>
    </div>
    <div class="mt-10">
      <h2 class="text-secondary-lightest lato-medium-20">Music File</h2>
      <AtomsButton
        icon="AtomsIconsCircledArrowDown"
        addOnAfter
        class="
          text-white
          bg-primary
          lato-semibold-16
          rounded-[5px]
          px-8
          py-3
          mt-4
        "
      >
        Download
      </AtomsButton>
    </div>
    <div class="mt-10">
      <h2 class="text-secondary-lightest lato-medium-20">
        Available Platforms
      </h2>
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
