<template>
  <div>
    <div class="flex justify-between lato-bold-20 text-secondary-light">
      <h1>Withdraw Funds</h1>
      <AtomsButton @click="$emit('close')">
        <AtomsIconsClose />
      </AtomsButton>
    </div>
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
      class="
        px-4
        py-3
        mt-10
        lato-bold-16
        rounded-[5px]
        ripple-bg-success-light
        text-white
      "
      @click="$emit('processWithdrawal')"
      >Confirm & Withdraw</AtomsButton
    >
  </div>
</template>

<script>
export default {
  name: 'WithdrawalConfirm',
  data() {
    return {
      withdrawalInfoData: [
        { title: 'Withdraw To', content: 'Guarantee Trust Bank' },
        { title: 'Account Name', content: 'Jacey Wiliams' },
        { title: 'Account Number', content: '0213424221' },
        {
          title: 'Amount',
          content: 'N12,000',
          contentClasses: 'xs:text-success-light',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
