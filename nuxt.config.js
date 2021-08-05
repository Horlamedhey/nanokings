require('dotenv').config()
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nanokings',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        // type: 'image/x-icon',
        href: 'https://rsms.me/inter/inter.css',
      },
    ],
  },
  // privateRuntimeConfig: {
  //   appID: process.env.APP_ID,
  // },
  generate: {
    // choose to suit your project
    interval: 7000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/provide-apollo-client',
    'plugins/formulate-phone-input.ts',
    'plugins/phone-input.js',
    'plugins/filters.js',
    'plugins/realmAuth.ts',
    'plugins/vue-formulate.js',
    'plugins/nuxt-client-init.client.js',
    'plugins/vue-apexchart.client.js',
    'plugins/vue-json-excel.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    'nuxt-gsap-module',
    '@nuxt/image',
    '@braid/vue-formulate/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/cloudinary',
    'cookie-universal-nuxt',
  ],
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1904,
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/befittinglife/image/upload/',
    },
  },
  // Apollo configuration
  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration (see below for example)
      default: '~/plugins/apollo-config.ts',
    },

    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },

    // setup a global query loader observer (see below for example)
    watchLoading: '~/plugins/apollo-watch-loading-handler.ts',

    // setup a global error handler (see below for example)
    errorHandler: '~/plugins/apollo-error-handler.ts',

    // Sets the authentication type for any authorized request.
    authenticationType: 'Bearer',

    // Token name for the cookie which will be set in case of authentication
    tokenName: 'apollo-token',

    // [deprecated] Enable the graphql-tag/loader to parse *.gql/*.graphql files
    includeNodeModules: true,

    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
       * Define when the cookie will be removed. Value can be a Number
       * which will be interpreted as days from time of creation or a
       * Date instance. If omitted, the cookie becomes a session cookie.
       */
      expires: 7,

      /**
       * Define the path where the cookie is available. Defaults to '/'
       */
      path: '/',

      /**
       * Define the domain where the cookie is available. Defaults to
       * the domain of the page where the cookie was created.
       */
      // domain: 'example.com',

      /**
       * A Boolean indicating if the cookie transmission requires a
       * secure protocol (https). Defaults to false.
       */
      secure: false,
    },
  },
  cloudinary: {
    cloudName: 'befittinglife',
    apiKey: '169241722441159',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['@vue/apollo-composable'] },
}
