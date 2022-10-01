// Deobfuscated by Greenlio#4514
var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.alert = i.contentWindow.alert
var data = Object.values(document.querySelector('#app > div > div'))[1]
  .children[1]['_owner'].stateNode.state.items
if (data) {
  for (var i = 0; i < Object.keys(data).length; i++) {
    data[Object.keys(data)[i]] = 5
  }
} else {
  alert('You have to be in the shop')
}
