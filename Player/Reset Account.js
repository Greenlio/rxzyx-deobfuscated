// Deobfuscated by Greenlio#4514
var confirm_alert = confirm(
  'CONFIRMATION! YOUR DATA WILL BE ERASED, ARE YOU SURE YOU WANT TO CONTINUE?'
)
if (confirm_alert) {
  game = Boot.prototype.game['_state']['_current'].user.source
  game.data.level = 1
  game.data.stars = 0
  game.data.storedMemberStars = 0
  game.updated = true
  var data = {}
  data.zones = {}
  data.menus = {}
  game.tutorial.setData(data)
  game.tutorial.updated = true
  Object.entries(game.backpack.data).forEach(
    ([_0x50312c, _0x579fba]) => (_0x579fba.length = 0)
  )
  game.kennel['_petData'].length = 0
  game.name.init(game.appearance.getName(), game.appearance.getGender())
  game.equipment.clearData()
  game.state.data.tutorial = {}
  game.encounters.setData(null)
  game.state.data.world = {}
  game.state.data.breadcrumbs = {}
  game.state.data.keystones = null
  game.state.updated = true
}
