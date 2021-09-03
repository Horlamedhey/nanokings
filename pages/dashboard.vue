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
    salesHistory() {
      return JSON.parse(JSON.stringify(this.authUser.songs))
        .reduce((prevVal, curr) => {
          curr.salesHistory.forEach((v, i) => {
            const sameDatePrevVal = prevVal.find((u) => u.date === v.date)
            if (sameDatePrevVal) {
              sameDatePrevVal.streams += v.streams
              sameDatePrevVal.downloads += v.downloads
              sameDatePrevVal.views += v.views
              sameDatePrevVal.sales += v.sales
            } else {
              prevVal.push(v)
            }
          })
          return prevVal
        }, [])
        .map(({ __typename, sales, date, ...rest }) => ({
          date: this.$options.filters.calendar(date),
          ...rest,
          sales: this.$options.filters.currencyFormatter(sales),
        }))
    },
    userDashboard() {
      const { username, walletBalance, releases, streams, views, songs } =
        this.authUser
      return {
        username,
        walletBalance,
        releases,
        streams,
        views,
        songs: songs.slice(0, 3),
        salesHistory: this.salesHistory,
      }
    },
    userMusic() {
      const { subscription, songs } = this.authUser
      return { subscription, songs }
    },
    userSalesReport() {
      const { sales, downloads, streams, views, songs } = this.authUser
      return {
        sales,
        downloads,
        streams,
        views,
        salesHistory: this.salesHistory,
      }
    },
    userWallet() {
      const { sales, walletBalance, withdrawn, transactions, bankAccount } =
        this.authUser
      return {
        sales,
        walletBalance,
        withdrawn,
        transactions: transactions.map(
          ({ __typename, createdAt, amount, type: status }) => ({
            date: this.$options.filters.calendar(createdAt),
            status,
            amount: {
              value: `${
                status === 'withdrawal completed' ? '-' : ''
              }${this.$options.filters.currencyFormatter(amount)}`,
              classes: [
                'subscription',
                'withdrawal initiated',
                'withdrawal declined',
              ].includes(status)
                ? ''
                : status === 'withdrawal completed'
                ? 'text-error'
                : 'text-success',
            },
          })
        ),
        bankAccount,
      }
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
      switch (this.$route.name) {
        case 'dashboard':
          return this.userDashboard

        case 'dashboard-my-account':
          return this.userAccount

        case 'dashboard-my-music':
          return this.userMusic

        case 'dashboard-sales-report':
          return this.userSalesReport

        case 'dashboard-wallet':
          return this.userWallet
      }
    },
  },
}
</script>
