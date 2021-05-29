<template>
  <component :is="`${tag}`">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Text',
  props: {
    /** The html tag to be used for tex wrapper */
    tag: {
      type: String,
      default: 'p',
    },
  },
})
</script>

<style scoped></style>
