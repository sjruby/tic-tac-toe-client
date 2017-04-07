const $gameBoard = $('.game-board')
const $changePwButton = $('.change-pw-button')
const $signOut = $('.sign-out')
const $startGame = $('.start-game')
const $signUp = $('.sign-up-button')
const $signIn = $('.sign-in-button')
const $gameStats = $('.game-stats')

const showThingsOnSignIn = function () {
  $gameBoard.css('visibility', 'visible')
  $changePwButton.css('visibility', 'visible')
  $signOut.css('visibility', 'visible')
  $startGame.css('visibility', 'visible')
  $gameStats.css('visibility', 'visible')
}

const showThingsOnSignOut = function () {
  $signUp.css('visibility', 'visible')
  $signIn.css('visibility', 'visible')
}

module.exports = {
  showThingsOnSignIn,
  showThingsOnSignOut
}
// .change-pw-button {
//   visibility: hidden;
// }
//
// .sign-out {
//   visibility: hidden;
// }
//
// .start-game {
//   visibility: hidden;
// }
