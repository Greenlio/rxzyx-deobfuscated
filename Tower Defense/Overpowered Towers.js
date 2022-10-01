// Deobfuscated by Greenlio#4514
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.towers
  for (var tower = 0; tower < hack.length; tower++) {
    hack[tower].damage = 1e308
    hack[tower].blastRadius = 1e308
    hack[tower].level = 3
    hack[tower].range = 1e308
    hack[tower].fullCd = 0
  }
})
