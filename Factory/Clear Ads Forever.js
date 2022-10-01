
// Deobfuscated by Greenlio#4514
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
      .children[1]['_owner'].stateNode.state,
    adtypes = ['glitch', 'lol', 'joke', 'slow', 'dance', 'color']
  var extra = ['bites', 'popUpAmount']
  for (var var2 = 0; var2 < adtypes.length; var2++) {
    hack[adtypes[var2]] = false
  }
  for (var var2 = 0; var2 < extra.length; var2++) {
    hack[extra[var2]] = 0
  }
  hack.ads = Array(10).fill(0)
})
