// Deobfuscated by Greenlio#4514
  var i = document.createElement('iframe')
  i.style.display = 'none'
  document.body.appendChild(i)
  window.console.log = i.contentWindow.console.log
  var original_open = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function () {
    if (!arguments[1].includes('suspend')) {
      original_open.apply(this, arguments)
    } else {
      console.log('Avoided suspension.')
    }
  }

