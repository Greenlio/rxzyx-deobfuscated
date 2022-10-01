// Deobfuscated by Greenlio#4514
var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var t = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode,
  amt = parseInt(prompt('How much defense do you want to add? x <= 4'))
if (amt) {
  t.picking = false
  t.state.canGather = true
  var var1 = { numDefense: amt }
  t.setState(var1)
  t.props.firebase.setVal({
    id: t.props.client.hostId,
    path: 'a/'.concat(t.props.client.name, '/d'),
    val: amt,
  })
  var _0x4ee012 = {
    prize: 'defend',
    numDefense: amt,
    fadeOut: true,
  }
  t.setState(var2, function () {
    t.nextTimeout = setTimeout(function () {
      t.randomQ()
    }, 450)
  })
}
