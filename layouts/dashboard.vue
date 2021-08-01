<template>
  <!-- <div :style="{ height: `${navBarHeight}px` }"></div> -->
  <!-- <AtomsOverlay></AtomsOverlay> -->
  <div
    class="transition duration-300 bg-[#F6F7FE] h-screen overflow-hidden flex"
  >
    <OrganismsDashSideMenuMobile
      :sideMenuOpen="sideMenuOpen"
      @close="sideMenuOpen = false"
    />
    <!-- Static sidebar for desktop -->
    <OrganismsDashSideMenu class="hidden w-64 md:flex md:flex-shrink-0" />
    <div class="flex flex-col flex-1 w-0">
      <OrganismsDashNavBar @openSideMenu="sideMenuOpen = true" />
      <div style="height: 70px"></div>

      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
// import apollo from '~/helpers/apollo'
export default defineComponent({
  name: 'Dashboard',
  middleware: ['auth'],
  setup() {
    const sideMenuOpen = ref(false)
    return { sideMenuOpen }
  },
  // fetchOnServer: false,
})
</script>


<style >
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
