<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <AtomsModal :modal="withdrawModal">
          <div class="min-w-[300px]">
            <MoleculesWithdrawalConfirm @close="withdrawModal = false" @processWithdrawal="processWithdrawal"/>
          </div>
        </AtomsModal>
        <MoleculesBasicModal :modal="withdrawSuccessModal" icon="AtomsIconsCircledCheck" content="Withdrawal Successful" state="success" @close="withdrawSuccessModal=false"/>
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Wallet</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <div class="text-right">
          <AtomsButton
            icon="AtomsIconsNaira"
            addOnAfter
            class="items-center inline-block px-10 py-3 mt-6 ml-auto text-white rounded lato-bold-16 ripple-bg-primary-DEFAULT"
            @click="withdrawModal=!withdrawModal"
          >
            Withdraw funds
          </AtomsButton>
        </div>
            <!-- Statistics -->
            <OrganismsAmountCardsArea :amountCards="amountCards"/>
            <!-- Table -->
            <MoleculesDataTableWithAltHead class="mt-10" lastColumnClass="text-success text-error" tableHeadingTitle="Latest Transactions" :tableHeadings="tableHeadings" :tableBody="tableBody" />
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Wallet',
  layout: 'dashboard',

  setup() {
    const amountCards = ref([
      {
        title: 'Total Sales',
        amount: '129,000',
        color: 'bg-primary',
      },
      {
        title: 'Total Sales',
        amount: '529,000',
        color: 'bg-success-light',
      },
      {
        title: 'Total Sales',
        amount: '409,000',
        color: 'bg-accent-light',
      },
    ])
    const tableHeadings = ref(['Date', 'Status', 'Amount (NGN)'])
    const tableBody = ref([
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
    ])
    const withdrawModal = ref(false)
    const withdrawSuccessModal = ref(false)
    const processWithdrawal = () => {
      withdrawModal.value = false
      withdrawSuccessModal.value = true
    }
    return {
      amountCards,
      tableHeadings,
      tableBody,
      withdrawModal,
      withdrawSuccessModal,
      processWithdrawal,
    }
  },
})
</script>
