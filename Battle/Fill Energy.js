// Deobfuscated by Greenlio#4514
setInterval(function () {
  var game = Boot.prototype.game['_state']['_current'].currentManager
  if (
    game &&
    game['_playerTeam'] !== void 0 &&
    game['_playerTeam'] !== null
  ) {
    game['_playerTeam'].currentEnergy = game['_playerTeam'].maxEnergy
  }
})
