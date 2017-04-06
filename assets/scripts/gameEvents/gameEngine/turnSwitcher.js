
const whoseTurn = function (gameBoard) {
// if there are no x's then it must be x's turn
  if (gameBoard.filter((e, i, a) => e === 'x').length === 0) {
    return 'x'
// if there are the same number of x's and o's in teh array it must be x's turn
  } else if (gameBoard.filter((e, i, a) => e === 'x').length === gameBoard.filter((e, i, a) => e === 'o').length) {
    return 'x'
// otherwise it must be o's turn
  } else { return 'o' }
}

module.exports = {
  whoseTurn
}
