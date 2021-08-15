<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <MoleculesBasicModal
      :modal="saveSuccessModal"
      icon="AtomsIconsCircledCheck"
      content="Profile Saved Succesfully"
      state="success"
      @close="closeSuccessModal"
    />
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 id="heading" class="lora-bold-20 sm:lora-bold-28 text-secondary">
          My Account
        </h1>
      </div>
      <div class="px-4 mx-auto mt-6 max-w-7xl sm:px-6 md:px-8">
        <OrganismsProfileImageArea
          :coverPhoto="basicProfile.coverPhoto"
          :avatar="basicProfile.avatar"
          @updateUserImage="updateUserImage"
        />
        <div class="mt-24 text-center">
          <h1 class="lato-medium-20 text-secondary">
            {{ basicProfile.username }}
          </h1>
          <div class="flex justify-center gap-16 mt-8 text-secondary-lighter">
            <AtomsButton
              class="lato-medium-16"
              :class="{ 'active-tab': !editProfile }"
              @click="editProfile = false"
            >
              Profile Details
            </AtomsButton>
            <AtomsButton
              class="lato-medium-16"
              :class="{ 'active-tab': editProfile }"
              @click="editProfile = true"
            >
              Edit Profile
            </AtomsButton>
          </div>
        </div>
        <div class="p-8 mt-10 bg-white rounded-md">
          <div
            v-if="!editProfile"
            class="flex flex-wrap justify-between gap-20"
          >
            <OrganismsProfileContentSection
              v-for="(profileContentSection, i) in finalProfileContentSections"
              :key="`profileContentSection-${i}`"
              :title="profileContentSection.label"
              :content="profileContentSection.children"
            />
          </div>
          <FormulateForm
            v-else
            v-model="state.form"
            :schema="profileContentSections"
            #default="{ isLoading }"
            class="flex flex-wrap justify-between gap-20 account-settings"
            @submit="updateUserProfile"
          >
            <div class="w-full text-center">
              <FormulateInput
                type="submit"
                :disabled="profileDataUnChanged || isLoading"
                id="submit"
                name="submitButton"
                class="inline-block"
              >
                <AtomsLoading v-if="isLoading" color="#1240DD" />
                <div v-else>
                  <span class="mr-1 lato-bold-16"> Save Profile</span>
                </div>
              </FormulateInput>
            </div>
          </FormulateForm>
        </div>
      </div>
    </div>
  </main>
  <!-- </div> -->
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  toRef,
  onMounted,
  useRoute,
  useStore,
  computed,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import BankAccount from '@/graphs/read/BankAccount'
