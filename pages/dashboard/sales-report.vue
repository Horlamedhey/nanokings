<template>
      <main class="relative flex-1 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">Sales Report</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <div class="text-right">
          <AtomsButton
            icon="AtomsIconsCircledArrowDown"
            addOnAfter
            class="items-center inline-block px-10 py-3 mt-6 ml-auto text-white rounded lato-bold-16 ripple-bg-primary-DEFAULT"
          >
            Download sheets
          </AtomsButton>
        </div>
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
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'

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
    const statistics = ref([
      { title: 'Downloads', value: '1,700', image: 'downloads' },
      { title: 'Streams', value: '17,000+', addon: '+28%', image: 'streams' },
      { title: 'Views', value: '37,000+', addon: '+70%', image: 'views' },
    ])
    const amountCardDetails = reactive({
      title: 'Total Sales',
      amount: '529,000',
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
    return { statistics, amountCardDetails, tableHeadings, tableBody }
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
