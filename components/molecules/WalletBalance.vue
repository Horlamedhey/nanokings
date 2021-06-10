<template>
  <div
    class="
      rounded-[15px]
      bg-primary
      text-white
      w-[291px]
      h-[145.5px]
      overflow-hidden
    "
  >
    <div class="h-full px-5 py-4 bg-wallet-balance">
      <h2 class="lato-medium-20">Wallet Balance</h2>

      <div class="flex items-center mt-4">
        <AtomsIconsNaira class="inline" />
        <span class="ml-1 lora-bold-42">{{ balance }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletBalance',
  props: {
    balance: { type: String, required: true },
  },
}
</script>