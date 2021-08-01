<template>
  <div
    ref="myOverlay"
    class="
      fixed
      top-0
      bottom-0
      left-0
      right-0
      flex
      justify-end
      transition-opacity
      duration-300
      bg-black bg-opacity-50
      opacity-0
      z-[-1]
      overlay
      overflow-hidden
      lg:hidden
    "
  >
    <AtomsButton
      class="w-full h-full overflow-hidden"
      title="overlay"
      @click="closeOverlay"
    ></AtomsButton>
  </div>
</template>

<script>
import { defineComponent, computed, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Overlay',
  setup() {
    const store = useStore()
    const overlay = computed(() => store.state.overlay)
    const closeOverlay = () => store.commit('setOverlay', false)
    return { overlay, closeOverlay }
  },
  watch: {
    overlay(newVal) {
      const timeline = this.$gsap.timeline()
      if (newVal) {
        timeline.to(this.$refs.myOverlay, {
          zIndex: 3,
          duration: 0.2,
        })
        timeline.to(this.$refs.myOverlay, {
          opacity: 1,
          duration: 0.3,
          ease: 'power1.out',
        })
      } else {
        timeline.to(this.$refs.myOverlay, {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.out',
        })
        timeline.to(this.$refs.myOverlay, {
          zIndex: -1,
        })
      }
    },
  },
})
</script>

<style>
</style>
