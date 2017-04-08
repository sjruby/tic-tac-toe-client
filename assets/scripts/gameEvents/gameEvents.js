const api = require('./gameEventsAPI')
const ui = require('./gameEventsUI')
const turnSwitcher = require('./gameEngine/turnSwitcher')
const gameStore = require('./gameEngine/gameStore')
const showStuff = require('./showStuff')
const hideStuff = require('./hideStuff')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const createNewGame = function () {
  api.newGame()
    .done(showStuff.showThingsOnSignIn(), hideStuff.hideThingsOnSignIn(), ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
// this function is used below in the on click function to control how the image is
// is being fliped.  The flipPicture function will take a callback function
// from the game engine to know if it shoudl be fliping x or o
const flipPicture = function (clickedId, turnCheck) {
// figures out what div # clicked what
  const $clickedCell = $('#' + clickedId)
// check the API's game board to see whose turn it is
  const turn = turnCheck(gameStore.gameStore.cells)
// set the new image, should it be x or o
  // const newSrc = 'http://i.imgur.com/AWv10hk.png'
  const setImgurSrc = function (turn) {
    if (turn === 'o') {
      return 'https://i.imgur.com/AWv10hk.png'
    } else { return 'https://i.imgur.com/evjjjNV.png' }
  }
  const newSrc = setImgurSrc(turn)

  // const src = newSrc(turn)
// each div in the board has one img, so replace that img with the new src
  $clickedCell.children().attr('src', newSrc)
// turn the click watcher off for teh cell so the image can't be fliped AND
// the user can't overwrite anythign in the game array
  $clickedCell.off('click')
}

const onClick = function (div) {
  api.tttClick(this.id, turnSwitcher.whoseTurn)
    .then(ui.clickSuccess, flipPicture(this.id, turnSwitcher.whoseTurn))
    .catch(ui.clickFaliure)
}

const makeTheBoard = function () {
  event.preventDefault()
  const newSrc = 'https://i.imgur.com/jEDl0rb.png'
  $('.game-board').children().children().children().attr('src', newSrc)
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  $('.ttt-board').on('click', onClick)
}

const clearTheBoard = function () {
  event.preventDefault()
  const newSrc = 'https://i.imgur.com/jEDl0rb.png'
  $('.game-board').children().children().children().attr('src', newSrc)
}

const pullGameStats = function () {
  api.getGames()
    .then(ui.getGamesSuccesss)
    .catch(ui.getGamesFaliure)
}

// <img src="/assets/images/blank-square.png" alt="blank-square">
module.exports = {
  onNewGame,
  onClick,
  makeTheBoard,
  createNewGame,
  pullGameStats,
  clearTheBoard
}
