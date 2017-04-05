const app = require('../app.js')
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
