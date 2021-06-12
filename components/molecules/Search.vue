<template>
  <div class="w-full">
    <label for="search" class="sr-only">Search</label>
    <div class="relative">
      <input
        id="search"
        placeholder="Search songs, albums....."
        type="search"
        name="search"
        class="
          block
          w-[66vw]
          sm:w-[321px]
          py-2
          pl-3
          pr-10
          leading-5
          text-secondary-light
          placeholder-secondary-light
          bg-white
          rounded-[50px]
          focus:outline-none
          focus:ring-1 focus:ring-primary
          focus:border-primary
          focus:placeholder-secondary-light
          lato-normal-12
        "
      />
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none "
      >
        <AtomsIconsSearch class="text-secondary-lighter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {},
}
</script>
