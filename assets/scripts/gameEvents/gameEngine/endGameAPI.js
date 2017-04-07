
const store = require('../../store.js')
const config = require('../../config.js')
const gameStore = require('./gameStore')

const endGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigins.production + '/games/' + gameStore.gameStore.id,
    headers: {
      Authorization: 'Token token=' + store.store.token
    },
    data: {
      'game': {
        'over': true
      }
    }
  }
  )
}

module.exports = {
  endGame
}
