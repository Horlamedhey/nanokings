<template>
  <div class="absolute inset-0 overflow-hidden">
    <AtomsCircleVector :fill="accentLightest" class="top-28 left-[25rem]" />
    <AtomsCircleVector
      :outline="primaryLightest"
      class="top-24 right-[25rem]"
    />
    <div class="absolute flex items-center justify-center top-2 right-2">
      <AtomsCircleVector
        :outline="primary"
        :fill="primaryLightest"
        stroke="1"
        radius="15"
        class="w-40 h-40"
      />
      <AtomsCircleVector fill="white" stroke="1" class="w-24 h-24" />
    </div>
    <AtomsCircleVector
      :outline="primaryLightest"
      class="top-52 right-[45rem]"
    />
    <AtomsCircleVector
      :outline="accentLightest"
      class="top-[23rem] right-[43rem]"
    />
    <AtomsCircleVector :fill="primaryLightest" class="top-[26rem] left-8" />
    <div
      class="
        absolute
        flex
        items-center
        justify-center
        top-[19rem]
        right-[5.5rem]
        z-[3]
      "
    >
      <AtomsCircleVector
        :outline="accentLightest"
        stroke="1"
        radius="15"
        class="w-40 h-40"
      />

      <AtomsCircleVector
        :outline="accentLightest"
        stroke="1"
        radius="15"
        class="w-[100px] h-[100px]"
      />
    </div>

    <div class="absolute flex items-center justify-center top-[45rem] left-20">
      <AtomsCircleVector
        :outline="primary"
        :fill="primaryLightest"
        stroke="1"
        radius="15"
        class="w-[22rem] h-[22rem]"
      />
      <AtomsCircleVector fill="white" class="w-[13.8rem] h-[13.8rem]" />

      <AtomsCircleVector :fill="accentLightest" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BgVectors',
  data() {
    return {
      primary: '#4361EE',
      primaryLightest: '#D0D8FB',
      accentLightest: '#EEB9D0',
    }
  },
}
</script>
