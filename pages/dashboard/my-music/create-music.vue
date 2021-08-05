<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <MoleculesBasicModal
      :modal="modal"
      icon="AtomsIconsCircledCheck"
      content="Music Created Succesfully"
      state="success"
      @close="modal = false"
    />
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <div class="flex items-center">
          <AtomsButton @click="$router.go(-1)" class="mt-1">
            <AtomsIconsCircledArrowLeft class="w-8 h-8 text-primary" />
          </AtomsButton>
          <MoleculesBreadcrumbs />
        </div>
      </div>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <FormulateForm
          v-model="form"
          name="create-music"
          #default="{ isLoading, hasErrors }"
          @submit="createMusic($formulate)"
        >
          <div class="bg-white rounded-2xl mt-[275px] px-6 pb-10">
            <div class="relative flex justify-center pt-[126px]">
              <FormulateInput
                type="image"
                name="artwork"
                id="artwork"
                placeholder=""
                validation="bail|required|mime:image/jpeg,image/png,image/gif"
                accept="image/jpeg,image/png,image/gif"
                :disabled="isLoading"
                :uploader="uploadImage"
                class="group"
              >
                <!-- upload-behavior="delayed" -->
                <template v-slot:file="file">
                  <div
                    class="
                      mt-[-358px]
                      h-[355px]
                      w-[282px]
                      mx-auto
                      rounded-[10.53px]
                      overflow-hidden
                    "
                  >
                    <img :src="file.file.previewData" alt />
                    <AtomsButton
                      v-if="!!form.artwork"
                      type="button"
                      class="
                        absolute
                        right-4
                        top-3
                        hover:ripple-bg-error
                        bg-transparent
                        z-[10]
                        rounded-full
                        transition-colors
                        duration-300
                      "
                      @click="removeFile('artwork')"
                    >
                      <AtomsIconsClose
                        class="
                          w-8
                          h-8
                          p-1
                          transition-colors
                          duration-300
                          text-error
                          hover:text-white
                        "
                      ></AtomsIconsClose>
                    </AtomsButton>
                  </div>
                </template>
                <template v-slot:uploadAreaMask>
                  <div
                    :disabled="isLoading"
                    class="
                      w-[288px]
                      h-[361px]
                      rounded-[10.53px]
                      border-dashed border-2 border-primary
                      text-center
                    "
                  >
                    <div
                      class="
                        flex flex-col
                        items-center
                        justify-between
                        w-full
                        h-full
                        py-10
                        transition
                        duration-300
                      "
                      :class="{
                        'opacity-0 group-hover:opacity-100 ': !!form.artwork,
                      }"
                    >
                      <div class="z-[1]">
                        <AtomsIconsImagePlaceholder
                          class="inline text-primary w-9 h-9"
                          :class="
                            !!form.artwork
                              ? 'text-white'
                              : 'text-secondary-lighter'
                          "
                        />
                        <div
                          class="mt-6 lato-normal-16"
                          :class="
                            !!form.artwork
                              ? 'text-white'
                              : 'text-secondary-lighter'
                          "
                        >
                          Supports JPG, PNG, JPEG only
                        </div>
                      </div>
                      <AtomsButton
                        type="button"
                        :disabled="isLoading"
                        class="
                          inline-block
                          px-10
                          py-3
                          mt-6
                          text-white
                          rounded
                          lato-semibold-16
                          ripple-bg-primary-DEFAULT
                        "
                      >
                        Upload Artwork
                      </AtomsButton>
                    </div>
                  </div>
                </template>
              </FormulateInput>
            </div>
            <div class="flex-wrap justify-between mt-10 sm:flex">
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="file"
                  id="musicFile"
                  :disabled="isLoading"
                  label="Upload music file"
                  placeholder="Choose file"
                  name="musicFile"
                  validation="bail|required|mime:audio/mpeg,audio/mp3,video/mp4"
                  accept="audio/mpeg,audio/mp3,video/mp4"
                  validation-name="Music file"
                  :uploader="uploadSong"
                >
                  <template v-slot:file="file">
                    <div
                      class="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-between
                        text-secondary-lighter
                        my-formulate-input-field
                      "
                    >
                      <span class="truncate">{{ file.file.name }}</span>
                      <AtomsButton
                        type="button"
                        :disabled="isLoading"
                        class="
                          hover:ripple-bg-error
                          bg-transparent
                          z-[10]
                          rounded-full
                          transition-colors
                          duration-300
                        "
                        @click="removeFile('musicFile')"
                      >
                        <AtomsIconsClose
                          class="
                            w-8
                            h-8
                            p-1
                            transition-colors
                            duration-300
                            text-error
                            hover:text-white
                          "
                        ></AtomsIconsClose>
                      </AtomsButton>
                    </div>
                  </template>
                  <template v-slot:uploadAreaMask>
                    <div
                      :disabled="isLoading"
                      class="
                        flex
                        items-center
                        justify-between
                        text-secondary-lighter
                        my-formulate-input-field
                      "
                      :class="{
                        'opacity-0': ![null, undefined].includes(
                          form.musicFile
                        ),
                      }"
                    >
                      <span>Choose file</span>
                      <AtomsIconsAttachment />
                    </div>
                  </template>
                </FormulateInput>
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="file"
                  id="lyricsFile"
                  :disabled="isLoading"
                  label="Upload lyrics file (Optional)"
                  placeholder="Supports plain text (.txt) only"
                  name="lyricsFile"
                  validation="bail|optional|mime:text/plain"
                  accept="text/plain"
                  validation-name="Lyrics file"
                  :uploader="uploadLyrics"
                >
                  <template v-slot:file="file">
                    <div
                      class="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-between
                        text-center text-secondary-lighter
                        my-formulate-input-field
                      "
                    >
                      <span class="truncate">{{ file.file.name }}</span>
                      <AtomsButton
                        type="button"
                        :disabled="isLoading"
                        class="
                          hover:ripple-bg-error
                          bg-transparent
                          z-[10]
                          rounded-full
                          transition-colors
                          duration-300
                        "
                        @click="removeFile('lyricsFile')"
                      >
                        <AtomsIconsClose
                          class="
                            w-8
                            h-8
                            p-1
                            transition-colors
                            duration-300
                            text-error
                            hover:text-white
                          "
                        ></AtomsIconsClose>
                      </AtomsButton>
                    </div>
                  </template>
                  <template v-slot:uploadAreaMask>
                    <div
                      :disabled="isLoading"
                      class="
                        flex
                        items-center
                        justify-between
                        text-center text-secondary-lighter
                        my-formulate-input-field
                      "
                      :class="{
                        'opacity-0': ![null, undefined].includes(
                          form.lyricsFile
                        ),
                      }"
                    >
                      <span>Choose file</span>
                      <AtomsIconsAttachment />
                    </div>
                  </template>
                </FormulateInput>
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Song title"
                  placeholder="Wait for me"
                  name="songTitle"
                  validation="bail|required"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Artist name"
                  placeholder="John Doe"
                  name="artistName"
                  validation="bail|required"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Apple Music/Spotify artist link"
                  placeholder=""
                  name="musicLink"
                  validation="bail|required"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="select"
                  label="Music Type"
                  placeholder="Select type"
                  name="musicType"
                  :options="musicTypes"
                  validation="bail|required|alpha"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="select"
                  label="Primary genre"
                  placeholder="Select genre"
                  name="primaryGenre"
                  :options="genres"
                  validation="bail|required|alphanumeric"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="select"
                  label="Secondary genre"
                  placeholder="Select genre"
                  name="secondaryGenre"
                  :options="genres"
                  validation="bail|required|alphanumeric"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="datetime-local"
                  label="Release date and time"
                  placeholder="Select date and time"
                  name="dateTime"
                  :validation="`bail|required|date|after:${new Date()}`"
                  :validation-messages="{
                    after: `Release date and time must be after today.`,
                  }"
                />
              </div>

              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Label name (Optional)"
                  placeholder="Mavins"
                  name="labelName"
                  validation="bail|optional|alpha"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="UPC/EAN code (Optional)"
                  placeholder=""
                  name="upcean"
                  validation="bail|optional|alpha"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Recording location (Optional)"
                  placeholder="Lagos, Nigeria"
                  name="recordLocation"
                  validation="bail|optional|alpha"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Song writer"
                  placeholder="Johnny Drille"
                  name="writer"
                  validation="bail|required|alpha"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="text"
                  label="Song Artists & Creatives"
                  placeholder="Adekunle Gold, Olamide, etc."
                  help="Separate multiple names with comma (,)"
                  name="creatives"
                  validation="bail|required|alpha"
                />
              </div>

              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="checkbox"
                  label="Want this release sold worldwide?"
                  name="worldwide"
                  label-class="formulate-input-element-decorator"
                  validation="bail|optional|accepted"
                >
                  <template v-slot:label>
                    <label for="worldwide">
                      <span
                        class="
                          sm:lato-normal-20
                          lato-normal-18
                          text-secondary-light
                        "
                      >
                        Want this release sold worldwide?
                      </span>
                    </label>
                  </template>
                </FormulateInput>
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  :disabled="isLoading"
                  type="checkbox"
                  label="Previously Released?"
                  name="previouslyReleased"
                  label-class="formulate-input-element-decorator"
                  validation="bail|optional|accepted"
                >
                  <template v-slot:label>
                    <label for="previouslyReleased">
                      <span
                        class="
                          sm:lato-normal-20
                          lato-normal-18
                          text-secondary-light
                        "
                      >
                        Previously Released?
                      </span>
                    </label>
                  </template>
                </FormulateInput>
              </div>
            </div>
            <div class="max-w-xs mx-auto mt-16">
              <FormulateInput
                type="submit"
                name="submitButton"
                :disabled="hasErrors || isLoading"
              >
                <AtomsLoading v-if="isLoading" color="#1240DD" />
                <div v-else>
                  <span class="mr-1 lato-bold-16">Create Music</span>
                  <AtomsIconsAdd class="inline" />
                </div>
              </FormulateInput>
            </div>
          </div>
        </FormulateForm>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import musicTypes from '@/static/data/musicTypes.json'
