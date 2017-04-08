const checkGameStatus = require('./gameEngine/checkGameStatus')

const createGamesArray = function (games) {
  const result = []
  for (let i = 0; i < games.length; i++) {
    result[i] = games[i].cells
  }
  return result
}

const createStatsArray = function (games, pullGameArrays) {
  const arrayOfGames = pullGameArrays(games)

  const gameResultsArray = []

  for (let i = 0; i < arrayOfGames.length; i++) {
    gameResultsArray[i] = checkGameStatus.createStatsPredicate(arrayOfGames[i])
  }

  const result = 'you played ' + gameResultsArray.length + ' games. Of those you won ' + gameResultsArray.filter((e, i, a) => e === 'x Wins').length + ', and lost ' + gameResultsArray.filter((e, i, a) => e === 'o Wins').length + ' but did not finish ' + gameResultsArray.filter((e, i, a) => e === 'none').length + ' and tied ' + gameResultsArray.filter((e, i, a) => e === 'CATS GAME').length

  return result
}

module.exports = {
  createGamesArray,
  createStatsArray
}
