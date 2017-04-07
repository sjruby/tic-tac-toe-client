const config = require('../config.js')
const store = require('../store.js')
const gameStore = require('./gameEngine/gameStore')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigins.production + '/games',
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: '{}'
  })
}

const tttClick = function (clickedId, turnCheck) {
  const clickedCell = clickedId * 1

  const value = turnCheck(gameStore.gameStore.cells)

  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins.production + '/games/' + gameStore.gameStore.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: {
      'game': {
        'cell': {
          'index': clickedCell,
          'value': value
        },
        'over': false
      }
    }
  })
}
const getGames = function () {
  console.log("the require api is pinting to right function")
  return $.ajax({
    method: 'GET',
    url: config.apiOrigins.production + '/games',
    headers: {
      Authorization: 'Token token=' + store.store.token
    }
  })
}

module.exports = {
  newGame,
  tttClick,
  getGames
}
