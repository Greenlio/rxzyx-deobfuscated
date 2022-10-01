// Deobfuscated by Greenlio#4514
var corrects = Object.values(document.querySelector('#app > div > div'))[1]
  .children[1]['_owner'].stateNode.corrects
var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var u_prompt = parseInt(prompt('How much do you want for each answer?'))
!window.location.href.endsWith('/final') && u_prompt
  ? Object.entries(corrects).forEach(
      ([var1, var2]) => (corrects[var1] = u_prompt)
    )
  : alert('Either has been cancelled or too late to run script')
