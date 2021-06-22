<template>
  <component
    :is="tag"
    :id="id"
    :class="{
      contentClass,
      'rounded-full': rounded,
      'opacity-50': disabled,
      'cursor-not-allowed': disabled,
      'cursor-default': cursorDisabled,
      'cursor-pointer': !cursorDisabled,
    }"
    :href="href"
    :to="to"
    :disabled="loading"
    :target="target"
    :title="title"
    :type="type"
    class="relative focus:outline-none"
    @click.stop="$emit('click')"
  >
    <div
      v-if="tag === 'button' && loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <AtomsLoading />
    </div>

    <template>
      <component
        :is="icon"
        v-if="icon && addOnBefore"
        class="inline-block w-5 h-5 mr-1"
      ></component>
      <!-- @slot Main slot used for text -->
      <slot></slot>
      <component
        :is="icon"
        v-if="icon && addOnAfter"
        class="inline-block w-5 h-5 ml-1"
      ></component>
    </template>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Button',
  props: {
    /** "href" for link - renders an <a> component */
    href: { type: String, default: undefined },
    /** Type attribute for button - ie type="submit" */
    type: { type: String, default: undefined },
    /** ID attribute */
    id: { type: String, default: undefined },
    /** "to" prop for vue-router - renders a <router-link> */
    to: {
      type: [String, Object],
      default: undefined,
    },
    // additional icon component
    icon: { type: String, default: '' },
    /** target attrbitue for the <a> tag */
    target: { type: String, default: undefined },
    title: { type: String, default: '' },
    color: { type: String, default: '' },
    fill: Boolean,
    outlined: Boolean,
    text: Boolean,
    rounded: Boolean,
    loading: Boolean,
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
