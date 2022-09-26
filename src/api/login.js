import request from '@/utils/request'

/**
 * 请求验证码
 * @param {*} data
 * @returns Promise
 */
export const getCodeAPI = (data) => {
  return request({
    url: `/user-service/user/imageCode/${data}`
  })
}

export const userLoginAPI = (data) => {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
