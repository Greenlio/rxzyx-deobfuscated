// Deobfuscated by Greenlio#4514
function quest(var1, var2) {
  Boot.prototype.game['_state']['_current']['_world'].zones[
    var1
  ].testQuest(var2)
  try {
    Boot.prototype.game['_state']['_states'].get('TileScreen').process()
  } catch {
    null
  }
}
quest('house', 2)
quest('academy', 2)
var level = Boot.prototype.game['_state']['_current'].user.source.data.level
Boot.prototype.game['_state']['_current'].user.source.state.data.tutorial[0] = 4
Boot.prototype.game['_state']['_current'].user.source.backpack.addKeyItem(13, 0)
Boot.prototype.game['_state']['_current'].user.source.tutorial.data.menus[14] =
  [1]
Boot.prototype.game['_state']['_current'].user.source.onTutorialComplete()
Boot.prototype.game['_state']['_current'].user.source.data.level = Math.max(
  level,
  5
)
Boot.prototype.game['_state']['_current'].user.source.addWin()
