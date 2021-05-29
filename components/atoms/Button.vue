<template>
  <component
    :is="tag"
    :id="id"
    :class="{
      contentClass,
      'opacity-50': disabled,
      'cursor-not-allowed': disabled,
      'cursor-default': cursorDisabled,
      'cursor-pointer': !cursorDisabled,
    }"
    :href="href"
    :to="to"
    :target="target"
    :type="type"
    class="focus:outline-none"
    @click.stop="$emit('click')"
  >
    <component
      :is="icon"
      v-if="icon && addOnBefore"
      class="w-5 h-5"
    ></component>
    <!-- @slot Main slot used for text -->
    <slot></slot>
    <component :is="icon" v-if="icon && addOnAfter" class="w-5 h-5"></component>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Button',
  props: {
    /** "href" for link - renders an <a> component */
    href: { type: String, default: '' },
    /** Type attribute for button - ie type="submit" */
    type: { type: String, default: '' },
    /** ID attribute */
    id: { type: String, default: '' },
    /** "to" prop for vue-router - renders a <router-link> */
    to: {
      type: [String, Object],
      default: '',
    },
    // additional icon component
    icon: { type: [Object, Function], default: () => ({}) },
    /** target attrbitue for the <a> tag */
    target: { type: String, default: '' },
    color: { type: String, default: '' },
    fill: Boolean,
    outlined: Boolean,
    text: Boolean,
    /** Disabled mode */
    disabled: Boolean,
    cursorDisabled: Boolean,
    // class(es) of the content of the list item(the main component - a/n-link/button)
    contentClass: { type: [String, Array], default: '' },
    // class(es) of the active link
    activeClass: { type: [String, Array], default: '' },
    // if icon should come after
    addOnBefore: Boolean,
    // if icon should come after
    addOnAfter: Boolean,
  },
  setup({ href, to }) {
    const tag = computed(() => {
      if (href) return 'a'
      if (to) return 'n-link'
      return 'button'
    })
    return {
      tag,
    }
  },
})
</script>

<style scoped></style>
