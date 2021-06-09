<template>
  <div class="bg-primary rounded-r-[20px] relative">
    <div class="flex flex-col w-full">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-6 pb-4 overflow-y-auto">
        <div class="flex items-center justify-center flex-shrink-0 px-4">
          <AtomsIconsLogoVariant />

          <slot></slot>
        </div>
        <div class="flex flex-col flex-1 mt-13">
          <nav>
            <ul class="flex-1 px-4 space-y-1">
              <AtomsNavItem
                v-for="(navLink, i) in navLinks"
                :key="`navLink-${i}`"
                :to="navLink.to"
                content-class="flex items-center px-2 py-4 text-white transition duration-300 rounded-md lato-bold-16 hover:bg-white hover:bg-opacity-30"
                active-class="bg-white bg-opacity-30"
                @click="$emit('selected')"
              >
                <component
                  :is="navLink.icon"
                  class="flex-shrink-0 w-6 h-6 mr-3 text-white"
                ></component>
                {{ navLink.name }}
              </AtomsNavItem>
            </ul>
            <!-- Current: "bg-indigo-800 text-white", Default: "text-white  hover:bg-white bg-opacity-30 transition duration-300" -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashSideMenu',
  data() {
    return {
      navLinks: [
        { name: 'Dashboard', icon: 'AtomsIconsDashboard', to: '/dashboard' },
        {
          name: 'My Music',
          icon: 'AtomsIconsMusic',
          to: '/dashboard/my-music',
        },
        {
          name: 'Sales Report',
          icon: 'AtomsIconsReport',
          to: '/dashboard/sales-report',
        },
        { name: 'Wallet', icon: 'AtomsIconsDollar', to: '/dashboard/wallet' },
        {
          name: 'My Account',
          icon: 'AtomsIconsPerson',
          to: '/dashboard/my-account',
        },
      ],
    }
  },
}
</script>