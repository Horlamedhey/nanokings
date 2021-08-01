<template>
  <OrganismsAccount
    heading="Hello,"
    subHeading="Create an account to get started."
    footer="Already have an account?"
    subFooter="Login"
    subFooterLink="/login"
  >
    <FormulateForm
      v-model="form"
      :form-errors="formErrors"
      @submit="createAccount"
    >
      <div class="flex-wrap justify-between sm:flex">
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="text"
            label="First Name"
            placeholder="John"
            name="firstName"
            validation="bail|required|alpha"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="text"
            label="Last Name"
            placeholder="Doe"
            name="lastName"
            validation="bail|required|alpha"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="select"
            label="Country"
            placeholder="Select country"
            name="country"
            :options="countries"
            validation="bail|required"
            @change="setPhoneCountry"
          />
        </div>
        <div class="w-full sm:w-[48%]">
          <FormulateInput
            type="phone"
            name="phone"
            label="Phone Number"
            validation="bail|required"
          />
        </div>
        <div class="w-full">
          <FormulateInput
            type="email"
            label="Email"
            placeholder="Johndoe@gmail.com"
            name="email"
            validation="bail|required|email"
          />
        </div>
        <div class="w-full">
          <FormulateInput
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            validation="bail|required|min:6,length"
          />
          <div class="w-full">
            <FormulateInput
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              name="password_confirm"
              validation="bail|required|min:6,length|confirm"
            />
          </div>
        </div>
        <FormulateInput
          type="checkbox"
          label="By creating an account you are agreeing to our"
          name="terms"
          label-class="formulate-input-element-decorator"
          validation="accepted"
          validationName="terms and policy to continue"
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
        <FormulateInput type="submit" name="Create account">
          <AtomsLoading v-if="loading" />
        </FormulateInput>
      </div>
    </FormulateForm>
  </OrganismsAccount>
</template>

<script lang="ts">
// import { apiKeyCredentials, mongodb, realmApp } from '@/helpers/realmAuth'
import {
  defineComponent,
  ref,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'
import countries from '@/static/data/countries.json'

interface Form {
  firstName?: string
  lastName?: string
  country?: string
  email?: string
  password?: string
  password_confirm?: string
  terms?: boolean
}
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
}
export default defineComponent({
  name: 'CreateAccount',
  setup() {
    const router = useRouter()
    const context = useContext()
    const realmApp = context.app.$realmApp
    const form = ref({} as Form)
    const formErrors = ref([] as Array<string>)
    const loading = ref(false)
    const formFilled = ref([] as Array<string>)

    const setPhoneCountry = (evt: HTMLElementEvent<HTMLInputElement>) => {
      const selectPhoneCountry = <HTMLInputElement>(
        document.getElementById('phone-country')
      )
      selectPhoneCountry.value = countries.find(
        (v, i) => v.flag === evt.target.value.split(' ')[0]
      )!.dialCode
      selectPhoneCountry.dispatchEvent(new Event('change'))
    }

    const createAccount = async (): Promise<void> => {
      formErrors.value = []
      const { terms, password_confirm, ...formData } = form.value
      if (formData.email && formFilled.value.includes(formData.email)) {
        router.push(`/confirm-email?email=${formData.email}`)
      } else {
        try {
          loading.value = true
          await realmApp.emailPasswordAuth.registerUser(
            form.value.email?.toLowerCase()!,
            form.value.password!
          )
          await realmApp.logIn(context.app.$anonymousCredentials)
          const { password, ...rest } = formData
          await realmApp
            .currentUser!.mongoClient('mongodb-atlas')
            .db('nanokings')
            .collection('users')
            .insertOne({
              ...rest,
              createdAt: new Date(),
              downloads: 0,
              notifications: [],
              pendingNotifications: false,
              sales: 0,
              songs: [],
              streams: 0,
              transactions: [],
              updatedAt: new Date(),
              views: 0,
            })
          await realmApp.currentUser.logOut()
          if (formData.email) {
            formFilled.value.push(formData.email)
          }
          router.push(`/confirm-email?email=${formData.email}`)
          // console.log(uid, accessToken)
        } catch (err) {
          formErrors.value.push(err.error)
          console.log(err)
        } finally {
          loading.value = false
        }
      }
    }
    return {
      form,
      formErrors,
      loading,
      countries: countries.map((v) => `${v.flag} ${v.countryName}`),
      setPhoneCountry,
      createAccount,
    }
  },
})
</script>
