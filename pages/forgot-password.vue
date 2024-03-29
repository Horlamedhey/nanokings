<template>
  <OrganismsAccount
    heading="Forgot password? We got you covered,"
    :subHeading="subHeading"
  >
    <template v-slot:extra-header>
      <div>
        <div v-if="prevRoute === 'login'" class="flex items-center space-x-3">
          <AtomsButton @click="$router.back()">
            <AtomsIconsCircledArrowLeft class="w-10 h-10 text-primary" />
          </AtomsButton>
          <span class="lato-normal-24 text-secondary-light"> Back </span>
        </div>
      </div>
    </template>
    <FormulateForm v-model="form" class="mt-48" :form-errors="formErrors">
      <div class="w-full">
        <FormulateInput
          type="email"
          label="Email"
          placeholder="Johndoe@gmail.com"
          name="email"
          validation="bail|required|email"
        />
      </div>
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
          @click="forgotPassword"
        >
          <span :class="{ 'opacity-0': loading }"> Send reset link </span>
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
  computed,
} from '@nuxtjs/composition-api'

interface Form {
  email: string
}
export default defineComponent({
  name: 'ForgotPassword',

  setup() {
    const prevRoute = ref('')
    const context = useContext()
    const loading = ref(false)
    const form = ref({} as Form)
    const formErrors = ref([] as Array<string>)
    const subHeadingText = ref('')
    const subHeading = computed(() =>
      subHeadingText.value.length > 0
        ? subHeadingText.value
        : 'Input your email below to request for a password reset link.'
    )
    const forgotPassword = async () => {
      formErrors.value = []
      loading.value = true
      const { email } = form.value
      try {
        await context.app.$realmApp.emailPasswordAuth.sendResetPasswordEmail(
          email
        )
        subHeadingText.value = 'Check your mail for the password reset link.'
      } catch (err) {
        formErrors.value.push(err.error)
        console.log(err.error)
      } finally {
        loading.value = false
      }
    }
    return {
      subHeading,
      loading,
      form,
      formErrors,
      prevRoute,
      forgotPassword,
    }
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    next((vm: any) => {
      vm.prevRoute = from.name
    })
  },
})
</script>
