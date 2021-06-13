<template>
  <div class="w-full lg:w-9/12 lg:m-auto xl:m-0 xl:w-5/12">
    <h3 class="lato-semibold-14 text-secondary-lighter">
      {{ title }}
    </h3>

    <div>
      <div>
        <FormulateInput
          type="file"
          label="Upload music file"
          placeholder="Choose file"
          name="musicFile"
          validation="mime:audio/mpeg,audio/mp3,video/mp4"
        >
          <template v-slot:uploadAreaMask>
            <div
              class="relative flex items-center justify-between text-center  text-secondary-lighter my-formulate-input-field"
            >
              <span>Choose file</span>
              <AtomsIconsAttachment />
            </div>
          </template>
        </FormulateInput>
      </div>
      <div>
        <FormulateInput
          type="file"
          label="Upload lyrics file (Optional)"
          placeholder="Choose file"
          name="lyricsFile"
          validation="mime:text/plain"
        >
          <template v-slot:uploadAreaMask>
            <div
              class="relative flex items-center justify-between text-center  text-secondary-lighter my-formulate-input-field"
            >
              <span>Choose file</span>
              <AtomsIconsAttachment />
            </div>
          </template>
        </FormulateInput>
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Song title"
          placeholder="Wait for me"
          name="songTitle"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Artist name"
          placeholder="John Doe"
          name="artistName"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Apple Music/Spotify artist link"
          placeholder=""
          name="musicLink"
        />
      </div>
      <div>
        <FormulateInput
          type="select"
          label="Music Type"
          placeholder="Select type"
          name="musicType"
          :options="musicTypes"
        />
      </div>
      <div>
        <FormulateInput
          type="select"
          label="Primary genre"
          placeholder="Select genre"
          name="primaryGenre"
          :options="genres"
        />
      </div>
      <div>
        <FormulateInput
          type="select"
          label="Secondary genre"
          placeholder="Select genre"
          name="secondaryGenre"
          :options="genres"
        />
      </div>
      <div>
        <FormulateInput
          type="datetime-local"
          label="Release date and time"
          placeholder="Select date and time"
          name="dateTime"
        />
      </div>

      <div>
        <FormulateInput
          type="text"
          label="Label name (Optional)"
          placeholder="Mavins"
          name="labelName"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="UPC/EAN code (Optional)"
          placeholder=""
          name="upcean"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Recording location (Optional)"
          placeholder="Lagos, Nigeria"
          name="recordLocation"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Song writer"
          placeholder="Johnny Drille"
          name="writer"
        />
      </div>
      <div>
        <FormulateInput
          type="text"
          label="Song Artists & Creatives"
          placeholder="Adekunle Gold, Olamide, etc."
          help="Separate multiple names with comma (,)"
          name="creatives"
        />
      </div>

      <div>
        <FormulateInput
          type="checkbox"
          label="Want this release sold worldwide?"
          name="globalSale"
          label-class="formulate-input-element-decorator"
        >
          <template v-slot:label>
            <label for="globalSale">
              <span
                class="sm:lato-normal-20 lato-normal-18 text-secondary-light"
              >
                Want this release sold worldwide?
              </span>
            </label>
          </template>
        </FormulateInput>
      </div>
      <div>
        <FormulateInput
          type="checkbox"
          label="Previously Released?"
          name="previousRelease"
          label-class="formulate-input-element-decorator"
        >
          <template v-slot:label>
            <label for="previousRelease">
              <span
                class="sm:lato-normal-20 lato-normal-18 text-secondary-light"
              >
                Previously Released?
              </span>
            </label>
          </template>
        </FormulateInput>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfileContentSection',
  props: {
    title: { type: String, default: '' },
    form: { type: Array, required: true },
  },
}
</script>
