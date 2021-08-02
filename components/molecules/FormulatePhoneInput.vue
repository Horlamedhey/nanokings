<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type} flex relative items-center border border-secondary-lightest mt-3 divide-x rounded focus-within:border-primary focus-within:border-2`"
    :data-type="context.type"
  >
    <select
      id="phone-country"
      class="
        country-select
        absolute
        w-[4.6rem]
        h-[58px]
        ml-[2px]
        bg-transparent
        focus:outline-none
        text-sm
        pr-1
        text-secondary-light
      "
      @change="setValue"
    >
      <option selected disabled value="+123">+123</option>
      <option
        v-for="country in countries"
        :value="country.dialCode"
        class="text-lg"
      >
        {{ country.dialCode }} - {{ country.flag }} {{ country.countryName }}
      </option>
    </select>
    <input
      type="tel"
      autocomplete="no"
      v-model="phoneInput"
      v-bind="context.attributes"
      @keydown.enter.prevent="context.model = selection.label"
      @keydown.down.prevent="increment"
      @keydown.up.prevent="decrement"
      @blur="context.blurHandler"
      class="mt-0 ml-20 border-0 rounded-none focus:border-0"
    />
  </div>
</template>

<script>
import countries from '@/static/data/countries.json'
export default {
  name: 'Formulatephone',
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      countries: countries,
      dialCode: '+123',
      phoneInput: '',
    }
  },
  watch: {
    dialCode(currVal) {
      if (this.phoneInput.length > 0) {
        this.context.model = currVal + this.phoneInput
      }
    },
    phoneInput(currVal) {
      if (currVal.length > 0) {
        this.context.model = this.dialCode + currVal
      } else {
        this.context.model = ''
      }
    },
  },
  computed: {
    model() {
      return this.context.model
    },
  },
  methods: {
    setValue(evt) {
      this.dialCode = evt.target.value
    },
  },
}
</script>
