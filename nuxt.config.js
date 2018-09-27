module.exports = {
  env: {
    SECRET_KEY: '-r7-anjc)h3*&#*1!ta3$t!w6ku%qr*zn%@@tj-au@4#@t7!-@',
    OAUTH_HOST: 'http://127.0.0.1:8000/o',
    OAUTH_CLIENT_ID: 'yJQCcIIlhlJ4zFSxgoHJ1h3T84kYP4vlaUokhwWl',
    OAUTH_CLIENT_SECRET: 'xR5543TxhFFP3Gv3stwMv8CgipaqYF1es7cyAyHs93T6CDu31s4MiRquNuAVK6DQlnPjSasB9jNldenDmKF8loLYDx1dewIRZ0ui5yz4e49zN4lKhrPgvd9Dn2RiNasn'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssr-vue-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: [
    '~assets/css/default.min.css',
    '~assets/css/reset.css',
    '~assets/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    ['@nuxtjs/axios', {
      baseURL: 'http://localhost:8000/blog/'
    }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faWeibo', 'faGithub', 'faZhihu', 'faStackOverflow']
        }
      ]
    }]
  ],

  plugins: [
    '~/plugins/vue-moment-lib'
  ],
};
