/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 验证验证码
 * @param {*} str
 * @returns
 */
export function validUserInfo(str) {
  return /^[a-zA-Z]+$/.test(str.trim()) >= 0
}

/**
 * 验证验证码
 * @param {*} str
 * @returns
 */
export function validUserCode(str) {
  return /[a-z0-9]{4}/.test(str.trim()) >= 0
}
