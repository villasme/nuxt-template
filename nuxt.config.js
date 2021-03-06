export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    API_SECRET: '${API_SECRET}'
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './pages/**/*.{ts,js,vue}'
      }
    }
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'view-design/dist/styles/iview.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/router',
    '@/plugins/iview',
    '@/plugins/i18n',
    '@/plugins/fetch',
    '@/plugins/services'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^iview/],
    vendor: ['axios']
  }
}
