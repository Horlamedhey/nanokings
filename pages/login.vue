<template>
  <OrganismsAccount
    heading="Welcome,"
    subHeading="Enter your details to login."
    footer="Don’t have an account?"
    subFooter="Sign up"
    subFooterLink="/create-account"
  >
    <FormulateForm v-model="form" @submit="$router.push('/dashboard')">
      <div class="flex-wrap justify-between sm:flex">
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
      </div>

      <div class="max-w-sm mx-auto mt-10">
        <FormulateInput type="submit" name="Login" />
      </div>
    </FormulateForm>
    <template v-slot:extra-footer>
      <h4
        class="mt-2 text-center  lato-normal-18 sm:lato-normal-20 text-secondary-light"
      >
        Forgot password?
        <nuxt-link
          to="/reset-password"
          class="text-primary lato-bold-18 sm:lato-bold-20"
        >
          Reset password
        </nuxt-link>
      </h4>
    </template>
  </OrganismsAccount>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Login',
  setup() {
    const form = reactive({})
    return { form }
  },
})
</script>
