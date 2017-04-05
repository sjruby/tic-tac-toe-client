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
  const squareChanged = {
    game: {
      cell: {
        index: clickedId,
        value: 'x'
      },
      over: false
    }
  }

  const data = JSON.stringify(squareChanged)
  console.log(data)

  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/:' + gameStore.gameStore.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: data
  })
}

module.exports = {
  newGame,
  tttClick
}
