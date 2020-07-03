const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';
// const envSet = require(`./env.${environment}.js`);

module.exports = {
  mode: 'universal',
  /*
  ** ENVIRONMENT PROPERTIES
  ** See https://ja.nuxtjs.org/api/configuration-env
  */
  // env: envSet,
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-ssr-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|nuxt)/
        })

        config.optimization.minimizer = [
          new UglifyJsPlugin({
            sourceMap: true,
            parallel: true,
            extractComments: { filename: 'LICENSES' },
            uglifyOptions: {
              output: {
                comments: /^\**!|@preserve|@license|@cc_on/
              },
              compress: {
                drop_console: true
              }
            }
          })
        ]
      }
    }
  }
}

