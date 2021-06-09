<template>
  <div
    class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md  my-shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:hidden"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="-1"
  >
    <span class="block px-4 py-2 lato-semibold-16 text-secondary-light">
      VaryAble
    </span>

    <AtomsButton
      class="flex w-full px-4 py-2 space-x-3 transition duration-300  hover:ripple-bg-primary-DEFAULT text-primary hover:text-white"
    >
      <span class="lato-semibold-16">Logout</span>

      <AtomsIconsLogout />
    </AtomsButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'UserMenu',
})
</script>
