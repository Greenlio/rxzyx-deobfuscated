// Deobfuscated by Greenlio#4514
try {
  var amount = parseInt(
    prompt('How much gold do you want? ').replaceAll(',', '')
  )
} catch (error) {
  var amount = NaN
}
!Number.isNaN(amount) && Number.isFinite(amount)
  ? (amount > 10000000 &&
      alert(
        '10,000,000 is the maximum amount for gold, setting gold to 10,000,000!'
          .concat(
            ' Please note that setting to 10,000,000 is still a bad idea since the game will refresh.'
          )
          .concat(
            ' Once you get gold then the game will refresh, you can use this script again and set the'
          )
          .concat(' gold amount to a lower amount like 1,000,000')
      ),
    (Boot.prototype.game['_state']['_current'].user.source.data.gold = Math.min(
      amount,
      10000000
    )),
    Boot.prototype.game['_state']['_current'].user.source.addWin())
  : alert('The answer you have responded with is not a number!')
