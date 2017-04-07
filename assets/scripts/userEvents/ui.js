const $signUpUI = $('#signUpMessage')
const $signInUI = $('#signInMessage')
const $changePWUi = $('#changePWMessage')
const $gameStatus = $('#game-status')
const gameEvents = require('../gameEvents/gameEvents')
const store = require('../store')

const onSignUpSuccess = function () {
  $signUpUI.text('It worked! Go sign in and have some fun!')
  $gameStatus.text('You signed up! You have to sign in to play')
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
}

const onSignUpError = function (response) {
  $signUpUI.text('It failed! Do you already have an account? Do your Passwords match?')
}

const onSignInSuccess = function (data) {
  store.store = data.user
  $signInUI.text('You have signed-click the board to get started!')
  $('#signInModal').modal('hide')
  gameEvents.createNewGame()
  $('#sign-in')[0].reset()
}

const onSignInError = function (response) {
  $signInUI.text('It failed...heres why...')
}

const onChangePWSuccess = () => {
  $changePWUi.text('You succesfully changed your PW...now play!')
  $gameStatus.text('You changed your PW...play a game already!')
  $('#changePW').modal('hide')
  $('#change-pw')[0].reset()
}
const onChangePWFailure = () => {
  $changePWUi.text('It failed...try again??')
}

const signOutSuccess = () => {
  $gameStatus.text('You left meeeeeee WHYYYYY')
  gameEvents.clearTheBoard()
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
