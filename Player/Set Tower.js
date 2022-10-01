// Deobfuscated by Greenlio#4514
try {
  var tower = parseInt(
    prompt('What tower level do you want to have? (x >= 0) ')
  )
} catch (error) {
  var tower = NaN
}
!Number.isNaN(tower) &&
  Number.isFinite(tower) &&
  (tower < 0
    ? alert('Invalid Choice, must be (x >= 0)!')
    : ((Boot.prototype.game['_state']['_current'].user.source.data.tower =
        tower),
      Boot.prototype.game['_state']['_current'].user.source.addWin()))
