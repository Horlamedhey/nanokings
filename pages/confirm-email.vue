<template>
  <OrganismsAccount
    heading="Verify your email,"
    :subHeading="`Almost there! we’ve sent a verification code to <b>${email}</b>. You need to verfiy your email address to log into NanoKings Digitals.`"
    footer=""
    :subFooter="prevRoute === 'create-account' ? 'Change email?' : false"
    subFooterLink="/create-account"
  >
    <template v-slot:extra-header>
      <div>
        <div
          v-if="prevRoute === 'create-account'"
          class="flex items-center space-x-3"
        >
          <AtomsButton @click="$router.back()">
            <AtomsIconsCircledArrowLeft class="w-10 h-10 text-primary" />
          </AtomsButton>
          <span class="lato-normal-24 text-secondary-light"> Back </span>
        </div>
      </div>
    </template>
    <FormulateForm class="mt-48" @submit="resendEmail">
      <div
        class="
          flex flex-wrap
          items-center
          max-w-md
          gap-3
          mx-auto
          mt-10
          md:flex-nowrap
          sm:gap-8
        "
      >
        <AtomsButton
          class="action-button"
          :loading="loading"
          @click="resendEmail"
        >
          <span :class="{ 'opacity-0': loading }"> Resend email </span>
        </AtomsButton>
        <AtomsButton to="/login" class="action-button">
          Proceed to Login
        </AtomsButton>
      </div>
    </FormulateForm>
  </OrganismsAccount>
</template>

<script lang="ts">
// import { realmApp } from '@/helpers/realmAuth'
import {
  defineComponent,
  ref,
  useRoute,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ConfirmEmail',

  setup() {
    const context = useContext()
    const route = useRoute()
    const loading = ref(false)
    const prevRoute = ref('')
    const email = route.value.query.email
    const resendEmail = async () => {
      if (email && typeof email === 'string') {
        loading.value = true
        try {
          await context.app.$realmApp.emailPasswordAuth.resendConfirmationEmail(
            email
          )
        } catch (err) {
          console.log(err)
        } finally {
          loading.value = false
        }
      }
    }

    return { prevRoute, email, loading, resendEmail }
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    next((vm: any) => {
      vm.prevRoute = from.name
    })
  },
})
</script>
