﻿/*
 * @Description: 后台配置
 * @Author: zusw
 * @Date: 2019-10-25 14:55:36
 * @LastEditTime: 2019-11-26 16:01:58
 * @LastEditors: zusw
 */
/*-------------------------------------------后台配置------------------------------------------------*/
const PORT = 231 // 梁
// const PORT = 84 // 向
// const PORT = 2 // 孟

const url = 'https://store.rong-mi.cn'
// const url = 'https://shop.rong-mi.cn'
// const url = `//192.168.3.${PORT}:8769`

module.exports = {
    //登陆页面
    loginUrl: '/login.html',
    //登陆成功后需要跳转到的页面
    homeUrl: '/index.html',
    // 根接口 
    baseApi: `${url}/interface/`,
    baseFile: `${url}/upload/`,
    // ajax 请求超时时间
    ajaxtimeout: 12000,
    //发送验证码时间间隔
    msgTime: 60,
    //隐藏显示时间
    containerShowTime: 10,
    //pagesize 分页数量
    pageSize: 20,
    wangwei: '123456',
    url
}