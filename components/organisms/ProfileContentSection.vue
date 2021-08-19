<template>
  <div class="w-full lg:w-9/12 lg:m-auto xl:m-0 xl:w-5/12">
    <h3 class="lato-semibold-14 text-secondary-lighter">
      {{ title }}
    </h3>

    <div class="mt-8 space-y-3">
      <AtomsTitledContentWIthBorder
        v-for="(detail, i) in content"
        :key="`${title.split(' ').join('-')}-detail-${i}`"
        :id="detail.id"
        :title="detail.label"
        :content="detail.value"
        :altContent="detail.altValue"
        :addonText="detail.addonText"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileContentSection',
  props: {
    title: { type: String, default: '' },
    content: { type: Array, required: true },
  },
}
</script>
