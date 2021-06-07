<template>
  <!-- component -->
  <!-- url('/img/hero-pattern.svg') -->
  <div class="flex min-h-screen bg-white">
    <div class="relative hidden w-1/2 bg-cover lg:block bg-login">
      <div
        class="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.37)]"
      ></div>
    </div>
    <!-- <div class="h-12 overflow-hidden bg-right bg-no-repeat bg-cover max-w-max max-h-8">
            <img src="log_in.webp" alt="hey">
        </div> -->

    <div class="max-w-lg px-4 py-5 mx-auto my-24 shadow-none lg:w-1/2">
      <div class="p-0 font-sans text-left">
        <h1 class="text-3xl font-medium text-gray-800">Welcome,</h1>
        <h3 class="p-1 text-gray-700">Create an account to get started.</h3>
      </div>
      <FormulateForm action="#" class="p-0">
        <div class="mt-5">
          <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> -->
          <input
            type="text"
            class="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Email"
          />
        </div>
        <div class="mt-5">
          <input
            type="text"
            class="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="User-name"
          />
        </div>
        <div class="mt-5">
          <input
            type="password"
            class="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            placeholder="Password"
          />
        </div>

        <div class="block p-5 mt-6 text-xs text-sm text-gray-800 md:font-sans">
          <input type="checkbox" class="inline-block border-0" />
          <span display="inline" class=""
            >By creating an account you are agreeing to our
            <a class="" href="/s/terms" target="_blank" data-test="Link">
              <span class="underline">Terms and Conditions</span>
            </a>
            and
            <a class="" href="/s/privacy" target="_blank" data-test="Link">
              <span class="underline">Privacy Policy</span>
            </a>
          </span>
        </div>

        <div class="mt-10">
          <input
            type="submit"
            value="Sign up with email"
            class="w-full py-3 text-white bg-green-500 rounded hover:bg-green-600"
          />
        </div>
      </FormulateForm>
      <a class="" href="/login" data-test="Link"
        ><span class="block p-5 text-xs text-center text-gray-800"
          >Already have an account?</span
        ></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CreateAccount',
  // props: {
  //   user: {
  //     type: Object as () => User,
  //     required: true,
  //   },
  // },

  setup() {
    const platforms = ref([
      'apple-music',
      'vevo',
      'deezer',
      'spotify',
      'mtn-music',
      'youtube',
      'shazam',
      'vuclip',
    ])
    return { platforms }
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
