export default {
  methods: {
    paymentData(tier, tx_ref, amount, payment_plan) {
      return {
        tx_ref,
        amount,
        currency: 'USD',
        payment_options: 'card,ussd',
        payment_plan,
        meta: {
          counsumer_id: this.$realmApp.currentUser.customData._id,
          // consumer_mac: 'kjs9s8ss7dd',
        },
        customer: {
          name: `${this.user.firstName} ${this.user.lastName}`,
          email: this.user.email,
          phone_number: this.user.phone,
        },
        customizations: {
          title: 'Nanokings',
          description: `Payment for ${tier} subscription plan.`,
          logo: 'https://res.cloudinary.com/befittinglife/image/upload/v1629037583/nanokings/logo.svg',
        },
        onclose: () => {},
      }
    },

    subscribeToPlan({ tier, price, planId }) {
      this.asyncPayWithFlutterwave(
        this.paymentData(tier, new Date().getTime().toString(), price, planId)
      ).then(({ transaction_id, customer: { email } }) => {
        this.$axios
          .get(
            `https://api.flutterwave.com/v3/subscriptions?email=${email}&transaction_id=${transaction_id}&plan=${planId}`,
            {
              headers: {
                authorization:
                  'Bearer FLWSECK_TEST-bbb5b0978666ad9277bf1a10fd219bcc-X',
              },
            }
          )
          .then((res) => {
            console.log(res)
          })
      })
    },
  },
}
