const api = require('./gameEventsAPI')
const ui = require('./gameEventsUI')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const flipPicture = function (clickedId) {
  const $clickedCell = $('#' + clickedId)
  const turn = 'o'
  const newSrc = '/assets/images/square-' + turn + '.png'
  $clickedCell.children().attr('src', newSrc)
}

const onClick = function (div) {
  flipPicture(this.id)
  api.tttClick(this.id)
    .then(ui.clickSuccess)
    .catch(ui.clickFaliure)
}

module.exports = {
  onNewGame,
  onClick
}
