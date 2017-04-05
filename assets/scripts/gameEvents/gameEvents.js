const api = require('./gameEventsapi')
const ui = require('./gameEventsUI')
const getFormFields = require('../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}
