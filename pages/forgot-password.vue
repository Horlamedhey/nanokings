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
        class="flex flex-wrap items-center max-w-md gap-3 mx-auto mt-10  md:flex-nowrap sm:gap-8"
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
import {
  defineComponent,
  ref,
  useRoute,
  useContext,
  computed,
} from '@nuxtjs/composition-api'

interface Form {
  email?: string
}
export default defineComponent({
  name: 'ForgotPassword',

  setup() {
    const prevRoute = ref('')
    const context = useContext()
    const loading = ref(false)
    const realmApp = context.app.$realmApp
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
      try {
        await realmApp.emailPasswordAuth.sendResetPasswordEmail(
          form.value.email
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

<style scoped>
.action-button {
  @apply rounded-[15px]
            text-white
            lato-bold-16
            sm:lato-bold-20
            ripple-bg-primary-DEFAULT
            block
            w-full
            sm:w-1/2
            px-4
            py-4
            transition
            duration-500
            border
            outline-none
            border-secondary-lightest
            text-center
            lato-normal-16
            sm:lato-normal-20
            placeholder-secondary-lightest
            focus:border-primary
            focus-visible:border-primary
            focus:border-2;
}
</style>
