<template>
  <transition name="menu-overlay">
    <div
      v-show="sideMenuOpen"
      role="dialog"
      aria-modal="true"
      class="fixed inset-0 z-40 flex md:hidden"
    >
      <transition name="menu-overlay">
        <div
          v-show="sideMenuOpen"
          class="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
      </transition>
      <transition name="menu-body">
        <OrganismsDashSideMenu
          v-show="sideMenuOpen"
          class="z-40 flex flex-shrink-0 w-full max-w-xs pt-24"
          @selected="$emit('close')"
        >
          <AtomsButton class="absolute top-8 right-8" @click="$emit('close')">
            <AtomsIconsClose class="text-white" />
          </AtomsButton>
        </OrganismsDashSideMenu>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DashSideMenuMobile',
  props: { sideMenuOpen: { type: Boolean, required: true } },
  // setup() {
  //   const ultimateSideMenuOpen = ref(false)
  //   return { ultimateSideMenuOpen }
  // },
})
</script>

<style scoped>
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  @apply transition-opacity ease-linear duration-300;
}
.menu-overlay-enter,
.menu-overlay-leave-to {
  @apply opacity-0;
}

.menu-overlay-enter-to,
.menu-overlay-leave {
  @apply opacity-100;
}

.menu-body-enter-active,
.menu-body-leave-active {
  @apply transition ease-in-out duration-300 transform;
}
.menu-body-enter,
.menu-body-leave-to {
  @apply -translate-x-full;
}
.menu-body-enter-to,
.menu-body-leave {
  @apply translate-x-0;
}

.close-button-enter-active,
.close-button-leave-active {
  @apply ease-in-out duration-300;
}
.close-button-enter,
.close-button-leave-to {
  @apply opacity-0;
}
.close-button-enter-to,
.close-button-leave {
  @apply opacity-100;
}
</style>