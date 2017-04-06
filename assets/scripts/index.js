'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled

const userEvents = require('./userEvents/userEvents')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-pw').on('submit', userEvents.onChangePW)
  $('#sign-out').on('submit', userEvents.onSignOut)
})

const gameEvents = require('./gameEvents/gameEvents')
$(() => {
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('.ttt-board').on('click', gameEvents.onClick)
})
