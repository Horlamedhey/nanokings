<template>
  <div
    class="w-[291px] h-[126px] rounded-[10px] overflow-hidden"
    :style="{
      backgroundImage: `url(${$cloudinary.image.url(
        `nanokings/artwork/${release.artWork}`,
        {
          crop: 'lfill',
          width: 291,
          height: 126,
          format: 'webp',
          radius: '10',
        }
      )})`,
    }"
  >
    <div
      class="
        bg-[rgba(0,0,0,0.33)]
        w-full
        h-full
        text-white
        flex
        items-end
        justify-between
        px-5
        py-3
      "
    >
      <div>
        <h2 class="lato-bold-20">
          {{ release.title }}
        </h2>
        <div class="flex items-center mt-2">
          <AtomsIconsClock class="w-[15px] h-[15px]" />
          <span class="inline-block ml-1 lato-medium-14">
            {{ release.createdAt | calendar }}
          </span>
        </div>
      </div>
      <AtomsButton
        class="lato-medium-14"
        :to="`/dashboard/my-music/${release.uid}`"
      >
        <span class="border-b">View stats</span>
      </AtomsButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Release',
  props: {
    release: { type: Object, required: true },
  },
}
</script>
