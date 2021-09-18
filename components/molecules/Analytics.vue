<template>
  <div class="rounded-[15px] bg-white shadow-sm p-6">
    <div class="flex justify-between">
      <div>
        <h1 class="text-[#171725] lato-normal-20">Analytics</h1>
        <h2 class="text-secondary-lighter lato-normal-11">
          Get your current statistics here
        </h2>
      </div>
      <div class="relative ml-4 sm:ml-6">
        <div>
          <AtomsButton
            class="flex items-center max-w-xs text-sm  focus:outline-none text-secondary-lighter"
            id="filter-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            @click="filterMenu = !filterMenu"
          >
            <span class="sr-only">Open filter menu</span>

            <span class="ml-1 mr-3 sm:inline lato-medium-14">
              {{ filterOption }}
            </span>
            <AtomsIconsChevronLeft class="transform -rotate-90" />
          </AtomsButton>
        </div>

        <transition name="slide-y">
          <div
            v-show="filterMenu"
            class="
              absolute
              right-0
              w-48
              py-1
              mt-2
              origin-top-right
              bg-white
              rounded-md
              my-shadow
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              z-[1]
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-menu-button"
            tabindex="-1"
          >
            <!-- <AtomsButton
              class="flex w-full px-4 py-2 space-x-3 transition duration-300 hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              @click="filterAnalytics('Today')"
            >
              <span class="">Today</span>
            </AtomsButton>
            <AtomsButton
              class="flex w-full px-4 py-2 space-x-3 transition duration-300 hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              @click="filterAnalytics('This Week')"
            >
              <span class="">This Week</span>
            </AtomsButton> -->
            <AtomsButton
              v-for="(filterItem, i) in ['All', 'Last Month', 'This Month']"
              :key="`filterItem-${i}`"
              class="flex w-full px-4 py-2 space-x-3 transition duration-300  hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              :class="{ 'bg-primary text-white': filterItem === filterOption }"
              @click="filterAnalytics(filterItem)"
            >
              <span class="">{{ filterItem }}</span>
            </AtomsButton>
          </div>
        </transition>
      </div>
    </div>
    <!-- Chart -->
    <div
      class="flex flex-col justify-between gap-4 mt-8  lg:items-center lg:flex-row"
    >
      <div class="flex-1">
        <h2 class="lato-bold-16 text-secondary-lighter">
          Views x Streams Charts
        </h2>
        <!-- bar chart -->
        <client-only>
          <VueApexCharts
            type="bar"
            width="100%"
            :options="chartOptions"
            :series="series"
          ></VueApexCharts>
        </client-only>
      </div>
      <div class="text-center rounded-[10px] my-shadow-analytics py-4 px-5">
        <h1 class="lato-bold-16 text-secondary-dark">Total</h1>
        <h1 class="mt-4 lato-bold-48 text-secondary-dark">
          {{ totalStreamsAndViews }}
        </h1>
        <h2 class="mt-2 lato-normal-11 text-secondary-lighter">
          Total views x Streams
        </h2>
        <h2 class="mt-4 lato-normal-16 text-secondary-lighter">
          Views
          <span
            :class="
              viewsPercent > streamsPercent
                ? 'text-success-light'
                : 'text-secondary-dark'
            "
          >
            {{ viewsPercent }}%
          </span>
        </h2>
        <h2 class="mt-4 lato-normal-16 text-secondary-lighter">
          Streams
          <span
            :class="
              streamsPercent > viewsPercent
                ? 'text-success-light'
                : 'text-secondary-dark'
            "
          >
            {{ streamsPercent }}%
          </span>
        </h2>
        <nuxt-img src="/images/chart.svg" format="webp" class="m-auto mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  props: {
    chartData: { type: Object, default: () => {} },
  },
  data() {
    return {
      filterMenu: false,
      filterOption: 'All',
      series: [
        {
          name: 'Views',
          data: [],
        },
        {
          name: 'Streams',
          data: [],
        },
      ],
      chartOptions: {
        colors: ['#0066FF', '#96C0FF'],
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          markers: {
            width: 8,
            height: 8,
            radius: 8,
          },
          itemMargin: {
            horizontal: 20,
            vertical: 0,
          },
        },

        chart: {
          type: 'bar',
          toolbar: {
            show: false,
            // tools: {
            // download: true,
          },
          // height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 5,
          colors: ['transparent'],
        },
        xaxis: {
          categories: [],
        },
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return this.$options.filters.numberFormatter(val)
            },
          },
        },
      },
    }
  },
  watch: {
    filterOption: {
      immediate: true,
      handler(newVal) {
        const { xaxis, ...rest } = this.chartOptions
        switch (newVal) {
          case 'Today':
            this.chartOptions = {
              xaxis: {
                categories: [
                  '00:00',
                  '02:00',
                  '04:00',
                  '06:00',
                  '08:00',
                  '10:00',
                  '12:00',
                  '14:00',
                  '16:00',
                  '18:00',
                  '20:00',
                  '22:00',
                ],
              },
              ...rest,
            }
            break
          case 'This Week':
            this.chartOptions = {
              xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              ...rest,
            }
            break
          case 'This Month':
            this.chartOptions = {
              xaxis: {
                categories: this.finalChartData.thisMonth.dates,
              },
              ...rest,
            }
            this.series = this.finalChartData.thisMonth.series
            break

          case 'Last Month':
            this.chartOptions = {
              xaxis: {
                categories: this.finalChartData.lastMonth.dates,
              },
              ...rest,
            }
            this.series = this.finalChartData.lastMonth.series
            break

          case 'All':
            this.chartOptions = {
              xaxis: {
                categories: this.finalChartData.all.dates,
              },
              ...rest,
            }
            this.series = this.finalChartData.all.series
            break

          default:
            break
        }
      },
    },
  },
  computed: {
    finalChartData() {
      const reduceFunction = (arr) =>
        arr.reduce(
          (prevVal, curr) => {
            return {
              series: [
                {
                  name: 'Streams',
                  data: [...prevVal.series[0].data, curr.streams],
                },
                {
                  name: 'Views',
                  data: [...prevVal.series[1].data, curr.views],
                },
              ],
              dates: [...prevVal.dates, curr.date],
            }
          },
          {
            series: [
              { name: 'Streams', data: [] },
              { name: 'Views', data: [] },
            ],
            dates: [],
          }
        )
      const lastMonth = reduceFunction(
        this.chartData.salesHistory
          .filter((v) => this.$options.filters.isLastMonth(v.date))
          .map(({ date, ...rest }) => ({
            date: this.$options.filters.dateOfMonth(date),
            ...rest,
          }))
      )

      const thisMonth = reduceFunction(
        this.chartData.salesHistory
          .filter((v) => this.$options.filters.isThisMonth(v.date))
          .map(({ date, ...rest }) => ({
            date: this.$options.filters.dateOfMonth(date),
            ...rest,
          }))
      )
      const all = reduceFunction(
        this.chartData.salesHistory.map(({ date, ...rest }) => ({
          date: this.$options.filters.chartFullDate(date),
          ...rest,
        }))
      )
      return { lastMonth, thisMonth, all }
    },
    totalStreamsAndViews() {
      const total = this.chartData.streams + this.chartData.views
      return total >= 1000 ? `${total / 1000}k` : total
    },
    viewsPercent() {
      const total = this.chartData.streams + this.chartData.views
      return Math.round((this.chartData.views / total) * 100)
    },
    streamsPercent() {
      const total = this.chartData.streams + this.chartData.views
      return Math.round((this.chartData.streams / total) * 100)
    },
  },
  methods: {
    filterAnalytics(timeframe) {
      this.filterMenu = false

      this.filterOption = timeframe
    },
  },
}
</script>

<style scoped>
.my-shadow {
  box-shadow: 0 100px 80px rgba(67, 97, 238, 0.16),
    0 41.78px 33.4px rgba(67, 97, 238, 0.0863),
    0 22.34px 17.87px rgba(67, 97, 238, 0.0715),
    0 16.52px 10.02px rgba(67, 97, 238, 0.06),
    0 6.65px 5.32px rgba(67, 97, 238, 0.0485),
    0 2.77px 2.21px rgba(67, 97, 238, 0.0337);
}
.my-shadow-analytics {
  box-shadow: -15px 40px 100px rgba(66, 0, 255, 0.08),
    -20px 40px 100px rgba(88, 92, 98, 0.04);
}
.slide-y-enter-active {
  @apply transition ease-out duration-100;
}
.slide-y-enter,
.slide-y-leave-to {
  @apply transform opacity-0 scale-95;
}
.slide-y-enter-to,
.slide-y-leave {
  @apply transform opacity-100 scale-100;
}
.slide-y-leave-active {
  @apply transition ease-in duration-75;
}
</style>
