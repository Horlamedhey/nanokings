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
          class="
            grid
            justify-items-center
            max-w-[70rem]
            mx-auto
            grid-cols-1
            gap-8
            lg:grid-cols-3
          "
        >
          <MoleculesPricingCard
            v-for="({ tier, price, features, prominent }, i) in pricings.slice(
              1
            )"
            :key="`pricing-${i}`"
            :tier="tier"
            :price="price"
            :features="features"
            :prominent="prominent"
            @subscribe="subscribe(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Pricing',
  data() {
    return {
      pricings: [
        {
          tier: 'Free',
          price: 0,
          rank: 0,
          features: [],
        },
        {
          tier: 'Standard',
          price: 15,
          rank: 1,
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
          rank: 2,
          prominent: true,
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
          rank: 3,
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
  computed: {
    ...mapState({ loggedIn: 'loggedIn', authUser: 'authUser' }),
    subscription() {
      return (this.authUser || {}).subscription
    },
  },
  methods: {
    subscribe(index) {
      if (this.loggedIn) {
        if (this.subscription) {
          this.$router.push(
            `/dashboard/my-account?plan=${
              this.pricings[index + 1].tier
            }#subscription`
          )
        }
      } else {
        this.$router.push(
          `/login?redirect=/dashboard/my-account?plan=${
            this.pricings[index + 1].tier
          }#subscription`
        )
      }
    },
  },
}
</script>
