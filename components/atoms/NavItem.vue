<template>
  <li class="list-none cursor-pointer" @click="$emit('click', $event)">
    <a
      v-if="href"
      :href="href"
      :target="target"
      :class="contentClass"
      class="inline-block"
    >
      <component
        :is="icon"
        v-if="icon && addOnBefore"
        class="w-5 h-5 mr-4"
      ></component>
      <slot></slot>
      <component
        :is="icon"
        v-if="icon && addOnAfter"
        class="w-5 h-5"
      ></component>
    </a>
    <n-link
      v-else-if="to"
      :to="to"
      :exact="exact"
      :class="contentClass"
      class="inline-block"
      :active-class="activeClass"
      @click="$emit('click')"
    >
      <component
        :is="icon"
        v-if="icon && addOnBefore"
        class="w-5 h-5 mr-4"
      ></component>
      <!-- ( -->
      <slot></slot>
      <component
        :is="icon"
        v-if="icon && addOnAfter"
        class="w-5 h-5"
      ></component>
    </n-link>
    <AtomsButton
      v-else
      :class="contentClass"
      class="inline-block"
      @click="$emit('click')"
    >
      <component
        :is="icon"
        v-if="icon && addOnBefore"
        class="w-5 h-5 mr-4"
      ></component>
      <slot></slot>
      <component
        :is="icon"
        v-if="icon && addOnAfter"
        class="w-5 h-5"
      ></component>
    </AtomsButton>
  </li>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NavItem',
  props: {
    /** to attribute for <router-link> */
    to: {
      type: [String, Object],
      default: '',
    },
    /** href attribute for <a> */
    href: { type: String, default: '' },
    /** target attrbitue for the <a> tag */
    target: { type: String, default: '' },
    // additional icon component
    icon: { type: [Object, Function], default: () => ({}) },
    // class(es) of the content of the list item(the main component - a/n-link/button)
    contentClass: { type: [String, Array], default: '' },
    exact: Boolean,
    // class(es) of the active link
    activeClass: { type: [String, Array], default: '' },
    // if icon should come after
    addOnBefore: Boolean,
    // if icon should come after
    addOnAfter: Boolean,
    // // If indicator should be shown on active list item
    // indicator: Boolean,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.active-navbar-link,
.hover-navbar-link:hover {
  @apply relative before:lg:w-[80%] before:w-[60%] before:h-1 before:bg-accent before:bottom-[-4px] before:left-[20%] before:lg:left-[10%] before:rounded-full before:absolute;
}
.hover-navbar-link {
  @apply before:transition before:duration-500 after:content-[''];
}
</style>