import genres from '@/static/data/genres.json'
import {
  InsertOneSongMutation,
  InsertOneSongMutationVariables,
} from '@/types/types'
import InsertOneSong from '@/graphs/create/InsertOneSong'
import apollo from '~/helpers/apollo'
export default defineComponent({
  name: 'CreateMusic',
  layout: 'dashboard',
  setup() {
    const context = useContext()
    const apolloClient = context.app.apolloProvider!.defaultClient
    const form = ref({} as { [key: string]: any })
    const modal = ref(false)
    const removeFile = (fileName: string) => {
      const inputField = <HTMLInputElement>document.getElementById(fileName)
      form.value[fileName] = null
      inputField.type = 'text'
      inputField.type = 'file'
    }
    const uploadImage = async (
      file: any,
      progress: any,
      error: any,
      option: any
    ) => {
      // console.log(file, progress, error, option)
      const readData = (f: any) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })
      /* Read data */
      const data = await readData(file)
      const timestamp = Date.now()
      const signature = await context.app.$axios.$post(
        'https://cloudinary-upload-sigature.vercel.app/api',
        {
          timestamp,
          folder: 'nanokings/artwork',
          upload_preset: 'nanokings',
        }
      )
      if (signature) {
        /* upload the converted data */
        const { public_id } = await context.app.$cloudinary.upload(data, {
          folder: 'nanokings/artwork',
          upload_preset: 'nanokings',
          timestamp,
          signature,
          api_key: '169241722441159',
        })
        return { url: public_id.split('/')[2] }
      }
    }
    const uploadSong = async (
      file: any,
      progress: any,
      error: any,
      option: any
    ) => {
      // console.log(file, progress, error, option)
      const readData = (f: any) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })
      /* Read data */
      const data = await readData(file)
      const timestamp = Date.now()
      const signature = await context.app.$axios.$post(
        'https://cloudinary-upload-sigature.vercel.app/api',
        {
          timestamp,
          folder: 'nanokings/songs',
          upload_preset: 'nanokings-others',
        }
      )
      if (signature) {
        /* upload the converted data */
        const { public_id } = await context.app.$cloudinary.upload(data, {
          folder: 'nanokings/songs',
          upload_preset: 'nanokings-others',
          resource_type: 'video',
          timestamp,
          signature,
          api_key: '169241722441159',
        })
        return { url: public_id.split('/')[2] }
      }
    }
    const uploadLyrics = async (
      file: any,
      progress: any,
      error: any,
      option: any
    ) => {
      // console.log(file, progress, error, option)
      const readData = (f: any) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })
      /* Read data */
      const data = await readData(file)
      const timestamp = Date.now()
      const signature = await context.app.$axios.$post(
        'https://cloudinary-upload-sigature.vercel.app/api',
        {
          timestamp,
          folder: 'nanokings/lyrics',
          upload_preset: 'nanokings-others',
        }
      )
      if (signature) {
        /* upload the converted data */
        const { public_id } = await context.app.$cloudinary.upload(data, {
          folder: 'nanokings/lyrics',
          upload_preset: 'nanokings-others',
          resource_type: 'raw',
          timestamp,
          signature,
          api_key: '169241722441159',
        })
        return { url: public_id.split('/')[2] }
      }
    }
    const createMusic = async (formulate: any) => {
      try {
        const {
          dateTime,
          artwork: {
            results: {
              0: { url: artwork },
            },
          },
          musicFile: {
            results: {
              0: { url: musicFile },
            },
          },
          lyricsFile: lyrics,
          ...rest
        } = form.value

        const lyricsFile =
          lyrics !== undefined && lyrics !== null
            ? lyrics.results[0].url
            : undefined

        await apollo(context)
        // console.log(form.value)
        await apolloClient.mutate({
          mutation: InsertOneSong,
          variables: {
            ...rest,
            releasedOn: new Date(dateTime),
            artwork,
            musicFile,
            lyricsFile,
            user: context.app.$realmApp.currentUser.customData._id,
            createdAt: new Date(),
            updatedAt: new Date(),
          } as InsertOneSongMutationVariables,
        })

        modal.value = true
        formulate.reset('create-music')
        // TODO Refresh user custom data
      } catch (err) {
        console.log(err, err.message)
      }
    }
    return {
      form,
      musicTypes,
      genres,
      modal,
      removeFile,
      createMusic,
      uploadImage,
      uploadSong,
      uploadLyrics,
    }
  },
})
</script>
