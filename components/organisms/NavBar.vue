<template>
  <header
    ref="el"
    class="fixed top-0 left-0 right-0 z-10 mx-auto"
    :class="{
      'duration-500 transition ease-out shadow-lg bg-white':
        scrollY >= navBarHeight - 20 && !overlay,
    }"
  >
    <nav class="px-6 py-3 mx-auto xl:px-0 sm:container">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div class="flex items-center justify-between lg:w-3/12">
          <div class="flex items-center">
            <AtomsButton to="/">
              <AtomsIconsLogo />
            </AtomsButton>
          </div>

          <!-- Mobile menu button -->
          <AtomsButton
            type="button"
            class="focus:outline-none lg:hidden"
            aria-label="toggle menu"
            @click="setMenu(true)"
          >
            <AtomsIconsMenu class="text-primary" />
          </AtomsButton>
        </div>
        <div
          class="
            justify-center
            items-center
            transition
            duration-300
            w-64
            transform
            bg-white
            lg:bg-transparent
            lg:flex
            lg:transform-none
            lg:w-6/12
            lg:relative
            lg:ml-[unset]
            fixed
            right-0
            top-0
            bottom-0
            z-10
            ml-auto
            lg:z-auto
          "
          :class="[overlay ? '  translate-x-0  ' : ' translate-x-full ']"
        >
          <AtomsButton
            type="button"
            aria-label="toggle menu"
            class="block ml-auto mr-6 text-primary mt-7 lg:hidden"
            @click="setMenu(false)"
          >
            <AtomsIconsClose />
          </AtomsButton>
          <ul class="flex flex-col mt-20 lg:flex-row lg:mt-0 lg:mx-1">
            <AtomsNavItem
              v-for="(navLink, i) in navLinks"
              :key="`navLink-${i}`"
              exact
              class="mx-2 my-2 lato-semibold-16 text-secondary-lighter lg:my-0"
              content-class="px-6 py-1 lg:px-2 hover-navbar-link"
              active-class="text-primary active-navbar-link"
              :to="navLink.to"
              @click="setMenu(false)"
            >
              {{ navLink.name }}
            </AtomsNavItem>
          </ul>
          <div class="gap-1 mx-4 mt-4 space-y-4 lg:hidden lg-flex">
            <AtomsNavItem
              class="block px-3 py-2 leading-5 text-center rounded  lato-semibold-16 text-primary hover:bg-opacity-90 lg:mx-2 lg:w-auto"
              to="/login"
              @click="setMenu(false)"
            >
              Login
            </AtomsNavItem>
            <AtomsNavItem
              class="block p-4 leading-5 text-center text-white rounded-lg  lato-semibold-16 bg-primary lg:mx-2 ripple-bg-primary-DEFAULT lg:w-auto"
              to="/create-account"
              @click="setMenu(false)"
            >
              Create Account
            </AtomsNavItem>
          </div>
        </div>
        <div class="items-center justify-end hidden py-2 lg:flex lg:w-3/12">
          <AtomsNavItem
            class="block w-1/2 px-3 py-2 mx-1 leading-5 text-center transition duration-500 rounded  lato-semibold-16 text-primary hover:bg-opacity-90 lg:mx-2 lg:w-auto hover:ripple-bg-primary-DEFAULT hover:text-white"
            to="/login"
          >
            Login
          </AtomsNavItem>
          <AtomsNavItem
            class="block w-1/2 px-3 py-2 mx-1 leading-5 text-center text-white rounded  lato-semibold-16 bg-primary lg:mx-2 ripple-bg-primary-DEFAULT lg:w-auto"
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
