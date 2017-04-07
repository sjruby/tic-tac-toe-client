const $signUp = $('.sign-up-button')
const $signIn = $('.sign-in-button')
const $gameBoard = $('.game-board')
const $changePwButton = $('.change-pw-button')
const $signOut = $('.sign-out')
const $startGame = $('.start-game')

const hideThingsOnSignIn = function () {
  $signUp.css('visibility', 'hidden')
  $signIn.css('visibility', 'hidden')
}

const hideThingsOnSignOut = function () {
  $gameBoard.css('visibility', 'hidden')
  $changePwButton.css('visibility', 'hidden')
  $signOut.css('visibility', 'hidden')
  $startGame.css('visibility', 'hidden')
}

module.exports = {
  hideThingsOnSignIn,
  hideThingsOnSignOut
}
