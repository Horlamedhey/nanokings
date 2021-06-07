<template>
  <div>
    <div
      class="flex items-center justify-center text-white bg-primary h-[378px] sm:h-auto"
    >
      <h2 class="lato-bold-32 sm:lato-bold-48">Why Choose Us?</h2>
    </div>
    <div
      class="grid gap-10 px-6 py-10 bg-white bg-opacity-60 sm:px-10 lg:px-12 xl:px-16"
    >
      <div
        v-for="(reason, i) in reasons"
        :key="`reason-${i}`"
        class="flex items-center"
      >
        <nuxt-img
          :src="`/images/reasons/${reason.image}.svg`"
          :alt="reason.title"
          format="webp"
          width="47px"
          class="h-[47px]"
        />
        <div>
          <h3 class="lato-medium-12 text-secondary-light">
            {{ reason.title }}
          </h3>
          <h4 class="mt-2 lato-bold-20">
            <span
              v-for="(tip, j) in reason.tip"
              :key="`reasonTipFrag-${j}`"
              :class="`${tip.color}`"
            >
              {{ tip.text }}
            </span>
          </h4>
          <p class="mt-1 text-secondary lato-medium-14">
            {{ reason.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reasons',
  data() {
    return {
      reasons: [
        {
          title: 'Ownership Rights',
          tip: [
            { text: '70%', color: 'text-primary' },
            { text: 'Yours', color: 'text-secondary' },
          ],
          content: 'Keep every penny of your rights and royalties.',
          image: 'ownership-rights',
        },
        {
          title: 'Fees',
          tip: [
            { text: 'No', color: 'text-secondary' },
            { text: 'Hidden', color: 'text-primary' },
            { text: 'Cost', color: 'text-secondary' },
          ],
          content: 'Keep every penny of your rights and royalties.',
          image: 'fees',
        },
        {
          title: 'Payment',
          tip: [
            { text: 'Get', color: 'text-secondary' },
            { text: 'Paid', color: 'text-primary' },
          ],
          content: 'Request payments directly to your bank account.',
          image: 'payment',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>