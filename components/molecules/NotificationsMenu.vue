<template>
  <div
    class="
      absolute
      right-0
      w-[75vw]
      max-w-xs
      sm:max-w-md
      px-4
      pt-2
      pb-14
      mt-2
      origin-top-right
      bg-white
      rounded-md
      my-shadow
      ring-1 ring-black ring-opacity-5
      focus:outline-none
    "
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="notifications-menu-button"
    tabindex="-1"
  >
    <div class="flex justify-between text-secondary-light">
      <h3 class="lato-semibold-16">Notifications</h3>
      <AtomsButton @click="$emit('close')">
        <AtomsIconsClose />
      </AtomsButton>
    </div>
    <div class="flex flex-col mt-8 lato-medium-14">
      <h3 class="empty-content-text">
        You do not have any notifications at the moment.
      </h3>
      <div
        class="
          flex flex-col
          justify-between
          py-4
          space-y-2
          border-b-[0.5px] border-secondary-lightest
          sm:space-x-4
          sm:flex-row
          sm:space-y-0
        "
        v-for="(notification, i) in notifications"
        :key="`notification-${i}`"
      >
        <p class="text-secondary-light">{{ notification.content }}</p>
        <span class="text-secondary-lighter">
          {{ notification.time }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
interface PropsData {
  notifications: Array<any>
}
export default defineComponent({
  name: 'NotificationsMenu',
  // props: { notifications: { type: Array, default: () => [] } },
  setup(props: PropsData) {
    const notifications = ref(props.notifications)
    return { notifications }
  },
})
</script>
