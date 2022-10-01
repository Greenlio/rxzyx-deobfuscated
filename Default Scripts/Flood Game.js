// Incredibly ugly due to the nature of obfuscator.io, but shows the clear intent of the file.
// Deobfuscated by Greenlio#4514
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.prompt = i.contentWindow.prompt
var botName = prompt('Bot Name'),
  botAmount = parseInt(prompt('How Many Bots?'))
function addPlayer(_0x10a4f8) {
  var _0x4c6123 = (function () {
      var _0x3077c6 = true
      return function (_0x4ff194, _0x1a6c22) {
        var _0x50836f = _0x3077c6
          ? function () {
              if (_0x1a6c22) {
                var _0x1a943b = _0x1a6c22.apply(_0x4ff194, arguments)
                return (_0x1a6c22 = null), _0x1a943b
              }
            }
          : function () {}
        return (_0x3077c6 = false), _0x50836f
      }
    })(),
    _0x5e155f = _0x4c6123(this, function () {
      return _0x5e155f
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x5e155f)
        .search('(((.+)+)+)+$')
    })
  _0x5e155f()
  var _0x4cd274 = (function () {
    var _0x11d6e9 = true
    return function (_0xddbd3a, _0x19b306) {
      var _0x3c2f59 = _0x11d6e9
        ? function () {
            if (_0x19b306) {
              var _0x194842 = _0x19b306.apply(_0xddbd3a, arguments)
              return (_0x19b306 = null), _0x194842
            }
          }
        : function () {}
      return (_0x11d6e9 = false), _0x3c2f59
    }
  })()
  var _0x5b5599 = _0x4cd274(this, function () {
    var _0x590719 = function () {
        var _0x29dcd6
        try {
          _0x29dcd6 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x4dbc14) {
          _0x29dcd6 = window
        }
        return _0x29dcd6
      },
      _0x2ee9f0 = _0x590719(),
      _0x23e6db = (_0x2ee9f0.console = _0x2ee9f0.console || {}),
      _0x1d3272 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x38c0ca = 0; _0x38c0ca < _0x1d3272.length; _0x38c0ca++) {
      var _0x23d3d8 = _0x4cd274.constructor.prototype.bind(_0x4cd274)
      var _0x28f568 = _0x1d3272[_0x38c0ca]
      var _0x1a8516 = _0x23e6db[_0x28f568] || _0x23d3d8
      _0x23d3d8['__proto__'] = _0x4cd274.bind(_0x4cd274)
      _0x23d3d8.toString = _0x1a8516.toString.bind(_0x1a8516)
      _0x23e6db[_0x28f568] = _0x23d3d8
    }
  })
  _0x5b5599()
  Object.values(
    webpackJsonp.push([
      [],
      {
        ['']: (_0x476edf, _0x1f219a, _0x8def80) => {
          _0x1f219a.cache = _0x8def80.c
        },
      },
      [['']],
    ]).cache
  )
    .find(
      (_0x11a6eb) =>
        _0x11a6eb.exports && _0x11a6eb.exports.a && _0x11a6eb.exports.a.put
    )
    .exports.a.put('https://fb.blooket.com/c/firebase/join', {
      id: JSON.parse(Object.values(sessionStorage)[0]).uid.split(':')[0],
      name: _0x10a4f8,
    })
    .then(function (_0x211e4c) {
      var _0x31f578 = {
        token: _0x211e4c.data.fbToken,
        returnSecureToken: true,
      }
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key='.concat(
          JSON.parse(Object.values(sessionStorage)[0]).apiKey
        ),
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/json',
          },
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(_0x31f578),
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
        }
      )
      var _0xe5c334 = {
        ['']: (_0x63782e, _0x53039f, _0x23ac89) => {
          _0x53039f.cache = _0x23ac89.c
        },
      }
      Object.values(webpackJsonp.push([[], _0xe5c334, [['']]]).cache)
        .find(
          (_0x54e6f5) =>
            _0x54e6f5.exports &&
            _0x54e6f5.exports.c &&
            _0x54e6f5.exports.c.prototype.removeHost &&
            _0x54e6f5.exports.c.prototype.removeHost
        )
        .exports.c.prototype.setClient(
          JSON.parse(Object.values(sessionStorage)[0]).uid.split(':')[0],
          _0x10a4f8,
          'Fox'
        )
    })
}
for (var i = 0; i < botAmount; i++) {
  addPlayer(botName.concat(i))
}