import UpdateOneUser from '@/graphs/update/UpdateOneUser'
import UpdateOneUserWIthBank from '@/graphs/update/UpdateOneUserWIthBank'
import User from '@/graphs/read/User'
import apollo from '@/helpers/apollo'
import capitalize from '@/helpers/capitalize'
import changedProfileData from '~/helpers/changedProfileData'
export interface AuthUser {
  avatar: string
  coverPhoto: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  subscription: { tier: { label: string }; active: boolean }
  facebook: string
  instagram: string
  twitter: string
  youtube: string
  bankAccount: {
    bankName: string
    accountName: string
    accountNumber: string
  }
}
interface State {
  authUser: any
}
interface PropsData {
  user: AuthUser
}
export default defineComponent({
  name: 'MyAccount',
  props: { user: { type: Object as () => AuthUser, default: () => {} } },
  setup(props: PropsData) {
    const context = useContext()
    const route = useRoute()
    const store = useStore<State>()
    // const router = useRouter()
    const apolloClient = context.app.apolloProvider!.defaultClient
    const currentUser = context.app.$realmApp.currentUser
    const user = ref(props.user)
    const basicProfile = computed(() => {
      return {
        username: user.value.username,
        avatar: user.value.avatar,
        coverPhoto: user.value.coverPhoto,
      }
    })

    const editProfile = ref(!!route.value.query.edit)
    const profileDataUnChanged = ref(true)
    const saveSuccessModal = ref(false)
    const banks = ref([{ name: 'Guaranty Trust Bank', code: '058' }])
    const profileContentSections = computed(() => {
      return [
        {
          type: 'group',
          repeatable: false,
          name: 'personalDetails',
          label: 'Personal Details',
          children: [
            { label: 'Username', name: 'username', value: user.value.username },
            {
              label: 'Name',
              name: 'name',
              value: `${user.value.firstName} ${user.value.lastName}`,
            },
            {
              type: 'email',
              label: 'Email',
              name: 'email',
              value: user.value.email,
            },
            {
              type: 'tel',
              label: 'Phone number',
              name: 'phoneNumber',
              value: user.value.phone,
            },
            {
              type: 'select',
              label: 'Gender',
              placeholder: 'Select Gender',
              options: ['Male', 'Female'],
              name: 'gender',
              value: user.value.gender,
            },
          ],
        },
        {
          type: 'group',
          repeatable: false,
          name: 'socialMedia',
          label: 'Social Media',
          children: [
            { label: 'Facebook', name: 'facebook', value: user.value.facebook },
            {
              label: 'Instagram',
              name: 'instagram',
              value: user.value.instagram,
            },
            { label: 'Twitter', name: 'twitter', value: user.value.twitter },
            { label: 'Youtube', name: 'youtube', value: user.value.youtube },
          ],
        },
        {
          type: 'group',
          repeatable: false,
          name: 'bankDetails',
          label: 'Bank Details',
          id: 'bankAccount',
          children: [
            {
              type: 'select',
              label: 'Bank',
              name: 'bankName',
              placeholder: 'Select Bank',
              options: banks.value.map((v) => v.name),
              value: user.value.bankAccount?.bankName,
              id: 'bank',
            },
            {
              label: 'Account Name',
              name: 'accountName',
              value: capitalize(user.value.bankAccount?.accountName),
            },
            {
              label: 'Account Number',
              name: 'accountNumber',
              value: user.value.bankAccount?.accountNumber,
            },
          ],
        },
      ]
    })
    //  ref()
    const state = reactive({ form: {} as any, formBackup: {} })

    const finalProfileContentSections = computed(() => {
      return JSON.parse(JSON.stringify(profileContentSections.value)).map(
        (v: any, i: number) => {
          if (i === 0) {
            v.children.push({
              type: 'text',
              label: 'Subscription',
              name: 'subscription',
              id: 'subscription',
              placeholder: 'Select Bank',
              value: capitalize(user.value.subscription?.tier.label),
              addonText: {
                name: '',
                content: 'Upgrade?',
                classes: 'lato-bold-14 text-primary',
              },
            } as any)
            return v
          }
          return v
        }
      )
    })
    const scrollHandler = (element: any) => {
      document!.getElementById(element)?.scrollIntoView({ behavior: 'smooth' })
    }
    onMounted(() => {
      const editQuery: string = route.value.query.edit as string
      if (editProfile.value) {
        scrollHandler(editQuery!)
      } else if (route!.value!.hash) {
        scrollHandler(route!.value!.hash.split('#')[1]!)
      }
    })

    watch(state, (curr, prev) => {
      if (Object.keys(prev.form).length == Object.keys(curr.form).length) {
        if (Object.keys(state.formBackup).length === 0) {
          state.formBackup = JSON.parse(JSON.stringify(prev.form))
        }
        profileDataUnChanged.value =
          JSON.stringify(state.formBackup) === JSON.stringify(curr.form)
      }
    })

    watch(
      () => props.user,
      (curr) => {
        user.value = curr
      }
    )

    const updateUserImage = async (update: any) => {
      await apolloClient.mutate({
        mutation: UpdateOneUser,
        variables: {
          id: currentUser.customData._id,
          ...update,
          updatedAt: new Date(),
        },
      })
      const { avatar, coverPhoto, ...rest } = store.state.authUser
      if (update.avatar) {
        store.commit('setUser', { avatar: update.avatar, coverPhoto, ...rest })
      } else {
        store.commit('setUser', {
          avatar,
          coverPhoto: update.coverPhoto,
          ...rest,
        })
      }
      saveSuccessModal.value = true
    }
    const updateUserProfile = async () => {
      scrollHandler('submit')
      await apollo(context)

      const formChanges = await changedProfileData(state.formBackup, state.form)
      const { bankName, accountName, accountNumber, name, ...rest } =
        formChanges
      if (bankName || accountName || accountNumber) {
        const { bankName, accountName, accountNumber } =
          state.form.bankDetails[0]
        const bankCode = banks.value.find((v) => v.name === bankName)?.code
        const {
          data: { bankAccount },
        } = await apolloClient.query({
          query: BankAccount,
          variables: {
            bankCode,
            accountName: accountName.toLowerCase(),
            accountNumber,
          },
        })
        const linkBankAccount = bankAccount?._id
        const createBankAccount = linkBankAccount
          ? undefined
          : {
              bankName,
              bankCode,
              accountName: accountName.toLowerCase(),
              accountNumber,
              createdAt: new Date(),
              updatedAt: new Date(),
            }

        await apolloClient.mutate({
          mutation: UpdateOneUserWIthBank,
          variables: {
            id: context.app.$realmApp.currentUser.customData._id,
            ...rest,
            linkBankAccount,
            createBankAccount,
            updatedAt: new Date(),
          },
        })
      } else {
        await apolloClient.mutate({
          mutation: UpdateOneUser,
          variables: {
            id: currentUser.customData._id,
            firstName: name?.split(' ')[0],
            lastName: name?.split(' ').slice(1).join(' '),
            ...rest,
            updatedAt: new Date(),
          },
        })
      }

      await apollo(context.app)
      const {
        data: { user },
      } = await context.app.apolloProvider!.defaultClient.query({
        query: User,
        variables: {
          id: currentUser.customData._id,
        },
      })
      store.commit('setUser', user)
      state.formBackup = {}
      saveSuccessModal.value = true
    }
    const closeSuccessModal = () => {
      saveSuccessModal.value = false
      setTimeout(() => {
        editProfile.value = false
        scrollHandler('heading')
      }, 300)
    }
    return {
      editProfile,
      profileDataUnChanged,
      profileContentSections,
      finalProfileContentSections,
      state,
      saveSuccessModal,
      basicProfile,
      updateUserImage,
      updateUserProfile,
      closeSuccessModal,
    }
  },
})
</script>

<style scoped>
.active-tab {
  @apply text-secondary relative transition duration-300;
}
.active-tab::after {
  content: '';
  @apply absolute h-1 w-full rounded-lg bg-primary bottom-[-8px] left-0;
}
</style>
