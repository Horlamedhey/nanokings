<template>
  <div>
    <div class="pt-20 bg-no-repeat bg-cover bg-pattern3">
      <h2 class="text-center lora-bold-32">
        <span class="text-primary">Pricing</span>
      </h2>
      <p
        class="px-5 mt-4 text-center  sm:px-20 sm:lato-normal-20 lato-normal-14 text-secondary-light"
      >
        Distribute your music & monitor your activities. Get your music on all
        major platforms. View analytics on your dashboard.
      </p>
      <!-- component -->
      <div class="container px-6 py-8 mx-auto mt-20">
        <div
          class="flex flex-col items-center justify-center space-y-8  lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0"
        >
          <div
            v-for="(pricing, i) in pricings"
            :key="`pricing-${i}`"
            class="flex flex-col justify-between w-full max-w-sm p-8 border-4 rounded-lg  border-primary lg:mx-4"
            :class="i === 1 ? 'text-white bg-primary' : 'text-primary'"
          >
            <div>
              <h2
                class="font-sans rounded-lg lato-semibold-22 tracking-[-0.55px]"
              >
                {{ pricing.tier }}
              </h2>
              <div class="flex items-center mt-4">
                <span
                  class="sm:lora-bold-56 lora-bold-48 tracking-[-2.4px] ml-1"
                >
                  ${{ pricing.price }}
                </span>
                <span class="sm:lora-bold-20 lora-bold-18 tracking-[-2px] ml-2">
                  per year
                </span>
              </div>
              <ul class="mt-6 mb-16 space-y-4">
                <li
                  v-for="(feature, j) in pricing.features"
                  :key="`feature-${i}-${j}`"
                  class="text-secondary"
                  :class="{ 'text-white': i === 1 }"
                >
                  <AtomsIconsCheck class="inline" />
                  <span class="ml-1 lato-bold-16">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>

            <AtomsButton
              class="px-4 py-2 border-2 rounded-lg  lato-bold-18 text-primary border-primary ripple-bg-primary-DEFAULT hover:text-white"
              :class="
                i === 1
                  ? 'ripple-bg-accent-DEFAULT bg-accent text-white'
                  : ' bg-transparent'
              "
            >
              Subscribe
            </AtomsButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      pricings: [
        {
          tier: 'Standard',
          price: 15,
          features: [
            'Unlimited singles',
            'Save 50%',
            'Keep 70% of revenue',
            'Facebook & IG Stories',
            'Spotify, Apple Music etc.',
          ],
        },
        {
          tier: 'Gold',
          price: 18,
          features: [
            'Unlimited Singles & EPs',
            'Save 50%',
            'Keep 80% of revenue',
            'Facebook & IG Stories',
            'Spotify, Apple Music etc.',
            'Earn from Youtube Content ID',
          ],
        },
        {
          tier: 'Premium',
          price: 25,
          features: [
            'Unlimited singles',
            'Unlimited EPs & Albums',
            'Save 50%',
            'Keep 70% of revenue',
            'Facebook & IG Stories',
            'Spotify, Apple Music etc.',
            'Earn from Youtube Content ID',
          ],
        },
      ],
    }
  },
}
</script>
