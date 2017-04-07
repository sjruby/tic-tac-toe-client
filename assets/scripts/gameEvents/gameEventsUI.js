const $gameStatus = $('#game-status')
const store = require('../store')
const gameStore = require('./gameEngine/gameStore')
const checkGameStatus = require('./gameEngine/checkGameStatus')
const calcGameStats = require('./calcGameStats')
const $gameStatsDisplay = $('#game-stats-here')

const newGameSuccess = function (data) {
  gameStore.gameStore = data.game
  console.log(gameStore.gameStore)
  $gameStatus.text('Welcome to the game ' + store.store.email + ' Click the board to get started')
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

const getGamesSuccesss = function (data) {
  gameStore.allGames = data.games
  const result = calcGameStats.createStatsArray(gameStore.allGames, calcGameStats.createGamesArray)
  $gameStatsDisplay.text(result)
}

const getGamesFaliure = function (data) {
  $gameStatus.text('fail')
}
module.exports = {
  newGameSuccess,
  newGameFailure,
  clickSuccess,
  clickFaliure,
  getGamesFaliure,
  getGamesSuccesss
}
