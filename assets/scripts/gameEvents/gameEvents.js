const api = require('./gameEventsAPI')
const ui = require('./gameEventsUI')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onClick = function (div) {
  api.tttClick(this.id)
    .then(ui.clickSuccess)
    .catch(ui.clickFaliure)
}

module.exports = {
  onNewGame,
  onClick
}
