const $signUpUI = $('#signUpMessage')

const onSignUpSuccess = function () {
  $signUpUI.text('It worked! Go sign in and have some fun!')
}

const onSignUpError = function (response) {
  $signUpUI.text('It failed...heres why:' + response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpError
}
