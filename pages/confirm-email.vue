<template>
  <OrganismsAccount
    heading="Verify your email,"
    subHeading="Almost there! we’ve sent a verification code to johndoe@gmail.com. You need to verfiy your email address to log into NanoKings Digitals."
    footer=""
    subFooter="Change email?"
    subFooterLink="/create-account"
  >
    <template v-slot:extra-header>
      <div>
        <div class="flex items-center space-x-3">
          <AtomsButton to="/create-account">
            <AtomsIconsCircledArrowLeft class="w-10 h-10 text-primary" />
          </AtomsButton>
          <span class="lato-normal-24 text-secondary-light"> Back </span>
        </div>
        <nuxt-img src="/images/confirm-email.svg" format="webp" />
      </div>
    </template>
    <FormulateForm v-model="form" class="mt-48">
      <div class="max-w-sm mx-auto mt-10">
        <!-- <FormulateInput type="submit" name="Login" /> -->
        <AtomsButton
          to="/confirm-email"
          class="mt-0 rounded-[15px] text-white lato-bold-16 sm:lato-bold-20 outline-none ripple-bg-primary-DEFAULT block w-full px-4 py-4 mt-3 transition duration-500 border outline-none border-secondary-lightest text-center lato-normal-16 sm:lato-normal-20 placeholder-secondary-lightest focus:border-primary focus-visible:border-primary focus:border-2"
        >
          Resend email
        </AtomsButton>
      </div>
    </FormulateForm>
  </OrganismsAccount>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ConfirmEmail',
})
</script>
