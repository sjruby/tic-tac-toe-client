const app = require('../../app.js')
const store = require('../store.js')

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

module.exports = {
  newGame
}
