// Deobfuscated by Greenlio#4514
// Unknown if it works, looks weird.
  var game =
      Boot.prototype.game['_state']['_states'].get('Boot')['_gameData'],
    gamedata = Boot.prototype.game['_state']['_current'].user.source.backpack
  all_weps = var1(game.weapon)
  all_outfits = var1(game.outfit)
  all_hats = var1(game.hat)
  all_relic = var1(game.relic)
  all_fossil = var1(game.fossil)
  all_items = var1(game.item)
  all_boots = var1(game.boots)
  all_spell_relics = var1(game.spellRelic)
  all_currency = var1(game.currency, true)
  all_follow = var1(game.follow)
  all_mount = var1(game.mount)
  all_mathInt = var1(game.mathTownInterior)
  all_mathTownFrame = var1(game.mathTownFrame)
  all_key = var1(game.key)
  all_emotes = var1(game.emote)
  Boot.prototype.game['_state']['_current'].user.source.house.data.items = {}
  var _0x290840 = {
    A: [],
    N: _0x3cdd19,
  }
  Boot.prototype.game['_state']['_states']
    .get('Boot')
    ['_gameData'].dorm.forEach(
      (user) =>
        (Boot.prototype.game['_state']['_current'].user.source.house.data.items[
          user.ID
        ] = _0x290840)
    )
  gamedata.data.weapon = JSON.parse(all_weps)
  gamedata.data.item = JSON.parse(all_items)
  gamedata.data.outfit = JSON.parse(all_outfits)
  gamedata.data.relic = JSON.parse(all_relic)
  gamedata.data.boots = JSON.parse(all_boots)
  gamedata.data.hat = JSON.parse(all_hats)
  gamedata.data.currency = JSON.parse(all_currency)
  gamedata.data.fossil = JSON.parse(all_fossil)
  gamedata.data.follow = JSON.parse(all_follow)
  gamedata.data.mount = JSON.parse(all_mount)
  gamedata.data.key = JSON.parse(all_key)
  gamedata.data.spellRelic = JSON.parse(all_spell_relics)

message1 = parseInt(
  prompt('Made by rxzyx (rzx). How many much of every weapon do you want?')
)
message2 = parseInt(
  prompt('Made by rxzyx (rzx). How many much of every currency do you want?')
)
message1 && message2
  ? (unlockWeapons(message1, message2), alert('Done, made by rxzyx (rzx).'))
  : alert('Unexpected Answer')
