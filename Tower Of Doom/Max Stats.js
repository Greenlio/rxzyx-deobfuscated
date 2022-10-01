// Deobfuscated by Greenlio#4514
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.state
  if (hack.myCard) {
    hack.myCard.strength = 1e308
    hack.myCard.wisdom = 1e308
    hack.myCard.charisma = 1e308
  }
})
