const $gameStatus = $('#game-status')
const store = require('../store')
const gameStore = require('./gameEngine/gameStore')

const newGameSuccess = function (data) {
  gameStore.gameStore = data.game
  $gameStatus.text(store.store.email + ' created game number ' + gameStore.gameStore.id)
}

const newGameFailure = function (response) {
  $gameStatus.text('hmmm somthing is wrong...if I had to guess its user error')
}
module.exports = {
  newGameSuccess,
  newGameFailure
}
