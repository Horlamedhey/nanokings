<template>
  <div
    class="flex flex-wrap justify-center gap-12 mt-16  lg:justify-between xl:space-y-0"
  >
    <MoleculesAmountCard
      v-for="(amountCard, i) in amountCards"
      :key="`amountCard-${i}`"
      :title="amountCard.title"
      :amount="amountCard.amount"
      :color="amountCard.color"
    />
  </div>
</template>

<script>
export default {
  name: 'AmountCardsArea',
  props: {
    amountCards: { type: Array, default: () => [] },
  },
}
</script>
