// Deobfuscated by Greenlio#4514
var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var u_prompt = parseInt(prompt('How much coins do you want?'))
setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode.state
  null !== hack.coins &&
    hack.coins !== void 0 &&
    (hack.coins = Math.min(u_prompt, 100000000000000000000))
})
