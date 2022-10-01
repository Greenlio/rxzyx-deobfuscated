// Deobfuscated by Greenlio#4514
headers.accept = 'application/json, text/plain, */*'
headers['x-blooket-build'] = build
var request = {}
request.headers = headers
request.referrerPolicy = 'no-referrer'
request.method = 'GET'
request.mode = 'cors'
request.credentials = 'include'
fetch('https://api.blooket.com/api/users/verify-session', request)
  .then((_0x502b39) => _0x502b39.json())
  .then((_0x3b4012) =>
    Object.values(webpackJsonp.push([[], _0x47de7e, [['']]]).cache)
      .find(
        (_0x1bc9bb) =>
          _0x1bc9bb.exports &&
          _0x1bc9bb.exports.b &&
          typeof _0x1bc9bb.exports.b === 'string'
      )
      .exports.c({
        name: _0x3b4012.name,
        addedTokens: 500,
        addedXp: 500,
      })
      .then(function (_0x43f045) {
        fetch('https://api.blooket.com/api/users/add-rewards', {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'text/plain',
            'x-blooket-build': build,
          },
          referrerPolicy: 'no-referrer',
          body: _0x43f045,
          method: 'PUT',
          mode: 'cors',
          credentials: 'include',
        })
      })
  )
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.alert = i.contentWindow.alert
alert('Max Coins and XP Added')
