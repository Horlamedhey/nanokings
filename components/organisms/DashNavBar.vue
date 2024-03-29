<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 flex items-center flex-shrink-0 h-16"
  >
    <AtomsButton class="ml-4 md:hidden" to="/">
      <AtomsIconsLogo />
    </AtomsButton>
    <AtomsButton
      class="px-4 ml-2 text-primary focus:outline-none md:hidden"
      @click="$emit('openSideMenu')"
    >
      <span class="sr-only">Open sidebar</span>
      <AtomsIconsMenu />
    </AtomsButton>
    <div class="flex justify-end flex-1 px-4">
      <div class="flex items-center ml-4 md:ml-6">
        <!-- Notifications dropdown -->
        <div class="relative">
          <div>
            <AtomsButton
              aria-expanded="false"
              aria-haspopup="true"
              id="notifications-menu-button"
              class="
                p-1
                transition
                duration-300
                rounded-[5px]
                text-primary
                hover:text-white
                focus:outline-none
                border-2 border-primary
                hover:ripple-bg-primary-DEFAULT
              "
              @click="notificationsMenu = !notificationsMenu"
            >
              <span class="sr-only">View notifications</span>
              <AtomsIconsBell />
            </AtomsButton>
          </div>

          <transition name="slide-y">
            <MoleculesNotificationsMenu
              v-show="notificationsMenu"
              :notifications="user.notifications"
              @close="notificationsMenu = false"
            />
          </transition>
        </div>

        <!-- Profile dropdown -->
        <div class="relative ml-4 sm:ml-6">
          <div>
            <AtomsButton
              class="flex items-center max-w-xs text-sm focus:outline-none"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              @click="userMenu = !userMenu"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="rounded-full w-11 h-11 border-[3px] border-primary"
                :src="
                  $cloudinary.image.url(
                    `nanokings/avatars/${user.avatar || 'avatar'}`,
                    {
                      format: 'webp',
                      gravity: 'auto:subject',
                      crop: 'fill',
                      width: 120,
                      height: 120,
                      radius: 'max',
                    }
                  )
                "
                alt="avatar"
              />
              <span
                class="hidden ml-1 mr-3  sm:inline lato-semibold-16 text-secondary-light"
              >
                {{ user.username }}
              </span>
            </AtomsButton>
          </div>

          <transition name="slide-y">
            <MoleculesUserMenu v-show="userMenu" @close="userMenu = false" />
          </transition>
        </div>
        <AtomsButton
          @click="logout"
          class="
            p-1
            transition
            duration-300
            rounded-[5px]
            hover:ripple-bg-primary-DEFAULT
            text-primary
            hover:text-white
            hidden
            sm:inline-block
            ml-1
          "
        >
          <AtomsIconsLogout />
        </AtomsButton>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRouter,
  useContext,
  useStore,
  computed,
} from '@nuxtjs/composition-api'
import { useWindowScroll } from '@vueuse/core'

export interface State {
  authUser: { avatar: string; username: string; notifications: Array<any> }
}
// import { realmApp } from '~/helpers/realmAuth'
export default defineComponent({
  name: 'DashNavBar',
  setup() {
    const context = useContext()
    const store = useStore<State>()
    const router = useRouter()
    const notificationsMenu = ref(false)
    const userMenu = ref(false)
    const { y: scrollY } = useWindowScroll()
    const user = computed(() => {
      const { avatar, username, notifications } = store.state.authUser || {}
      return { avatar, username, notifications }
    })
    const logout = () => {
      context.app.$apolloHelpers.onLogout()
      context.app.$realmApp.currentUser!.logOut().then(() => {
        router.replace('/login?logout=true')
      })
    }
    return { notificationsMenu, userMenu, user, scrollY, logout }
  },
  watch: {
    notificationsMenu(newVal) {
      if (newVal) {
        this.userMenu = false
      }
    },
    userMenu(newVal) {
      if (newVal) {
        this.notificationsMenu = false
      }
    },
  },
})
</script>

<style scoped>
.my-shadow {
  box-shadow: 0 100px 80px rgba(67, 97, 238, 0.12),
    0 41.78px 33.4px rgba(67, 97, 238, 0.0863),
    0 22.34px 17.87px rgba(67, 97, 238, 0.0715),
    0 12.52px 10.02px rgba(67, 97, 238, 0.06),
    0 6.65px 5.32px rgba(67, 97, 238, 0.0485),
    0 2.77px 2.21px rgba(67, 97, 238, 0.0337);
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
