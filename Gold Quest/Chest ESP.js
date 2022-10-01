// Deobfuscated by Greenlio#4514
setInterval(function () {
  if (
    document.querySelector(
      '#app > div > div > div.arts__regularBody___1TM6E-camelCase'
    ) &&
    !document
      .querySelector(
        '#app > div > div > div.arts__regularBody___1TM6E-camelCase'
      )
      .children[0].className.includes('answer')
  ) {
    var var1 = document.querySelector(
        '#app > div > div > div.arts__regularBody___1TM6E-camelCase'
      ).children[1].children,
      hack = Object.values(document.querySelector('#app > div > div'))[1]
        .children[1]['_owner'].stateNode.state.choices
    if (var1.length === 3) {
      for (var var2 = 0; var2 < hack.length; var2++) {
        if (
          document.querySelector(
            '#app > div > div > div.arts__regularBody___1TM6E-camelCase'
          ).children[1].children[var2].children.length === 1
        ) {
          var1[var2].children[0].className = ''
          var1[var2].innerHTML +=
            "<div class='styles__choiceText___3GXgq-camelCase'>" +
            hack[var2].text +
            '</div>'
        }
      }
    }
  }
})
