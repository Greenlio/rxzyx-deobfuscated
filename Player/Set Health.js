// Deobfuscated by Greenlio#4514
user_id = parseJwt(localStorage.getItem('JWT_TOKEN')).content.userID
function setHealth(_0x472aca) {
  fetch(
    'https://api.prodigygame.com/game-api/v1/character/' +
      user_id +
      '?userID=' +
      user_id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('JWT_TOKEN'),
      },
    }
  )
    .then((_0x5ae6fd) => {
      return _0x5ae6fd.json()
    })
    .then((requestdata) => {
      requestdata.data.hp = _0x472aca
      fetch('https://api.prodigygame.com/game-api/v3/characters/' + user_id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(requestdata),
          userID: user_id,
        }),
      })
    })
}
message = parseInt(
  prompt('Made by rxzyx (rzx). What do you want your player health to be?')
)
message
  ? (setHealth(message),
    alert('You will need to login again.'),
    window.location.reload())
  : alert('Unexpected Answer')
