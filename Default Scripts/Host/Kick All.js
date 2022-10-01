// Code not deobfuscated due to sheer length, however made incredibly readable. Have fun.
// Deobfuscated by Greenlio#4514

tr = Object.values(document.querySelector('#app > div > div'))[1].children[1][
  '_owner'
].stateNode
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.console = i.contentWindow.console
window.prompt = i.contentWindow.prompt
;(function () {
  var _0x136c44 = (function () {
      var _0x5b9d0d = true
      return function (_0x4ecba3, _0x2d5cd4) {
        var _0x1d2381 = _0x5b9d0d
          ? function () {
              if (_0x2d5cd4) {
                var _0x172bed = _0x2d5cd4.apply(_0x4ecba3, arguments)
                return (_0x2d5cd4 = null), _0x172bed
              }
            }
          : function () {}
        return (_0x5b9d0d = false), _0x1d2381
      }
    })(),
    _0xbed524 = _0x136c44(this, function () {
      return _0xbed524
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0xbed524)
        .search('(((.+)+)+)+$')
    })
  _0xbed524()
  var _0xeb786c = (function () {
      var _0x4a0824 = true
      return function (_0x22a6e2, _0x26e91d) {
        var _0x254246 = _0x4a0824
          ? function () {
              if (_0x26e91d) {
                var _0x45fd18 = _0x26e91d.apply(_0x22a6e2, arguments)
                return (_0x26e91d = null), _0x45fd18
              }
            }
          : function () {}
        return (_0x4a0824 = false), _0x254246
      }
    })(),
    _0x5e8ae0 = _0xeb786c(this, function () {
      var _0x48f0fa = function () {
          var _0x3e0eed
          try {
            _0x3e0eed = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x39b48f) {
            _0x3e0eed = window
          }
          return _0x3e0eed
        },
        _0x1d0768 = _0x48f0fa(),
        _0x8caf5c = (_0x1d0768.console = _0x1d0768.console || {}),
        _0x1ee8c4 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0x4fd01f = 0; _0x4fd01f < _0x1ee8c4.length; _0x4fd01f++) {
        var _0x235302 = _0xeb786c.constructor.prototype.bind(_0xeb786c)
        var _0x504cc4 = _0x1ee8c4[_0x4fd01f]
        var _0x445c16 = _0x8caf5c[_0x504cc4] || _0x235302
        _0x235302['__proto__'] = _0xeb786c.bind(_0xeb786c)
        _0x235302.toString = _0x445c16.toString.bind(_0x445c16)
        _0x8caf5c[_0x504cc4] = _0x235302
      }
    })
  _0x5e8ae0()
  var _0x2ce44d = Object.values(
    webpackJsonp.push([
      [],
      {
        ['']: (_0xd763c2, _0x1a5406, _0x22d027) => {
          _0x1a5406.cache = _0x22d027.c
        },
      },
      [['']],
    ]).cache
  )
    .find(
      (_0x197f87) =>
        _0x197f87.exports && _0x197f87.exports.a && _0x197f87.exports.a.put
    )
    .exports.a.put('https://fb.blooket.com/c/firebase/join', {
      id: Object.values(document.querySelector('#app > div > div'))[1]
        .children[1]['_owner'].stateNode.props.client.hostId,
      name: 'Invisible'.concat((Math.random() * 65535) | 0),
    })
  _0x2ce44d.then(function (_0x5b2af5) {
    function _0x33e757(_0x24ba90) {
      if (Object.keys(_0x5b2af5.data.host.c).includes(_0x24ba90)) {
        tr.state.userToBlock = _0x24ba90
        function _0x637b6(_0x1ddc33, _0x3f9f9b, _0xc48084) {
          var _0x28cdc7 = {}
          return (
            (_0x28cdc7.value = _0xc48084),
            (_0x28cdc7.enumerable = true),
            (_0x28cdc7.configurable = true),
            (_0x28cdc7.writable = true),
            (_0x3f9f9b in _0x1ddc33
              ? Object.defineProperty(_0x1ddc33, _0x3f9f9b, _0x28cdc7)
              : (_0x1ddc33[_0x3f9f9b] = _0xc48084),
            _0x1ddc33)
          )
        }
        var _0x454742 = tr.state.userToBlock,
          _0x102ff1 = JSON.parse(JSON.stringify(tr.state.players)),
          _0x4f84a4 = _0x102ff1
            .map(function (_0x252e09) {
              return _0x252e09.name
            })
            .indexOf(_0x454742),
          _0x4d19a1 = _0x102ff1.length
        ;-1 !== _0x4f84a4 &&
          ((_0x4d19a1 = _0x102ff1[_0x4f84a4].place),
          _0x102ff1.splice(_0x4f84a4, 1))
        _0x102ff1 = _0x102ff1.map(function (_0x4b1d29) {
          return _0x637b6(
            _0x637b6({}, _0x4b1d29),
            {},
            {
              place:
                _0x4b1d29.place > _0x4d19a1
                  ? _0x4b1d29.place - 1
                  : _0x4b1d29.place,
            }
          )
        })
        tr.setState({
          players: _0x102ff1,
          userToBlock: '',
        })
        tr.props.firebase.setVal(
          {
            id: tr.props.client.hostId,
            path: 'bu/'.concat(_0x454742),
            val: 1,
          },
          function () {
            tr.props.firebase.removeVal(
              tr.props.client.hostId,
              'c/'.concat(_0x454742)
            )
          }
        )
      }
    }
    Object.keys(_0x5b2af5.data.host.c).forEach((_0x4ab8af) => {
      _0x33e757(_0x4ab8af)
    })
  })
})()
