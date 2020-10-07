const pkg = require('./package')
import webpack from 'webpack'

module.exports = {

  /*
  ** Replaces the deprecated mode property for SPA
  */
  ssr: true,

  /*
  ** Headers of the page
  */
  head: {
    title: 'Megastar Advisors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/flexboxgrid-vue',
    '~/plugins/vue-typed-js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],

  /*
  ** Axios module configuration
  */
  axios: {},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      '@vivid-web/flexboxgrid-vue',
      'vue-typed-js'
    ],
    vendor: ['jquery'],
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]

  }
}
