// Deobfuscated by Greenlio#4514
function parseJwt(token) {
  return JSON.parse(atob(token.split('.')[1]))
}
user_id = Boot.prototype.game['_state']['_current'].user.source.userID
var hp = Boot.prototype.game['_state']['_current'].user.source.data.hp
  fetch(
    'https://api.prodigygame.com/game-api/v1/character/' +
      user_id +
      '?userID=' +
      user_id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('JWT_TOKEN'),
      },
    }
  )
    .then((requestdata) => {
      return requestdata.json()
    })
    .then((data) => {
      function func(var1 = true) {
        return (
          (e = []),
          Boot.prototype.game['_state']['_states']
            .get('Boot')
            ['_gameData'].pet.forEach((user) => {
              if (var1) {
                e.push(
                  '{"levelCaught":' +
                    data.data.level +
                    ',"ID":"' +
                    user.ID +
                    '","stars":99999,"catchDate":' +
                    Date.now() +
                    ',"level":' +
                    _0x3241e5 +
                    ',"foreignSpells":[61,67,55,58,70,81,75,78]}'
                )
              } else {
                e.push(
                  '{"firstSeenDate":' +
                    Date.now() +
                    ',"ID":' +
                    user.ID +
                    ',"timesBattled":1,"timesRescued":1}'
                )
              }
            }),
          '[' + e.join(',') + ']'
        )
      }
      pet_maker = func()
      pet_maker2 = func(false)
      data.pets = JSON.parse(pet_maker)
      data.encounters.pets = JSON.parse(pet_maker2)
      fetch('https://api.prodigygame.com/game-api/v3/characters/' + user_id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: sessionStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(data),
          userID: user_id,
        }),
      })
    })

message = parseInt(
  prompt(
    'Made by rxzyx (rzx). Unlocking all pets, what level do you want them to be?'
  )
)
message
  ? (unlockPets(message),
    alert('You will need to login again.'),
    window.location.reload())
  : alert('Unexpected Answer')
