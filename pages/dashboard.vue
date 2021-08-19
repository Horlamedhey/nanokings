<template>
  <div v-if="loading">loading...</div>
  <!-- <div v-else>{{ authUser }}</div> -->
  <nuxt-child v-else :user="user"></nuxt-child>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  layout: 'dashboard',
  computed: {
    ...mapState(['loading', 'authUser']),
    userDashboard() {
      const { username, walletBalance, releases, streams, views, songs } =
        this.authUser
      return { username, walletBalance, releases, streams, views, songs }
    },
    userMusic() {
      const { subscription, songs } = this.authUser
      return { subscription, songs }
    },
    userSalesReport() {
      const { sales, downloads, streams, views } = this.authUser
      return { sales, downloads, streams, views }
    },
    userWallet() {
      const { sales, walletBalance, transactions, bankAccount } = this.authUser
      return { sales, walletBalance, transactions, bankAccount }
    },
    userAccount() {
      const {
        avatar,
        coverPhoto,
        username,
        firstName,
        lastName,
        email,
        phone,
        gender,
        subscription,
        facebook,
        instagram,
        twitter,
        youtube,
        bankAccount,
      } = this.authUser
      return {
        avatar: avatar || 'avatar',
        coverPhoto: coverPhoto || 'cover',
        username: username || '',
        firstName,
        lastName,
        email,
        phone,
        gender: gender || '',
        subscription,
        facebook: facebook || '',
        instagram: instagram || '',
        twitter: twitter || '',
        youtube: youtube || '',
        bankAccount: bankAccount || {
          bankName: '',
          bankCode: '',
          accountName: '',
          accountNumber: '',
        },
      }
    },
    user() {
      switch (this.$route.path) {
        case '/dashboard':
          return this.userDashboard

        case '/dashboard/my-account':
          return this.userAccount

        case '/dashboard/my-music':
          return this.userMusic

        case '/dashboard/sales-report':
          return this.userSalesReport

        case '/dashboard/wallet':
          return this.userWallet
      }
    },
  },
}
</script>
