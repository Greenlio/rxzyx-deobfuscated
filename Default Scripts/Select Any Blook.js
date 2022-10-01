// Deobfuscated by Greenlio#4514
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.alert = i.contentWindow.alert
alert('Made by @rxzyx and automated by @notzastix on GitHub!')
var blookState = {}
blookState.lockedBlooks = []
Object.values(document.querySelector('#app > div > div'))[1].children[1][
  '_owner'
].stateNode.setState(blookState)
