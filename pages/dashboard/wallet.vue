<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <AtomsModal :modal="withdrawModal" @close="withdrawModal = false" >
          <div class="min-w-[300px] sm:p-6 px-4 pt-5 pb-4">
            <MoleculesWithdrawalConfirm :bankAccount="bankAccount" @close="finishWithdrawal"/>
          </div>
        </AtomsModal>
        <MoleculesBasicModal :modal="withdrawSuccessModal" icon="AtomsIconsCircledCheck" content="Withdrawal Successful" state="success" @close="withdrawSuccessModal=false"/>
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
            <MoleculesDataTableWithAltHead class="mt-10" lastColumnClass="text-success text-error" tableHeadingTitle="Latest Transactions" :tableHeadings="tableHeadings" :tableBody="tableBody" />
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
  useStore,
} from '@nuxtjs/composition-api'

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

interface PropsData {
  user: AuthUser
}
export default defineComponent({
  name: 'Wallet',
  props: { user: { type: Object as () => AuthUser, required: true } },

  setup(props: PropsData) {
    const user = ref(props.user)
    const bankAccount = computed(() => user.value.bankAccount)
    const amountCards = ref([
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
        amount: user.value.walletBalance - user.value.walletBalance,
        color: 'bg-accent-light',
      },
    ])
    const tableHeadings = ref(['Date', 'Status', 'Amount (NGN)'])
    const tableBody = ref(
      user.value.transactions || [
        {
          date: 'Yesterday',
          status: 'Withdrawal completed',
          amount: 'N12,360',
        },
        {
          date: 'Yesterday',
          status: 'Withdrawal initiated',
          amount: '-N12,360',
        },
        {
          date: '02 April 2021',
          status: 'Withdrawal completed',
          amount: 'N12,360',
        },
        {
          date: '02 April 2021',
          status: 'Withdrawal initiated',
          amount: '-N12,360',
        },
        {
          date: '14 March 2021',
          status: 'Withdrawal completed',
          amount: 'N12,360',
        },
      ]
    )
    const withdrawModal = ref(false)
    const withdrawSuccessModal = ref(false)
    const finishWithdrawal = (status: boolean) => {
      withdrawModal.value = false
      if (status) {
        withdrawSuccessModal.value = true
      } else {
      }
    }
    return {
      amountCards,
      tableHeadings,
      tableBody,
      bankAccount,
      withdrawModal,
      withdrawSuccessModal,
      finishWithdrawal,
    }
  },
})
</script>
