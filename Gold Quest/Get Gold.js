// Deobfuscated by Greenlio#4514
var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var world = Object.values(document.querySelector('#app > div > div'))[1]
  .children[1]['_owner'].stateNode.state
var u_prompt = parseInt(prompt('How much gold do you want?'))
world.gold = u_prompt
world.gold2 = u_prompt
