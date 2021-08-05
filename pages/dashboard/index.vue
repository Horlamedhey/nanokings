<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Welcome {{username}},</h1>
            <h4 class="lato-normal-14 sm:lato-normal-16 text-secondary-light">Here is the current overview of your account.</h4>
          </div>
          <div class="mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Statistics -->
            <OrganismsStatisticsArea :amountCard="amountCardDetails" :statistics="statistics" class="px-4 sm:px-0"/>

            <div class="flex flex-col-reverse mt-12 xl:flex-row xl:space-x-12">
            <div class="mt-24 xl:mt-0">
              <h2 class="lato-semibold-20 text-secondary-light">Recent Releases</h2>
              <div v-if="releases.length>0" class="flex flex-col mt-5 space-y-4">
                <MoleculesRelease v-for="(release, i) in releases" :key="`release-${i}`" :release="release"/>
              </div>
              <div v-else class="flex items-center h-20">
              <h3 class="empty-content-text">You have not released any songs yet.</h3>
              </div>
            </div>
            <MoleculesAnalytics :chartData="{}" class="mt-12 xl:flex-1"/>
            </div>
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  useStore,
} from '@nuxtjs/composition-api'
// import { realmApp } from '~/helpers/realmAuth'

export interface State {
  authUser: {
    username: string
    walletBalance: { $numberDouble: number }
    releases: { $numberInt: string }
    streams: { $numberInt: string }
    views: { $numberInt: string }
    songs: Array<any>
  }
}
export default defineComponent({
  name: 'DashboardHome',
  layout: 'dashboard',
  // props: {
  //   user: {
  //     type: Object as () => User,
  //     required: true,
  //   },
  // },
  setup() {
    const store = useStore<State>()
    const user = computed(() => {
      const { username, walletBalance, releases, streams, views, songs } =
        store.state.authUser || {}
      return { username, walletBalance, releases, streams, views, songs }
    })
    const statistics = ref([
      {
        title: 'Releases',
        value: user.value.releases?.$numberInt,
        image: 'releases',
      },
      {
        title: 'Streams',
        value: user.value.streams?.$numberInt,
        // addon: '+28%',
        image: 'streams',
      },
      {
        title: 'Views',
        value: user.value.views?.$numberInt,
        // addon: '+70%',
        image: 'views',
      },
    ])
    const releases = ref(user.value.songs || [])
    const amountCardDetails = reactive({
      title: 'Wallet Balance',
      amount: user.value.walletBalance?.$numberDouble,
      color: 'bg-primary',
    })
    return {
      username: user.value.username,
      statistics,
      releases,
      amountCardDetails,
    }
  },
})
</script>
