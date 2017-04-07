const api = require('./endGameAPI')
const ui = require('./endGameUI')
const $gameStatus = $('#game-status')
const $gameBoard = $('.ttt-board')

const oWins = function (input) {
  const result = input.filter((e, i, a) => e === 'o').length >= 3
  return result
}

const xWins = function (input) {
  const result = input.filter((e, i, a) => e === 'x').length >= 3
  return result
}

const cRow = function (input) {
  const result = input.filter((e, i, a) => e === 'x').length >= 1 && input.filter((e, i, a) => e === 'o').length >= 1
  return result
}

const didSomeOnWin = function (data) {
  const row1 = [data[0], data[1], data[2]]
  const row2 = [data[3], data[4], data[5]]
  const row3 = [data[6], data[7], data[8]]
  const col1 = [data[0], data[3], data[6]]
  const col2 = [data[1], data[4], data[7]]
  const col3 = [data[2], data[5], data[8]]
  const diag1 = [data[0], data[4], data[8]]
  const diag2 = [data[2], data[4], data[6]]

  const arraysToCheck = [row1, row2, row3, col1, col2, col3, diag1, diag2]

  let result = 'none'

  if (arraysToCheck.some(xWins)) {
    $gameStatus.text('X you won... try not gloat about it... you went first afterall')
    result = 'x Wins'
    $gameBoard.off('click')
    api.endGame()
      .done(ui.endGameSuccess)
      .catch(ui.endGameFailure)
  }

  if (arraysToCheck.some(oWins)) {
    $gameStatus.text('O you won...rub it in that fools face, X should never loose')
    result = 'o Wins'
    $gameBoard.off('click')
    api.endGame()
      .done(ui.endGameSuccess)
      .catch(ui.endGameFailure)
  }

  if (arraysToCheck.every(cRow)) {
    $gameStatus.text('A TIE...yeah that sounds right')
    result = 'CATS GAME'
    $gameBoard.off('click')
    api.endGame()
      .done(ui.endGameSuccess)
      .catch(ui.endGameFailure)
  }
  return result
}

module.exports = {
  didSomeOnWin
}
