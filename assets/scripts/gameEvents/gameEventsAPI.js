const app = require('../../app.js')
const store = require('../store.js')
const gameStore = require('./gameEngine/gameStore')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: '{}'
  })
}

const tttClick = function (clickedId) {
  const clickedCell = clickedId * 1

  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + gameStore.gameStore.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: {
      'game': {
        'cell': {
          'index': clickedCell,
          'value': 'x'
        },
        'over': false
      }
    }
  })
}

module.exports = {
  newGame,
  tttClick
}
