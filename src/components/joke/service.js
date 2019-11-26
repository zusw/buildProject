/*
 * @Author: zusw
 * @Date: 2019-11-26 15:32:15
 * @LastEditTime: 2019-11-26 15:34:22
 * @LastEditors: zusw
 * @Description: 
 */
import request from '@src/utils/request'
// 编辑客户信息
async function editCustomerInfo(data) {
  return request({ url: 'scOrder.list', data })
}

export { editCustomerInfo }