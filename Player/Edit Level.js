// Deobfuscated by Greenlio#4514
try {
  var level = parseInt(prompt('What grade do you want to be? (x <= 100) '))
} catch (_0x2a7663) {
  var level = NaN
}
!Number.isNaN(level) &&
  Number.isFinite(level) &&
  (level > 100
    ? alert('Invalid Choice, must be (x <= 100)!')
    : ((Boot.prototype.game['_state']['_current'].user.source.data.level =
        level),
      Boot.prototype.game['_state']['_current'].user.source.addWin()))
