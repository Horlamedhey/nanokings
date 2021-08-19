<template>
  <div
    :style="{
      backgroundImage: `url(${artwork})`,
    }"
    class="overflow-hidden bg-cover"
  >
    <div
      class="h-full bg-curtain"
      :class="{ 'opacity-0': !viewDetails && !showInfo }"
    >
      <div
        v-if="showInfo"
        class="
          flex flex-col
          justify-end
          h-full
          px-5
          py-3
          space-y-2
          text-center text-white
        "
      >
        <h1 class="capitalize lato-bold-16">{{ song.title }}</h1>
        <h3 class="lato-bold-10">{{ song.date }}</h3>
        <AtomsButton
          v-if="viewDetails"
          class="border border-white lato-bold-12 rounded-[3px] py-[6px]"
          :to="`/dashboard/my-music/${song.uid}`"
        >
          View details
        </AtomsButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicCard',
  props: {
    song: {
      type: Object,
      required: true,
    },
    viewDetails: Boolean,
    showInfo: Boolean,
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  computed: {
    artwork() {
      return this.$cloudinary.image.url(
        `nanokings/artwork/${this.song.artWork}`,
        { crop: 'scale', width: this.width, height: this.height }
      )
    },
  },
}
</script>
