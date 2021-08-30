<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <AtomsModal :modal="withdrawModal" @close="withdrawModal = false" >
          <div class="w-[450px] max-w-full sm:p-6 px-4 pt-5 pb-4">
            <MoleculesWithdrawalConfirm :bankAccount="bankAccount":walletBalance="walletBalance" @close="finishWithdrawal"/>
          </div>
        </AtomsModal>
        <MoleculesBasicModal :modal="withdrawalSuccessModal.show" :icon="withdrawalSuccessModal.icon" :content="withdrawalSuccessModal.message" :state="withdrawalSuccessModal.status" @close="withdrawalSuccessModal.show=false"/>
        <!-- <AtomsModal :modal="subscriptionWarning.state" @close="closeModal">
      <div
        class="p-4 min-h-40 w-80 max-w-[85vw]"
        :class="subscriptionWarning.color"
      >
        <h3 class="text-xl font-semibold">{{ subscriptionWarning.heading }}</h3>
        <p class="mt-4 text-sm">{{ subscriptionWarning.content }}</p>
      </div>
    </AtomsModal> -->
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Wallet</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <AtomsButton
            icon="AtomsIconsDollar"
            addOnAfter
            class="flex items-center px-10 py-3 mt-6 text-white rounded lato-bold-16 ripple-bg-primary-DEFAULT"
            @click="withdrawModal=!withdrawModal"
          >
            Withdraw funds
          </AtomsButton>
            <!-- Statistics -->
            <OrganismsAmountCardsArea :amountCards="amountCards"/>
            <!-- Table -->
            <client-only>
            <MoleculesDataTableWithAltHead class="mt-10" lastColumnClass="text-success text-error text-right" tableHeadingTitle="Transactions" :tableHeadings="tableHeadings" :tableBody="tableBody" />
            </client-only>
        </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  reactive,
  useStore,
  watch,
} from '@nuxtjs/composition-api'
import processTransactionsArray from '@/helpers/processTransactionsArray'

interface AuthUser {
  sales: number
  walletBalance: number
  transactions: Array<any>
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
  name: 'Wallet',
  props: { user: { type: Object as () => AuthUser, required: true } },

  setup(props: PropsData) {
    const store = useStore<State>()
    const user = computed(() => store.state.authUser)
    const bankAccount = computed(() => user.value.bankAccount)
    const amountCards = computed(() => [
      {
        title: 'Available Balance',
        amount: user.value.walletBalance,
        color: 'bg-primary',
      },
      {
        title: 'Total Sales',
        amount: user.value.sales,
        color: 'bg-success-light',
      },
      {
        title: 'Total Withdrawn',
        amount: user.value.withdrawn,
        color: 'bg-accent-light',
      },
    ])
    const tableHeadings = ref(['Date', 'Status', 'Amount (NGN)'])
    const tableBody = computed(() => {
      return processTransactionsArray(user.value.transactions)
    })
    const withdrawModal = ref(false)
    const withdrawalSuccessModal = reactive({
      show: false,
      status: 'success',
      message: 'Withdrawal Successful',
      icon: 'AtomsIconsCircledCheck',
    })
    const finishWithdrawal = (status: boolean) => {
      withdrawModal.value = false

      if (status) {
        withdrawalSuccessModal.status = 'success'
        withdrawalSuccessModal.message = 'Withdrawal Initiated'
        withdrawalSuccessModal.icon = 'AtomsIconsCircledCheck'
      } else {
        withdrawalSuccessModal.status = 'error'
        withdrawalSuccessModal.message = 'Withdrawal Declined'
        withdrawalSuccessModal.icon = 'AtomsIconsClose'
      }
      withdrawalSuccessModal.show = true
    }
    watch(user.value, (curr) => console.log(curr.transactions))
    return {
      amountCards,
      tableHeadings,
      tableBody,
      bankAccount,
      walletBalance: user.value.walletBalance,
      withdrawModal,
      withdrawalSuccessModal,
      finishWithdrawal,
    }
  },
})
</script>
