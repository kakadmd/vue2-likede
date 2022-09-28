const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  code: state => state.code,
  clientToken: state => state.clientToken,
  username: state => state.user.userInfo.userName,
  codeUrl: state => state.codeUrl
}
console.log('username')
export default getters
