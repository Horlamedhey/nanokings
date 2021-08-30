export default {
  data() {
    return {
      subscriptionSuccessful: false,
    }
  },
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
        // onclose: this.handleSubscriptionDone,
      }
    },

    subscribeToPlan({ _id, label, price, planId, rank }) {
      this.isSubscribing = false
      this.asyncPayWithFlutterwave(
        this.paymentData(label, new Date().getTime().toString(), price, planId)
      ).then(({ transaction_id: transactionId, customer: { email } }) => {
        this.$realmApp.currentUser.functions
          .verifyTransaction(_id, rank, transactionId)
          .then((res) => {
            const successful = res.data.status === 'successful'
            if (successful) {
              const {
                subscription: stale,
                transactions,
                ...rest
              } = this.$store.state.authUser
              const subscription = {
                tier: {
                  label,
                },
                active: true,
                rank,
              }
              this.$store.commit('setUser', {
                subscription,
                transactions: [
                  {
                    amount: price,
                    type: 'subscription',
                    createdAt: new Date(),
                  },
                  ...transactions,
                ],
                ...rest,
              })
            }
            this.subscriptionSuccessful = successful
            this.subscriptionDoneModal = true
          })
        // .validateSubscription({ transactionId, email, planId })
        // .then((res) => {
        //   console.log(res)
        // })
      })
    },
  },
}
