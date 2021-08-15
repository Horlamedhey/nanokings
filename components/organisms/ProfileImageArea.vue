<template>
  <div>
    <div class="relative h-[151px] xl:h-56">
      <img
        class="absolute inset-0 z-0 object-cover w-full h-full rounded-lg"
        :src="
          uploadedCoverPhoto ||
          $cloudinary.image.url(`nanokings/covers/${coverPhoto}`, {
            crop: 'fill',
            width: 723,
            height: 151,
            format: 'webp',
          })
        "
        alt=""
      />
      <input
        id="add-image"
        ref="addImage"
        name="add-image"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        class="absolute opacity-0 w-0 z-[-1]"
        @change="handleImage"
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
        :disabled="uploadingCoverPhoto"
        @click="pickImage('uploadedCoverPhoto')"
      >
        Change cover
      </AtomsButton>
      <div class="absolute inset-0 z-0 h-full rounded-lg bg-curtain">
        <AtomsLoading v-if="uploadingCoverPhoto" :size="50" />
      </div>
      <div
        class="absolute flex justify-center bottom-[-56px] items-end inset-0"
      >
        <img
          class="
            rounded-full
            ring-4 ring-secondary-lighter
            h-28
            w-28
            z-[1]
            object-cover
          "
          :src="
            uploadedAvatar ||
            $cloudinary.image.url(`nanokings/avatars/${avatar}`, {
              crop: 'fill',
              width: 150,
              height: 150,
              format: 'webp',
              radius: 'max',
            })
          "
          alt=""
        />

        <div
          v-if="uploadingAvatar"
          class="
            absolute
            bg-curtain
            rounded-full
            h-28
            w-28
            z-[1]
            flex
            justify-center
            items-center
          "
        >
          <AtomsLoading :size="40" />
        </div>
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
          :disabled="uploadingAvatar"
          @click="pickImage('uploadedAvatar')"
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
  data() {
    return {
      uploadedCoverPhoto: null,
      uploadedAvatar: null,
      uploadingCoverPhoto: false,
      uploadingAvatar: false,
      imageToChange: '',
    }
  },
  methods: {
    pickImage(imageToChange) {
      this.imageToChange = imageToChange
      document.querySelector('#add-image').value = null
      document.querySelector('#add-image').click()
    },
    handleImage() {
      let currentlyLoading, uploadFolder
      if (this.imageToChange == 'uploadedCoverPhoto') {
        currentlyLoading = 'uploadingCoverPhoto'
        uploadFolder = 'nanokings/covers'
      } else {
        currentlyLoading = 'uploadingAvatar'
        uploadFolder = 'nanokings/avatars'
      }

      this[currentlyLoading] = true
      const tempUploadedImage = this.$refs.addImage.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        const file = reader.result
        this[this.imageToChange] = file
        this.imageToChange = ''
        this.uploadToCloudinary(file, currentlyLoading, uploadFolder)
      }
      reader.readAsDataURL(tempUploadedImage)
    },
    async uploadToCloudinary(file, currentlyLoading, uploadFolder) {
      const timestamp = Date.now()
      const signature = await this.$axios.$post(
        'https://cloudinary-upload-sigature.vercel.app/api',
        {
          timestamp,
          folder: uploadFolder,
          upload_preset: uploadFolder.split('/').join('-'),
        }
      )
      if (signature) {
        /* upload the converted data */
        const { public_id } = await this.$cloudinary.upload(file, {
          folder: uploadFolder,
          upload_preset: uploadFolder.split('/').join('-'),
          timestamp,
          signature,
          api_key: '169241722441159',
        })
        this[currentlyLoading] = false
        const update =
          currentlyLoading == 'uploadingAvatar'
            ? { avatar: public_id.split('/')[2] }
            : { coverPhoto: public_id.split('/')[2] }
        // return { url: public_id.split('/')[2] }
        this.$emit('updateUserImage', update)
      }
    },
  },
}
</script>
