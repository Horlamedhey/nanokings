<template>
  <li class="list-none cursor-pointer" @click="$emit('click', $event)">
    <a v-if="href" :href="href" :target="target" :class="contentClass">
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
    <AtomsButton v-else :class="contentClass" @click="$emit('click')">
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
  @apply relative after:md:w-[80%] after:w-[60%] after:h-1 after:bg-accent after:bottom-[-4px] after:left-[20%] after:md:left-[10%] after:rounded-full after:absolute;
}
.hover-navbar-link {
  @apply after:transition after:duration-500;
}
</style>
