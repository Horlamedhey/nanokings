<template>
  <div
    class="flex flex-col items-center space-y-2 text-center  sm:flex-row sm:text-left sm:space-y-0 sm:space-x-8"
  >
    <div class="lato-normal-16">
      <span class="text-secondary-lighter">
        Showing results from
        <span class="text-primary">
          {{ (pageNumber - 1) * 10 + 1 }}-{{ (pageNumber - 1) * 10 + 10
          }}<span class="text-secondary-light"> of {{ totalCount }}</span>
        </span>
      </span>
    </div>
    <div>
      <AtomsButton
        rounded
        class="bg-transparent ripple-bg-primary-DEFAULT group"
      >
        <AtomsIconsChevronLeft
          class="inline text-gray-400 group-hover:text-white"
        />
      </AtomsButton>
      <AtomsButton
        rounded
        class="bg-transparent ripple-bg-primary-DEFAULT group"
      >
        <AtomsIconsChevronRight
          class="inline text-primary group-hover:text-white"
        />
      </AtomsButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalCount: { type: Number, required: true },
    pageNumber: { type: Number, required: true },
  },
}
</script>
