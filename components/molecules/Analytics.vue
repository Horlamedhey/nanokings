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
            class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md  my-shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-menu-button"
            tabindex="-1"
          >
            <AtomsButton
              class="flex w-full px-4 py-2 space-x-3 transition duration-300  hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              @click="filterAnalytics('Today')"
            >
              <span class="">Today</span>
            </AtomsButton>
            <AtomsButton
              class="flex w-full px-4 py-2 space-x-3 transition duration-300  hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              @click="filterAnalytics('This Week')"
            >
              <span class="">This Week</span>
            </AtomsButton>
            <AtomsButton
              class="flex w-full px-4 py-2 space-x-3 transition duration-300  hover:ripple-bg-primary-DEFAULT text-primary hover:text-white lato-semibold-16"
              @click="filterAnalytics('This Month')"
            >
              <span class="">This Month</span>
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
        <h1 class="mt-4 lato-bold-48 text-secondary-dark">160k</h1>
        <h2 class="mt-2 lato-normal-11 text-secondary-lighter">
          Total views x Streams
        </h2>
        <h2 class="mt-4 lato-normal-16 text-secondary-lighter">
          Views <span class="text-success-light">53%</span>
        </h2>
        <nuxt-img src="/images/chart.svg" format="webp" class="m-auto mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data() {
    return {
      filterMenu: false,
      filterOption: 'Today',
      series: [
        {
          name: 'Views',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Streams',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
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
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            },
          },
        },
      },
    }
  },
  props: {
    chartData: { type: Object, default: () => {} },
  },
  watch: {
    filterOption(newVal) {
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
              categories: [
                '1st',
                '3rd',
                '6th',
                '9th',
                '12th',
                '15th',
                '18th',
                '21th',
                '24th',
                '27th',
                '30th',
                '31th',
              ],
            },
            ...rest,
          }
          break

        default:
          break
      }
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
