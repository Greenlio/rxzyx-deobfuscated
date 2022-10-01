var i = document.createElement('iframe')
i.style.display = 'none'
document.body.appendChild(i)
window.alert = i.contentWindow.alert
var world = Object.values(document.querySelector('#app > div > div'))[1]
  .children[1]['_owner'].stateNode.state
world.progress = world.goalAmount
alert('Get the answer correct to win the game')
