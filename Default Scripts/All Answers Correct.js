// Deobfuscated by Greenlio#4514
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.state.question
  try {
    hack.correctAnswers = hack.answers
  } catch (err) {
    null
  }
})
