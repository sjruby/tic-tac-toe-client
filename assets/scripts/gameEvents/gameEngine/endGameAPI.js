const app = require('../../../app.js')
const store = require('../../store.js')
const gameStore = require('./gameStore')

const endGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + gameStore.gameStore.id,
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
