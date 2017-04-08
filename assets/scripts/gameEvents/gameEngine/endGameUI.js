const gameStore = require('./gameStore')

const endGameSuccess = function (data) {
  gameStore.gameStore = data.game
}

const endGameFailure = function () {
  console.log('I would prove that end game failure ran thing ran')
}

module.exports = {
  endGameSuccess,
  endGameFailure
}
