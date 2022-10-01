// Deobfuscated by Greenlio#4514
setInterval(function () {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  Object.keys(Boot.prototype.game['_state']['_current'].playerList).forEach(
    (var2) => {
      p = Boot.prototype.game['_state']['_current'].playerList[var2]
      Boot.prototype.game.rootContainer['_inversifyContainer'][
        '_bindingDictionary'
      ]['_map'].forEach((var1) => {
        if (var1[0].cache && var1[0].cache['_fxSocketHandler']) {
          user_name = var1[0].serviceIdentifier
        }
      })
      Boot.prototype.game.rootContainer
        .get(user_name)
        ['_fxSocketHandler'].ot.emitMessage({
          action: 'fx',
          data: {
            type: numbers[Math.floor(Math.random() * numbers.length)],
            userID:
              Boot.prototype.game['_state']['_current'].user.source.userID,
            x: p.x,
            y: p.y,
          },
        })
    }
  )
})
