<template>
  <main class="relative flex-1 overflow-y-auto focus:outline-none">
    <MoleculesBasicModal
      :modal="saveSuccessModal"
      icon="AtomsIconsCircledCheck"
      content="Profile Saved Succesfully"
      state="success"
      @close="saveSuccessModal = false"
    />
    <div class="py-6">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <h1 class="lora-bold-20 sm:lora-bold-28 text-secondary">My Account</h1>
      </div>
      <div class="px-4 mx-auto mt-6 max-w-7xl sm:px-6 md:px-8">
        <OrganismsProfileImageArea
          coverImage="/images/bgs/profile.svg"
          profileImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Z9sX75fYfU&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div class="mt-24 text-center">
          <h1 class="lato-medium-20 text-secondary">VaryAble</h1>
          <div class="flex justify-center gap-16 mt-8 text-secondary-lighter">
            <AtomsButton
              class="lato-medium-16"
              :class="{ 'active-tab': !editProfile }"
              @click="editProfile = false"
            >
              Profile Details
            </AtomsButton>
            <AtomsButton
              class="lato-medium-16"
              :class="{ 'active-tab': editProfile }"
              @click="editProfile = true"
            >
              Edit Profile
            </AtomsButton>
          </div>
        </div>
        <div class="p-8 mt-10 bg-white rounded-md">
          <div
            v-if="!editProfile"
            class="flex flex-wrap justify-between gap-20"
          >
            <OrganismsProfileContentSection
              v-for="(profileContentSection, i) in profileContentSections"
              :key="`profileContentSection-${i}`"
              :title="profileContentSection.label"
              :content="profileContentSection.children"
            />
          </div>
          <FormulateForm
            v-else
            v-model="form"
            :schema="profileContentSections"
            class="flex flex-wrap justify-between gap-20 account-settings"
            @submit="saveSuccessModal = true"
          >
            <div class="mx-auto mt-[-10px]">
              <FormulateInput type="submit" name="submitButton">
                Save Profile
              </FormulateInput>
            </div>
          </FormulateForm>
        </div>
      </div>
    </div>
  </main>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MyAccount',
  layout: 'dashboard',
  setup() {
    const editProfile = ref(false)
    const saveSuccessModal = ref(false)
    const profileContentSections = ref([
      {
        type: 'group',
        repeatable: false,
        name: 'personalDetails',
        label: 'Personal Details',
        children: [
          { label: 'Username', name: 'username', value: 'VaryAble' },
          { label: 'Name', name: 'name', value: 'Jacey Wiliams' },
          {
            type: 'email',
            label: 'Email',
            name: 'email',
            value: 'Jacey_williams@gmail.com',
          },
          {
            type: 'tel',
            label: 'Phone number',
            name: 'phoneNumber',
            value: '08099397953',
          },
          {
            label: 'Gender',
            name: 'gender',
            value: 'Male',
          },
          {
            label: 'Subscription',
            name: 'subscription',
            value: 'Classic',
            addonText: {
              name: '',
              content: 'Upgrade?',
              classes: 'lato-bold-14 text-primary',
            },
          },
        ],
      },
      {
        type: 'group',
        repeatable: false,
        name: 'socialMedia',
        label: 'Social Media',
        children: [
          { label: 'Facebook', name: 'facebook', value: '@VaryAble' },
          { label: 'Instagram', name: 'instagram', value: '@VaryAble' },
          { label: 'Twitter', name: 'twitter', value: '@VaryAble' },
          { label: 'Youtube', name: 'youtube', value: '@VaryAble' },
        ],
      },
      {
        type: 'group',
        repeatable: false,
        name: 'bankDetails',
        label: 'Bank Details',
        children: [
          { label: 'Bank', name: 'bank', value: 'Guarantee Trust Bank' },
          {
            label: 'Account Name',
            name: 'accountName',
            value: 'Jacey Williams',
          },
          {
            label: 'Account Number',
            name: 'accountNumber',
            value: '0213321114',
          },
        ],
      },
    ])
    const form = reactive({})
    return { editProfile, profileContentSections, form, saveSuccessModal }
  },
})
</script>

<style scoped>
.active-tab {
  @apply text-secondary relative transition duration-300;
}
.active-tab::after {
  content: '';
  @apply absolute h-1 w-full rounded-lg bg-primary bottom-[-8px] left-0;
}
</style>
