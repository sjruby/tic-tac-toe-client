const $signUpUI = $('#signUpMessage')
const $signInUI = $('#signInMessage')
const $changePWUi = $('#changePWMessage')
const $gameStatus = $('#game-status')
const store = require('../store')

const onSignUpSuccess = function () {
  $signUpUI.text('It worked! Go sign in and have some fun!')
  $gameStatus.text('You signed up! Now go sign in to play!')
}

const onSignUpError = function (response) {
  $signUpUI.text('It failed...heres why:' + response)
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $signInUI.text('You have signed in go have some fun!')
  $gameStatus.text('You signed in! Click new game to start!')
}

const onSignInError = function (response) {
  $signInUI.text('It failed...heres why...')
}

const onChangePWSuccess = () => {
  $changePWUi.text('You succesfully changed your PW...now play!')
  $gameStatus.text('You changed your PW...play a game already!')
}

const onChangePWFailure = () => {
  $changePWUi.text('It failed...try again??')
}

const signOutSuccess = () => {
  $gameStatus.text('You left meeeeeee WHYYYYY')
}

const signOutFailure = () => {
  console.log('your stuck!!!!!!!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePWSuccess,
  onChangePWFailure,
  signOutFailure,
  signOutSuccess
}