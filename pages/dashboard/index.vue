<template>
  <!-- <div class="box-border mx-auto mt-20 sm:container bg-[#F6F7FE]"></div> -->
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Welcome VaryAble,</h1>
            <h4 class="lato-normal-14 sm:lato-normal-16 text-secondary-light">Here is the current overview of your account.</h4>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Statistics -->
            <div class="flex flex-col mt-16 space-y-12 xl:space-y-0 xl:flex-row xl:space-x-12">
              <MoleculesWalletBalance balance="129,000"/>
              <div class="flex flex-col justify-between flex-1 space-y-12 lg:space-y-0 lg:flex-row">
                <MoleculesStatistic v-for="(statistic, i) in statistics" :key="`statistic-${i}`" :statistic="statistic"/>
              </div>
            </div>
            <div class="flex flex-col-reverse mt-12 xl:flex-row xl:space-x-12">
            <div class="mt-24 xl:mt-0">
              <h2 class="lato-semibold-20 text-secondary-light">Recent Releases</h2>
              <div class="flex flex-col mt-5 space-y-4">
                <MoleculesRelease v-for="(release, i) in releases" :key="`release-${i}`" :release="release"/>
              </div>
            </div>
            <MoleculesAnalytics class="mt-12 xl:flex-1"/>
            </div>
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

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
    const statistics = ref([
      { title: 'Releases', value: '17', image: 'releases' },
      { title: 'Streams', value: '17,000+', addon: '+28%', image: 'streams' },
      { title: 'Views', value: '37,000+', addon: '+70%', image: 'views' },
    ])
    const releases = ref([
      { title: 'Jackpot', time: '3mins', image: 'release1' },
      { title: 'Jackpot', time: '3mins', image: 'release2' },
      { title: 'Jackpot', time: '3mins', image: 'release3' },
    ])
    return { statistics, releases }
  },
})
</script>

<style>
.my-stroke {
  text-shadow: -1px -1px 0 #4361ee, 1px -1px 0 #4361ee, -1px 1px 0 #4361ee,
    1px 1px 0 #4361ee;
}
</style>