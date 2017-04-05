const app = require('../app.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
