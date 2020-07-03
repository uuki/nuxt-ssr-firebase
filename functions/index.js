const functions = require('firebase-functions')
const nuxtServer = require('./nuxt-server')

// Specify the function name of firebase functions in functionName
exports.functionName = functions.https.onRequest(nuxtServer);