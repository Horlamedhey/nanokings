<template>
  <div
    class="
      flex
      items-center
      justify-between
      gap-4
      border
      rounded-[5px]
      border-secondary-lightest
      p-4
    "
  >
    <span class="text-secondary-light lato-medium-14" :class="titleClasses">
      {{ title }}
    </span>
    <span
      class="truncate text-secondary lato-semibold-14"
      :class="contentClasses"
    >
      {{ content }}
    </span>
    <span v-if="addonText" :class="addonText.classes">
      {{ addonText.content }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TitledContentWIthBorder',

  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    addonText: { type: Object, default: () => {} },
    titleClasses: { type: String, default: '' },
    contentClasses: { type: String, default: '' },
  },
}
</script>
