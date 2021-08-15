<template>
  <OrganismsAccount
    heading="Welcome,"
    subHeading="Enter your details to login."
    footer="Don’t have an account?"
    subFooter="Sign up"
    subFooterLink="/create-account"
  >
    <!-- TODO: Improve form submission using formulate default -->
    <FormulateForm v-model="form" @submit="login" :form-errors="formErrors">
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
        <FormulateInput type="submit" name="Login">
          <AtomsLoading v-if="loading" />
        </FormulateInput>
      </div>
    </FormulateForm>
    <template v-slot:extra-footer>
      <h4
        class="mt-2 text-center  lato-normal-18 sm:lato-normal-20 text-secondary-light"
      >
        <nuxt-link
          to="/forgot-password"
          class="text-primary lato-bold-18 sm:lato-bold-20"
        >
          Forgot password?
        </nuxt-link>
      </h4>
    </template>
  </OrganismsAccount>
</template>

<script lang="ts">
// import { credentials, mongodb, realmApp } from '@/helpers/realmAuth'
import {
  defineComponent,
  ref,
  useContext,
  useRouter,
  useRoute,
  useStore,
  onBeforeMount,
} from '@nuxtjs/composition-api'
import User from '@/graphs/read/User'
import apollo from '@/helpers/apollo'

interface Form {
  email: string
  password?: string
}
export default defineComponent({
  name: 'Login',
  setup() {
    const context = useContext()
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const form = ref({} as Form)
    const formErrors = ref([] as Array<string>)
    onBeforeMount(() => {
      if (route.value.query.logout === 'true') {
        store.commit('unSetUser')
      }
    })
    const login = async () => {
      try {
        formErrors.value = []
        loading.value = true
        const { email, password } = form.value
        const {
          customData: { _id: id },
        } = await context.app.$realmApp.logIn(
          context.app.$credentials.emailPassword(email, password)
        )

        context.app.$cookies.set('loggedIn', true)
        await apollo(context.app)
        const {
          data: { user },
        } = await context.app.apolloProvider!.defaultClient.query({
          query: User,
          variables: {
            id,
          },
        })
        store.commit('setUser', user)
        const redirectRoute: any = route.value.query.redirect
        if (redirectRoute) {
          router.push(redirectRoute)
        } else {
          router.push('/dashboard')
        }
      } catch (err) {
        formErrors.value.push(err.error)
        console.log(err.error)
        if (err.error.includes('confirm')) {
          const { email } = form.value
          await context.app.$realmApp.emailPasswordAuth.resendConfirmationEmail(
            email
          )
          router.push(`/confirm-email?email=${form.value.email}`)
        }
      } finally {
        loading.value = false
      }
    }
    return { form, formErrors, loading, login }
  },
})
</script>
