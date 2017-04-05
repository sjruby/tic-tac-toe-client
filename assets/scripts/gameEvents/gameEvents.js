const api = require('./gameEventsapi')
const ui = require('./gameEventsUI')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClick = function (div) {
  api.tttClick(this.id)
}

module.exports = {
  onNewGame,
  onClick
}
