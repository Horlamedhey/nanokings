<template>
  <transition name="modal-overlay">
    <div
      v-show="modal"
      class="fixed inset-0 z-10 overflow-y-hidden sm:left-64 top-16"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="
          flex
          items-center
          justify-center
          min-h-screen
          px-4
          pt-4
          pb-20
          text-center
          sm:p-0
        "
      >
        <transition name="modal-overlay">
          <div
            v-show="modal"
            class="
              absolute
              inset-0
              transition-opacity
              bg-gray-500 bg-opacity-75
            "
            aria-hidden="true"
          ></div>
        </transition>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <transition name="modal-overlay">
          <div
            class="
              px-4
              pt-5
              pb-4
              overflow-hidden
              transition-all
              transform
              bg-white
              rounded-lg
              shadow-xl
              sm:max-w-sm
              sm:p-6
            "
          >
            <slot v-show="modal"></slot>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modal: { type: Boolean, required: true },
    icon: { type: String, default: '' },
    content: { type: String, default: '' },
    state: { type: String, default: '' },
  },
}
</script>

<style  scoped>
.modal-overlay-enter-active,
.modal-content-enter-active {
  @apply ease-out duration-300;
}
.modal-overlay-enter,
.modal-overlay-leave-to {
  @apply opacity-0;
}
.modal-overlay-enter-to,
.modal-overlay-leave {
  @apply opacity-100;
}
.modal-overlay-leave-active,
.modal-content-leave-active {
  @apply ease-in duration-200;
}

.modal-content-enter,
.modal-content-leave-to {
  @apply opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95;
}
.modal-content-enter-to,
.modal-content-leave {
  @apply opacity-100 translate-y-0 sm:scale-100;
}
</style>
