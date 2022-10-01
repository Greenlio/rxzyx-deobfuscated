// Deobfuscated by Greenlio#4514
var u_prompt = prompt('What do you want your walkspeed to be?')
null === u_prompt
  ? alert('Not a valid answer.')
  : ((u_prompt = parseFloat(u_prompt)),
    (Boot.prototype.game['_state']['_current'].user.walkSpeed = u_prompt))
