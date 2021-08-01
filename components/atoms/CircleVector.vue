<template>
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute"
  >
    <circle
      cx="17"
      cy="17"
      :r="radius"
      :stroke="outline"
      :fill="fill"
      :stroke-width="stroke"
    />
  </svg>
</template>

<script>
export default {
  name: 'CircleVector',
  props: {
    radius: { type: String, default: '16' },
    outline: { type: String, default: 'none' },
    fill: { type: String, default: 'none' },
    stroke: { type: String, default: '2' },
  },
}
</script>
