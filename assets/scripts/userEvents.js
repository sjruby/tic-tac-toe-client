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

module.exports = {
  onSignUp,
  onSignIn
}
