const gameStore = require('./gameStore')

const endGameSuccess = function (data) {
  gameStore.gameStore = data.game
  console.log('I would prove that end game success ran thing ran')
  console.log(gameStore.gameStore.cells)
  console.log(gameStore.gameStore.over)
}

const endGameFailure = function () {
  console.log('I would prove that end game failure ran thing ran')
}

module.exports = {
  endGameSuccess,
  endGameFailure
}
