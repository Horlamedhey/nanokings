<template>
  <div class="relative ml-4 sm:ml-6">
    <div>
      <AtomsButton
        class="
          flex
          items-center
          max-w-xs
          text-sm
          focus:outline-none
          text-secondary-lighter
        "
        :class="buttonClasses"
        :id="id"
        aria-expanded="false"
        aria-haspopup="true"
        @click="$emit('toggle')"
      >
        <span class="sr-only">
          Open {{ id.split('-').slice(0, 2).join(' ') }}
        </span>

        <span class="ml-1 mr-3 sm:inline lato-medium-14"> {{ title }} </span>
        <AtomsIconsChevronLeft class="transform -rotate-90" />
      </AtomsButton>
    </div>

    <transition name="slide-y">
      <div
        v-show="show"
        class="
          absolute
          right-0
          w-48
          py-1
          mt-2
          origin-top-right
          bg-white
          rounded-md
          my-shadow
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        role="menu"
        aria-orientation="vertical"
        :aria-labelledby="id"
        tabindex="-1"
      >
        <template v-for="(item, i) in items">
          <span
            v-if="item.notButton"
            :key="`${id}-item-${i}`"
            class="
              block
              px-4
              py-2
              transition
              duration-300
              lato-semibold-16
              text-secondary-light
              hover:bg-secondary-lighter
              hover:text-white
            "
            :class="[
              itemsClasses,
              item.classes,
              { 'flex space-x-3 ': item.icon !== undefined },
            ]"
          >
            {{ item.title }}
          </span>
          <AtomsButton
            v-else
            :key="`${id}-item-${i}`"
            class="
              w-full
              px-4
              py-2
              text-left
              transition
              duration-300
              hover:bg-secondary-lighter
              text-secondary-light
              hover:text-white
              lato-semibold-16
            "
            :class="[
              itemsClasses,
              item.classes,
              { 'flex space-x-3 ': item.icon !== undefined },
            ]"
          >
            <span class="">{{ item.title }}</span>
            <component :is="item.icon"></component>
          </AtomsButton>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    id: { type: String, required: true },
    show: { type: Boolean, required: true },
    title: { type: String, required: true },
    buttonClasses: { type: String, default: '' },
    itemsClasses: { type: String, default: '' },
    items: { type: Array, required: true },
  },
}
</script>

<style scoped>
.my-shadow {
  box-shadow: 0 100px 80px rgba(67, 97, 238, 0.12),
    0 41.78px 33.4px rgba(67, 97, 238, 0.0863),
    0 22.34px 17.87px rgba(67, 97, 238, 0.0715),
    0 12.52px 10.02px rgba(67, 97, 238, 0.06),
    0 6.65px 5.32px rgba(67, 97, 238, 0.0485),
    0 2.77px 2.21px rgba(67, 97, 238, 0.0337);
}
.slide-y-enter-active {
  @apply transition ease-out duration-100;
}
.slide-y-enter,
.slide-y-leave-to {
  @apply transform opacity-0 scale-95;
}
.slide-y-enter-to,
.slide-y-leave {
  @apply transform opacity-100 scale-100;
}
.slide-y-leave-active {
  @apply transition ease-in duration-75;
}
</style>