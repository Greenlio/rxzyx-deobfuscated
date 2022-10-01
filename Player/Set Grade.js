// Deobfuscated by Greenlio#4514
try {
  var grade = parseInt(prompt('What grade do you want to be? (1-8) '))
} catch (error) {
  var grade = NaN
}
!Number.isNaN(grade) &&
  Number.isFinite(grade) &&
  (grade > 8 || grade < 1
    ? alert('Invalid Choice, must be (1-8)!')
    : (Boot.prototype.game['_state']['_current'].user.source.grade = grade))
