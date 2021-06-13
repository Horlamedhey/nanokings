<template>
  <div
    class="
      flex flex-col
      mt-16
      space-y-12
      xl:space-x-12
      lg:justify-between
      xl:space-y-0
      xl:flex-row
    "
  >
    <MoleculesAmountCard
      :title="amountCard.title"
      :amount="amountCard.amount"
      :color="amountCard.color"
    />
    <div
      class="
        flex flex-col
        justify-between
        flex-1
        space-y-12
        lg:space-y-0
        lg:flex-row
      "
    >
      <MoleculesStatistic
        v-for="(statistic, i) in statistics"
        :key="`statistic-${i}`"
        :statistic="statistic"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsArea',
  props: {
    amountCard: { type: Object, default: () => {} },
    statistics: { type: Array, default: () => [] },
  },
}
</script>
