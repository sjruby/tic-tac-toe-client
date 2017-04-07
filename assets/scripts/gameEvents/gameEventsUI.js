const $gameStatus = $('#game-status')
const store = require('../store')
const gameStore = require('./gameEngine/gameStore')
const checkGameStatus = require('./gameEngine/checkGameStatus')

const newGameSuccess = function (data) {
  gameStore.gameStore = data.game
  $gameStatus.text('Welcome to the game ' + store.store.email + 'Click the board to get started')
}

const newGameFailure = function (response) {
  $gameStatus.text('hmmm somthing is wrong...if I had to guess its user error')
}

const clickSuccess = function (data) {
  gameStore.gameStore = data.game
  checkGameStatus.didSomeOnWin(gameStore.gameStore.cells)
  console.log(gameStore.gameStore.cells)
}

const clickFaliure = function (response) {
  $gameStatus.text('hmmm somthing is wrong...if I had to guess its user error')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickSuccess,
  clickFaliure
}
