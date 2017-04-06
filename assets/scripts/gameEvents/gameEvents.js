const api = require('./gameEventsAPI')
const ui = require('./gameEventsUI')
const turnSwitcher = require('./gameEngine/turnSwitcher')
const gameStore = require('./gameEngine/gameStore')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// this function is used below in the on click function to control how the image is
// is being fliped.  The flipPicture function will take a callback function
// from the game engine to know if it shoudl be fliping x or o
const flipPicture = function (clickedId, turnCheck) {
  const $clickedCell = $('#' + clickedId)
  const turn = turnCheck(gameStore.gameStore.game.cells)
  const newSrc = '/assets/images/square-' + turn + '.png'
  $clickedCell.children().attr('src', newSrc)
}

const onClick = function (div) {
  api.tttClick(this.id)
    .then(ui.clickSucces)
    .catch(ui.clickFaliure)
      // .then(ui.clickSuccess, flipPicture(this.id, turnSwitcher.whoseTurn))
}

module.exports = {
  onNewGame,
  onClick
}
