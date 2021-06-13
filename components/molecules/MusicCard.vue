<template>
  <div
    :style="{ backgroundImage: `url(/images/my-music/${song.image}.png)` }"
    class="overflow-hidden bg-cover"
  >
    <div class="h-full bg-curtain">
      <div
        v-if="showInfo"
        class="flex flex-col justify-end h-full px-5 py-3 space-y-2 text-center text-white "
      >
        <h1 class="lato-bold-16">{{ song.title }}</h1>
        <h3 class="lato-bold-10">{{ song.date }}</h3>
        <AtomsButton
          v-if="viewDetails"
          class="border border-white lato-bold-12 rounded-[3px] py-[6px]"
          :to="`/dashboard/my-music/${song.title
            .toLowerCase()
            .split(' ')
            .join('-')}`"
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
  },
}
</script>
