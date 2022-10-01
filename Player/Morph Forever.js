// Deobfuscated by Greenlio#4514
playerTransform =
  Boot.prototype.game['_state']['_current'].user.source.data
    .playerTransformation
!playerTransform
  ? alert('You must have a morph enabled to use this hack.')
  : ((playerTransform.maxTime = Infinity),
    (playerTransform.timeRemaining = Infinity))
