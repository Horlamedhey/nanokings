<template>
  <footer class="bg-primary">
    <div class="px-2 pt-10 sm:px-6 bg-pattern1 sm:container sm:mx-auto">
      <div class="flex flex-col justify-between sm:flex-row">
        <div
          class="flex flex-col items-center px-2 sm:space-x-4 lg:px-0 sm:flex-row"
        >
          <div
            class="flex items-center justify-center flex-shrink-0 sm:justify-start"
          >
            <AtomsIconsLogoVariant />
          </div>
          <div
            class="mt-10 space-x-4 text-center text-white md:mt-0 lg:ml-28 lg:flex lg:space-x-8 lato-medium-16 sm:text-left"
          >
            <a href="#" class="inline-flex items-center px-1 pt-1">About</a>
            <a href="#" class="inline-flex items-center px-1 pt-1">Careers</a>
            <a href="#" class="inline-flex items-center px-1 pt-1">FAQ</a>
            <a href="#" class="inline-flex items-center px-1 pt-1">Contacts</a>
          </div>
        </div>
        <div class="px-2 text-center sm:text-left lg:w-5/12 lg:max-w-lg">
          <span
            class="inline-block mt-10 mb-2 text-white sm:mt-0 lato-medium-16"
          >
            Subscribe to our Newsletter
          </span>
          <div
            class="flex flex-col items-center justify-center flex-1 mt-8 sm:space-x-4 sm:flex-row lg:justify-end sm:mt-0"
          >
            <div class="flex w-full max-w-sm">
              <label for="search" class="sr-only">Search</label>
              <input
                id="search"
                name="search"
                class="block w-full px-3 py-2 text-white placeholder-white rounded-lg lato-normal-18 bg-primary-alt focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Type your e-mail"
                type="text"
              />
            </div>
            <AtomsButton
              class="px-8 py-2 mt-6 text-white rounded-lg lato-bold-18 sm:mt-0 ripple-bg-primary-dark"
            >
              Send
            </AtomsButton>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="pt-2">
        <div
          class="flex flex-col-reverse py-5 text-sm text-center text-white sm:border-t border-primary-lightest md:flex-row md:justify-between sm:text-left"
        >
          <div class="mt-36 sm:mt-2">
            © 2019-{{ new Date().getFullYear() }} Nanokings Digital. Allrights
            reserved.
          </div>

          <!-- Required Unicons (if you want) -->
          <div
            class="flex flex-row justify-center mt-8 sm:mt-2 sm:justify-start"
          >
            <a href="#" class="w-6 mx-1">
              <AtomsIconsTwitter />
            </a>
            <a href="#" class="w-6 mx-1">
              <AtomsIconsLinkedin />
            </a>
            <a href="#" class="w-6 mx-1">
              <AtomsIconsGoogle />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
</style>