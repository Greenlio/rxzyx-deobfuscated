// Deobfuscated by Greenlio#4514
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.state
  if (hack.myCard) {
    hack.enemyCard.strength = 0
    hack.enemyCard.wisdom = 0
    hack.enemyCard.charisma = 0
  }
})
