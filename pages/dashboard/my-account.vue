<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <MoleculesBasicModal
      :modal="saveSuccessModal"
      icon="AtomsIconsCircledCheck"
      content="Profile Saved Succesfully"
      state="success"
      @close="closeProcessModal"
    />
    <MoleculesBasicModal
      :modal="subscriptionDoneModal"
      :icon="
        subscriptionSuccessful ? 'AtomsIconsCircledCheck' : 'AtomsIconsClose'
      "
      :content="
        subscriptionSuccessful
          ? 'Account Succesfully Upgraded'
          : 'Account Upgrade Failed'
      "
      :state="subscriptionSuccessful ? 'success' : 'error'"
      @close="closeProcessModal"
    />
    <AtomsModal :modal="subscriptionWarning.state" @close="closeModal">
      <div
        class="p-4 min-h-40 w-80 max-w-[85vw]"
        :class="subscriptionWarning.color"
      >
        <h3 class="text-xl font-semibold">{{ subscriptionWarning.heading }}</h3>
        <p class="mt-4 text-sm">{{ subscriptionWarning.content }}</p>
      </div>
    </AtomsModal>
    <AtomsModal
      :modal="isSubscribing"
      :extraActionText="
        $route.query.plan !== undefined &&
        upgradeablePricings.length > 1 &&
        'See other plans'
      "
      @close="closeModal"
      @extraAction="showOtherPlans"
    >
      <div
        class="container px-4 mx-auto mt-12 mb-4 overflow-y-auto  sm:px-6 xl:p-10 lg:h-auto"
        :class="finalPricings.length > 1 ? ' h-[80vh]' : 'h-auto'"
      >
        <div class="flex flex-col justify-center gap-8 lg:flex-row">
          <MoleculesPricingCard
            v-for="(
              { _id, label, price, planId, rank, features, prominent }, i
            ) in finalPricings"
            :key="`pricing-${i}`"
            :tier="label"
            :price="price"
            :features="features"
            :prominent="prominent"
            @subscribe="subscribeToPlan({ _id, label, price, planId, rank })"
          />
        </div>
      </div>
    </AtomsModal>
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
  useRouter,
  useStore,
  computed,
  useContext,
  useFetch,
  watch,
} from '@nuxtjs/composition-api'

