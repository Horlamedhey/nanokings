<template>
  <div>
    <h1 class="flex justify-between lato-bold-20 text-secondary-light">
      Withdraw Funds
    </h1>
    <!-- <AtomsButton @click="$emit('close')">
        <AtomsIconsClose />
      </AtomsButton> -->
    <template v-if="!bankAccount">
      <div>
        <h3 class="py-10 empty-content-text">
          You have not added your bank account details.
        </h3>
        <AtomsButton
          class="withdraw-button lato-bold-16"
          to="/dashboard/my-account?edit=bank"
        >
          Add Account
        </AtomsButton>
      </div>
    </template>
    <template v-else>
      <p class="mt-4 text-left lato-normal-14 text-secondary-light">
        Please review your withdrawal details before confirming your withdrawal
      </p>
      <div class="mt-8 space-y-3">
        <AtomsTitledContentWIthBorder
          v-for="(withdrawalInfoDatum, i) in withdrawalInfoData"
          :key="`withdrawalInfoDatum-${i}`"
          :title="withdrawalInfoDatum.title"
          :content="withdrawalInfoDatum.content"
          :contentClasses="withdrawalInfoDatum.contentClasses"
        />
      </div>
      <AtomsButton
        class="mt-10 withdraw-button lato-bold-16"
        @click="processWithdrawal"
      >
        Confirm & Withdraw
      </AtomsButton>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WithdrawalConfirm',
  props: { bankAccount: { type: Object, default: () => {} } },
  computed: {
    withdrawalInfoData() {
      return [
        { title: 'Withdraw To', content: this.bankAccount.bankName || '' },
        { title: 'Account Name', content: this.bankAccount.accountName || '' },
        {
          title: 'Account Number',
          content: this.bankAccount.accountNumber || '',
        },
        {
          title: 'Amount',
          content: '$12,000',
          contentClasses: 'xs:text-success-light',
        },
      ]
    },
  },
  methods: {
    processWithdrawal() {
      this.$emit('close', true)
    },
  },
}
</script>

<style scoped>
.withdraw-button {
  @apply px-4 py-3 rounded-[5px] ripple-bg-success-light text-white;
}
</style>
