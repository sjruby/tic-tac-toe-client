const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('you signed up yo!')

  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('you signed in yo!')

  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInError)
}

const onChangePW = function (event) {
  event.preventDefault()
  console.log('you changed the PW!')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.onChangePWSuccess)
    .catch(ui.onChangePWFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePW
}
