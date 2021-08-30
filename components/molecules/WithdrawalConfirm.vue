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
    <template v-else-if="confirm">
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
        :loading="loading"
        class="mt-10 withdraw-button lato-bold-16"
        @click="processWithdrawal"
      >
        Confirm & Withdraw
      </AtomsButton>
    </template>
    <template v-else>
      <p class="mt-4 text-left lato-normal-14 text-secondary-light">
        Please input amount to withdraw below
      </p>
      <FormulateForm
        v-model="form"
        name="withdraw-amount"
        #default="{ hasErrors }"
        class="mt-8 text-left"
        @submit="proceedWithdraw"
      >
        <div class="w-full">
          <FormulateInput
            type="number"
            label="Amount"
            placeholder="Enter Amount"
            name="amount"
            inputmode="numeric"
            pattern="[0-9]*"
            :validation="`bail|required|number|min:10|max:${walletBalance}`"
            :validation-messages="{
              min: 'Minimum withdrawal is $10',
              max: 'Insufficient balance!',
            }"
          >
            <!-- <template #prefix> me </template>
            <input /> -->
          </FormulateInput>
        </div>
        <div class="max-w-xs mx-auto mt-10">
          <FormulateInput
            type="submit"
            name="submitButton"
            :disabled="hasErrors"
          >
            <span class="mr-1 lato-bold-16">Withdraw</span>
          </FormulateInput>
        </div>
      </FormulateForm>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import processTransactionsArray from '@/helpers/processTransactionsArray'
export default {
  name: 'WithdrawalConfirm',
  props: {
    bankAccount: { type: Object, default: () => {} },
    walletBalance: { type: Number, default: 0 },
  },
  data() {
    return {
      form: { amount: 0 },
      amount: 0,
      confirm: false,
      loading: false,
    }
  },
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
          content: this.$options.filters.currencyFormatter(this.amount),
          contentClasses: 'xs:text-success-light',
        },
      ]
    },
  },
  methods: {
    proceedWithdraw() {
      this.amount = parseFloat(this.form.amount)
      this.confirm = true
    },
    async processWithdrawal() {
      this.loading = true
      await this.$realmApp.currentUser.refreshCustomData()
      this.$realmApp.currentUser.functions
        .processWithdrawal(
          this.amount,
          this.bankAccount.bankCode,
          this.bankAccount.accountNumber
        )
        .then((res) => {
          if (res) {
            const { walletBalance, transactions, ...rest } =
              this.$store.state.authUser

            this.$store.commit('setUser', {
              walletBalance: walletBalance - this.amount,
              transactions: [
                {
                  createdAt: new Date(),
                  type: 'withdrawal initiated',
                  amount: this.amount,
                },
                ...transactions,
              ],
              ...rest,
            })
            this.loading = false
            // this.confirm = false
            this.form = { amount: 0 }
            this.amount = 0
            this.confirm = false
            this.loading = false
            this.$emit('close', true)
          } else {
            this.$emit('close', false)
          }
        })
    },
  },
}
</script>

<style scoped>
.withdraw-button {
  @apply px-4 py-3 rounded-[5px] ripple-bg-success-light text-white;
}
</style>
