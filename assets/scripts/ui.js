const $signUpUI = $('#signUpMessage')
const $signInUI = $('#signInMessage')
const $changePWUi = $('#changePWMessage')
const store = require('./store')

const onSignUpSuccess = function () {
  $signUpUI.text('It worked! Go sign in and have some fun!')
}

const onSignUpError = function (response) {
  $signUpUI.text('It failed...heres why:' + response)
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $signInUI.text('You have signed in go have some fun!')
}

const onSignInError = function (response) {
  $signInUI.text('It failed...heres why...')
}

const onChangePWSuccess = () => {
  $changePWUi.text('You succesfully changed your PW...now play!')
}

const onChangePWFailure = () => {
  $changePWUi.text('It failed...try again??')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePWSuccess,
  onChangePWFailure
}
