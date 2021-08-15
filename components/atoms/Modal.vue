<template>
  <transition name="modal-overlay">
    <div
      v-show="modal"
      class="fixed inset-0 z-20 overflow-y-hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center  sm:p-0"
      >
        <transition name="modal-overlay">
          <div
            v-show="modal"
            class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75 "
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
              max-h-[90vh] max-w-[95vw]
              overflow-hidden
              transition-all
              transform
              bg-white
              rounded-lg
              shadow-xl
            "
          >
            <div class="max-h-[90vh]">
              <AtomsButton
                class="absolute top-5 right-4"
                @click="$emit('close')"
              >
                <AtomsIconsClose class="text-secondary-light" />
              </AtomsButton>
              <slot v-show="modal"></slot>

              <AtomsButton
                v-if="extraActionText"
                class="mb-2 hover:opacity-80 lato-bold-14 text-primary"
                @click="$emit('extraAction')"
              >
                {{ extraActionText }}
              </AtomsButton>
            </div>
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
    extraActionText: { type: [Boolean, String], default: '' },
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
