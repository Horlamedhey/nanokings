<template>
  <OrganismsAccount
    :heading="fetchState.pending ? 'Verifying email,' : heading"
    :subHeading="
      fetchState.pending ? 'Please wait while we verify your email' : subHeading
    "
    :errorStatus="!verifySuccess"
  >
    <FormulateForm
      v-show="!fetchState.pending"
      v-if="!verifySuccess"
      v-model="form"
      class="mt-48"
      @submit="resendEmail"
    >
      <div v-if="!verifySuccess" class="w-full">
        <FormulateInput
          type="email"
          label="Email"
          placeholder="Johndoe@gmail.com"
          name="email"
          validation="bail|required|email"
        />
      </div>
      <div class="max-w-sm mx-auto mt-10">
        <FormulateInput type="submit" name="Resend email">
          <AtomsLoading v-if="loading" />
        </FormulateInput>
      </div>
    </FormulateForm>
    <AtomsButton
      v-if="verifySuccess"
      to="/login"
      class="mt-56 action-button sm:w-full"
    >
      Proceed to Login
    </AtomsButton>
  </OrganismsAccount>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRoute,
  useRouter,
  useContext,
  useFetch,
  computed,
} from '@nuxtjs/composition-api'

interface Form {
  email?: string
}
export default defineComponent({
  name: 'VerifyEmail',

  setup() {
    const route = useRoute()
    const router = useRouter()
    const context = useContext()
    const verifySuccess = ref(true)
    const loading = ref(false)
    const email = route.value.query.email
    const realmApp = context.app.$realmApp
    const form = ref({} as Form)
    const subHeadingText = ref('')
    const heading = computed(() =>
      verifySuccess.value
        ? 'Email verification successful,'
        : 'Email verification not successful,'
    )
    const subHeading = computed(() =>
      subHeadingText.value.length > 0
        ? subHeadingText.value
        : verifySuccess.value
        ? 'Your email has been successfully verified, proceed to log in now.'
        : 'Link is expired or invalid, please input your email and send again.'
    )
    const resendEmail = async () => {
      loading.value = true
      try {
        await realmApp.emailPasswordAuth.resendConfirmationEmail(
          form.value.email
        )
        router.push(`/confirm-email?email=${form.value.email}`)
      } catch (err) {
        verifySuccess.value = false
        console.log(err.error)
        if (err.error.includes('found')) {
          subHeadingText.value =
            'This email is not registered, please check and try again.'
        } else if (err.error.includes('already')) {
          verifySuccess.value = true
          subHeadingText.value =
            'This email is already verified, proceed to log in now.'
        }
      } finally {
        loading.value = false
      }
    }
    const { fetchState } = useFetch(async () => {
      if (route.value.query.token && route.value.query.tokenId) {
        try {
          await realmApp.emailPasswordAuth.confirmUser(
            route.value.query.token,
            route.value.query.tokenId
          )
          verifySuccess.value = true
        } catch (err) {
          console.log(err.error)
          verifySuccess.value = false
          // this.infoText.content = `${err.error}, input your email below to resend confirmation email.`
          // this.infoText.error = true
        }
      }
    })

    return {
      heading,
      subHeading,
      email,
      verifySuccess,
      loading,
      form,
      resendEmail,
      fetchState,
    }
  },
  fetchOnServer: false,
})
</script>
