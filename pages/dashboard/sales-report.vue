<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Sales Report</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <client-only>
              <download-excel :data="tableBody" name="nanokings-sales-report" header="Nanokings Sales Report" :before-generate="toggleDownloading"  :before-finish="toggleDownloading" class="inline-block mt-6">
                <AtomsButton
                  icon="AtomsIconsCircledArrowDown"
                  addOnAfter
                  :loading="downloading"
                  class="items-center inline-block px-10 py-3 ml-auto text-white rounded lato-bold-16 ripple-bg-primary-DEFAULT"
                  noStop
                >
                  Download sheets
                </AtomsButton>
              </download-excel>
            </client-only>

            <!-- Statistics -->
            <OrganismsStatisticsArea :amountCard="amountCardDetails" :statistics="statistics"/>
            <!-- Table -->
            <h2 class="mt-16 lora-bold-18 sm:lora-bold-22 text-secondary">Sales History</h2>
            <MoleculesDataTable class="mt-8" lastColumnClass="text-success" :tableHeadings="tableHeadings" :tableBody="tableBody" />
          </div>
        </div>
      </main>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  useStore,
} from '@nuxtjs/composition-api'

export interface State {
  authUser: {
    sales: { $numberDouble: number }
    downloads: { $numberInt: string }
    streams: { $numberInt: string }
    views: { $numberInt: string }
  }
}
export default defineComponent({
  name: 'SalesReport',
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
      const { sales, downloads, streams, views } = store.state.authUser || {}
      return { sales, downloads, streams, views }
    })
    const statistics = ref([
      {
        title: 'Downloads',
        value: user.value.downloads?.$numberInt,
        image: 'downloads',
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
    const amountCardDetails = reactive({
      title: 'Total Sales',
      amount: user.value.sales?.$numberDouble,
      color: 'bg-success-light',
    })
    const tableHeadings = ref([
      'Date',
      'Streams',
      'Downloads',
      'Views',
      'Total (NGN)',
    ])
    const tableBody = ref([
      {
        date: 'April 2021',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
      {
        date: 'March 2021',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
      {
        date: 'Febuary 2021',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
      {
        date: 'January 2021',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
      {
        date: 'December 2020',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
      {
        date: 'November 2020',
        streams: '2,432',
        downloads: '12,432',
        views: '7,432',
        total: 'N7,432',
      },
    ])
    const downloading = ref(false)
    const toggleDownloading = () => {
      if (downloading.value) {
        setTimeout(() => {
          downloading.value = false
        }, 3000)
      } else {
        downloading.value = true
      }
    }
    return {
      statistics,
      amountCardDetails,
      tableHeadings,
      tableBody,
      downloading,
      toggleDownloading,
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
. {
@apply min-h-screen flex justify-center items-center text-center ;
}
*/
</style>
