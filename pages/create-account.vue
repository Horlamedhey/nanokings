<template>
  <OrganismsAccount
    heading="Hello,"
    subHeading="Create an account to get started."
    footer="Already have an account?"
    subFooter="Login"
    subFooterLink="/login"
  >
    <FormulateForm v-model="form" @submit="$router.push('/confirm-email')">
      <div class="flex-wrap justify-between sm:flex">
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="text"
            label="First name"
            placeholder="John"
            name="firstName"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="text"
            label="Last name"
            placeholder="Doe"
            name="lastName"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="select"
            label="Country"
            placeholder="Select country"
            name="country"
            :options="countries"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="select"
            label="Country"
            placeholder="Select country"
            name="country"
            :options="countries"
          />
        </div>
        <div class="w-full">
          <FormulateInput
            type="email"
            label="Email"
            placeholder="Johndoe@gmail.com"
            name="email"
          />
        </div>
        <div class="w-full">
          <FormulateInput
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
          />
        </div>
        <FormulateInput
          type="checkbox"
          label="By creating an account you are agreeing to our"
          name="terms"
          label-class="formulate-input-element-decorator"
        >
          <template v-slot:label>
            <label for="terms">
              <span
                display="sm:lato-normal-20 lato-normal-18 text-secondary-light"
              >
                By creating an account you are agreeing to our
                <a class="" href="/s/terms" target="_blank" data-test="Link">
                  <span class="underline">Terms and Conditions</span>
                </a>
                and
                <a class="" href="/s/privacy" target="_blank" data-test="Link">
                  <span class="underline">Privacy Policy</span>
                </a>
              </span>
            </label>
          </template>
        </FormulateInput>
      </div>

      <div class="max-w-sm mx-auto mt-10">
        <FormulateInput type="submit" name="Create account" />
      </div>
    </FormulateForm>
  </OrganismsAccount>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import countries from '@/static/data/countries.json'

export default defineComponent({
  name: 'CreateAccount',

  setup() {
    const form = reactive({})
    return {
      form,
      countries: countries.map((v) => `${v.flag} ${v.countryName}`),
    }
  },
})
</script>
