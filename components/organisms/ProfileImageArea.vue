<template>
  <div>
    <div class="relative h-[151px]">
      <img
        class="absolute inset-0 z-0 object-contain w-full h-full rounded-lg"
        :src="
          $cloudinary.image.url(`nanokings/avatars/${coverPhoto}`, {
            crop: 'fill',
            width: 600,
            height: 350,
            format: 'webp',
            gravity: 'auto:subject',
          })
        "
        alt=""
      />
      <AtomsButton
        class="
          items-center
          inline-block
          px-10
          py-3
          ml-auto
          absolute
          text-white
          lg:bottom-4
          lg:top-[unset]
          top-4
          right-4
          rounded
          lato-bold-16
          ripple-bg-white
          bg-[rgba(255,255,255,0.3)]
          hover:text-secondary-light
          z-[2]
        "
      >
        Change cover
      </AtomsButton>
      <div class="absolute inset-0 z-0 h-full rounded-lg bg-curtain" />
      <div
        class="absolute flex justify-center bottom-[-56px] items-end inset-0"
      >
        <img
          class="rounded-full ring-4 ring-secondary-lighter h-28 w-28 z-[1]"
          :src="
            $cloudinary.image.url(`nanokings/avatars/${avatar}`, {
              crop: 'fill',
              width: 150,
              height: 150,
              format: 'webp',
              gravity: 'auto:subject',
              radius: 'max',
            })
          "
          alt=""
        />
        <AtomsButton
          class="
            w-10
            h-10
            absolute
            z-[1]
            ml-28
            rounded-full
            shadow-md
            bg-[#ECEFFD]
            ripple-bg-white
            border border-[#D7DAE8]
            text-primary text-center
          "
        >
          <AtomsIconsEdit class="m-auto" />
        </AtomsButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileImageArea',
  props: {
    coverPhoto: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
}
</script>
