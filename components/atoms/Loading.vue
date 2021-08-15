<template>
  <div
    class="loadingio-spinner-eclipse-434wf2pon3a"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <div
      class="ldio-qsi76kw0mz9"
      :style="{ transform: `translateZ(0) scale(${size / 100})` }"
    >
      <div :style="{ boxShadow: `0 5px 0 0 ${color}` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    color: { type: String, default: '#ffffff' },
    size: { type: Number, default: 30 },
  },
}
</script>

<style scoped>
@keyframes ldio-qsi76kw0mz9 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loadingio-spinner-eclipse-434wf2pon3a {
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio-qsi76kw0mz9 {
  width: 100%;
  height: 100%;
  position: relative;

  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-qsi76kw0mz9 div {
  box-sizing: content-box;
  position: absolute;
  animation: ldio-qsi76kw0mz9 0.5s linear infinite;
  width: 80px;
  height: 80px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  transform-origin: 40px 41px;
}
</style>
