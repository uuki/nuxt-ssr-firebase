const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

const nuxt = new Nuxt({
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
})

app.use(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

// function handleRequest (req, res) {
//   res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//   return new Promise((resolve, reject) => {
//     nuxt.render(req, res, (promise) => {
//       promise.then(resolve).catch(reject);
//     });
//   });
// }

// app.use(handleRequest)

function listen () {
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

module.exports = app