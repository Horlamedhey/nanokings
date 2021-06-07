<template>
  <header
    ref="el"
    class="z-[2] mx-auto bg-white fixed top-0 right-0 left-0"
    :class="
      !overlay
        ? [
            {
              'transform opacity-0 shadow-lg': scrollY >= navBarHeight + 20,
            },
            {
              '-translate-y-full  duration-500 transition ease-out':
                scrollY >= navBarHeight + 50,
            },
            {
              ' opacity-100': scrollY >= navBarHeight + 100,
            },
            {
              'translate-y-0 duration-500 transition ease-in':
                scrollY >= navBarHeight + 120,
            },
          ]
        : []
    "
  >
    <nav class="px-6 py-3 mx-auto sm:container">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <AtomsButton to="/">
              <AtomsIconsLogo />
            </AtomsButton>
          </div>

          <!-- Mobile menu button -->
          <AtomsButton
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden"
            aria-label="toggle menu"
            @click="setMenu(true)"
          >
            <AtomsIconsMenu class="text-primary" />
          </AtomsButton>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="items-center transition duration-300 w-64 transform bg-white md:flex md:transform-none md:w-auto md:relative md:ml-[unset] fixed right-0 top-0 bottom-0 z-10 ml-auto md:z-auto"
          :class="[overlay ? '  translate-x-0  ' : ' translate-x-full ']"
        >
          <AtomsButton
            type="button"
            aria-label="toggle menu"
            class="absolute right-6 text-primary top-6 md:hidden"
            @click="setMenu(false)"
          >
            <AtomsIconsClose />
          </AtomsButton>
          <ul class="flex flex-col mt-20 md:flex-row md:mt-0 md:mx-1">
            <AtomsNavItem
              v-for="(navLink, i) in navLinks"
              :key="`navLink-${i}`"
              class="mx-2 my-2 lato-semibold-16 text-secondary-lighter md:my-0"
              content-class="px-6 py-1 md:px-2"
              active-class="text-primary active-navbar-link"
              :to="navLink.to"
              @click="setMenu(false)"
            >
              {{ navLink.name }}
            </AtomsNavItem>
          </ul>
        </div>
        <div class="items-center hidden py-2 -mx-1 md:flex md:mx-0">
          <AtomsNavItem
            class="block w-1/2 px-3 py-2 mx-1 leading-5 text-center rounded lato-semibold-16 text-primary hover:bg-opacity-90 md:mx-2 md:w-auto"
            to="#"
          >
            Login
          </AtomsNavItem>
          <AtomsNavItem
            class="block w-1/2 px-3 py-2 mx-1 leading-5 text-center text-white rounded lato-semibold-16 bg-primary md:mx-2 ripple-bg-primary-DEFAULT md:w-auto"
            to="/create-account"
          >
            Create Account
          </AtomsNavItem>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useStore,
  computed,
} from '@nuxtjs/composition-api'
import { useWindowScroll, useElementSize, useMediaQuery } from '@vueuse/core'

export interface State {
  overlay: boolean
}
export default defineComponent({
  name: 'NavBar',
  setup() {
    const el = ref(null)
    const navLinks = ref([
      { name: 'Home', to: '/' },
      { name: 'About', to: '#who-are-we' },
      { name: 'Services', to: '#services' },
      { name: 'Pricing', to: '#pricing' },
    ])
    const isLargeScreen = useMediaQuery('(min-width: 960px)')
    const { y: scrollY } = useWindowScroll()
    const store = useStore<State>()
    const overlay = computed(() => store.state.overlay)
    const navBarHeight = useElementSize(el).height
    const setMenu = (val: boolean) => {
      store.commit('setOverlay', val)
    }
    return {
      setMenu,
      overlay,
      navLinks,
      isLargeScreen,
      scrollY,
      navBarHeight,
      el,
    }
  },
})
</script>

<style scoped></style>