import BankAccount from '@/graphs/read/BankAccount'
import UpdateOneUser from '@/graphs/update/UpdateOneUser'
import UpdateOneUserWIthBank from '@/graphs/update/UpdateOneUserWIthBank'
import changedProfileData from '~/helpers/changedProfileData'
import SubscribeToPlan from '~/mixins/SubscribeToPlan'
import User from '@/graphs/read/User'
import apollo from '@/helpers/apollo'
import capitalize from '@/helpers/capitalize'
import getArrayOfObjMaxProp from '@/helpers/getArrayOfObjMaxProp'
export interface AuthUser {
  avatar: string
  coverPhoto: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  subscription: { tier: { label: string }; rank: number; active: boolean }
  facebook: string
  instagram: string
  twitter: string
  youtube: string
  bankAccount: {
    bankName: string
    bankCode: string
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
  mixins: [SubscribeToPlan],
  setup(props: PropsData) {
    const context = useContext()
    const route = useRoute()
    const router = useRouter()
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
    const subscriptionDoneModal = ref(false)
    const subscriptionWarning = reactive({
      state: false,
      heading: '',
      content: '',
      color: '',
    })
    const isSubscribing = ref(false)
    const banks = ref([
      {
        id: 1,
        label: user.value.bankAccount.bankName,
        value: {
          bankCode: user.value.bankAccount.bankCode,
          bankName: user.value.bankAccount.bankName,
        },
      },
      {
        id: 2,
        label: 'Loading available banks...',
        value: { bankCode: '055', bankName: 'Loading available banks...' },
        disabled: true,
      },
    ])
    const pricings = ref([
      {
        _id: '61184e8925e5f4e02ab1c902',
        label: 'Free',
        price: 0,
        rank: 0,
        features: [],
      },
      {
        _id: '60e533d89cbcc5bca74436d8',
        label: 'Standard',
        price: 15,
        rank: 1,
        planId: 13094,
        features: [
          'Unlimited singles',
          'Save 50%',
          'Keep 70% of revenue',
          'Facebook & IG Stories',
          'Spotify, Apple Music etc.',
        ],
      },
      {
        _id: '60e534239cbcc5bca74436d9',
        label: 'Gold',
        price: 18,
        rank: 2,
        planId: 13095,
        prominent: true,
        features: [
          'Unlimited Singles & EPs',
          'Save 50%',
          'Keep 80% of revenue',
          'Facebook & IG Stories',
          'Spotify, Apple Music etc.',
          'Earn from Youtube Content ID',
        ],
      },
      {
        _id: '60e5344b9cbcc5bca74436da',
        label: 'Premium',
        price: 25,
        rank: 3,
        planId: 13096,
        features: [
          'Unlimited singles',
          'Unlimited EPs & Albums',
          'Save 50%',
          'Keep 70% of revenue',
          'Facebook & IG Stories',
          'Spotify, Apple Music etc.',
          'Earn from Youtube Content ID',
        ],
      },
    ])
    const specifiedPricings = computed(() => {
      const selectedPlan: string = route.value.query.plan as string
      if (selectedPlan) {
        return pricings.value
          .slice(1)
          .filter((pricing) => pricing.label === selectedPlan)
      }
      return []
    })

    const upgradeablePricings = computed(() => {
      return pricings.value
        .slice(1)
        .filter((pricing) => pricing.rank > user.value.subscription.rank)
    })

    const finalPricings = computed(() => {
      return route.value.query.plan !== undefined
        ? specifiedPricings.value
        : upgradeablePricings.value
    })

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
              name: 'bank',
              placeholder: 'Select Bank',
              options: banks.value,
              value: {
                bankName: user.value.bankAccount?.bankName,
                bankCode: user.value.bankAccount?.bankCode,
              },
              altValue: user.value.bankAccount?.bankName || '',
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
    useFetch(() => {
      context.app.$realmApp.currentUser.functions
        .getBanks()
        .then((banksData: { id: number; name: string; code: string }[]) => {
          banks.value = banksData.map(
            ({
              id,
              code: bankCode,
              name: bankName,
            }: {
              id: number
              code: string
              name: string
            }) => ({ id, label: bankName, value: { bankCode, bankName } })
          )
        })
    })
    watch(editProfile, (curr) => {
      if (curr) {
        setTimeout(() => {
          banks.value.push({
            id: banks.value.length + 1,
            label: 'Loading available banks...',
            value: { bankCode: '053', bankName: 'Loading available banks...' },
            disabled: true,
          })
        }, 5000)
      }
    })
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
              value: user.value.subscription.active
                ? capitalize(user.value.subscription?.tier.label)
                : 'No active subscription',
              addonText: {
                name: '',
                content: 'Upgrade?',
                disabled:
                  user.value.subscription.rank ===
                  getArrayOfObjMaxProp(pricings.value, 'rank'),
                action: () => (isSubscribing.value = true),
                classes: 'lato-bold-14 text-primary',
                disabledClasses:
                  'lato-bold-14 text-secondary-light cursor-not-allowed',
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
    const checkIfToSubscribe = () => {
      const subscriptionPlan: string = route.value.query.plan as string
      if (subscriptionPlan !== undefined) {
        const selectedPlan: number = pricings.value.find(
          (pricing) => pricing.label === subscriptionPlan
        )?.rank as number
        const currentPlan: number = user.value.subscription.rank

        switch (true) {
          case selectedPlan > currentPlan:
            isSubscribing.value = true
            break

          case selectedPlan < currentPlan:
            subscriptionWarning.heading = 'Downgrade Warning!!!'
            subscriptionWarning.content =
              'The plan you selected is lower than your currently subscribed plan.'
            subscriptionWarning.color = 'text-error'
            subscriptionWarning.state = true
            break

          default:
            subscriptionWarning.heading = 'Hello!!!'
            subscriptionWarning.content =
              "You're currently on the same plan, no action will be taken."
            subscriptionWarning.color = 'text-secondary-light'
            subscriptionWarning.state = true
            break
        }
      }
    }
    onMounted(() => {
      const editQuery: string = route.value.query.edit as string
      if (editProfile.value) {
        scrollHandler(editQuery!)
      } else if (route!.value!.hash) {
        scrollHandler(route!.value!.hash.split('#')[1]!)
      }
      checkIfToSubscribe()
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
      const { bank, accountName, accountNumber, name, ...rest } = formChanges
      if (bank || accountName || accountNumber) {
        const { bank, accountName, accountNumber } = state.form.bankDetails[0]
        const { bankCode, bankName } = bank
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
    const closeProcessModal = () => {
      saveSuccessModal.value = false
      subscriptionDoneModal.value = false
      setTimeout(() => {
        editProfile.value = false
        scrollHandler('heading')
      }, 300)
    }
    const closeModal = () => {
      subscriptionWarning.state = false
      isSubscribing.value = false
      if (route.value.query.plan) {
        router.replace('/dashboard/my-account')
      }
    }
    const showOtherPlans = () => {
      router.replace('/dashboard/my-account')
      isSubscribing.value = true
    }
    return {
      editProfile,
      profileDataUnChanged,
      profileContentSections,
      finalProfileContentSections,
      state,
      saveSuccessModal,
      subscriptionDoneModal,
      basicProfile,
      pricings,
      specifiedPricings,
      upgradeablePricings,
      finalPricings,
      isSubscribing,
      subscriptionWarning,
      updateUserImage,
      updateUserProfile,
      closeProcessModal,
      closeModal,
      showOtherPlans,
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
