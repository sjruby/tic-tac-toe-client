const app = require('../../app.js')
const store = require('../store.js')

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

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + store.store.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
