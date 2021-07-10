<template>
  <OrganismsAccount
    heading="Reset password,"
    subHeading="Input your new desired password below."
  >
    <FormulateForm v-model="form" class="mt-48" :form-errors="formErrors">
      <div class="w-full">
        <FormulateInput
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          validation="bail|required|min:6,length"
        />
      </div>
      <div class="w-full">
        <FormulateInput
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          name="password_confirm"
          validation="bail|required|min:6,length|confirm"
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
          @click="resetPassword"
        >
          <span :class="{ 'opacity-0': loading }"> Reset password</span>
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
  useRouter,
  useContext,
} from '@nuxtjs/composition-api'
// import { realmApp } from '~/helpers/realmAuth'

interface Form {
  password: string
  password_confirm?: string
}
export default defineComponent({
  name: 'ResetPassword',

  setup() {
    const context = useContext()
    const router = useRouter()
    const loading = ref(false)
    const form = ref({} as Form)
    const formErrors = ref([] as Array<string>)
    const resetPassword = async () => {
      loading.value = true
      try {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        const tokenId = params.get('tokenId')
        if (!token || !tokenId) {
          throw new Error('Invalid link')
        }

        const { password } = form.value
        await context.app.$realmApp.emailPasswordAuth.resetPassword(
          token,
          tokenId,
          password
        )
        setTimeout(() => {
          router.replace('/login')
        }, 1000)
      } catch (err) {
        if ((err.error || err.message).includes('invalid')) {
          formErrors.value.push(
            'The link is invalid/expired, redirecting you back to the "Forgot Password" page to request for another link...'
          )
          setTimeout(() => {
            router.replace('/forgot-password')
          }, 5000)
        } else {
          formErrors.value.push(err.error)
        }
      } finally {
        loading.value = false
      }
    }
    return {
      loading,
      form,
      formErrors,
      resetPassword,
    }
  },
})
</script>
