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

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + store.store.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
