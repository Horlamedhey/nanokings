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
        <FormulateForm v-model="form" @submit="modal = true">
          <div class="bg-white rounded-2xl mt-[275px] px-6 pb-10">
            <div class="relative flex justify-center pt-[126px]">
              <FormulateInput
                type="image"
                name="artwork"
                placeholder=""
                validation="mime:image/jpeg,image/png,image/gif"
              >
                <template v-slot:uploadAreaMask>
                  <div
                    class="
                      w-[287.3px]
                      h-[361px]
                      rounded-[10.53px]
                      absolute
                      bottom-0
                      border-dashed border-2 border-primary
                      items-center
                      flex flex-col
                      justify-between
                      text-center
                      py-10
                    "
                  >
                    <div>
                      <AtomsIconsImagePlaceholder
                        class="inline text-primary w-9 h-9"
                      />
                      <div class="mt-6 lato-normal-16 text-secondary-lighter">
                        Supports JPG, PNG, JPEG only
                      </div>
                    </div>
                    <AtomsButton
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
                </template>
              </FormulateInput>
            </div>
            <div class="flex-wrap justify-between mt-10 sm:flex">
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="file"
                  label="Upload music file"
                  placeholder="Choose file"
                  name="musicFile"
                  validation="mime:audio/mpeg,audio/mp3,video/mp4"
                >
                  <template v-slot:uploadAreaMask>
                    <div
                      class="
                        relative
                        flex
                        items-center
                        justify-between
                        text-center text-secondary-lighter
                        my-formulate-input-field
                      "
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
                  label="Upload lyrics file (Optional)"
                  placeholder="Choose file"
                  name="lyricsFile"
                  validation="mime:text/plain"
                >
                  <template v-slot:uploadAreaMask>
                    <div
                      class="
                        relative
                        flex
                        items-center
                        justify-between
                        text-center text-secondary-lighter
                        my-formulate-input-field
                      "
                    >
                      <span>Choose file</span>
                      <AtomsIconsAttachment />
                    </div>
                  </template>
                </FormulateInput>
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Song title"
                  placeholder="Wait for me"
                  name="songTitle"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Artist name"
                  placeholder="John Doe"
                  name="artistName"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Apple Music/Spotify artist link"
                  placeholder=""
                  name="musicLink"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="select"
                  label="Music Type"
                  placeholder="Select type"
                  name="musicType"
                  :options="musicTypes"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="select"
                  label="Primary genre"
                  placeholder="Select genre"
                  name="primaryGenre"
                  :options="genres"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="select"
                  label="Secondary genre"
                  placeholder="Select genre"
                  name="secondaryGenre"
                  :options="genres"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="datetime-local"
                  label="Release date and time"
                  placeholder="Select date and time"
                  name="dateTime"
                />
              </div>

              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Label name (Optional)"
                  placeholder="Mavins"
                  name="labelName"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="UPC/EAN code (Optional)"
                  placeholder=""
                  name="upcean"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Recording location (Optional)"
                  placeholder="Lagos, Nigeria"
                  name="recordLocation"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Song writer"
                  placeholder="Johnny Drille"
                  name="writer"
                />
              </div>
              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="text"
                  label="Song Artists & Creatives"
                  placeholder="Adekunle Gold, Olamide, etc."
                  help="Separate multiple names with comma (,)"
                  name="creatives"
                />
              </div>

              <div class="w-full lg:w-[48%]">
                <FormulateInput
                  type="checkbox"
                  label="Want this release sold worldwide?"
                  name="globalSale"
                  label-class="formulate-input-element-decorator"
                >
                  <template v-slot:label>
                    <label for="globalSale">
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
                  type="checkbox"
                  label="Previously Released?"
                  name="previousRelease"
                  label-class="formulate-input-element-decorator"
                >
                  <template v-slot:label>
                    <label for="previousRelease">
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
              <FormulateInput type="submit" name="submitButton">
                <div class="flex items-center justify-center">
                  <span class="mr-1 lato-bold-16">Create Music</span>
                  <AtomsIconsAdd />
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
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import musicTypes from '@/static/data/musicTypes.json'
import genres from '@/static/data/genres.json'

export default defineComponent({
  name: 'CreateMusic',
  layout: 'dashboard',
  // props: {
  //   user: {
  //     type: Object as () => User,
  //     required: true,
  //   },
  // },
  setup() {
    const form = reactive({})
    const modal = ref(false)
    return { form, musicTypes, genres, modal }
  },
})
</script>
