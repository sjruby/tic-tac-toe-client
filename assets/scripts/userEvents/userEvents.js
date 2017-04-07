const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const showStuff = require('./showStuff')
const hideStuff = require('./hideStuff')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onChangePW = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onChangePWFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signOut(data)
    .done(ui.signOutSuccess, showStuff.showThingsOnSignOut, hideStuff.hideThingsOnSignOut)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
