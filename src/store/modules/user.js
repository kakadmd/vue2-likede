// import { userLoginAPI, getCodeAPI } from '@/api/login'
import { userLoginAPI } from '@/api/login'
export default {
  namespaced: true, // 开启命名空间
  state: {
    clientToken: null,
    code: null,
    userInfo: {},
    codeUrl: null
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.clientToken = token
    },
    SET_CODE(state, code) {
      state.code = code
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_CODEURL(state, codeUrl) {
      state.codeUrl = codeUrl
    }
  },
  actions: {
    // 异步请求

    // 登陆接口
    async loginAction(context, loginInfo) {
      const { commit } = context
      const res = await userLoginAPI(loginInfo)
      // console.log(res.data)
      const result = res.data
      commit('SET_USERINFO', result)
    }

    // 获取验证码接口请求
  /*   async getCode(context, num) {
      const { commit } = context
      console.log('num', num)
      const res = await getCodeAPI(num)
      // console.log(res)
      if (res) {
        commit('SET_TOKEN', num)
      }
      const { request: { responseURL }} = res
      // console.log(responseURL)
      const result = responseURL
      commit('SET_CODEURL', result)
    } */
  }
}
