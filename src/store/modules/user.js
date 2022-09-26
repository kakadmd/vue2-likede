import { loginAPI } from '@/api/login'
export default {
  namespaced: true, // 开启命名空间
  state: {
    clientToken: null
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.clientToken = token
    }
  },
  actions: {
    // 异步请求
    async loginAction(context, loginInfo) {
      // const { commit } = context
      const res = await loginAPI(loginInfo)
      console.log(res)

      // commit('SET_TOKEN', )
    }
  }
}
