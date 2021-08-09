<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <MoleculesBasicModal
      :modal="saveSuccessModal"
      icon="AtomsIconsCircledCheck"
      content="Profile Saved Succesfully"
      state="success"
      @close="saveSuccessModal = false"
    />
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">My Account</h1>
      </div>
      <div class="px-4 mx-auto mt-6 max-w-7xl sm:px-6 md:px-8">
        <OrganismsProfileImageArea :coverPhoto="coverPhoto" avatar="avatar" />
        <div class="mt-24 text-center">
          <h1 class="lato-medium-20 text-secondary">{{ username }}</h1>
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
            v-model="form"
            :schema="profileContentSections"
            class="flex flex-wrap justify-between gap-20 account-settings"
            @submit="saveSuccessModal = true"
          >
            <div class="w-full text-center">
              <FormulateInput
                type="submit"
                name="submitButton"
                class="inline-block"
              >
                Save Profile
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
  onMounted,
  useRoute,
  useRouter,
  computed,
  useStore,
} from '@nuxtjs/composition-api'

export interface State {
  authUser: {
    avatar: string
    coverPhoto: string
    username: string
    firstName: string
    lastName: string
    email: string
    phone: string
    gender: string
    subscription: { tier: string; active: boolean }
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
}
export default defineComponent({
  name: 'MyAccount',
  layout: 'dashboard',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore<State>()
    const user = computed(() => {
      const {
        avatar,
        coverPhoto,
        username,
        firstName,
        lastName,
        email,
        phone,
        gender,
        subscription,
        facebook,
        instagram,
        twitter,
        youtube,
        bankAccount,
      } = store.state.authUser || {}
      return {
        avatar: avatar || 'avatar',
        coverPhoto: coverPhoto || 'cover',
        userData: {
          username: username || '',
          firstName: firstName || '',
          lastName: lastName || '',
          email: email || '',
          phone: phone || '',
          gender: gender || '',
          subscription: subscription || { tier: 'Free', active: false },
          facebook: facebook || '',
          instagram: instagram || '',
          twitter: twitter || '',
          youtube: youtube || '',
          bankAccount: bankAccount || {
            bankName: '',
            accountName: '',
            accountNumber: '',
          },
        },
      }
    })
    const { avatar, coverPhoto } = user.value
    const {
      username,
      firstName,
      lastName,
      email,
      phone,
      gender,
      subscription,
      facebook,
      instagram,
      twitter,
      youtube,
      bankAccount,
    } = user.value.userData
    const editProfile = ref(!!route.value.query.edit)
    const saveSuccessModal = ref(false)
    const profileContentSections = ref([
      {
        type: 'group',
        repeatable: false,
        name: 'personalDetails',
        label: 'Personal Details',
        children: [
          { label: 'Username', name: 'username', value: username },
          { label: 'Name', name: 'name', value: `${firstName} ${lastName}` },
          {
            type: 'email',
            label: 'Email',
            name: 'email',
            value: email,
          },
          {
            type: 'tel',
            label: 'Phone number',
            name: 'phoneNumber',
            value: phone,
          },
          {
            type: 'select',
            label: 'Gender',
            placeholder: 'Select Gender',
            options: ['Male', 'Female'],
            name: 'gender',
            value: gender,
          },
        ],
      },
      {
        type: 'group',
        repeatable: false,
        name: 'socialMedia',
        label: 'Social Media',
        children: [
          { label: 'Facebook', name: 'facebook', value: facebook },
          { label: 'Instagram', name: 'instagram', value: instagram },
          { label: 'Twitter', name: 'twitter', value: twitter },
          { label: 'Youtube', name: 'youtube', value: youtube },
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
            name: 'bank',
            placeholder: 'Select Bank',
            options: ['GTB'],
            value: bankAccount.bankName,
            id: 'bank',
          },
          {
            label: 'Account Name',
            name: 'accountName',
            value: bankAccount.accountName,
          },
          {
            label: 'Account Number',
            name: 'accountNumber',
            value: bankAccount.accountNumber,
          },
        ],
      },
    ])
    const form = reactive({})

    const finalProfileContentSections = computed(() => {
      return [...profileContentSections.value].map((v, i) => {
        if (i === 0) {
          v.children.push({
            type: 'text',
            label: 'Subscription',
            name: 'subscription',
            id: 'subscription',
            placeholder: 'Select Bank',
            value: subscription.tier,
            addonText: {
              name: '',
              content: 'Upgrade?',
              classes: 'lato-bold-14 text-primary',
            },
          } as any)
          return v
        }
        return v
      })
    })
    onMounted(() => {
      const editQuery: string = route.value.query.edit as string
      if (editProfile.value) {
        document!
          .getElementById(editQuery)!
          .scrollIntoView({ behavior: 'smooth' })
      } else if (route!.value!.hash) {
        document!
          .getElementById(route!.value!.hash.split('#')[1])!
          .scrollIntoView({ behavior: 'smooth' })
      }
    })
    return {
      editProfile,
      profileContentSections,
      finalProfileContentSections,
      form,
      saveSuccessModal,
      username,
      avatar,
      coverPhoto,
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
