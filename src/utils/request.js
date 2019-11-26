/*
 * @Author: zusw
 * @Date: 2019-11-26 15:31:28
 * @LastEditTime: 2019-11-26 16:01:09
 * @LastEditors: zusw
 * @Description: 
 */
import axios from 'axios'
import { stringify, parse } from 'qs'
import { hex_sha1 } from 'common/js/security/sha1'
import { message } from 'antd'
// import { _calc_signature } from '@src/redux/actions/crm'
import { baseApi } from '@src/assets/common/js/config'

const _utf16to8 = (str) => {
  let out, i, len, c
  out = ''
  len = str.length
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i)
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }
  return out
}

const _calc_signature = (parms) => {
  let sign = ''
  let tmpArr = []
  let tmpStr = ''

  for (let key in parms) {
    tmpArr.push(key)
  }
  tmpArr = tmpArr.sort().reverse()
  for (let i = 0; i < tmpArr.length; i++) {
    if (typeof (parms[tmpArr[i]]) === 'object') {
      tmpStr = tmpStr + tmpArr[i].toLowerCase() + JSON.stringify(parms[tmpArr[i]])
    } else {
      tmpStr = tmpStr + tmpArr[i].toLowerCase() + parms[tmpArr[i]]
    }
  }
  let sha = hex_sha1(_utf16to8(tmpStr))
  let shaLength = sha.length
  let count = parseInt(tmpArr.length * 1.4)

  if (count >= shaLength) {
    count = shaLength
  }

  let step = parseInt(shaLength / count)

  for (let i = 0; i < count; i++) {
    let num = Math.floor(i * step)
    sign = sign + sha.charAt(num)
  }

  return sign
}
let CancelToken = axios.CancelToken
const source = CancelToken.source()

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : '', // api的base_url
  timeout: 5000, // 请求超时时间
  cancelToken: source.token
})

// request拦截器
service.interceptors.request.use(
  config => {
    const { data, url } = config
    const token = sessionStorage.getItem('token')
    const params = {
      ...data,
      token: 'u-DylFBJy7yJUPqV5eScaIhoACnNs81cNYrGu0I6mS7oAwl8AMvJr4MqQ6XzOqLZ',
      flag: 'customer',
      version: '1',
      signType: 'sha',
      proType: 'cs',
      api: url,
      timestamp: new Date().getTime()
    }
    config = {
      url: baseApi,
      method: 'post',
      data: stringify({
        ...params,
        sign: _calc_signature(params)
      }),
      headers: {
        auth: `:${url}`,
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
    return config
  },
  error => { Promise.reject(error) }
)

service.interceptors.response.use(
  response => {
    const res = JSON.parse(response.data)
    const { code, result, status, msg } = res
    if (Number(code) === 30008) {
      // window.reLogin()
      throw new Error('登录超时')
    }
    if (status === 'ok') {
      return result
    } else {
      message.error(msg)
      throw new Error('报错')
    }
  }, error => {
    // message.error(JSON.parse(error).message)
    throw new Error(error)
  }
)

export default service
