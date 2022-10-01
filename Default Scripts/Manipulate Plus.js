// Deobfuscated by Greenlio#4514 
  let hack = Object.values($('#app > div > div'))[1].children[1]['_owner']
    .stateNode
  hack.props.user.data.plan = 'Plus Flex'
  hack.state.hasOwnProperty('user') &&
    (hack.state.user.plan = 'Plus Flex')
  const userinfo = {
    plus: true,
    isBen: true,
  }
  hack.setState(userinfo)

